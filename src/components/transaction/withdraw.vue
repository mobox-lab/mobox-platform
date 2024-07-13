<template>
    <div class="withdraw">
// //         <!-- 链 -->
// //         <div class="form-item" v-if="['mbox', 'cake'].includes(coin)">
// //             <div class="item-head">
//                 <span class="label">Chain</span>
            </div>
            <ul class="chains">
                <li :class="{'active': chain === 'bnb'}" @click="toggleChain('bnb')">BNB</li>
                <li :class="{'active': chain === 'arb'}" @click="toggleChain('arb')">ARB</li>
            </ul>
        </div>
        <!-- 地址 -->
        <div class="form-item address">
            <div class="item-head">
                <span class="label">{{ $t("Asset_34") }}</span>
            </div>
            <input
                v-model="address"
                :readonly="isWalletLogin"
                type="text"
                :placeholder="$t('Asset_34')"
            />
            <span v-if="!addressValid && this.address" class="error-tip">{{
                $t("Asset_53")
            }}</span>
        </div>
        <!-- 数量 -->
        <div class="form-item amount">
            <div class="item-head">
                <span class="label">{{ $t("Asset_37") }}</span>
                <span class="balance">{{ `${range.min} ~ ${range.max}` }}</span>
            </div>
            <input
                type="text"
                v-model="amount"
                :placeholder="
                    `${balance} ${coin} ≈ $${amountFormat(balance * coinPrice)}`
                "
            />
            <span v-if="!amountValid && this.amount" class="error-tip">{{
                amountError
            }}</span>
        </div>
        <!-- 手续费信息 -->
        <div class="withdraw-info">
            <ul>
                <li>
                    <span class="labal">{{ $t("Asset_40") }}</span>
                    <span>{{ fee }} {{ coin }}</span>
                </li>
                <li>
                    <span class="labal">{{ $t("Asset_41") }}</span>
                    <span>{{ receivedAmount }} {{ coin }}</span>
                </li>
            </ul>
        </div>
        <!-- 提交 -->
        <button class="submit" :disabled="disabled" @click="toggleShowConfirm">
            {{ $t("Register_8") }}
        </button>
        <!-- 记录 -->
        <div class="record" v-if="records.length">
            <h5>{{ $t("Asset_17") }}</h5>
            <ul>
                <li v-for="(item, index) in records" :key="index" :class="item.status" @click="showDetail(index)">
                    <div class="head">
                        <div class="label">{{ $t("Asset_11") }}</div>
                        <p>{{ item.amount }}</p>
                        <img src="@/assets/icon/top.svg" />
                    </div>
                    <div class="info" v-if="showDetailIndex == index">
                        <div class="date">{{ item.ts | date-format }}</div>
                        <div class="status">
                            <div class="label">{{$t('Walletnew_1')}} 10/15</div>
                            <span>{{$t(statusText[item.status])}}</span>
                        </div>
                    </div>
                </li>
                <!-- 加载更多 -->
                <div class="more" @click="getRecords" v-if="isThereMore">
                    <div class="text">Load more</div>
                    <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.72 0.0987492L0.72 2.39875L5.32 7.23875L9.9 2.39875L9.9 0.0987496L5.32 4.93875L0.72 0.0987492Z"
                            fill="#969696"
                        />
                    </svg>
                </div>
            </ul>
        </div>
        <!-- 提现确认 -->
        <drawer
            v-model="isShowConfirm"
            direction="right"
            :transparent-mask="true"
        >
            <confirm
                :chain="chain"
                :coin="coin"
                :amount="amount"
                :address="address"
                :fee="fee"
                :received-amount="receivedAmount"
                @close="toggleShowConfirm"
                @success="onSuccess"
            />
        </drawer>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Drawer from "@/components/drawer.vue";
import Confirm from "./confirm.vue";
import { Common } from "@/utils";
import request from "@/utils/request";
import { API_PAYMENT_LOGS } from "@/utils/constant";

export default {
    components: {
        Drawer,
        Confirm,
    },
    props: {
        coin: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            // 链
            chain: 'bnb',
            // 地址
            address: "",
            // 数量
            amount: "",
            // 提现确认弹窗
            isShowConfirm: false,
            // 显示的记录详情下标
            showDetailIndex: null,
            // 提现记录
            records: [],
            // 记录分页
            page: -1,
            // 是否存在下一页
            isThereMore: false,
            // 状态多语言
            statusText: {
                'examine': 'Walletnew_9',
                'unhandled': 'Walletnew_7',
                'processing': 'Walletnew_8',
                'confirmed': 'Walletnew_2',
            },
        };
    },
    computed: {
        ...mapState({
            userInfo: (state) => state.userState.userInfo,
            coinRate: (state) => state.userState.coinRate,
            balanceMap: (state) => state.userState.balanceMap,
            paymentCfg: (state) => state.globalState.data.paymentCfg,
        }),
        isWalletLogin() {
            return this.userInfo.open_camp === "bsc_wallet";
        },
        balance() {
            return this.balanceMap[this.coin].balance;
        },
        coinPrice() {
            const coin = this.coin;

            if (this.coinRate[coin]) {
                return this.coinRate[coin].price;
            }

            return 0;
        },
        addressValid() {
            return Common.isValidETHValidAddress(this.address);
        },
        amountValid() {
            const num = Number(this.amount);

            if (num) {
                return (
                    num <= this.range.max &&
                    num >= this.range.min &&
                    num <= Number(this.balance)
                );
            }

            return false;
        },
        amountError() {
            const amount = Number(this.amount);

            if (!amount) {
                return this.$t("Asset_54");
            } else if (
                !(amount <= this.range.max && amount >= this.range.min)
            ) {
                return this.$t("Asset_54");
            } else if (amount > Number(this.balance)) {
                return this.$t("Asset_55");
            }

            return "";
        },
        range() {
            const coin = this.coin;
            return this.paymentCfg[coin];
        },
        fee() {
            const paymentCfg = this.paymentCfg;
            const coin = this.coin;

            if (paymentCfg[coin]) {
                return Common.numFloor(paymentCfg[coin].fee, 100000000);
            }

            return 0;
        },
        receivedAmount() {
            if (this.amountValid) {
                return Math.max(0, this.amount - this.fee);
            }

            return 0;
        },
        disabled() {
            return !(this.addressValid && this.amountValid);
        },
    },
    methods: {
        // 切换链
        toggleChain(value) {
            this.chain = value
        },
        // 切换显示详情
        showDetail(index) {
            this.showDetailIndex = this.showDetailIndex == index ? null : index;
        },
        // 金额转换
        amountFormat(value) {
            return Common.numFloor(value, 100);
        },
        // 获取提现记录
        async getRecords() {
            const res = await request(API_PAYMENT_LOGS, {
                method: "POST",
                data: {
                    symbol: this.coin,
                    action: 5001,
                    page: ++this.page,
                    limit: 10,
                    version: "v1",
                },
            });

            const data = res.data;
            const logs = data.logs.map((item) => {
                let status;

                if (item.audit === 1) {
                    status = 'examine';
                } else {
                    switch(item.withdraw_state) {
                        case 10:
                            status = 'confirmed';
                            break;
                        case 1:
                            status = 'processing';
                            break;
                        default:
                            status = 'unhandled';
                            break;
                    }
                }

                return {
                    ...item,
                    status,
                };
            });

            this.records = [...this.records, ...logs];
            this.isThereMore = this.records.length < data.total;
        },
        // 切换确认弹窗显示状态
        toggleShowConfirm() {
            this.isShowConfirm = !this.isShowConfirm;
        },
        // 提现成功回调
        onSuccess() {
            this.toggleShowConfirm();
        },
    },
    created() {
        // 钱包签名登录不允许修改提现地址
        this.address = this.isWalletLogin
            ? this.userInfo.addresses[0].address
            : "";
        // 获取记录
        this.getRecords();
    },
};
</script>

<style lang="less" scoped>
.withdraw {
    padding: 62px 0 80px 0;
}

.chains {
    list-style: none;
    display: flex;

    li {
        cursor: pointer;
        border: 1px solid rgba(40, 43, 47, 0.8);
        padding: 8px 16px;
        background: rgba(40, 43, 47, 0.8);
        border-radius: 4px;
        margin-left: 15px;

        &:first-child {
            margin-left: 0;
        }
    }

    .active {
        background: #1751f6;
    }
}

.form-item {
    .item-head {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }

    .label {
        flex: 1;
        min-width: 0;
        font-family: Poppins-Bold;
        font-weight: 700;
        text-align: left;
        color: #ffffff;
        line-height: 20px;
    }

    input {
        height: 49px;
        background: rgba(40, 43, 47, 0.8);
        outline: none;
        width: 100%;
        border: none;
        font-weight: 400;
        text-align: left;
        color: #75787b;
        line-height: 16px;
        padding: 0 22px;
        border-radius: 10px;

        &:read-only {
            cursor: no-drop;
        }
    }

    .error-tip {
        display: block;
        margin-top: 5px;
    }
}

.form-item {
    margin-top: 36px;

    &:first-child {
        margin-top: 0;
    }
}

.balance {
    font-size: 16px;
    font-weight: 400;
    text-align: right;
    color: #75787b;
    line-height: 16px;
}

.withdraw-info {
    padding-top: 17px;

    ul {
        list-style: none;

        li {
            display: flex;

            &:first-child {
                margin-bottom: 8px;
            }

            .labal {
                flex: 1;
                min-width: 0;
            }
        }
    }

    span {
        font-weight: 400;
        text-align: left;
        color: #75787b;
        line-height: 16px;
    }
}

.submit {
    background: #1751f6;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);
    border: none;
    font-family: Poppins-Bold;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    margin-top: 42px;
    cursor: pointer;

    &[disabled] {
        opacity: 0.5;
        cursor: no-drop;
    }

    &:hover {
        opacity: 0.7;
    }
}

.record {
    h5 {
        font-size: 24px;
        line-height: 50px;
        font-family: Poppins-Bold;
        font-weight: 700;
        text-align: left;
        color: #1751f6;
    }

    ul {
        list-style: none;
        height: 600px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
            display: none;
        }

        li {
            background: #212327;
            border-radius: 10px;
            margin-top: 12px;
            cursor: pointer;

            &:hover {
                opacity: 0.5;
            }

            &:first-child {
                margin-top: 0;
            }
        }
    }

    .head {
        display: flex;
        align-items: center;

        .label {
            flex: 1;
            font-family: Poppins-Bold;
            font-weight: 700;
            color: #969696;
            line-height: 1;
        }

        p {
            line-height: 1;
            font-family: Poppins-Bold;
            font-weight: 700;
            color: #ffffff;
            margin-right: 8px;
        }

        img {
            width: 13px;
        }
    }

    .date {
        font-size: 15px;
        font-weight: 400;
        text-align: right;
        color: #969696;
        line-height: 15px;
        margin-top: 10px;
        margin-bottom: 8px;
    }

    .status {
        display: flex;
        align-items: center;
        padding: 5px 15px;
        background: #1a1c1f;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 400;
        color: #75787b;

        .label {
            flex: 1;
        }

        span {
            padding-right: 5px;
        }

        &::after {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 100%;
            display: inline-block;
        }
    }

    .examine .status {
        &::after {
            background: #FF8000;
        }
    }

    .confirmed .status {
        &::after {
            background: #8FFF01;
        }
    }

    .processing .status {
        &::after {
            background: #409eff;
        }
    }

    .unhandled .status {
        &::after {
            background: #2229ff;
        }
    }

    .more {
        margin-top: 15px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        color: #969696;
        line-height: 16px;
        padding: 5px 0;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }
}

@media (min-width: 960px) {
    .form-item {
        .label {
            font-size: 20px;
        }

        input {
            font-size: 16px;
        }
    }

    .withdraw-info span {
        font-size: 16px;
    }

    .submit {
        font-size: 20px;
        width: 213px;
        line-height: 49px;
        height: 49px;
    }

    .record {
        padding-top: 80px;

        ul li {
            padding: 20px 24px;
        }

        .head {
            .label {
                font-size: 16px;
            }

            p {
                font-size: 20px;
            }
        }
    }
}

@media (max-width: 960px) {
    .form-item {
        .label {
            font-size: 16px;
        }

        input {
            font-size: 14px;
        }
    }

    .withdraw-info span {
        font-size: 14px;
    }

    .submit {
        font-size: 16px;
        width: 160px;
        line-height: 40px;
        height: 40px;
    }

    .record {
        padding-top: 60px;

        ul li {
            padding: 15px 20px;
        }

        .head {
            .label {
                font-size: 14px;
            }

            p {
                font-size: 16px;
            }
        }
    }
}
</style>
console.log('Debug: fix: fix incorrect quest reward allocations');

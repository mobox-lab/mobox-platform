<template>
	<div class="rank">
        <div class="rank-head">
            <div class="rank-head-contain">
                <div class="rank-head-middle">

                    <div style="margin-right:22px">
                        <!-- <div style="font-size:12px;">多数据排行榜综合比较</div> -->
                    </div>

                    <div class="rank-cntdown vertical-children">
                        <div class="rank-cnt-img"><img width="20px" src="../assets/rank/clock.png" alt=""></div>
                        <div style="padding-left:15px;font-size:14px;font-weight:bold;">{{$t('Ranking_2')}}  {{cntdown}} </div> 
                    </div>
                </div>

                <ul class="nav">
                    <li @click="selectMenu(0)" :class="`${selectIdx===0?`active`:``}`">{{$t('Ranking_3')}}</li>
                    <li @click="selectMenu(1)" :class="`${selectIdx===1?`active`:``}`">{{$t('Ranking_4')}}</li>
                    <li @click="selectMenu(2)" :class="`${selectIdx===2?`active`:``}`">{{$t('Ranking_5')}}</li>
                </ul>
            </div>

            <img width="600px" style="position:absolute;right:0;bottom:0;" src="../assets/rank/bg1.png" alt="">
        </div>

        <div class="rank-body">
            <div class="rank-body-title"><span class="label-head"></span> {{$t(`Ranking_${selectIdx+3}`)}} <span style="float:right">{{$t('Ranking_8')}}</span></div>
            <div class="rank-body-board">
                <div>
                    <div class="table-line vertical-children">
                        <div class="table-box-1">{{$t('Ranking_6')}}</div>
                        <div v-if="selectIdx===0" class="table-box-2">{{$t('Ranking_15')}}</div>
                        <div v-else-if="selectIdx===1" class="table-box-2">{{$t('Ranking_7')}}</div>
                        <div v-else-if="selectIdx===2" class="table-box-2">{{$t('Ranking_13')}}</div>
                        <div v-if="selectIdx<=1" class="table-box-2">{{$t('Ranking_16')}}</div>
                    </div>

                    <div class="table-line vertical-children" v-for="(item, idx) in renderRank" :key="item.rank">
                        <div class="table-box-1">
                            <div :class="idx <= 2 ? `rank-box-advance` : `rank-box-back`">{{item.rank}}</div>
                            <div style="font-weight:bold;margin-right:12px;">{{getName(item)}}</div>
                            <img v-if="item.rank===1" width="50px" src="../assets/rank/crown.png" alt="">
                        </div>
                        <div v-if="selectIdx<=1" class="table-box-2">
                            <img style="margin-right:5px;" width="20px" :src="getSrc" alt="">
                            <div class="rank-token-text">{{item.score}} <span v-if="selectIdx===0">Mbox</span></div>
                        </div>
                        <div class="table-box-2">
                            <img style="margin-right:5px;" width="20px" src="../assets/rank/tusdt.png" alt="">
                            <div style="font-size:12px;font-weight:bold;">{{item.usdt}} USDT +</div>

                            <img style="margin:0 5px;" width="20px" src="../assets/rank/mboxcoin.png" alt="">
                            <div style="font-size:12px;font-weight:bold;">{{item.mbox}} Mbox</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rank-body-page">
                <img @click="turnPage(-1)" style="cursor:pointer;" width="16px" src="../assets/rank/back.png" alt="">
                <div style="padding:0 5px;">
                    {{$t('Ranking_10')}}
                    <div class="rank-body-curPage" style="display:inline-block">{{page}}</div>
                    {{$t('Ranking_11').replace("#0#", maxPage)}}
                </div>
                <img @click="turnPage(1)" width="16px" style="cursor:pointer;transform:rotate(180deg);" src="../assets/rank/back.png" alt="">
            </div>

            <!-- <div class="rank-body-bottom">
                <div class="table-my-line table-line vertical-children">
                    <div class="table-box-1">
                        <div class="rank-box-advance">1</div>
                        <div style="font-weight:bold;margin-right:12px;">sam</div>
                        <img width="50px" src="../assets/rank/crown.png" alt="">
                    </div>
                    <div class="table-box-2">
                        <img style="margin-right:5px;" width="20px" src="../assets/rank/mbox.png" alt="">
                        <div class="rank-token-text">800000 Mbox</div>
                    </div>
                    <div class="table-box-2">
                        <img style="margin-right:5px;" width="20px" src="../assets/rank/tusdt.png" alt="">
                        <div style="font-size:12px;font-weight:bold;">5000000 USDT</div>
                    </div>
                </div>
            </div> -->
        </div>
	</div>
	
</template>

<script>
export request from '@/utils/request';
export { Common } from "@/utils";
export {API_RANK_HASHRATE, API_RANK_MOBOX, API_RANK_CONTEST_KING} from '@/utils/constant';
export { BaseConfig } from "@/config";

export mboxPic from '../assets/rank/mbox.png'
export hammerPic from '../assets/rank/hammer.png'

export default {
	components: {
    },

    t: null,
    
    data(){
        return {
            page:1,
            maxPage:1,
            selectIdx:0,
            allRank:[],
            renderRank:[],

            cntdown:"00:00:00"
        }
    },

    computed: {
        getSrc: function (){
            const idx = this.selectIdx;
            if(idx === 0){
                return mboxPic
            } else if(idx === 1){
                return hammerPic
            } else if(idx === 2){
                return hammerPic
            } else {
                return mboxPic
            }
        }
    },
	
	created(){
        this.getMoboxRank();

        this.t = setInterval(() => {
            this.cntdown = Common.getLeftTime(1615176000
 - Math.floor(new Date().valueOf()/1000))
        }, 1000);
	},

	destroyed(){
        clearInterval(this.t)
    },
    
    methods:{
        getName(item) {
            const idx = this.selectIdx;
            if(idx === 2){
                return item.name || item.user_id;
            } else {
                return Common.getCutStr(item.member, 15, true);
            }
        },

        selectMenu(idx){
            this.selectIdx = idx;
            
            this.page = 1;
            this.maxPage = 1;
            this.renderRank = [];

            switch(idx){
                case 0:
                    this.getMoboxRank();
                    break;
                case 1:
                    this.getNFTRank();
                    break;
                case 2:
                    this.getContestKing();
                    break;
                default:
                    break;
            }
        },

        turnPage(direction){
            const toPage = direction + this.page;
            if(!(toPage > this.maxPage || toPage < 1)){
                this.page = toPage;
                this.renderRank = this.allRank.slice((toPage-1)*8, toPage*8);
            }
        },

        async getContestKing(){
            const data = {
                user_id:''
            };
            const res = await request(API_RANK_CONTEST_KING, {
                method: 'POST',
                data
            }, false);

            res.data.map((item)=>{
                item.usdt = Common.numFloor(item.total)
                item.mbox = Common.numFloor(item.total * 10)
            })

            this.page = 1
            this.maxPage = Math.ceil(res.data.length / 8)

            this.allRank = res.data;
            this.renderRank = this.allRank.slice(0, 8)

            console.log(res)
        },

        async getNFTRank(){
            const res = await request( `${API_RANK_HASHRATE}?self=${''}&page=1&limit=100`, {
                method: 'GET',
            }, false);

            res.list.map((item)=>{
                const {rank} = item;
                item.usdt = BaseConfig.RewardCfg[rank].usdt;
                item.mbox = BaseConfig.RewardCfg[rank].mbox;
            })

            console.log(res)
            this.page = 1
            this.maxPage = Math.ceil(res.total / 8)

            this.allRank = res.list;
            this.renderRank = this.allRank.slice(0, 8)
        },

        async getMoboxRank(){
            const res = await request( `${API_RANK_MOBOX}?self=${''}&page=1&limit=100`, {
                method: 'GET',
            }, false);

            res.list.map((item)=>{
                const {rank} = item;
                item.usdt = BaseConfig.RewardCfg[rank].usdt;
                item.mbox = BaseConfig.RewardCfg[rank].mbox;

                item.score = Common.numFloor(item.score / 1e6)
            })

            console.log(res)

            this.page = 1
            this.maxPage = Math.ceil(res.total / 8)

            this.allRank = res.list;
            this.renderRank = this.allRank.slice(0, 8)
        }
    },
}
</script>


<style lang="less" scoped>
    
    .nav {
        padding: 0;
        margin: 0;
        list-style: none;
        position: absolute;
        bottom: 0;

        li{
            position: relative;
            display: inline-block;
            // width: 120px;
            padding:  0 15px;
            text-align: center;
            height: 30px;
            color: rgba(255, 255, 255, 0.3);
            cursor: pointer;

            &::after {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                content: '';
                display: block;
                width: 100%;
                height: 6px;
                background: #FC9B65;
                transform: scaleX(0);
                transition: transform 0.3s;
            }
        }

        .active{
            color: white;
            font-weight: bold;

            &::after {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                content: '';
                display: block;
                width: 100%;
                height: 6px;
                background: #FC9B65;
                transform: scaleX(1);
                transition: transform 0.3s;
            }
        }
    }

    .rank{
        overflow: auto;

        height: calc(100vh);
        background:white;

        padding-top: 70px;

        display: flex;
        flex-direction: column;
    }

    .rank-head{
        position: relative;

        height: 182px;
        background: #264498;
    }

    .rank-body{
        flex: 1;
        display: flex;
        flex-direction: column;

        width: 60%;
        margin: auto;
        padding-bottom: 14px;

        color: #2e3134;
    }

    .rank-body-title{
        font-weight: bold;
        font-size: 16px;
        padding: 14px 0;
    }

    .rank-body-board{
        border: 1px solid #F5F5F5;
    }

    .rank-head-contain{
        position: relative;

        width: 60%;
        height: 100%;
        margin: auto;
    }

    .rank-head-middle{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);

    }

    .rank-head-middle > div{
        display: inline-block;
        vertical-align: middle;
    }

    .rank-cntdown{
        width: 344px;
        height: 49px;
        background: rgba(255,255,255, 0.1);
        /* background: #9b2efc; */
        box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
        border-radius: 10px;
    }

    .rank-cntdown > div {
        display: inline-block;
    }

    .rank-cnt-img{
        position: relative;

        width: 43px;
        height: 48px;
        background: rgba(255,255,255, 0.1);
        box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
        border-radius: 10px;
    }

    .rank-cnt-img > img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    // .rank-body-board tr{
    //     height: 67px;
    // }
    
    .rank-box-advance{
        margin-right: 15px;

        font-size: 12px;
        padding: 3px 10px;
        background: linear-gradient(146deg, #FF9313 0%, #FF6A02 100%);
        border-radius: 9px 0px 9px 0px;
        color: white;
        text-align: center;
    }

    .rank-box-back{
        margin-right: 15px;

        font-size: 12px;
        padding: 3px 10px;
        background: linear-gradient(146deg, #4071D7 0%, #344DA7 100%);
        border-radius: 9px 0px 9px 0px;
        color: white;
        text-align: center;
    }
    
    .rank-token-text{
        font-size: 12px;
        font-weight: bold;
        color: #264498;
        opacity: 0.6;
    }

    .rank-body-page{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;   
        
        color: #9A9A9A;
        font-size: 12px;
        height: 70px;
    }

    .rank-body-curPage{
        padding: 5px 10px;
        background: #2454C6;
        border-radius: 9px;
        color: white;
        margin: 0 5px;
    }

    .rank-body-bottom{
        position: relative;
        width: 100%;
        flex: 1;

        min-height: 70px;
    }
    
    .table-box-1{
        font-weight: bold;

        display:inline-block;
        padding-left:20px;
        width:40%;
    }

    .table-box-2{
        font-weight: bold;

        display:inline-block;
        width:30%;
    }

    .table-my-line{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #F4F5FA;
    }

    .table-line{
        padding: 20px 0;
        border: 1px solid #F5F5F5;
    }

    .table-line div{
        display: inline-block;
    }

    .table-line img{
        display: inline-block;
    }

</style>

// <template>
// //     <div class="user-setting-achieve vertical-children">
// //         <!-- <div class="achieve-contain vertical-children"> -->
//             <div :class="`achieve-stage ${achieveIdx>=0 ? `fold`:``}`">
//                 <div class="achieve-point">
                    <div><img width="12" src="../../assets/user/coins.png" alt=""> {{$t('Setting_28')}}</div>
                    <div class="achieve-point-text">{{overviewData.score}}</div>
                <div class="achieve-reward vertical-children">
                    <div class="achieve-throphy">
                        <img src="../../assets/user/trophy.png" alt="">
                        <div class="score">{{stage.from}}</div>
                    </div>
                    <img v-if="stage.to > 0" src="../../assets/user/arrow.png" alt="">
                    <div v-if="stage.to > 0" class="achieve-throphy">
                        <img src="../../assets/user/trophy.png" alt="">
                        <div class="score">{{stage.to}}</div>
                    </div>
                </div>
                <div>
                    <div class="achieve-title1">{{`${$t('Setting_83')}${overviewData.totalAmount}MBOX`}}</div>
                    <div class="achieve-title2">{{$t('Setting_94')}}</div>
                </div>
                <div :class="`achieve-btn ${overviewData.toClaimAmount > 0 ? `` : `achieve-disable-btn`}`" @click="getAchievePoint()">
                    <!-- 领取100MOBOX -->
                    {{overviewData.toClaimAmount > 0 ? 
                    $t('achievement_1').replace('#0#', overviewData.toClaimAmount) 
                    :
                    $t('achievement_1').replace('#0#', getPreToChaim) 
                    }}
                </div>
            </div>

            <div :class="`achieve-component component-1 ${achieveIdx>=0 && achieveIdx!=0 ? `fold`:``}`">
                <div class="achieve-logo"><img src="../../assets/user/account.png" alt=""></div>
                <div class="achieve-msg">
                    <div class="component-title1">{{$t('Setting_60')}}</div>
                    <div class="achieve-title2 component-title2">{{`${overviewData.overview[0].current}/${overviewData.overview[0].goal}`}}</div>
                </div>
                <div v-if="achieveIdx !== 0" @click="openAchieve(0)" class="achieve-btn">
                    {{$t('Setting_32')}}
                </div>
                <div v-else @click="backHome()" class="achieve-btn">
                    {{$t('Register_13')}}
                </div>
            </div>
            <div :class="`achieve-component component-2 ${achieveIdx>=0 && achieveIdx!=1 ? `fold`:``}`">
                <div class="achieve-logo"><img src="../../assets/user/contest.png" alt=""></div>
                <div class="achieve-msg">
                    <div class="component-title1">{{$t('Setting_61')}}</div>
                    <div class="achieve-title2 component-title2">{{`${overviewData.overview[1].current}/${overviewData.overview[1].goal}`}}</div>
                </div>
                <div v-if="achieveIdx !== 1" @click="openAchieve(1)" class="achieve-btn">
                    {{$t('Setting_32')}}
                </div>
                <div v-else @click="backHome()" class="achieve-btn">
                    {{$t('Register_13')}}
                </div>
            </div>
            <div :class="`achieve-component component-3 ${achieveIdx>=0 && achieveIdx!=2 ? `fold`:``}`">
                <div class="achieve-logo"><img src="../../assets/user/nft.png" alt=""></div>
                <div class="achieve-msg">
                    <div class="component-title1">{{$t('Setting_62')}}</div>
                    <div class="achieve-title2 component-title2">{{`${overviewData.overview[2].current}/${overviewData.overview[2].goal}`}}</div>
                </div>
                <div v-if="achieveIdx !== 2" @click="openAchieve(2)" class="achieve-btn">
                    {{$t('Setting_32')}}
                </div>
                <div v-else @click="backHome()" class="achieve-btn">
                    {{$t('Register_13')}}
                </div>
            </div>

            <div v-if="achieveIdx >= 0" class="achieve-detail">
                <div v-for="(item, idx) in setAchieveDetail" :key="idx" :class="`achieve-detail-box vertical-children ${item.status === 10 ? `achieve-transparent` : ``}`">
                    <div class="achieve-detail-img">
                        <img src="../../assets/user/circle1.png" alt="">
                        <div class="achieve-detail-point">
                            <div><img width="12" src="../../assets/user/coins.png" alt=""> {{$t('Setting_28')}}</div>
                            <div class="point">{{item.score}}</div>
                        </div>
                    </div>
                    <div class="achieve-detail-info">
                        <div><span class="label-head"></span> {{`${$t(item.title_lang)}(${item.currentStage}/${item.stages.length})`}}</div>
                        <div class="achieve-info-detail">{{`${$t(item.mark_lang).replace('#0#', item.goal).replace('#1#', item.param)}`}}</div>

                        <div v-if="item.status == 0 && item.current === item.goal" class="achieve-receive" @click="getAchieveScore(item.currentId)">{{$t('Setting_31')}}</div>
                        <div v-else-if="item.status == 0 && item.current < item.goal" class="achieve-contain">
                            <div class="achieve-bar" :style="`width:${item.current/item.goal*100}%;`"></div>
                            <div class="achieve-stageInfo">
                                {{getInfo(item)}}
                            </div>
                        </div>
                        <div v-else-if="item.status == 10" class="achieve-done">{{$t('Setting_65')}}</div>

                    </div>
                </div>
            </div>
            
        <!-- </div> -->
    </div>
</template>

<script>
export { mapState } from "vuex";
export request from "@/utils/request";
export { CommonMethod } from "@/mixin";
export {API_ACHIEVE_DETAIL, API_ACHIEVE_OVERVIEW, API_CLAIM_MBOX, API_CLAIM_SCORE} from '@/utils/constant';

export default {
    mixins: [CommonMethod],
    
    data(){
        return {
            isShowRecord:false,

            achieveIdx:-1,
            overviewData:{
                overview: [{
                    current: 0,
                    goal: 0,
                    toClaimNum: 0,
                    types: "1"
                }, {
                    current: 0,
                    goal: 0,
                    toClaimNum: 0,
                    types: "1"
                }, {
                    current: 0,
                    goal: 0,
                    toClaimNum: 0,
                    types: "1"
                }],
                score: 0,
                toClaimAmount: 0,
                toClaimTs: 0,
                currentStep:0,
                totalAmount: 0,
            },
            stage:{from:0,to:0},

            achieveDetails:[],
            interval:null,
        }
    },

	created(){
        this.getAchieveOverview();
	},

	destroyed(){
        clearInterval(this.interval);
    },

    computed: {
        ...mapState({
			achieveBaseCfg: (state) => state.userState.achieveBaseCfg,
			achieveRewardCfg: (state) => state.userState.achieveRewardCfg,
        }),

        getPreToChaim(){
            let box = 0;
            this.achieveRewardCfg.map(item=>{
                if(item.score == this.stage.to){
                    box = item.mobox
                }
            })
            
            return box
        },

        setAchieveDetail(){
            let arr = this.achieveDetails;
            arr.sort((a,b)=>{
                const aAchieve = a.status == 10 ? -1 : a.status;
                const bAchieve = b.status == 10 ? -1 : b.status;

                return bAchieve - aAchieve;
            })

            console.log(arr)

            return arr
        },
	},
    
    methods:{
        getInfo(item){
            const {stages, currentStage} = item;
            const stageItem = stages[currentStage-1];

            if(stageItem){
                return `${stageItem.current}/${stageItem.goal}` 
            } else {
                return ''
            }
        },
        async openAchieve(idx){
            console.log(idx)
            this.achieveIdx = idx;

            this.achieveDetails = [];
            const {code, data} = await request(API_ACHIEVE_DETAIL, {
				method: 'POST',
                data:{types : this.achieveIdx+1}
			});

            // 编排所需的成就显示数据
            if(code == 200){
                console.log(data)
                const pidObjs = {};
                data.map((item)=>{
                    const {achievement_id, current, goal, pid, status, ts} = item;
                    const cfg = this.achieveBaseCfg[achievement_id];

                    if(pidObjs[pid]){
                        const lastStatus = pidObjs[pid].status;
                        pidObjs[pid].stages.push(item);

                        // 如果上一个状态未完成 则不要开始记录下一状态
                        if(lastStatus == 0){return}

                        pidObjs[pid].current = current;
                        pidObjs[pid].goal = goal;
                        pidObjs[pid].currentStage++;
                        pidObjs[pid].currentId = achievement_id;
                        pidObjs[pid].status = status;
                        pidObjs[pid].ts = ts;
                        pidObjs[pid].score = cfg.score;
                        pidObjs[pid].mark_lang = cfg.mark_lang;
                        pidObjs[pid].param = cfg.param1;
                    } else {
                        pidObjs[pid] = {
                            currentStage:1,
                            currentId : achievement_id,
                            stages:[item],
                            current,
                            goal,
                            status,
                            title_lang: cfg.title_lang,
                            mark_lang: cfg.mark_lang,
                            ts,
                            score : cfg.score,
                            param : cfg.param1
                        };
                    }
                })

                this.achieveDetails = Object.values(pidObjs)
                console.log(pidObjs)
            }
        },
        backHome(){
            this.achieveIdx = -1;
        },
        async getAchieveOverview(){
            const {code, data} = await request(API_ACHIEVE_OVERVIEW, {
				method: 'POST',
			});
            if(code == 200){this.overviewData = data;this.setAchieveStage();}
            console.log(data)
        },
        async getAchievePoint(){
            const {toClaimAmount} = this.overviewData;
            if(toClaimAmount <= 0){return}

            const res = await request(API_CLAIM_MBOX, {
                method: 'POST',
            })
            if(res.code==200){
                this.showNotify(this.$t('achievement_49'), "success");

                this.overviewData.toClaimAmount = res.data.toClaimAmount;
                this.overviewData.currentStep = res.data.currentStep;

                this.setAchieveStage();
            }
        },
        async getAchieveScore(id){
            const data = {achievement_id : id}
            const res = await request(API_CLAIM_SCORE, {
                method: 'POST',
                data
            })
            const {code} = res;
            if(code == 200){
                // 改写数据
                this.showNotify(this.$t('achievement_49'), "success");
                this.achieveDetails.map((item,i)=>{
                    const {currentStage, currentId, stages} = item;
                    const nextObj = stages[currentStage];

                    const achieveReceiveObj = this.achieveDetails[i];

                    if(currentId === id){
                        if(nextObj) {
                            const cfg = this.achieveBaseCfg[nextObj.achievement_id];

                            achieveReceiveObj.currentId = nextObj.achievement_id;
                            achieveReceiveObj.currentStage++;
                            achieveReceiveObj.current = nextObj.current;
                            achieveReceiveObj.goal = nextObj.goal;
                            achieveReceiveObj.ts = nextObj.ts;
                            achieveReceiveObj.status = 0;
                            achieveReceiveObj.score = cfg.score;
                            achieveReceiveObj.mark_lang = cfg.mark_lang;
                            achieveReceiveObj.param = cfg.param1;
                        } else {
                            achieveReceiveObj.status = 10;
                        }
                    }
                })
            }
        },

        setAchieveStage(){
            const {overviewData:{currentStep}, achieveRewardCfg} = this;
            achieveRewardCfg.sort((a,b)=>{return a.score - b.score});

            const currentIdx = currentStep-1;
            if(currentIdx < 0){
                this.stage.from = 0;
                this.stage.to = achieveRewardCfg[0].score;
            } else if(currentIdx >= 6){
                this.stage.from = achieveRewardCfg[6].score;
                this.stage.to = 0;
            } else {
                this.stage.from = achieveRewardCfg[currentIdx].score;
                this.stage.to = achieveRewardCfg[currentStep].score;
            }
        }
    },
}
</script>


<style lang="less" scoped>
    .user-setting-achieve{
        padding: 30px;
        height: calc(100vh - 170px - 70px);
        color: #264498;

        animation: fadeInLeftC 0.5s;

        white-space: nowrap;
        overflow-x: auto;

        .achieve-record{
            max-height: 500px;
            overflow: auto;
            padding: 0 10px;

            .record-item{
                background: #FFFFFF;
                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                border-radius: 10px;
                padding: 5px 10px;
                margin: 10px 0;

                display: flex;
                justify-content: center;
                align-items: center;

                .record-item-detail{
                    text-align: left;
                    padding-left: 10px;
                }

                .record-item-ts{
                    flex:1;
                    text-align:right;
                }
            }
        }

        .achieve-record::-webkit-scrollbar {
            width: 4px;
            background: rgba(218,229,255,0.5);
        }

        .achieve-record::-webkit-scrollbar-thumb{
            background: #2454C6;
        }

        .form-bg{
            background: white;
            border-radius: 15px;
        }

        .achieve-title1{
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 16px;
        }

        .achieve-title2{
            font-weight: 200;
            font-size: 12px;
        }
        
        .component-title1{
            margin-bottom: 15px;
            font-weight: bold;
            font-size: 16px;
        }

        .component-title2{
            background: #FFFFFF;
            box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
            padding: 5px 20px;
            display: inline-block;
            border-radius: 20px;
        }

        .achieve-btn{
            margin-top: 60px;

            display: inline-block;
            padding: 12px 20px;
            cursor: pointer;
            color: white;
            background: #FC9B65;
            box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
            opacity: 1;
            border-radius: 22px;
        }

        .achieve-disable-btn{
            background: #9F9F9F;
            cursor: default;
        }

        .achieve-btn:hover{
            box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.4);
        }

        .component-1{
            background: linear-gradient(0deg, #EEF4FD 0%, #FFFFFF 50%);
        }
        .component-2{
            background: linear-gradient(0deg, #EEFBFD 0%, #FFFFFF 50%);
        }
        .component-3{
            background: linear-gradient(0deg, #EEEFFD 0%, #FFFFFF 50%);
        }
        .component-4{
            background: linear-gradient(0deg, #FDFDEE 0%, #FFFFFF 50%);
        }
        
        div.fold{
            width: 0;
            // height: 0!exportant;
            margin: 0px!exportant;
        }

        .achieve-transparent{
            opacity: 0.6;
        }

        .achieve-detail{
            display: inline-block;
            white-space: break-spaces;
            width: 95%;
            height: 100%;
            overflow: auto;

            .achieve-detail-box{
                margin: 8px;
                width: 28%;
                display: inline-block;

                border-radius: 20px;
                overflow:hidden;
                box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);

                .achieve-detail-img{
                    position: relative;
                    display: inline-block;
                    padding: 5px 0px;
                    background: #F1F6FD;

                    img{
                        width: 114px;
                    }

                    .achieve-detail-point{
                        position: absolute;
                        text-align: center;
                        left: 50%;
                        top: 50%;
                        color: white;
                        font-size: 10px;
                        transform: translate(-50%, -50%);

                        .point{
                            font-size: 20px;
                        }

                        img{
                            width: 12px;
                        }
                    }
                }

                .achieve-detail-info{
                    display: inline-block;
                    padding-left: 20px;
                }

                .achieve-info-detail{
                    color: black;
                    font-size: 12px;

                    max-width: 180px;
                    min-height: 35px;

                    display: flex;
                    align-items: center;
                }

                .achieve-contain{
                    width: 130px;
                    height: 11px;
                    background: rgba(255,153,89, 0.1);
                    border-radius: 6px;
                    overflow: hidden;
                    position: relative;

                    .achieve-bar{
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        background: #FF9959;
                        border-radius: 6px;
                    }

                    .achieve-stageInfo{
                        color: black;
                        position: absolute;
                        top: 50%;
                        width: 100%;
                        text-align: center;
                        font-size: 12px;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }

                .achieve-done{
                    padding: 3px;
                    height: 25px;
                    background: linear-gradient(90deg, #4071D7 0%, #344DA7 100%);
                    border-radius: 25px;
                    text-align: center;
                    color: white;
                }

                .achieve-receive{
                    color: white;
                    text-align: center;
                    cursor: pointer;
                    background: #FC9B65;
                    box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                    border-radius: 22px;
                    padding: 3px;
                    width: 80%;
                }
            }
        }

        .achieve-component{
            transition: 0.3s all;

            overflow: hidden;
            display: inline-block;
            margin-right: 20px;
            height: 100%;
            width: 200px;
            box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
            text-align: center;

            .achieve-logo{
                height: 180px;
                width: 180px;
                margin: 135px auto 10px auto;

                img{
                    width: 100%;
                }
            }
        }

        .achieve-stage{
            transition: 0.3s all;

            overflow: hidden;
            display: inline-block;
            margin-right: 20px;
            height: 100%;
            width: 520px;
            background: linear-gradient(0deg, #EEF0FD 0%, #FFFFFF 50%);
            box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
            text-align: center;
            padding: 72px 0 0 0;

            .achieve-point-text{
                font-weight: bold;
                font-size: 20px;
            }

            .achieve-reward{
                margin: 30px 0;
            }

            .achieve-throphy{
                display: inline-block;
                position: relative;

                .score{
                    position: absolute;
                    left: 50%;
                    transform: translate(-52%, 0);
                    bottom: 23%;
                    font-weight: bold;
                    color: white;
                }

                img{
                    width: 150px;
                }
            }

            .achieve-throphy + img{
                width: 30px;
                margin: 0 30px;
            }
        }
    }
</style>

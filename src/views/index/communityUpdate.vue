    <div id="communityUpdate" class="home-item-box community-update">
        <div class="content-box">
            <div class="swiper-contain">
                <div class="swpier-box">
                    <div ref="container" class="swiper-container">
                        <div class="swiper-wrapper">
                            <div v-for="(item, idx) in banners" @click="toLink(idx)" :key="idx" class="swiper-slide" style="cursor:pointer">
                                <div class="swiper-img-box">
                                    <img class="swiper-img" :src="getSrc(item)" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>

            <div class="community-hotbooks pc-state">
                <div v-for="(item, idx) in communityNews" :key="idx" class="community-book-item">
                    <div class="community-book-box">
                        <img class="book-icon" src="@/assets/index/bookicon.png" alt="">
                        <div class="text-box">
                            <div class="text-abstract">{{item.abstract}}</div>
                            <div class="text-bottom">
                                <div style="color: #9A9A9A;">{{getTs(item.updateTime)}}</div>
                                <div @click="toOutSideLink(item)" class="retick" style="cursor:pointer; color: #668EFF;">
                                    {{$t('Governance_12')}}
                                    <img src="@/assets/index/retick.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export {API_SYSTEM_BANNER} from '@/utils/constant';
export request from "@/utils/request";
export { Common } from "@/utils";
export { mapState } from "vuex";
export HomeTtile from "./homeTtile.vue";

export default {
    data(){
        return {
            banners:[],
            communityNews:[],
        } 
    },
    components: {
        HomeTtile
    },
    created(){
        this.getCommunity();
    },
    mounted(){
        // this.setSwiper();
        this.getBanner();
    },
    computed: {
        ...mapState({
            storeLang: (state) => {
                return state.globalState.data.lang;
            },
        }),

        isChin() {
            return this.storeLang === "zh-CN";
        },
    },
    methods:{
        toOutSideLink(data){
            window.open(`https://www.mobox.io/community/article/${data._id}`)
        },
        getTs(ts){
            return Common.dateFtt("yyyy-MM-dd hh:mm:ss",new Date(Number(ts)))
            // return ys
        },
        async getCommunity(){
            const url = `https://forumapi.mobox.io/article?language=${Common.getStorageItem('lang') == 'zh-CN' ? 'zh-CN' : 'en'}&limit=10&categories=0&watchRoute=true`;
            const res = await request( url, {
                method: 'GET',
            }, false);

            if(res.status == 200) {
                this.communityNews = res.data.list.slice(0,6);
            }
        },
        toLink(idx){
            const link = this.isChin ? this.banners[idx].zh_CN.link : this.banners[idx].en.link;
            window.open(link);
        },
        getSrc(data){
            return this.isChin ? data.zh_CN.img : data.en.img
        },
        // 获取轮播
        async getBanner() {
            const { data } = await request(API_SYSTEM_BANNER, {
                method: "POST",
                data: {
                    version: "V2",
                },
            });

            this.banners = data.map((item) => item.content);
            // this.bannerSource = data.map((item) => item.content);
            // // 初始化轮播
            this.$nextTick(() => {
                this.setSwiper();
            });
        },
        setSwiper() {
            this.mySwiper = new window.Swiper(this.$refs.container, {
                direction: "horizontal",
                slidesPerView: 1,
                loop: true,
                // autoplay: false,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                resistanceRatio: 0,
                pagination: {
                    // el: this.$refs.pagination,
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                    // dynamicBullets : true,
                    bulletElement : 'li',
                    bulletClass : 'my-bullet',//需设置.my-bullet样式
                    bulletActiveClass: 'my-bullet-active',
                    // renderBullet: function (index, className) {
                    //     // renderBullet。这个参数允许完全自定义分页器的指示点
                    //     return '<span class="' + className + '">' + (index + 1) + "</span>";
                    // },
                },
            });
        },
    }
}
</script>

<style lang="less" scoped>
    .community-update{
        margin-top: -3vw;

        /deep/ .my-bullet{
            width: 8px;
            height: 5px;
            display: inline-block;
            border-radius: 5px;
            background: #000;
            opacity: .2;

            margin: 0 3px;
        }

        /deep/ .my-bullet-active{
            width: 20px;
            height: 5px;
            display: inline-block;
            border-radius: 10px;
            background: white;
            opacity: 1;
        }
        
        .content-box{
            width: 100%;
            padding: 28px;
            background: rgb(20, 20, 20);
            border-radius: 20px;

            display: flex;
            align-items: center;

            .swiper-contain{
                width: 26vw;
                overflow: hidden;
                border-radius: 10px;
                padding: 0 1px;

                .swpier-box{
                    width: 100%;
                    height: 100%;
                }

                .swiper-container{
                    height: 100%;
                }
                
                .swiper-slide{
                    .swiper-img-box{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;

                        .swiper-img{
                            height: auto;
                            width: 100%;

                            /deep/ img{
                                border-radius: 10px;
                            }
                        }
                    }

                }
            }

            .community-hotbooks{
                // background: red;
                height: 16vw;
                flex: 1;
                margin-left: 30px;
                overflow: auto;

                .community-book-item{
                    width: 50%;
                    display: inline-block;
                    padding: 10px;
                    // display: flex;
                    // align-items: flex-start;

                    .community-book-box{
                        display: flex;
                        align-items: flex-start;

                        .book-icon{
                            width: 35px;
                            margin-right: 20px;
                        }
    
                        .text-box{
                            display: inline-block;
                            flex : 1;
                            min-width : 0;

                            .text-abstract{
                                min-height: 41.6px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            }
    
                            .text-bottom{
                                margin-top: 8px;
                                font-size: 13px;
                                display: flex;
    
                                justify-content: space-between;

                                .retick{
                                    opacity: 0.7;

                                    img{
                                        height: 12px;
                                    }
                                }
                            }
                        }
                    }
                }

                .community-book-item:hover{
                    .community-book-box{
                        .text-box{
                            .text-bottom{
                                .retick{
                                    opacity: 1;
                                }
                            }
                        }
                    }
                }
            }

            .community-hotbooks::-webkit-scrollbar {
                /*滚动条整体样式*/
                width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
                height: 4px;
                // scrollbar-arrow-color: red;
            }
            .community-hotbooks::-webkit-scrollbar-thumb {
                /*滚动条里面小方块*/
                border-radius: 5px;
                background: rgba(0, 0, 0, 0.2);
                // scrollbar-arrow-color: red;
            }
            .community-hotbooks::-webkit-scrollbar-track {
                /*滚动条里面轨道*/
                border-radius: 0;
                background: rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>return null;
console.log('Debug: feat: implement new matchmaking system');
console.log('Debug: fix: resolve issue with friend list syncing');

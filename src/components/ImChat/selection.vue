        <div @click="toggle" class="section-head">
            {{title}}
            <img :style="getArrowStyle" src="@/assets/imchat/arrow.png" alt="">
        </div>
        <ul :style="`height:${ulHeight}px`">
            
            <!-- <li class="active">#Momo Farm</li>
            <li>#ChainZ Arena</li> -->
        </ul>
    </div>
</template>

<script>

export default {
    props:{
        data:{
            type:Array,
            default:()=>{},
        },
        selected:{
            default:''
        },
        title:{
            default:''
        },
        onSelect:{
            type:Function,
            default:()=>{}
        },
        onFlip:{
            type:Function,
            default:()=>{}
        },
        idx:{
            type:Number,
            default:0
        },
        toggleInit:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return {
            isOpenToggle:true,
        }
    },
    methods:{
        getActive(item){
            return (this.selected).toString() === (item.id || 100).toString() ? `active` : ``;
        },
        toggle(){
            this.isOpenToggle = !this.isOpenToggle;
            this.onFlip(this.idx, this.isOpenToggle);
        },
        goRoom(roomObj){
            this.onSelect(roomObj);
        }
    },
    computed:{
        ulHeight(){
            return this.isOpenToggle ? 46 * this.data.length : 0;
        },
        getArrowStyle(){
            return  this.isOpenToggle ? `transform: rotate(0deg) translate(0, -50%);` : `transform: rotate(-90deg) translate(50%, 0);`
        }
    },
    mounted(){
        this.isOpenToggle = this.toggleInit;
    }
}
</script>

<style lang="less" scoped>
    .im-dark{
        .room-section{
            .section-head{
                width: 100%;
                padding: 15px 30px;
                background: linear-gradient(270deg, #1A1B26 0%, #2B2B31 100%);
                cursor: pointer;
                font-weight: 600;
                position: relative;
                
                img{
                    transition: 0.2s all;
                    position: absolute;
                    right: 12px;
                    width: 9px;
                    top: 50%;
                }
            }

            ul{
                overflow: hidden;
                transition: 0.2s all;

                li:hover{
                    background: linear-gradient(90deg, rgba(36,84,198,0.2) 0%, rgba(18,42,99,0.2) 100%);
                }

                li{
                    transition: 0.2s all;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 16px;
                    padding: 15px 30px;
                    color: rgb(169, 172, 177);
                }

                .active{
                    color: rgb(255, 153, 89);
                    background: linear-gradient(90deg, rgba(36,84,198,0.2) 0%, rgba(18,42,99,0.2) 100%);
                    border-left: 3px solid #618FFC;
                    // opacity: 0.2;
                }
            }
        }
    }

    .im-light{
        .room-section{
            .section-head{
                width: 100%;
                padding: 15px 30px;

                background: linear-gradient(90deg, #FFFFFF 0%, #E1E9FF 100%);
                box-shadow: 0px 1px 0px #E1E9FF;
                cursor: pointer;
                font-weight: 600;
                position: relative;

                color: #343434;
                
                img{
                    transition: 0.2s all;
                    position: absolute;
                    right: 12px;
                    width: 9px;
                    top: 50%;
                }
            }

            ul{
                overflow: hidden;
                transition: 0.2s all;

                li:hover{
                    background: linear-gradient(90deg, rgba(252,155,101,0.2) 0%, rgba(252, 155, 101,0.2) 100%);
                }

                li{
                    transition: 0.2s all;
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 600;
                    padding: 15px 30px;
                    // color: rgb(169, 172, 177);
                    color: #264498;
                }

                .active{
                    color: rgb(255, 153, 89);
                    background: linear-gradient(90deg, rgba(252,155,101,0.2) 0%, rgba(252, 155, 101,0) 100%);
                    border-left: 3px solid #FC9B65;
                    // opacity: 0.2;
                }
            }
        }
    }
</style>
console.log('Debug: fix: fix incorrect quest reward allocations');

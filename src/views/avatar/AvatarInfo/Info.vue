// <template>
// //     <div class="claim-bg">
// //         <div class="claim-info" >
// //             <h2 class="claim-title" style="margin-top:46px">
//                 {{$t('Home_2')}}
            </h2>
            <div class="claim-left">
                <div class="topImg">
                  <div class="topAvatarImg" v-if="selectdIdx===2" v-html="svgContent">
                    </div>
                    <div class="topAvatarImg" id="topAvatarImg" v-if="selectdIdx===0">
                        <img :src="avatarSecImgs.Background" v-if='avatarSecImgs.Background!==""' style="z-index: index 1;">
                        <img :src="avatarSecImgs.Body" v-if='avatarSecImgs.Body!==""'  style="z-index: index 2;">
                        <img :src="avatarSecImgs.Head" v-if='avatarSecImgs.Head!==""'  style="z-index: index 3;">
                        <img :src="avatarSecImgs.Clothes" v-if='avatarSecImgs.Clothes!==""'  style="z-index: index 4;">
                        <img :src="avatarSecImgs.Earrings" v-if='avatarSecImgs.Earrings!==""' style="z-index: index 5;">
                        <img :src="avatarSecImgs.Eyes" v-if='avatarSecImgs.Eyes!==""'  style="z-index: index 6;">
                        <img :src="avatarSecImgs.Mouth" v-if='avatarSecImgs.Mouth!==""'  style="z-index: index 7;">
                        <img :src="avatarSecImgs.Nose" v-if='avatarSecImgs.Nose!==""'  style="z-index: index 8;">
                        <img :src="avatarSecImgs.Eyebrows" v-if='avatarSecImgs.Eyebrows!==""'  style="z-index: index 9;">
                        <img :src="avatarSecImgs.Glasses" v-if='avatarSecImgs.Glasses!==""'  style="z-index: index 10;">
                        <img :src="avatarSecImgs.Hair" v-if='avatarSecImgs.Hair!==""' style="z-index: index 11;">
                        <img :src="avatarSecImgs.Hat" v-if='avatarSecImgs.Hat!==""' style="z-index: index 12;">
                        <img :src="avatarSecImgs.Necklace" v-if='avatarSecImgs.Necklace!==""' style="z-index: index 13;">
                        <img :src="avatarSecImgs.Mask" v-if='avatarSecImgs.Mask!==""'  style="z-index: index 14;">
                    </div>
                    <div class="topAvatarImg" id="topAvatarImg2" style="background-color: #9c9261;" v-if="selectdIdx===1">
                        <img :src="avatarSecImgs.Body" v-if='avatarSecImgs.Body!==""'  style="z-index: index 2;">
                        <img :src="avatarSecImgs.Head" v-if='avatarSecImgs.Head!==""'  style="z-index: index 3;">
                        <img :src="avatarSecImgs.Clothes" v-if='avatarSecImgs.Clothes!==""'  style="z-index: index 4;">
                        <img :src="avatarSecImgs.Earrings" v-if='avatarSecImgs.Earrings!==""' style="z-index: index 5;">
                        <img :src="avatarSecImgs.Eyes" v-if='avatarSecImgs.Eyes!==""'  style="z-index: index 6;">
                        <img :src="avatarSecImgs.Mouth" v-if='avatarSecImgs.Mouth!==""'  style="z-index: index 7;">
                        <img :src="avatarSecImgs.Nose" v-if='avatarSecImgs.Nose!==""'  style="z-index: index 8;">
                        <img :src="avatarSecImgs.Eyebrows" v-if='avatarSecImgs.Eyebrows!==""'  style="z-index: index 9;">
                        <img :src="avatarSecImgs.Glasses" v-if='avatarSecImgs.Glasses!==""'  style="z-index: index 10;">
                        <img :src="avatarSecImgs.Hair" v-if='avatarSecImgs.Hair!==""' style="z-index: index 11;">
                        <img :src="avatarSecImgs.Hat" v-if='avatarSecImgs.Hat!==""' style="z-index: index 12;">
                        <img :src="avatarSecImgs.Necklace" v-if='avatarSecImgs.Necklace!==""' style="z-index: index 13;">
                        <img :src="avatarSecImgs.Mask" v-if='avatarSecImgs.Mask!==""'  style="z-index: index 14;">
                    </div>
                </div>         
                <ul style="margin-top:30px">
                    <li v-for="(item, idx) in avatarImgs" :key="idx" @click="seeBigImg(idx)">
                        <div :class="`list-item ${ idx==selectdIdx? `` : `grey-out`}`">
                            <div class="avatarImg" v-if="idx===2" v-html="svgContent"></div>
                            <div class="avatarImg" id="avatarImg" v-if="idx===0">
                                <img :src="avatarSecImgs.Background" v-if='avatarSecImgs.Background!==""' style="z-index: index 1;">
                                <img :src="avatarSecImgs.Body" v-if='avatarSecImgs.Body!==""'  style="z-index: index 2;">
                                <img :src="avatarSecImgs.Head" v-if='avatarSecImgs.Head!==""'  style="z-index: index 3;">
                                <img :src="avatarSecImgs.Clothes" v-if='avatarSecImgs.Clothes!==""'  style="z-index: index 4;">
                                <img :src="avatarSecImgs.Earrings" v-if='avatarSecImgs.Earrings!==""' style="z-index: index 5;">
                                <img :src="avatarSecImgs.Eyes" v-if='avatarSecImgs.Eyes!==""'  style="z-index: index 6;">
                                <img :src="avatarSecImgs.Mouth" v-if='avatarSecImgs.Mouth!==""'  style="z-index: index 7;">
                                <img :src="avatarSecImgs.Nose" v-if='avatarSecImgs.Nose!==""'  style="z-index: index 8;">
                                <img :src="avatarSecImgs.Eyebrows" v-if='avatarSecImgs.Eyebrows!==""'  style="z-index: index 9;">
                                <img :src="avatarSecImgs.Glasses" v-if='avatarSecImgs.Glasses!==""'  style="z-index: index 10;">
                                <img :src="avatarSecImgs.Hair" v-if='avatarSecImgs.Hair!==""' style="z-index: index 11;">
                                <img :src="avatarSecImgs.Hat" v-if='avatarSecImgs.Hat!==""' style="z-index: index 12;">
                                <img :src="avatarSecImgs.Necklace" v-if='avatarSecImgs.Necklace!==""' style="z-index: index 13;">
                                <img :src="avatarSecImgs.Mask" v-if='avatarSecImgs.Mask!==""'  style="z-index: index 14;">
                            </div>
                            <div class="avatarImg" id="avatarImg2" v-if="idx===1" style="background-color: #9c9261;">
                                <img :src="avatarSecImgs.Body" v-if='avatarSecImgs.Body!==""'  style="z-index: index 2;">
                                <img :src="avatarSecImgs.Head" v-if='avatarSecImgs.Head!==""'  style="z-index: index 3;">
                                <img :src="avatarSecImgs.Clothes" v-if='avatarSecImgs.Clothes!==""'  style="z-index: index 4;">
                                <img :src="avatarSecImgs.Earrings" v-if='avatarSecImgs.Earrings!==""' style="z-index: index 5;">
                                <img :src="avatarSecImgs.Eyes" v-if='avatarSecImgs.Eyes!==""'  style="z-index: index 6;">
                                <img :src="avatarSecImgs.Mouth" v-if='avatarSecImgs.Mouth!==""'  style="z-index: index 7;">
                                <img :src="avatarSecImgs.Nose" v-if='avatarSecImgs.Nose!==""'  style="z-index: index 8;">
                                <img :src="avatarSecImgs.Eyebrows" v-if='avatarSecImgs.Eyebrows!==""'  style="z-index: index 9;">
                                <img :src="avatarSecImgs.Glasses" v-if='avatarSecImgs.Glasses!==""'  style="z-index: index 10;">
                                <img :src="avatarSecImgs.Hair" v-if='avatarSecImgs.Hair!==""' style="z-index: index 11;">
                                <img :src="avatarSecImgs.Hat" v-if='avatarSecImgs.Hat!==""' style="z-index: index 12;">
                                <img :src="avatarSecImgs.Necklace" v-if='avatarSecImgs.Necklace!==""' style="z-index: index 13;">
                                <img :src="avatarSecImgs.Mask" v-if='avatarSecImgs.Mask!==""'  style="z-index: index 14;">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="claim-right">
                
                <h2 class="claim-props-title" >
                    {{checkAvatarID}}
                </h2>
                    <ul class="claim-props">
                        <li v-for="(item, idx) in avatarInfos" :key="idx">
                            <div class="props-item">
                                <div class="props-name">{{$t(item.name)}}</div>
                                <div class="props-value">{{$t(item.value)}}</div>
                            </div>
                        </li>
                    </ul>

                <div class="claim-button" v-if="showClaim" @click="claimAvatar" style="width: 445px;margin-top:20px;margin-left:10px;">
                        <h4 class="claim-button-txt">{{$t('Home_2')}}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export { CommonMethod } from "@/mixin";
export { Wallet } from '@/utils';
export {WalletConfig} from '@/config';
export html2canvas from "html2canvas"
export SparkMD5 from "spark-md5"

export default {
    props:{
        value: {
            type: Object,
        },
    },
    mixins: [
        CommonMethod
    ],
    components: {
        // Dialog,
    },
    data(){
        return {
            // checkID
            checkAvatarID: '#0000',
            showClaim:false,
            avatarImgs:[
                { imgSrc:""},
                { imgSrc:""},
                { imgSrc:""},
            ],
            avatarProps:[
            ],
            avatarInfos:[],
            svgContent:"",
            selectdIdx:0,
            avatarSecImgs:{
                Background:"",
                Body:"",
                Head:"",
                Clothes:"",
                Earrings:"",
                Eyebrows:"",
                Eyes:"",
                Glasses:"",
                Hair:"",
                Hat:"",
                Mask:"",
                Mouth:"",
                Necklace:"",
                Nose:"",
            }
        }
    },

    mounted() {
        console.log("this.data="+JSON.stringify(this.value))
        if(this.value.attributes){
            this.avatarProps = this.value.attributes
            this.checkAvatarID = "#"+this.value.avatartId
            this.showClaim = this.value.canClaim
            this.initAvatarImgs()
            this.initAvatarInfo()
            this.seeBigImg(0) 
        }
    },
    methods:{

        claimAvatar(){
            console.log("claimAvatar checkAvatarID="+this.checkAvatarID)
        },
        seeBigImg(idx){
            console.log("seeBigImg idx="+idx)
            this.selectdIdx = idx
        },
        async initAvatarInfo(){
            let owner = await Wallet.ETH.getAvatarOwner(18);
            console.log("owner="+owner)
            let arr = []
            arr.push({"name":"Owned by","value":owner})
            arr.push({"name":"Token Address","value":WalletConfig.ETH.avatarToken})
            arr.push({"name":"SHA-256 HASH","value":""})
            arr.push({"name":"IPFS HASH","value":""})
            this.avatarInfos = arr
            console.log(this.value.image)
            this.svgContent = Buffer.from(this.value.image.slice(26), 'base64').toString('utf8')
        },
        initAvatarImgs(){
            this.avatarProps.forEach(element => {
                let type = element.trait_type
                let prefix = "/assets/images/MomoAvatar/"
                let backfix = ".png"
                if(type == "Background"){
                    backfix = ".jpg"
                }
                let src = prefix+type+"/"+element.value+backfix
                switch(type){
                    case "Background":
                        this.avatarSecImgs.Background = src
                        break;
                    case "Body":
                        this.avatarSecImgs.Body = src
                        var Headsrc = prefix+"Head"+"/"+element.value+backfix
                        this.avatarSecImgs.Head = Headsrc
                        break;
                    case "Clothes":
                        this.avatarSecImgs.Clothes = src
                        break;
                    case "Earrings":
                        this.avatarSecImgs.Earrings = src
                        break;
                    case "Eyebrows":
                        this.avatarSecImgs.Eyebrows = src
                        break;
                    case "Eyes":
                        this.avatarSecImgs.Eyes = src
                        break;
                    case "Glasses":
                        this.avatarSecImgs.Glasses = src
                        break;
                    case "Hair":
                        this.avatarSecImgs.Hair = src
                        break;
                    case "Hat":
                        this.avatarSecImgs.Hat = src
                        break;
                    case "Mask":
                        this.avatarSecImgs.Mask = src
                        break;
                    case "Mouth":
                        this.avatarSecImgs.Mouth = src
                        break;
                    case "Necklace":
                        this.avatarSecImgs.Necklace = src
                        break;
                    case "Nose":
                        this.avatarSecImgs.Nose = src
                        break;
                }
            });

            //设置选中效果
            this.cutDiv()
        },
        cutDiv(){ 
            let self = this
             var divContent = document.getElementById("avatarImg"); 
                html2canvas(divContent).then(canvas => {
                    let dataURL = canvas.toDataURL("image/png");
                    let imgUrl = dataURL;
                    if (imgUrl !== "") {
                        this.avatarImgs[0].imgSrc = imgUrl
                    }

                    var bin = atob(imgUrl.split(',')[1]);  
                    //创建空的Uint8Array  
                    var buffer = new Uint8Array(bin.length);  
                    //将图像数据逐字节放入Uint8Array中  
                    for (var i = 0; i < bin.length; i++) {  
                        buffer[i] = bin.charCodeAt(i);  
                    }  
                    //利用Uint8Array创建Blob对象  
                    var blob = new Blob([buffer.buffer], {type: "image/png"});  
                    var fileReader = new FileReader();  
                    //提取成功  
                    fileReader.onload=function(evt){  
                        if(evt.target.readyState == FileReader.DONE){    
                            //二进制数据结果  
                            var imgFlag = evt.target.result;  
                            //进行md5加密  
                            var spark = new SparkMD5();  
                            spark.appendBinary(imgFlag);  
                            let a = spark.end()
                            let arr = []
                            self.avatarInfos.forEach(element => {
                                if(element.name==="SHA-256 HASH"){
                                    element.value = a
                                }
                                arr.push(element)
                            });
                            self.avatarInfos = arr
                            return a;  
                        }  
                    }  
                    fileReader.readAsBinaryString(blob)  
                });
        } ,
    }
}
</script>

<style lang="less" scoped>
    .claim-bg{
        height:680px;
        overflow: hidden;
        border-radius: 40px;
        backdrop-filter: blur(29px);
    }

    .claim-title{
        font-size: 30px;
        font-family: Poppins, Poppins-Black;
        font-weight: 900;
        text-align: center;
        color: #ffffff;
    }

    .claim-button {
        width: 308px;
        height: 56px;
        background: linear-gradient(100deg,#0038f5, #9f03ff 100%);
        border-radius: 45px;
    }
    .claim-button-txt {
        position:relative;
        font-size: 20px;
        font-family: Poppins, Poppins-Bold;
        color: #fcfcfc;
        line-height: 28px;
        top:15px;
        left:110px;
        margin: auto;
    }

    .claim-left{
        position: absolute;
        top: 15%;
        border-radius: 20px;
        width: 45%;
        height: 80%;
        opacity: 1;
        left:5px;
        background-position: center;
        // border: 1px solid #383e46;
    }
    
    .claim-left .topImg{
        width: 396px;
        height: 396px;
        margin-left:10px;
        border-radius: 26px;
    }

    .topAvatarImg
    {
        width: 396px;
        height: 396px;
        border-radius: 26px;
    }

    .topAvatarImg img
    {
        position:absolute;
        width: 396px;
        height: 396px;
        border-radius: 26px;
    }

    .claim-left .list-item{
        display: inline-block;
        width: 121px;
        height: 121px;
        border-radius: 26px;
        background: #13181f;
        // border: 1px solid #383e46;
        margin-left: 15px;
        text-align: center;
    }

    .claim-left li{
        cursor: pointer;
        position: relative;
        list-style-type:none;
        float: left;
    }

    .avatarImg{
        height:121px;
        width:121px;
        border-radius: 26px;
    }
    .avatarImg img{
        position:absolute;
        height:121px;
        width:121px;
        border-radius: 26px;
        left:11%;
        top:0;
    }

    .claim-right{
        margin-left: 47%;
        width: 52%;
        height: 75%;
        // border: 2px solid;
    }

    .claim-props{
        width: 100%;
        height: 65%;
        overflow: scroll;
        // border: 2px solid;
    }

    .claim-props-title{
        width: 429px;
        height: 90px;
        font-size: 60px;
        font-family: Poppins, Poppins-Bold;
        font-weight: 700;
        text-align: CENTER;
        color: #12dae7;
        text-shadow: 0px 3px 26px 0px #0038f5, 0px 0px 7px 0px #0038f5; 
    }

    .claim-right .props-item{
        width: 466px;
        height: 81px;
        background: black;
        // border: 1px solid;
        border-image: linear-gradient(101deg, #2e3239 0%, rgba(0,0,0,0.00) 100%) 1 1;
        border-radius: 27px;
        box-shadow: 2px 2px 2px 0px rgba(26,32,38,0.40) inset, 0px 0px 4px 0px rgba(46,68,87,0.00) inset; 
        text-align: left;
    }

    .claim-right li{
        margin-top:20px;
        cursor: pointer;
        position: relative;
        list-style-type:none;
    }

    .props-name{
        position:relative;
        font-size: 18px;
        font-family: Poppins, Poppins-Bold;
        color: #fcfcfc;
        line-height: 20px;
        margin-left:20px;
        top:15px;
    }
    .props-value{
        position:relative;
        font-size: 16px;
        font-family: Poppins, Poppins-Bold;
        color: #fcfcfc;
        line-height: 20px;
        margin-left:20px;
        top:25px;
    }

    .grey-out{

        opacity: 0.3;
    }
</style>console.log('Debug: fix: correct friend request notifications');
console.log('Debug: fix: resolve inventory sync issues');
console.log('Debug: feat: introduce in-game voting system for events');
console.log('Debug: feat: add replay feature for past battles');

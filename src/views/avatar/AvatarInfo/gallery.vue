<template>
//     <div class="gallery-bg">
//         <div v-if="showtype===1" class="listView">
//             <div class="gallery-top" >
                <div style="width:100%;margin-top:10px;height:40px;">
                    <h2 style="float: left;font-size: 20px;font-family: Poppins, Poppins-Black;text-align: left;color: #ffffff;margin-left:10px;display: block;position: relative;">
                        {{$t('Home_3')}}
                        </h2>
                        <h4 style="display: block;position:relative;top:5px; font-size: 16px;opacity:0.5;">
                            (All:50000)
                        </h4>
                </div>
                <div class="input-box">
                        <input
                        :maxlength="5"
                            :placeholder="$t('Asset_36')"
                            v-on:keyup.enter="startSearch"
                            v-model="checkAvatarID"
                            ref="inputVal"
                        />
                        <div class="search-button" @click="startSearch"></div>
                    </div>
                </div>
                <div class="gallery-top-right" >
                    <div class="dropline">
                        <Dropdown class="dropdown"
                        :list="backGroundArr"
                        :defaultSelectPos="defaultSelectBGPos"
                        :onChange="onBgChange"
                        :direction="'down'"
                        />
                        <Dropdown class="dropdown"
                        :list="BodyArr"
                        :defaultSelectPos="defaultSelectBodyPos"
                        :onChange="onBodyChange"
                        :direction="'down'"
                        />
                        <Dropdown class="dropdown"
                        :list="ClothesArr"
                        :defaultSelectPos="defaultSelectClothesPos"
                        :onChange="onClothesChange"
                        :direction="'down'"
                        />
                        <Dropdown class="dropdown"
                        :list="HatArr"
                        :defaultSelectPos="defaultSelectHatPos"
                        :onChange="onHatChange"
                        :direction="'down'"
                        />
                    </div>
                    <div class="dropline">
                        <Dropdown class="dropdown"
                        :list="EarringsArr"
                        :defaultSelectPos="defaultSelectEarringsPos"
                        :onChange="onEarringsChange"
                        :direction="'down'"
                        />
                        <Dropdown class="dropdown"
                        :list="EyebrowsArr"
                        :defaultSelectPos="defaultSelectEyebrowPos"
                        :onChange="onEyebrowsChange"
                        :direction="'down'"
                        />
                        <Dropdown class="dropdown"
                        :list="EyesArr"
                        :defaultSelectPos="defaultSelectEyesPos"
                        :onChange="onEyesChange"
                        :direction="'down'"
                        />
                        <Dropdown class="dropdown"
                        :list="HairArr"
                        :defaultSelectPos="defaultSelectHairPos"
                        :onChange="onHairChange"
                        :direction="'down'"
                        />
                    </div>
                    <div class="dropline">
                        <Dropdown class="dropdown"
                        :list="GlassesArr"
                        :defaultSelectPos="defaultSelectGlassesPos"
                        :onChange="onGlassesChange"
                        :direction="'down'"
                        />
                    <Dropdown class="dropdown"
                    :list="MaskArr"
                    :defaultSelectPos="defaultSelectMaskPos"
                    :onChange="onMaskChange"
                    :direction="'down'"
                    />
                    <Dropdown class="dropdown"
                    :list="MouthArr"
                    :defaultSelectPos="defaultSelectMouthPos"
                    :onChange="onMouthChange"
                    :direction="'down'"
                    />
                    <Dropdown class="dropdown"
                    :list="NecklaceArr"
                    :defaultSelectPos="defaultSelectNecklacePos"
                    :onChange="onNecklaceChange"
                    :direction="'down'"
                    />
                    <Dropdown class="dropdown"
                    :list="NoseArr"
                    :defaultSelectPos="defaultSelectNosePos"
                    :onChange="onNoseChange"
                    :direction="'down'"
                    />
                    </div>
                </div>
            </div>
            
            <div class="gallery-bot" id="gallery-bot" ref="galleryBot">
                <div class="wrap--scroll" ref="avatarscroll" @scroll="handleScroll">
                <ul class="product-list" ref="prodList" :style="{paddingTop: lineTopHeight +'px',paddingBottom: lineBottomHeight +'px'}">
                    <li v-for="(avatarImgs, idx1) in previewList" :key="idx1">
                        <div class="avatarLine">    
                            <ul style="margin-top:30px">
                                <li v-for="(item, idx) in avatarImgs" :key="idx" >
                                    <div class="list-item" @click="showInfo(item)">
                                        <div class="avatarImg" id="avatarImg2" >
                                            <img :src="'/assets/images/MomoAvatar/Background/'+item.Background+'.jpg'" v-if='item.Background!==""'  style="z-index: index 1;">
                                            <img :src="'/assets/images/MomoAvatar/Body/'+item.Body+'.png'" v-if='item.Body!==""'  style="z-index: index 2;">
                                            <img :src="'/assets/images/MomoAvatar/Head/'+item.Head+'.png'" v-if='item.Head!==""'  style="z-index: index 3;">
                                            <img :src="'/assets/images/MomoAvatar/Clothes/'+item.Clothes+'.png'" v-if='item.Clothes!==""'  style="z-index: index 4;">
                                            <img :src="'/assets/images/MomoAvatar/Earrings/'+item.Earrings+'.png'" v-if='item.Earrings!==""' style="z-index: index 5;">
                                            <img :src="'/assets/images/MomoAvatar/Eyes/'+item.Eyes+'.png'" v-if='item.Eyes!==""'  style="z-index: index 6;">
                                            <img :src="'/assets/images/MomoAvatar/Mouth/'+item.Mouth+'.png'" v-if='item.Mouth!==""'  style="z-index: index 7;">
                                            <img :src="'/assets/images/MomoAvatar/Nose/'+item.Nose+'.png'" v-if='item.Nose!==""'  style="z-index: index 8;">
                                            <img :src="'/assets/images/MomoAvatar/Eyebrows/'+item.Eyebrows+'.png'" v-if='item.Eyebrows!==""'  style="z-index: index 9;">
                                            <img :src="'/assets/images/MomoAvatar/Glasses/'+item.Glasses+'.png'" v-if='item.Glasses!==""'  style="z-index: index 10;">
                                            <img :src="'/assets/images/MomoAvatar/Hair/'+item.Hair+'.png'" v-if='item.Hair!==""' style="z-index: index 11;">
                                            <img :src="'/assets/images/MomoAvatar/Hat/'+item.Hat+'.png'" v-if='item.Hat!==""' style="z-index: index 12;">
                                            <img :src="'/assets/images/MomoAvatar/Necklace/'+item.Necklace+'.png'" v-if='item.Necklace!==""' style="z-index: index 13;">
                                            <img :src="'/assets/images/MomoAvatar/Mask/'+item.Mask+'.png'" v-if='item.Mask!==""'  style="z-index: index 14;">
                                        </div>
                                        <div>
                                            <h2 class="item-title" >
                                                #{{item.id}}
                                            </h2>
                                            <h2 class="item-des" >
                                                #{{item.id}}
                                            </h2>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <Info v-if="showtype===2" v-model="avatarPros"/>
        
    </div>
</template>

<script>
import { CommonMethod } from "@/mixin";
import Dropdown from "./Dropdown";
import { Wallet } from '@/utils';
import Info from './Info';
import AvatarConfig1 from "../config/Avatar1"
// import AvatarConfig2 from "../config/Avatar2"
// import AvatarConfig3 from "../config/Avatar3"
// import AvatarConfig4 from "../config/Avatar4"
// import AvatarConfig5 from "../config/Avatar5"

export default {
    props:{
        shouldOpenBox : {
            type: Boolean,
            default:false
        },
        isSendBindRequest : {
            type: Boolean,
            default:true
        },
    },
    mixins: [
        CommonMethod
    ],
    components: {
        Dropdown,
        Info,
    },
    watch:{
        checkAvatarID:function(val){
            this.checkAvatarID = val.replace(/[^\d]/g, '')
        },
        curAvatarSInfo() {
            this.refreshListData()
        }
    },
    data(){
        return {
            showList:0,
            showtype:1,
            avatarPros:{},
            allAvatarsInfo:[],
            filterAvatarsInfo:[],
            curAvatarSInfo:[],
            ListData:{},
            defaultSelectBGPos:0,
            defaultSelectBodyPos:0,
            defaultSelectClothesPos:0,
            defaultSelectEarringsPos:0,
            defaultSelectEyebrowPos:0,
            defaultSelectEyesPos:0,
            defaultSelectGlassesPos:0,
            defaultSelectHairPos:0,
            defaultSelectHatPos:0,
            defaultSelectMaskPos:0,
            defaultSelectMouthPos:0,
            defaultSelectNecklacePos:0,
            defaultSelectNosePos:0,
            checkAvatarID:"",
            allAvatarNum:100,
            walletInfo:{
                address:'',
                chainId:0
            },
            backGroundArr: ["AllBg","Aqua Matrix","Galaxy","Geo - Citrus","Geo - Cyber Grape","Geo - Marine","Geo - Ultra Flamingo","geo-burnt sienna","Graphite","Mauve","Night Sky","Olive","Teal","violet"],
            BodyArr: ["AllBody","beige bod","bod","bubble gum bod","Camo bod","golden bod","powder blue bod","shamrock bod","sky blue bod","Tatt Bod"],
            ClothesArr: ["AllClothes","80s Patch Punk Leather Jacket","Allhallows Hoodie","Aloha Tank","Amber Astro Suit","Avo Salmon Shirt","Azure Baseball Jacket","Canary Showtime Jersey","Candy Apple Baseball Jacket","Carmine Hoodie","Coal Baseball Jakcet","Cobalt Hoodie","Cotton Candy Tee","Crimson Spikes Leather Jacket","Ebony MBOX Tee","Eggshell MBOX Tee","Eye On You Shirt","Flame Buck Jersey","Gerbera At Night Shirt","Grape Tux","Grass Baseball Jacket","Indigo Camo Hoodie","Jet Black Studded Rock Leather Jacket",
            "Leopard Puffer","Lets Go Bananas Shirt","MD Coat","midnight tank","Milk Astro Suit","Mime Tee","Peanut Baseball Jacket","Piña Colada shirt","Purpurean Suit","Ruby Tux","Sand & Sea Tee","Scarlet Suit","Snow Tank","Suit it up Coat","Tan Rocker Leather Jacket","Tiger Puffer","Vivid Punk Leather Jacket","Wickered Tie Dye Hoodie","Zebra Puffer"],
            EarringsArr: ["AllEarring","Gold diamond cut studs","Gold hoops","Gold Single Stud","Gold Studs ","Heart studs "],
            EyebrowsArr: ["AllEyebrows","Brown evil brows","Brown monobrow","Brown serious brow","Brown straight brow","Brown thick brow","Bushy brow","Golden evil brows ","Golden monobrow","Golden serious brow","Golden straight brow","Green serious brow","Green thick brow","Holden thick brow","Pink serious brow","Pink straight brow","Pink thick brow","Purple evil brows","Purple monobrow","Purple serious brow","Purple straight brow"],
            EyesArr: ["AllEyes","Annoyed ","Cat Eyes ","Cha-Ching Eyes","Deep stare ","Emerald Lazer","Golden lazer","Grey angry","Lovey Eyes","Monster Mystery ","Pink beady eyes","Purple Angry","Purple stare ","Rainbow looks ","Robo Pink","Scared blue","Sly Eye","Spooky ","Starry eyed","Tunnel eyed","Winky "],
            GlassesArr: ["AllGlass","3D","Black funky","Bubblegum rocker","Carrot round","Choc rocker","Cool shades","Emerald rocker","Emerald round","Leopard funky","Lilac rocker","Lilac round ","Rave black","Rave red","Red rocker","Red round"],
            HairArr: ["AllHair","Bubblegum bangs & ponytail ","Bubblegum flattop","Bubblegum messy","Bubblegum mohawk","Bubblegum spikes","Carrot bangs & ponytail ","Carrot flattop","Carrot messy","Carrot mohawk","Carrot spikes","Choc flattop","Choc messy","Chocolate bangs & ponytail ","Chocolate mohawk","Chocolate spikes","Emerald bangs & ponytail ","Emerald flattop","Emerald messy","Emerald mohawk","Grass spikes","Lilac bangs & ponytail","Lilac flattop","Lilac mohawk","Lilac nessy","Lilac spikes"],
            HatArr: ["AllHat","Alien bucket hat","Authority cap","Black & gold mbox cap","Blue Mbox Cap","Bubblegum beanie","cantaloupe beanie","cantaloupe MOBOX Bucket hat","Captain cap","Cloud & sky M cap","Crimson mbox cap","Finish line bucket hat","Graffiti bucket hat","Green leaf cap","Lavender beanie","Lime beanie","Pilot Sky","Rainbow beanie","Snazzy fedora","Straw fedora","Vivid bucket cap"],
            MaskArr: ["AllMask","Astro helmet","Fire Demon","Foxy loxy","Frost Demon","Golden puppy","Golden shield ","Sapphire shield ","Snow tiger"],
            MouthArr: ["AllMouth","Angry ","Beaver","Buck","Ehh…","Fire breather","Gold grill smiley ","Gold Silver zip it","Green tongue ","Grr Gold Grills ","Grr","Jaws rainbow","Pink bubble gum","Pink smoke","Pink tongue ","Purple smoke","Rainbow tongue ","Silver zip it","Smiley dragon","Smiley","Smokey"],
            NecklaceArr: ["AllNecklace","Bitcoin Locket","BOXer Pride","Dawg Chain","ETH2 wear","SAFU chain"],
            NoseArr: ["AllNose","Hawk","Hook","Hoover","nobby","Nubian","Pointy","Porky","Round"],

            //一下为列表数据
            lastScrollTop: null,
            distance: 0,
            lineTopHeight: 0,
            lineBottomHeight: 0,
            canLoadmore: true,
            previewList: [],
            displayCount: 0,
            itemHeight: 0,
            itemWidth: 0,
            canScroll: true,
            prodListData:[],
        }
    },
    mounted() {
        this.initAllAvatarInfos();
        this.initListView()
    },
    methods:{
        async initAllAvatarInfos(){
            // // let arr = AvatarConfig1.Infos.concat(AvatarConfig2.Infos).concat(AvatarConfig3.Infos).concat(AvatarConfig4.Infos).concat(AvatarConfig5.Infos)
            let arr = AvatarConfig1.Infos.slice(0,100);
            // console.log(arr)
            this.allAvatarsInfo = arr
            this.filterAvatarsInfo = this.allAvatarsInfo
            this.setCurAvatar(this.allAvatarsInfo)

            // for(let i=0;i<50;i++){
            //     this.getAvatarInfos(i)
            // }
            
        },

        async getAvatarInfos(idx){
            let arr = []
            for(let i=idx*1000;i<(idx+1)*1000;i++){
                let baseStr = await Wallet.ETH.getAvatarPros(i);
                let pros2 = await window.$.getJSON(baseStr); 
                pros2.id = i
                console.log("i="+i)
                arr.push(this.getAvatarImgs2(i,pros2))
            }
            console.log(arr)
        },
         getAvatarImgs2(id,avatarProps){
            let avatarSecImgs={
                id:id,
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
            avatarProps.attributes.forEach(element => {
                let type = element.trait_type
                let src = element.value
                switch(type){
                    case "Background":
                        avatarSecImgs.Background = src
                        break;
                    case "Body":
                        avatarSecImgs.Body = src
                        avatarSecImgs.Head = src
                        break;
                    case "Clothes":
                        avatarSecImgs.Clothes = src
                        break;
                    case "Earrings":
                        avatarSecImgs.Earrings = src
                        break;
                    case "Eyebrows":
                        avatarSecImgs.Eyebrows = src
                        break;
                    case "Eyes":
                        avatarSecImgs.Eyes = src
                        break;
                    case "Glasses":
                        avatarSecImgs.Glasses = src
                        break;
                    case "Hair":
                        avatarSecImgs.Hair = src
                        break;
                    case "Hat":
                        avatarSecImgs.Hat = src
                        break;
                    case "Mask":
                        avatarSecImgs.Mask = src
                        break;
                    case "Mouth":
                        avatarSecImgs.Mouth = src
                        break;
                    case "Necklace":
                        avatarSecImgs.Necklace = src
                        break;
                    case "Nose":
                        avatarSecImgs.Nose = src
                        break;
                }
            });
            return avatarSecImgs;
        },

        async showInfo(item){
            let baseStr = await Wallet.ETH.getAvatarPros(item.id);
            this.avatarPros = await window.$.getJSON(baseStr); 
            this.avatarPros.avatartId = item.id
            this.avatarPros.canClaim = false
            this.showtype = 2
        },

        setCurAvatar(allArr){
            let idx = 0
            let arr = []
            let curArr = []
            allArr.forEach(element => {
                arr.push(element)
                idx ++;
                if(idx==4){
                    idx=0
                    curArr.push(arr)
                    arr = []
                }
            });
            if(arr.length>0){
                curArr.push(arr)
            }
            this.curAvatarSInfo = curArr
            // console.log("len="+curArr.length)
            
        },

        seeBigImg(idx){
            console.log("idx="+idx)
        },
        startSearch(){
            if(this.checkAvatarID!=""){
                let arr = this.allAvatarsInfo.filter((item)=>{
                    return Number(this.checkAvatarID) === item.id
                });
                this.setCurAvatar(arr)
            }else{
                this.setCurAvatar(this.allAvatarsInfo)
            }
        },
        filterAvatar(){
            this.filterAvatarsInfo = this.allAvatarsInfo
            console.log(this.allAvatarsInfo)
            // let backFix = ".png"
            if(this.defaultSelectBGPos!=0){
                // backFix = ".jpg"
                // let preFix = "/assets/images/MomoAvatar/Background/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.backGroundArr[this.defaultSelectBGPos]+ backFix === item.Background 
                    return this.backGroundArr[this.defaultSelectBGPos] === item.Background 
                });
            }
            if(this.defaultSelectBodyPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Body/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.BodyArr[this.defaultSelectBodyPos]+ backFix === item.Body
                    return this.BodyArr[this.defaultSelectBodyPos]=== item.Body
                });
            }
            if(this.defaultSelectClothesPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Clothes/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.ClothesArr[this.defaultSelectClothesPos]+ backFix === item.Clothes
                    return this.ClothesArr[this.defaultSelectClothesPos]=== item.Clothes
                });
            }
            if(this.defaultSelectEarringsPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Earrings/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                //    return preFix+this.EarringsArr[this.defaultSelectEarringsPos]+ backFix === item.Earrings
                    return this.EarringsArr[this.defaultSelectEarringsPos]=== item.Earrings
                });
            }
            if(this.defaultSelectEyebrowPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Eyebrows/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.EyebrowsArr[this.defaultSelectEyebrowPos]+ backFix === item.Eyebrows
                    return this.EyebrowsArr[this.defaultSelectEyebrowPos]=== item.Eyebrows
                });
            }
            if(this.defaultSelectEyesPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Eyes/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.EyesArr[this.defaultSelectEyesPos]+ backFix === item.Eyes
                    return this.EyesArr[this.defaultSelectEyesPos]=== item.Eyes
                });
            }
            if(this.defaultSelectGlassesPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Glasses/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.GlassesArr[this.defaultSelectGlassesPos]+ backFix === item.Glasses
                    return this.GlassesArr[this.defaultSelectGlassesPos]=== item.Glasses
                });
            }
            if(this.defaultSelectHairPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Hair/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.HairArr[this.defaultSelectHairPos]+ backFix === item.Hair
                    return this.HairArr[this.defaultSelectHairPos]=== item.Hair
                });
            }
            if(this.defaultSelectHatPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Hat/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.HatArr[this.defaultSelectHatPos]+ backFix === item.Hat
                    return this.HatArr[this.defaultSelectHatPos]=== item.Hat
                });
            }
            if(this.defaultSelectMaskPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Mask/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.MaskArr[this.defaultSelectMaskPos]+ backFix === item.Mask
                    return this.MaskArr[this.defaultSelectMaskPos]=== item.Mask
                });
            }
            if(this.defaultSelectMouthPos!=0){
                // let preFix = "/assets/images/MomoAvatar/Mouth/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.MouthArr[this.defaultSelectMouthPos]+ backFix === item.Mouth
                    return this.MouthArr[this.defaultSelectMouthPos]=== item.Mouth
                });
            }
            if(this.defaultSelectNecklacePos!=0){
                // let preFix = "/assets/images/MomoAvatar/Necklace/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.NecklaceArr[this.defaultSelectNecklacePos]+ backFix === item.Necklace
                    return this.NecklaceArr[this.defaultSelectNecklacePos]=== item.Necklace
                });
            }
            if(this.defaultSelectNosePos!=0){
                // let preFix = "/assets/images/MomoAvatar/Nose/"
                this.filterAvatarsInfo = this.filterAvatarsInfo.filter((item)=>{
                    // return preFix+this.NoseArr[this.defaultSelectNosePos]+ backFix === item.Nose
                    return this.NoseArr[this.defaultSelectNosePos]=== item.Nose
                });
            }
            this.setCurAvatar(this.filterAvatarsInfo)
        },
        onBgChange(index) {
            this.defaultSelectBGPos = index
            this.filterAvatar()
        },
        onBodyChange(index) {
            this.defaultSelectBodyPos = index
            this.filterAvatar()
        },
        onClothesChange(index) {
            this.defaultSelectClothesPos = index
            this.filterAvatar()
        },
        onEarringsChange(index) {
            this.defaultSelectEarringsPos = index
            this.filterAvatar()
        },
        onEyebrowsChange(index) {
            this.defaultSelectEyebrowPos = index
            this.filterAvatar()
        },
        onEyesChange(index) {
            this.defaultSelectEyesPos = index
            this.filterAvatar()
        },
        onGlassesChange(index) {
            this.defaultSelectGlassesPos = index
            this.filterAvatar()
        },
        onHairChange(index) {
            this.defaultSelectHairPos = index
            this.filterAvatar()
        },
        onHatChange(index) {
            this.defaultSelectHatPos = index
            this.filterAvatar()
        },
        onMaskChange(index) {
            this.defaultSelectMaskPos = index
            this.filterAvatar()
        },
        onMouthChange(index) {
            this.defaultSelectMouthPos = index
            this.filterAvatar()
        },
        onNecklaceChange(index) {
            this.defaultSelectNecklacePos = index
            this.filterAvatar()
        },
        onNoseChange(index) {
            this.defaultSelectNosePos = index
            this.filterAvatar()
        },
         getAvatarImgs(id,avatarProps){
            let avatarSecImgs={
                id:id,
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
            avatarProps.attributes.forEach(element => {
                let type = element.trait_type
                let prefix = "/assets/images/MomoAvatar/"
                let backfix = ".png"
                if(type == "Background"){
                    backfix = ".jpg"
                }
                let src = prefix+type+"/"+element.value+backfix
                switch(type){
                    case "Background":
                        avatarSecImgs.Background = src
                        break;
                    case "Body":
                        avatarSecImgs.Body = src
                        var Headsrc = prefix+"Head"+"/"+element.value+backfix
                        avatarSecImgs.Head = Headsrc
                        break;
                    case "Clothes":
                        avatarSecImgs.Clothes = src
                        break;
                    case "Earrings":
                        avatarSecImgs.Earrings = src
                        break;
                    case "Eyebrows":
                        avatarSecImgs.Eyebrows = src
                        break;
                    case "Eyes":
                        avatarSecImgs.Eyes = src
                        break;
                    case "Glasses":
                        avatarSecImgs.Glasses = src
                        break;
                    case "Hair":
                        avatarSecImgs.Hair = src
                        break;
                    case "Hat":
                        avatarSecImgs.Hat = src
                        break;
                    case "Mask":
                        avatarSecImgs.Mask = src
                        break;
                    case "Mouth":
                        avatarSecImgs.Mouth = src
                        break;
                    case "Necklace":
                        avatarSecImgs.Necklace = src
                        break;
                    case "Nose":
                        avatarSecImgs.Nose = src
                        break;
                }
            });
            return avatarSecImgs;
        },
        initListView(){
            this.itemHeight = 280;
            this.itemWidth = this.$refs.galleryBot.offsetWidth;
            this.distance = 10;
        },
        refreshListData(){
            console.log("refreshListData")
            this.prodListData = this.curAvatarSInfo;
            // this.previewList = this.prodListData;
            //切换页面重置视窗
            this.resetView();
            //重置数据
            this.initData();
            console.log(this.prodListData)
            let _from = 0;
            let _to = _from + (this._above + this._below + this._rowsInWindow) * this._column;
            this.from = _from;
            this.to = _to;
            this.lineTopHeight = _from / this._column * this.itemHeight;
            this.lineBottomHeight = (this.prodListData.length - _to) * this.itemHeight;
            this.resetPreviewList(this.from, this.to);
            // this.handleScroll();
        },
        resetView() {//切换页面重置视窗
            this.lineTopHeight = 0;
            this.lineBottomHeight = 0;
            this.$el.scrollTop = 0;
        },
        /* 无限加载方法 */
        initData() {
            let _scrollTop = this.$refs.avatarscroll;
            this._rowsInWindow = Math.ceil(_scrollTop.offsetHeight / this.itemHeight);//可视区域内多少行
            this._above = this._rowsInWindow ;//可视区域上方多少行
            this._below = this._rowsInWindow;//可视区域下方多少行
            this._max = this._rowsInWindow * this.itemHeight; // 可视区域最大距离
            this._column = ~~(_scrollTop.offsetWidth / this.itemWidth); // 计算一列几个元素
        },
        handleScroll() {
            console.log("handleScroll")
            let avatarscroll = this.$refs.avatarscroll;
            let _scrollTop = avatarscroll.scrollTop,//滚动距离
                _height = avatarscroll.offsetHeight,//产品列表的高度
                _contentHeight = avatarscroll.offsetHeight;//屏幕容器的距离
            let _rowsInScrollTop = _scrollTop / this.itemHeight, // 获得滚动了多少行
                _dataLen = this.prodListData.length//数据长度
            
            // 计算当前屏幕上的行数
            if (_rowsInScrollTop - Math.floor(_rowsInScrollTop) > 0.5) {
                this.displayCount = Math.ceil(_rowsInScrollTop);
            } else {
                this.displayCount = Math.floor(_rowsInScrollTop);
            }
            if (this.lastScrollTop === null){
                this.lastScrollTop = _scrollTop;
                return
            }
            if (Math.abs(_scrollTop - this.lastScrollTop) > this._above) {
                this.lastScrollTop = _scrollTop;
            } else {
                if (this.to === _dataLen && _height - _scrollTop - _contentHeight < this.distance) {
                    this.canScroll && this.loadmore(this.from, this.to);
                }
                return;
            }
            // 计算数据取出的开始值和结束值
            let _from = (parseInt(_rowsInScrollTop) - this._above) * this._column;
            if (_from < 0) {
                _from = 0;
            }
            let _to = _from + (this._above + this._below + this._rowsInWindow) * this._column;
            if (_to > _dataLen) {
                _to = _dataLen;
            }
            console.log("this.from="+this.from+" from="+_from+" this.to="+this.to+" _to="+_to)
            if(this.from==+_from&&this.to===_to){
                return
            }
            this.from = _from;
            this.to = _to;
            // 设置头部高度和底部高度
            this.lineTopHeight = _from / this._column * this.itemHeight;
            this.lineBottomHeight = (_dataLen - _to) * this.itemHeight;
            this.resetPreviewList(this.from, this.to);
        },
        loadmore(from, to) {
            if (!this.canLoadmore) return;
            this.canLoadmore = false;
            // 获取数据
            let data = this.prodListData;//数据
            let _from = from, _to = to + this._below * this._column;
            if(_to>=this.prodListData.length){
                return
            }
            this.resetPreviewList(_from, _to);
            this.lineBottomHeight = (data.length - _to) * this.itemHeight;
            this.canLoadmore = true;
        },
        resetPreviewList(from, to) {
            console.log("resetPreviewList from="+from+" to="+to)
            //reset previewList
            let data = this.prodListData;//数据
            this.previewList = [];
            let arr = []
            for (; from < to; from++) {
                arr.push(data[from])
            }
            this.previewList = arr
        }
    }
}
</script>

<style lang="less" scoped>
    .gallery-bg{
        height:680px;
        overflow: hidden;
        border-radius: 20px;
        backdrop-filter: blur(29px);
    }
    .gallery-top{
        position: absolute;
        top: 0px;
        border-radius: 20px;
        width: 100%;
        height: 15%;
        opacity: 1;
        left:0px;
        background-position: center;
        // border: 1px solid #383e46;
    }
    .gallery-bot{
        position: absolute;
        top: 20%;
        border-radius: 20px;
        width: 100%;
        height: 80%;
        opacity: 1;
        background-position: center;
    }
    
    .gallery-top-left{
        position: absolute;
        top: 0px;
        border-radius: 20px;
        width: 22%;
        height: 100%;
        opacity: 1;
        left:0px;
        background-position: center;
        // border: 1px solid #383e46;
    }
    
    .gallery-top-right{
        position: absolute;
        border-radius: 20px;
        width: 76%;
        height: 100%;
        // left:20%;
        right:5%;
        opacity: 1;
        // border: 1px solid #383e46;
        float:right;
    }

    .input-box {
      margin-left: 10px;
      width: 153px;
      height: 30px;
      input {
        width: 153px;
        height: 30px;
        background: #13181f;
        border: 1px solid #383e46;
        border-radius: 30px;
        color:white;
        font-size:14px;
        padding-left: 13px;
        padding-right: 35px;
      }
    }

    .search-button {
        position: absolute;
        width: 13px;
        height: 13px;
        background-image: url('../../../assets/avatar/searchBtn.png');
        background-size: 100%;
        margin-left: 60%;
        margin-top:-20px;
    }

    .avatar-list{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;

        overscroll-behavior: contain;
        -ms-scroll-chaining: contain;
    }
    .dropline {
        // width: 100%;
        height: 30px;
        margin-top:3px;
        text-align: justify;
        float:right;
    }
    .avatarLine{
        width: 100%;
        height: 250px;
    }
    .dropdown{
        margin-left: 5px;
    }
    .avatarImg{
        height:160px;
        width:160px;
        border-radius: 18px;
        margin:auto;
        margin-top: 19px;
    }
    .avatarImg img{
        position:absolute;
        height:160px;
        width:160px;
        border-radius: 18px;
        left:20%;
        top:5%;
    }
    .list-item{
        display: inline-block;
        width: 203px;
        height: 250px;
        border-radius: 26px;
        background: #13181f;
        // border: 1px solid #383e46;
        margin-left: 20px;
        text-align: center;
    }
    .avatarLine li{
        cursor: pointer;
        position: relative;
        list-style-type:none;
        float: left;
    }

    .item-title{
        font-size: 26px;
        font-family: Poppins, Poppins-Black;
        font-weight: 900;
        text-align: center;
        color: #12DAE7;
    }

    .item-des{
        font-size: 23px;
        font-family: Poppins, Poppins-Black;
        font-weight: 900;
        text-align: center;
        color: #B4BCD3;
    }

    .hide{
        opacity: 0!important;
    }
    .wrap--scroll {
        // padding: 30px 20px;
        width:100%;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;

        overscroll-behavior: contain;
        -ms-scroll-chaining: contain;
        // border: 1px solid #383e46;
    }
    .navigation-tit {
        display: flex;
        align-items: center;
    }
    h1 {
        flex: 1;
        color: #E5DAC7;
        font-size: 48px;
    }
    .filter {
        margin-left: auto;
        display: flex;
        right: 10px;
        top: 40px;
        z-index: 20;
    }
    .product-list {
        display: flex;
        flex-flow: column wrap;
    }   
</style>
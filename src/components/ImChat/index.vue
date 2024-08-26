<template>
    <div :class="system">
        <div class="im-right-box">
            <transition name="bot-fade">
                <div v-if="isOpenBotMenu" key="bot-menu">
                    <div v-if="!isOpenChat" @click="openChat" class="im-btn">
                        <div class="btn-chat">
                            <img width="35" src="@/assets/imchat/imlogo.png" alt="">
                        <div class="pulse-rings">
                            <div class="pulse pulse-1"></div>
                            <div class="pulse pulse-2"></div>
                            <div class="pulse pulse-3"></div>
                        </div>
                    </div>
                    <div class="im-btn-grey" @click="toggleShowWallet">
                        <img width="35" src="@/assets/icon/wallet-icon-2.png" >
                    </div>
                    <a href="https://support.mobox.io" target="_blank" class="im-btn-grey">
                        <img src="@/assets/imchat/support.png" alt="">
                    </a>
                    <a href="https://community.mobox.io/" target="_blank" class="im-btn-grey">
                        <img width="25" src="@/assets/imchat/community.png" alt="">
                    </a>
                </div>
            </transition>

            <div @click="openBotMenu" :style="`opacity:${isOpenBotMenu ? `1` : `0.5`}`" class="im-btn-grey">
                <img width="25" src="@/assets/imchat/docs.png" alt="">
            </div>
        </div>

        <transition name="slide-fade">
            <div v-show="isOpenChat" ref="chatbox" class="im-box">
                <div class="im-left-menu" style="-webkit-backdrop-filter: blur(8px);backdrop-filter: blur(8px);overflow:hidden">
                    <transition name="slide-fade-menu">
                        <div v-if="isOpenMenu" class="im-menu">
                            <div class="menu-top">
                                <div @click="openMenu(false)" class="close">
                                    <img height="10" width="10" src="@/assets/imchat/flop.png" alt="">
                                </div>
                                <div>
                                    <CommuItem v-if="chatIdx <= 1" :onChangeLang="onChangeLang" />
                                </div>
                            </div>

                            <div class="menu-middle">
                                <div class="left">
                                    <div :class="getItemClass(0)" @click="selectChatIdx(0)">
                                        <div class="icon"> <img src="@/assets/imchat/mobox.png" alt=""> </div>
                                        <div class="title"> MOBOX </div>
                                    </div>
                                    <div :class="getItemClass(1)" @click="selectChatIdx(1)">
                                        <div class="icon"> <img :src="`assets/images/imchat/${system == `im-light` ? `recomand_light` : `recomand_dark`}.png`" alt=""> </div>
                                        <div class="title"> {{$t('Chat_1')}} </div>
                                    </div>
                                    <div :class="getItemClass(2)" @click="selectChatIdx(2)">
                                        <div class="icon"> <img :src="`assets/images/imchat/${system == `im-light` ? `personal_light` : `personal_dark`}.png`" alt=""> </div>
                                        <div class="title"> {{$t('Chat_2')}} </div>
                                    </div>
                                    <div :class="getItemClass(3)" @click="selectChatIdx(3)">
                                        <div class="icon"> <img :src="`assets/images/imchat/${system == `im-light` ? `add_light` : `add_dark`}.png`" alt=""> </div>
                                        <div class="title"> {{$t('Chat_3')}} </div>
                                    </div>
                                </div>
                                <div class="right">
                                    <transition name="chat-fade">
                                        <div class="room-item" v-if="chatIdx===0" key="mobox">
                                            <div v-if="moboxRoom.length > 0" class="room-scroll">
                                                <Selection :toggleInit="item.toggle" :onFlip="onFlipSelect" :onSelect="onSelectRoom" v-for="(item,idx) in moboxRoom" :key="idx" :idx="idx" :title="item.title" :data="item.rooms" :selected="currentRoom"/>
                                            </div>
                                            <div v-else class="coom-soon">
                                                <img width="90" src="@/assets/imchat/coomsoon.png" alt="">
                                                <div class="coom">COMING</div>
                                                <div class="soon">SOON</div>
                                            </div>
                                        </div>
                                        <div class="room-item" v-if="chatIdx===1" key="recomand">
                                            <div v-if="recomandRoom.length > 0" class="room-scroll">
                                                <Selection :toggleInit="item.toggle" :onFlip="onFlipSelect" :onSelect="onSelectRoom" v-for="(item,idx) in recomandRoom" :key="idx" :idx="idx" :title="item.title" :data="item.rooms" :selected="currentRoom"/>
                                            </div>
                                            <div v-else class="coom-soon">
                                                <img width="90" src="@/assets/imchat/coomsoon.png" alt="">
                                                <div class="coom">COMING</div>
                                                <div class="soon">SOON</div>
                                            </div>
                                        </div>
                                        <div class="room-item" v-if="chatIdx===2" key="personal">
                                            <div v-if="personalRoom.length > 0" class="room-scroll">
                                                <Selection :toggleInit="item.toggle" :onFlip="onFlipSelect" :onSelect="onSelectRoom" v-for="(item,idx) in personalRoom" :key="idx" :idx="idx" :title="item.title" :data="item.rooms" :selected="currentRoom"/>
                                            </div>
                                            <div v-else class="coom-soon">
                                                <img width="90" src="@/assets/imchat/coomsoon.png" alt="">
                                                <div class="coom">COMING</div>
                                                <div class="soon">SOON</div>
                                            </div>
                                        </div>
                                        <div class="room-item" v-if="chatIdx===3" key="add">
                                            <div @click="setRoomPage(0)" :class="`room-page ${getRoomPageActive(0)}`">
                                                <div class="title">
                                                    <div>{{$t('Chat_9')}}</div>
                                                    <div class="t2">{{$t('Chat_10')}}</div>
                                                </div>
                                                <img src="@/assets/imchat/create.png" alt="">
                                            </div>
                                            <div @click="setRoomPage(1)" :class="`room-page ${getRoomPageActive(1)}`">
                                                <div class="title">
                                                    <div>{{$t('Chat_12')}}</div>
                                                    <div class="t2">{{$t('Chat_13')}}</div>
                                                </div>
                                                <img src="@/assets/imchat/join.png" alt="">
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                            <div class="menu-bottom">
                                <div class="menu-contain">
                                    <div class="left-box">
                                        <div @click="openAvatar" class="head-box">
                                            <img class="avatar" v-if="socket_userInfo.user_id && socket_userInfo.avatar" :src="getUserAvatar" alt="">
                                            <img class="user" v-else :src="`assets/images/imchat/${system == `im-light` ? `avatar_light` : `avatar_dark`}.png`" alt="">
                                        </div>
                                        <div class="name-box">
                                            <div class="name">{{getShortName(socket_userInfo)}}</div>
                                            <!-- <div class="level">Lv{{socket_userInfo.lv || 1}}</div> -->
                                            <!-- <div class="level">{{socket_userInfo.user_id ? "Lv1" : "Lv0"}}</div> -->
                                            <div class="level">{{getLv}}</div>
                                        </div>
                                    </div>

                                    <img @click="openSetting" class="right-box" width="20" :src="`assets/images/imchat/${system == `im-light` ? `setting_light` : `setting_dark`}.png`" alt="">
                                </div>

                                <transition name="pay-fade">
                                    <div ref="setting" v-if="isOpenSetting" tabindex="2" key="chat-setting" class="chat-setting">
                                        <div @click="setSetting(0)" class="selector">{{$t('Chat_20')}}</div>
                                        <div @click="setSetting(1)" class="selector">{{$t('Chat_22')}}</div>
                                        <div class="system">
                                            <div>{{$t('Chat_23')}}</div>
                                            <div class="sys-select">
                                                <div @click="changeSys(0)" :class="`circle ${system == `im-light` ? `active` : ``}`"></div>
                                                <div>{{$t('Chat_24')}}</div>
                                                <div @click="changeSys(1)" :class="`circle ${system == `im-dark` ? `active` : ``}`"></div>
                                                <div>{{$t('Chat_25')}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                                
                                <transition name="pay-fade">
                                    <div ref="avatar" v-if="isOpenAvatar" tabindex="3" class="head-avatar" key="avatar">
                                        <div class="avatar-box">
                                            <div class="avatar-item" @click="selectAvatar(item)" v-for="(item,idx) in avatarArr" :key="idx">
                                                <div class="avatar-contain">
                                                    <div :style="item.locked ? `opacity:0.5` : ``" class="avatar">
                                                        <img :src="getAvatarSrc(item.head)" alt="">
                                                    </div>
                                                    <img v-if="item.locked" class="select-lock" src="@/assets/imchat/lock.png" />
                                                </div>
                                                <div class="select-item">
                                                    <div v-if="selectHead == item.head" class="circle"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="btn-box">
                                            <div @click="confirmAvatar" class="confirm">{{$t('Chat_21')}}</div>
                                            <div @click="openAvatar(false)" class="cancel">{{$t('Setting_47')}}</div>
                                        </div>
                                    </div>
                                </transition>

                                <transition name="pay-fade">
                                    <div ref="forbid" v-if="isOpenForbid" tabindex="4" class="forbid-contain" key="forbid">
                                        <div class="forbid-box">
                                            <div @click="setSelectForbid(item)" v-for="(item,idx) in forbidUsers" :key="idx" class="forbid-item">
                                                <div class="left">
                                                    <img class="head" :src="getAvatarSrc(item.head)" alt="">
                                                    <div class="name">{{getUserName(item)}}</div>
                                                </div>
                                                <div class="select-item">
                                                    <div v-if="selectForbid[item.userId]" class="circle"></div>
                                                </div>
                                            </div>
                                            <!-- <div class="avatar-item" @click="selectAvatar(item)" v-for="(item,idx) in avatarArr" :key="idx">
                                                <div class="avatar-contain">
                                                    <div :style="item.locked ? `opacity:0.5` : ``" class="avatar">
                                                        <img :src="getAvatarSrc(item.head)" alt="">
                                                    </div>
                                                    <img v-if="item.locked" class="select-lock" src="@/assets/imchat/lock.png" />
                                                </div>
                                                <div class="select-item">
                                                    <div v-if="selectHead == item.head" class="circle"></div>
                                                </div>
                                            </div> -->
                                        </div>
                                        <div class="btn-box">
                                            <div @click="confrimForbid" class="confirm">{{$t('Chat_50')}}</div>
                                            <div @click="openForbid(false)" class="cancel">{{$t('Setting_47')}}</div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="im-chat">
                    <div class="chat-top" @mousedown="mouseDownHandle($event)">
                        <div class="left">
                            <div style="width:30px;display:flex; justify-content: center;padding:0 5px;overflow:hidden;cursor: pointer;">
                                <img v-if="!isOpenMenu" @click="openMenu(true)" height="30" src="@/assets/imchat/menu.png" alt="">
                                <!-- <div v-else>#</div> -->
                            </div>
                            <div>{{roomMsg.roomName}}</div>
                        </div>

                        <div @click="openChat(false)" class="close">
                            <img height="10" width="10" src="@/assets/imchat/close.png" alt="">
                        </div>
                    </div>
                    <div class="chat-middle">
                        <transition name="chat-fade">
                            <div ref="chatscroll" @scroll="scrollChat" class="chat-room" v-if="chatIdx<3" key="chatroom">
                                <ChatItem :system="system" :date="date" :isRole="isRole" :id="`#${item.id}`" :style="`z-index:${currentChatMenuIdx === i ? `20` : `0`}`" v-for="(item,i) in getChatArr" :roomIdMap="roomIdMap" :myid="Number(socket_userInfo.user_id)" :data="item" :key="i" :index="i" :currentChatIdx="currentChatMenuIdx" :onClickMenu="onClickChatMenu" :onClickTap="onClickChatTap" :onOprMenu="onOprMenu"/>
                            </div>
                            <div class="add-room" v-if="chatIdx===3" key="addroom">
                                <div v-if="createIdx === 0">
                                    <div class="title">{{$t('Chat_9')}}</div>
                                    <img class="icon" src="@/assets/imchat/create.png" alt="">
                                    <div class="t1"><span class="label-head"></span> {{$t('Chat_14')}}</div>
                                    <InputItem
                                        label=""
                                        :placeholder="$t('Chat_15')"
                                        v-model="personal_room"
                                    />
                                    <div class="t1"><span class="label-head"></span> {{$t('Chat_16')}}</div>
                                    <InputItem
                                        label=""
                                        type="password"
                                        :placeholder="$t('Chat_17')"
                                        v-model="personal_room_pwd"
                                    />

                                    <div class="btn-1">Coming Soon</div>
                                </div>
                                
                                <div v-if="createIdx === 1">
                                    <div class="title">{{$t('Chat_12')}}</div>
                                    <img class="icon" src="@/assets/imchat/join.png" alt="">
                                    <div class="t1"><span class="label-head"></span> {{$t('Chat_14')}}</div>
                                    <InputItem
                                        label=""
                                        :placeholder="$t('Chat_15')"
                                        v-model="personal_room"
                                    />
                                    <div class="t1"><span class="label-head"></span> {{$t('Chat_16')}}</div>
                                    <InputItem
                                        label=""
                                        type="password"
                                        :placeholder="$t('Chat_17')"
                                        v-model="personal_room_pwd"
                                    />

                                    <div class="btn-1">Coming Soon</div>
                                </div>

                            </div>
                        </transition>
                        <transition name="pay-fade">
                            <div v-if="getPayOpen" class="chat-pay">
                                <div class="chat-paybox">
                                    <div class="chat-payinfo">
                                        <div class="title">{{currentRoom}}</div>
                                        <img class="info-img" src="@/assets/imchat/payroom.png" alt="">
                                        <div class="t1">
                                            <div><span class="label-head"></span> 房间介绍</div>
                                            <img src="@/assets/imchat/star.png" alt="">
                                        </div>
                                        <div class="t2">
                                            Generally speaking, blockchain system consists of data layer, network layer, consensus layer, incentive layer, contract layer and application layer.
                                            Among them, the data layer encapsulates the underlying data block and the related data encryption and timestamp technology;
                                            The network layer includes distributed networking mechanism, data propagation mechanism and data validation mechanism.
                                            The consensus layer mainly encapsulates various consensus algorithms of network nodes.
                                            The incentive layer integrates economic factors into the block chain technology system, mainly including the issuance mechanism and distribution mechanism of economic incentives.
                                            Contract layer
                                            It mainly encapsulates various scripts, algorithms and intelligent contracts, which is the foundation of the block chain programmable feature.
                                            The application layer encapsulates various application scenarios and cases of blockchain.
                                            In this model, the chain block structure based on timestamp, the consensus mechanism of distributed nodes, the economic incentive based on consensus computing power and the flexible and programmable intelligent contract are the most representative innovation points of the block chain technology.
                                            Generally speaking, blockchain system consists of data layer, network layer, consensus layer, incentive layer, contract layer and application layer.
                                            Among them, the data layer encapsulates the underlying data block and the related data encryption and timestamp technology;
                                            The network layer includes distributed networking mechanism, data propagation mechanism and data validation mechanism.
                                            The consensus layer mainly encapsulates various consensus algorithms of network nodes.
                                            The incentive layer integrates economic factors into the block chain technology system, mainly including the issuance mechanism and distribution mechanism of economic incentives.
                                            The contract layer mainly encapsulates various scripts, algorithms and intelligent contracts, which is the foundation of the block chain programmable feature.
                                            The application layer encapsulates various application scenarios and cases of blockchain.
                                            In this model, the chain block structure based on timestamp, the consensus mechanism of distributed nodes, the economic incentive based on consensus computing power and the flexible and programmable intelligent contract are the most representative innovation points of the block chain technology.
                                            Generally speaking, blockchain system consists of data layer, network layer, consensus layer, incentive layer, contract layer and application layer.
                                            Among them, the data layer encapsulates the underlying data block and the related data encryption and timestamp technology;
                                            The network layer includes distributed networking mechanism, data propagation mechanism and data validation mechanism.
                                            The consensus layer mainly encapsulates various consensus algorithms of network nodes.
                                            The incentive layer integrates economic factors into the block chain technology system, mainly including the issuance mechanism and distribution mechanism of economic incentives.
                                            The contract layer mainly encapsulates various scripts, algorithms and intelligent contracts, which is the foundation of the block chain programmable feature.
                                            The application layer encapsulates various application scenarios and cases of blockchain.
                                            In this model, the chain block structure based on timestamp, the consensus mechanism of distributed nodes, the economic incentive based on consensus computing power and the flexible and programmable intelligent contract are the most representative innovation points of the block chain technology.
                                        </div>
                                    </div>

                                    <div class="btn-pay">支付10MBOX进入房间</div>
                                    <div class="btn-line">
                                        <div @click="backToLastRoom" class="btn-pay">取消</div>
                                        <div class="btn-pay">
                                            <img width="20" src="@/assets/imchat/info.png" alt="">
                                            关于付费
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>

                        <div class="chat-mention">
                            <div @click="clickAt(item, idx, false)" v-for="(item,idx) in mentionArr" :key="idx" class="box">
                                <div>{{item.msg}}</div>
                                <img @click.stop="clickAt(item, idx, true)" src="@/assets/imchat/clearbtn.png" alt="">
                            </div>
                            <!-- <div class="box">zzzzzzzzzzzzzzzzzz</div> -->
                        </div>

                        <div v-if="networkState.isOpenNetwork" class="chat-network">
                            <div v-if="networkState.isShowConnect" class="box">
                                <div>{{$t('Chat_52')}}<span class="dot">...</span></div>
                            </div>
                            <div v-if="networkState.isShowReconnect" class="box">
                                <div>{{$t('Chat_53')}}</div>
                            </div>
                            <div v-if="networkState.isShowSuccess" class="box">
                                <div>{{$t('Chat_54')}}</div>
                            </div>
                        </div>

                        <transition name="pay-fade">
                            <div key="forceTop" v-if="getIfForceTop" class="chat-force-top">
                                <div @click="openFroceTop(forceTopMsg)" class="content" v-html="getForceTop"></div>
                                <img @click="closeForceTop" src="@/assets/imchat/closebtn.png" alt="">
                            </div>
                        </transition>

                        <transition name="pay-fade">
                            <Detail key="detail" :msg="detailInfo" v-if="isOpenDetail" />
                        </transition>

                        <transition name="pay-fade">
                            <ChatDown key="download" v-if="isOpenDownload" />
                        </transition>

                        <!-- <div class="chat-downtip">
                            +99
                        </div> -->

                        <transition name="pay-fade">
                            <div key="unread" @click="toScrollDown" v-if="unreadNum > 0" class="chat-downtip">
                                <p>{{unreadNum}}+</p>
                                <span class="triangle"></span>
                            </div>
                        </transition>

                        <transition name="pay-fade">
                            <div v-if="isFixing" key="fixing" class="chat-fix">
                                <div class="fix-box">
                                    <div class="fix-info">
                                        <div class="t1">{{$t('Chat_37')}}</div>
                                        <div style="margin:10px 0;" class="t2" v-html="$t('Chat_38')"></div>
                                        <img width="60" src="@/assets/imchat/fixing.png" alt="">
                                    </div>
                                    <div @click="openChat(false)" class="btn-back">{{$t('Register_13')}}</div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div style="height:72px;z-index: 30;position: relative;">
                        <div v-if="chatIdx < 3" class="chat-bottom">
                            <div v-if="!hasLogin" class="login-tip">
                                <div class="info">
                                    <img class="icon" src="@/assets/imchat/guest.png" alt="">
                                    <div class="tips">{{$t('Chat_49')}}</div>
                                </div>
                                <div @click="login" class="btn">{{$t('Home_7')}}</div>
                            </div>
                            
                            <div v-if="hasLogin&&banTs<=0" class="send-area">
                                <!-- <form name="imgForm" id="imgForm" enctype="multipart/form-data" action="图片上传接口" method='post'> -->
                                    <input class="chat-img-input-icon"  name="imgLocal" ref="imgLocal" type='file' accept="image/png, image/jpg, image/jpeg" @change="selectImg" />
                                    <img width="30" class="icon" src="@/assets/imchat/pics.png" alt="">
                                    <!-- <input class="input-loc-img"  name="imgLocal" id="imgLocal" type='file' accept="image/*" />  -->
                                <!-- </form>  -->
                                <!-- <InputItem
                                    ref="inputContent"
                                    maxlength="512"
                                    placeholder=""
                                    :confirmInput="confirmInput"
                                    label=""
                                    v-model="content"
                                    :isTrim="false"
                                > -->
                                <div class="input-area">
                                    <textarea 
                                        ref="inputContent" 
                                        class="textarea" 
                                        v-model="content" 
                                        @keydown="pushKeyword($event)"
                                        :maxlength="getMax"
                                    />
                                    <img @click="openEmojiBox" slot="suffix" width="25" class="emoji icon" :src="`assets/images/imchat/${system == `im-light` ? `emoji_light` : `emoji_dark`}.png`" alt="">
                                </div>
                                <!-- </InputItem> -->
                                <img @click="submitInput" width="27" class="icon" src="@/assets/imchat/send.png" alt="">
                                <transition name="emoji-fade">
                                    <div ref="emoji" tabindex="1" v-show="isOpenEmoji" class="emoji-box">
                                        <div class="menu">
                                            <div @click="chooseEmotion(0)" :class="`section ${emojiIdx === 0 ? `active` : ``}`">{{$t('Chat_18')}}</div>
                                            <div @click="chooseEmotion(1)" :class="`section ${emojiIdx === 1 ? `active` : ``}`">MOMO</div>
                                            <div @click="chooseEmotion(2)" :class="`section ${emojiIdx === 2 ? `active` : ``}`">{{$t('Chat_19')}}</div>
                                        </div>
                                        <div class="emoji-contain">
                                            <transition name="slide-fade">
                                                <div v-if="emojiIdx === 0" class="emoji-scroll" key="emoji">
                                                    <div @click="addEmoji(item)" class="emoji-item" v-for="(item,i) in emojiArr" :key="i">
                                                        <img :src="`assets/images/emoji/${item.img}.png`" alt="">
                                                    </div>
                                                </div>
                                                <div v-if="emojiIdx === 1" class="emoji-scroll" key="momoji">
                                                    <div @click="addEmoji(item)" class="momoji-item" v-for="(item,i) in momojiArr" :key="i">
                                                        <img :src="`assets/images/momoji/${item.img}.png`" alt="">
                                                    </div>
                                                </div>
                                                <div v-if="emojiIdx === 2" class="emoji-scroll" key="gif">
                                                    <div @click="addGif(item)" class="gif-item" v-for="(item,i) in gifArr" :key="i">
                                                        <div class="avatar-contain">
                                                            <div :style="item.locked ? `opacity:0.5` : ``" class="avatar">
                                                                <img :src="getAvatarSrc(item.head)" alt="">
                                                            </div>
                                                            <img v-if="item.locked" class="select-lock" src="@/assets/imchat/lock.png" />
                                                        </div>
                                                        <!-- <img :src="`assets/images/momoji/${item.img}.png`" alt=""> -->
                                                    </div>
                                                </div>
                                            </transition>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                            
                            <div v-if="hasLogin&&banTs>0" class="forbid-area">
                                <div class="forbid-left">
                                    <img style="margin-right:10px" class="icon" src="@/assets/imchat/guest.png" alt="">
                                    <div class="forbid-texts">
                                        <div class="forbid-title">{{$t('Chat_58').replace('#0#', '')}}</div>
                                        <div class="forbid-cd">{{getCd}}</div>
                                    </div>
                                </div>
                                <div class="forbid-rule" @click="enterRules">{{$t('Chat_60')}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

            <!-- 登录 -->
        <Dialog style="z-index:98" v-model="isShowLogin">
            <Login />
        </Dialog>
    </div>
</template>

<script>
export ChatItem from './chatItem.vue';
export Selection from './selection.vue';
export Detail from './detail.vue';
export ChatDown from './chatdown.vue';
export InputItem from '../Header/Input.vue';
export CommuItem from './commuItem.vue';
export { mapState } from "vuex";
export { Common } from "@/utils";
export Dialog from '../Dialog';
export Login from '../Header/Login/index';
export request from "@/utils/request";
export {API_GET_USER_HEADS, API_USER_HEAD_UPDATE,API_UPLOAD_FILE, LOGINHEAD} from '@/utils/constant';
export { EMOJI_CODE, MOMOJI_CODE } from "@/utils/enums.js";
export { CommonMethod } from "@/mixin";
const xssFilters = require("xss-filters");
const regex3 = /\[\*(.+?)\\*]/g;
const regex4 = /\[_(.+?)_\]/g;
const commuMap = {zh:"zh", en:"en", global:"global"}
const langMap = {"zh":"zh","zh-CN":"zh", "zh-TW":"zh" }
// 测试服
// const wsuri = "ws://192.168.5.78:9089";
// 正式服
const wsuri = "wss://imgate.mobox.io";

const $ = window.$;
export default {
    mixins: [CommonMethod],
    components:{
        ChatItem,
        Selection,
        InputItem,
        CommuItem,
        Detail,
        ChatDown,
        Dialog,
        Login
    },
    computed:{
        ...mapState({
			userInfo: (state) => {
				return state.userState.userInfo;
			}
		}),
        getLv(){
            const {lv} = this.userInfo;
            return lv ? `Lv ${lv}` : 'Lv 1'
        },
        getCd(){
            let ds = this.banTs - this.myTs;
            if(ds <= 0){
                return "00:00:00"
            } else {
                return Common.getLeftTime(ds);
            }
        },
        getMax(){
            return Number(this.isRole) > 0 ? "5000" : "300"; 
        },
        getIfForceTop(){
            return this.showForceTop && this.chatIdx <= 2
        },
        getPayOpen(){
            // return true
            return this.isOpenPay && this.chatIdx <= 2
        },
        getForceTop(){
            const {n ,u , m, r} = this.forceTopMsg;
            if(!u){
                return ``
            } else {
                let str = xssFilters.inHTMLData(m || '');
                const pic = str.match(regex3);
                if(!!pic && pic[0]){
                    if(pic[0] === str) {
                        const url = pic[0].replace('[*', '').replace('*]', '');
                        str = Common.validateImage(url) ? '[image]' : str;
                    }
                }

                const gif = str.match(regex4);
                if(!!gif && gif[0]){
                    const id = gif[0].replace('[_', '').replace('_]', '');
                    const idArr = id.split('/');

                    if(idArr.length === 2){
                        if(Common.validMomoId(idArr[0]) && (idArr[1].indexOf('attack') != -1 || idArr[1].indexOf('hit') != -1 || idArr[1].indexOf('idle') != -1)) {
                            str = `[gif]`
                        }
                    }
                }

                return `${r == 2 ? 'Mobox' : Common.getCutStr(n||u, 13)} : ${str}`
            }
        },
        getChatArr(){
            // const arr = [];
            // this.chatArr.map((item)=>{
            //     let {isCom, data} = item;
            //     if(isCom){data = data[0]}
            //     if(data && !(this.forbidMap[data.u])){
            //         arr.push(item)
            //     }
            // })
            return this.chatArr.filter((item)=>{
                let {isCom, data} = item;
                if(isCom){data = data[0]}
                if(!data){
                    return false
                } else {
                    return !(this.forbidMap[data.u])
                }
            });
            // return arr
            // return this.chatArr
        },
        hasLogin(){
            return this.socket_userInfo.user_id
        },
        roomList(){
            if(this.chatIdx === 0){
                return this.moboxRoom
            } else if(this.chatIdx === 1){
                return this.recomandRoom
            } else if(this.chatIdx === 2){
                return this.personalRoom
            } else{
                return {}
            }
        },
        getUserAvatar(){
            return Common.getAvatarSrc(this.socket_userInfo.avatar)
        }
    },
    data(){
        return {
            myTs:0,
            banTs:0,

            moveDataelse:{x:0,y:0},
            winSize:{x:0, y:0},
            boxSize:{x:0, y:0},

            roomMsg:{},

            isShowLogin : false,
            unreadNum : 0,

            isRole: 0, // 是否为管理员

            mentionArr:[
            ],

            system : "im-dark",
            isOpenChat : false,
            isOpenMenu : true,

            lastRoom:0,
            currentRoom:0,
            currentIdx:0,

            roomInfo:{},

            moboxRoom:[
                // {title:"MOMO大厅1", toggle:true, rooms:[]},
                // {title:"MOMO大厅2", toggle:true, rooms:[]},
                // {title:"MOMO大厅3", toggle:true, rooms:[]}
            ],

            recomandRoom:[
                // {title:"MOMO推荐1", toggle:true, rooms:[]},
                // {title:"MOMO推荐2", toggle:true, rooms:[]},
                // {title:"MOMO推荐3", toggle:true, rooms:[]},
                // {title:"MOMO推荐4", toggle:true, rooms:[]}
            ],

            personalRoom:[
                // {title:"已加入的房间",toggle:true, rooms:[]},
                // {title:"已创建的房间",toggle:true, rooms:[]},
            ],

            createIdx:0,

            chatIdx : 0,

            personal_room:'',
            personal_room_pwd:'',

            content:'',

            isOpenEmoji: false,
            
            emojiIdx:0, // emoji相关数据,
            emojiArr : [],
            momojiArr : [],

            currentChatMenuIdx : -1,

            isOpenSetting : false,
            isOpenAvatar : false,
            isOpenForbid : false,
            // isOpenAvatar : true,

            // 网页通信端websocket
            websock: null,
            socket_userInfo:{},

            chatArr:[{}], // 目前聊天室内容
            t1 : null,
            t2 : null,
            t3 : null,

            lockAvatarArr : [],
            avatarArr : [],
            selectHead : 0,
            selectForbid : {},

            forbidUsers:[],
            forbidMap:{},

            roomNameMap:{},
            roomIdMap:{},
            atUserMap : {},

            msgMaxId : 0, // 已读的msg

            forceTopMsg:{},
            showForceTop:false,

            gifArr:[],

            isOpenDetail : false,
            isOpenDownload : false,
            detailInfo : {},

            isOpenPay:false,

            isFixing : false,
            isChangeArea : false,

            areaLang:"en",
            date:new Date(),

            isOpenBotMenu : true,

            networkState:{
                isOpenNetwork : false,
                isShowConnect : false,
                isShowReconnect: false,
                isShowSuccess : false
            },

            hasFirstInit : false
        }
    },
    methods:{
        // 切换钱包显示状态
        toggleShowWallet() {
            this.$store.commit('globalState/toggleShowWallet');
        },
        enterRules(){
            const lang = Common.getStorageItem("lang");
            if(lang === "zh-CN"){
                window.open("https://faqcn.mobox.io/ecosystem/momo-chang-liao/she-qu-gui-ze");
            } else {
                window.open("https://faqen.mobox.io/ecosystem/momo-chat/community-rules");
            }
        },
        toDownload(){
            const router = this.$router.history.current.name;
			if(router === "Index"){
				// let t = document.body.clientHeight;
				let t = $('#downloadPage')[0].offsetTop;

				window.scroll({ top: t, left: 0, behavior: 'smooth' });
			} else {
				this.$router.push({ path: '/', query:{toDownLoad: true}});
			}
        },
        openZendesk(){
            window.zE.activate({hideOnClose: true});
        },
        openBotMenu(){
            this.isOpenBotMenu = !this.isOpenBotMenu;
        },
        mouseDownHandle(event){
            this.moveDataelse.x = window.innerWidth - event.pageX - (window.innerWidth - this.$refs.chatbox.offsetLeft - this.$refs.chatbox.offsetWidth);
            this.moveDataelse.y = window.innerHeight - event.pageY - (window.innerHeight - this.$refs.chatbox.offsetTop - this.$refs.chatbox.offsetHeight);

            this.boxSize.x = this.$refs.chatbox.offsetWidth;
            this.boxSize.y = this.$refs.chatbox.offsetHeight;

            this.winSize.x = window.innerWidth;
            this.winSize.y = window.innerHeight;

            this.$refs.chatbox.style.transition = "none";

            // console.log(this.moveDataelse.x)

            event.currentTarget.style.cursor = 'move';
            window.onmousemove = this.mouseMoveHandle;
            window.onmouseup = this.mouseUpHandle;
        },
        mouseMoveHandle (event) {
            // console.log(event)
            event.preventDefault();

            // this.boxRight = this.winSize.x - event.pageX - this.moveDataelse.x;
            // this.boxBottom = this.winSize.y - event.pageY - this.moveDataelse.y;
            let mouseLeft = event.pageX - (this.boxSize.x - this.moveDataelse.x) <= 0 ? this.boxSize.x - this.moveDataelse.x : event.pageX;
            let mouseTop = event.pageY - (this.boxSize.y - this.moveDataelse.y) <= 0 ? this.boxSize.y - this.moveDataelse.y : event.pageY;

            let right = this.winSize.x - mouseLeft - this.moveDataelse.x;
            let bottom = this.winSize.y - mouseTop - this.moveDataelse.y;

            right = right <= 0 ? 0 : right;
            bottom = bottom <= 0 ? 0 : bottom;

            this.$refs.chatbox.style.right = right + 'px';
            this.$refs.chatbox.style.bottom= bottom + 'px';
        },
        mouseUpHandle(){
            window.onmousemove = null;
            window.onmouseup = null;
            this.$refs.chatbox.style.transition = "0.3s all";
        },
        changeSys(system){
            if(system == 0){
                this.system = "im-light";
            } else if(system == 1){
                this.system = "im-dark";
            }

            Common.setStorageItem("chatSys", system);
        },
        onChangeLang(lang){
            this.areaLang = lang;
            Common.setStorageItem("areaLang", lang);
            
            this.isChangeArea = true;
            this.selectChatIdx(this.chatIdx);
        },
        backToLastRoom(){
            this.onSelectRoom({id:this.lastRoom});
        },
        openPay(isOpen = true){
            this.isOpenPay = isOpen;
        },
        openFroceTop(data){
            this.detailInfo = data;
            this.openDetail();    
        },
        openDownload(isOpen = true){
            this.isOpenDownload = isOpen;
        },
        openDetail(isOpen = true){
            this.isOpenDetail = isOpen;
        },
        addGif(item){
            const {head, locked} = item;
            
            if(locked){return}
            this.openEmojiBox(false);
            const ran = Math.floor(Math.random() * 3);
            let anim = '';
            switch(ran){
                case 0:
                    anim = 'attack';
                    break;
                case 1:
                    anim = 'hit';
                    break;
                case 2:
                    anim = 'idle';
                    break;
                default:
                    break;
            }
            
            const sendData = {
                method:"SEND_MSG",
                params:{
                    roomId: this.currentRoom,
                    userId : this.socket_userInfo.user_id,
                    message:`[_${head}/${anim}_]`,
                    plat:1
                }
            }

            this.websocketsend(sendData);
        },
        async selectImg(){
            const imgFile = this.$refs.imgLocal.files[0];

            let formData=new FormData();
            formData.append('upload',imgFile, imgFile.name);

            if(!Common.validateImage(imgFile.name)){
                return
            }

            this.$refs.imgLocal.value = '';

            const res = await request(API_UPLOAD_FILE, {
                method: 'POST',
                data : formData,
            }, true, false, {
                'Content-Type': 'multipart/form-data'
            });

            if(res.code == 200){
                const content = `[*${res.data.url}*]`;
                const sendData = {
                    method:"SEND_MSG",
                    params:{
                        roomId: this.currentRoom,
                        userId : this.socket_userInfo.user_id,
                        message:content,
                        plat:1
                    }
                }

                this.websocketsend(sendData)
            }
        },
        closeForceTop(){
            this.showForceTop = false;
        },
        pinMsg(data){
            this.forceTopMsg = data;
        },
        onOprMenu(data, type){
            let sendData = {};

            switch(type){
                case 0:
                    sendData = {
                        method:"PIN_MSG",
                        params:{
                            roomId:this.currentRoom, 
                            userId: this.socket_userInfo.user_id, 
                            msgId: data.id,
                            allRoom : 0
                        }
                    }

                    this.websocketsend(sendData)
                    break;
                case 1:
                    sendData = {
                        method:"REVOKE_MSG",
                        params:{
                            roomId:this.currentRoom,
                            userId:this.socket_userInfo.user_id,
                            msgId:data.id,
                            allMsg:0
                        }
                    }

                    this.websocketsend(sendData)
                    break;
                case 2:
                    sendData = {
                        method:"REVOKE_MSG",
                        params:{
                            roomId:this.currentRoom,
                            userId:this.socket_userInfo.user_id,
                            msgId:data.id,
                            allMsg:1
                        }
                    }

                    this.websocketsend(sendData)
                    break;
                case 3:
                    sendData = {
                        method:"BAN_USER",
                        params:{
                            roomId:this.currentRoom,
                            userId:this.socket_userInfo.user_id,
                            banTs:3600,  //禁用的时长. -1
                            banUid:data.u  // 要禁用的用户
                        }
                    }

                    this.websocketsend(sendData)
                    break;
                case 4:
                    sendData = {
                        method:"BAN_USER",
                        params:{
                            roomId:this.currentRoom,
                            userId:this.socket_userInfo.user_id,
                            banTs:86400,  //禁用的时长. -1
                            banUid:data.u  // 要禁用的用户
                        }
                    }

                    this.websocketsend(sendData)
                    break;
                case 5:
                    sendData = {
                        method:"BAN_USER",
                        params:{
                            roomId:this.currentRoom,
                            userId:this.socket_userInfo.user_id,
                            banTs:2592000,  //禁用的时长. -1
                            banUid:data.u  // 要禁用的用户
                        }
                    }

                    this.websocketsend(sendData)
                    break;
                case 6:
                    sendData = {
                        method:"BAN_USER",
                        params:{
                            roomId:this.currentRoom,
                            userId:this.socket_userInfo.user_id,
                            banTs:99999999999999,  //禁用的时长. -1
                            banUid:data.u  // 要禁用的用户
                        }
                    }

                    this.websocketsend(sendData)
                    break;
                default:
                    break;
            }
        },
        setMsgMaxId(data){
            this.msgMaxId = data.maxMsgId;
            console.log({maxId:this.msgMaxId})
        },
        addAtPlayer(info){
            this.mentionArr.unshift({
                msg:`${info.name} @ you!!!`,
                id: info.id,
                baseId:info.baseId
            })
        },
        clickAt(item, idx, icClear = false){
            this.mentionArr.splice(idx,1);
            // document.getElementById(`#${item.id}`).scrollIntoView();
            if(!icClear){
                const height = document.getElementById(`#${item.id}`).offsetTop;
                const container = this.$refs.chatscroll;
                $(container).animate({
                    scrollTop : height,
                }, 300)
            }

            const readData = {
                method:"RMSG_MAXID",
                params:{
                    roomId:this.currentRoom, 
                    userId: this.socket_userInfo.user_id, 
                    msgId: item.baseId
                }
            }
            this.websocketsend(readData);
        },
        atSomeOne(atUser){
            let {isCom, data} = atUser;

            if(isCom){data = data[0]}
            const {n,u} = data;
            this.atUserMap[n] = u;

            this.content += `@${data.n} `;
            this.$refs.inputContent.select();
            // $(this.$refs.inputContent).focus();
        },
        getShortName(item){
            if(item.user_id){
                return Common.getCutStr(item.nickname || item.user_id, 13)
            } else {
                return this.$t('Chat_51');
            }
        },
        getUserName(item){
            return Common.getCutStr(item.nickName || item.userId, 13);
        },
        onClickChatTap(type, data){
            switch(type){
                case 0:
                    this.atSomeOne(data);
                    break;
                case 1:
                    this.copyData(data);
                    this.showNotify(this.$t('Setting_87'), "success");
                    break;
                case 2:
                    this.setForbidUser(data);
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        },
        copyData(chatData){
            let {isCom, data} = chatData;
            if(isCom){data = data[0]}

            Common.copyTextBoard(data.m);
        },

        setSelectForbid(item){
            // this.selectForbid = item.userId;
            // this.selectForbid[item.userId] = true;
            if(this.selectForbid[item.userId]){
                this.$delete(this.selectForbid, item.userId)
            } else {
                this.$set(this.selectForbid, item.userId, true)
            }

            // console.log(this.selectForbid)
        },

        async confrimForbid(){
            // const {avatar} = this.socket_userInfo;
            this.openForbid(false);
            if(!this.selectForbid){
                return
            }

            const activeData = {
                method:"MAKE_ACTIVE",
                params:{
                    userId:this.socket_userInfo.user_id, 
                    tUid : Object.keys(this.selectForbid)
                }
            }

            this.websocketsend(activeData);
            
            // if(!this.selectHead || avatar == this.selectHead){
            //     return
            // }
            
            // try{
            //     const data = {
            //         head : this.selectHead
            //     }
            //     const res = await request(API_USER_HEAD_UPDATE, {
            //         method: 'POST',
            //         data
            //     });

            //     if(res.code == 200){
            //         this.socket_userInfo.avatar = res.data.avatar;
            //     }
            // }catch{
            //     console.log("error")
            // }
        },
        async confirmAvatar(){
            const {avatar} = this.socket_userInfo;
            this.openAvatar(false);
            
            if(!this.selectHead || avatar == this.selectHead){
                return
            }
            
            try{
                const data = {
                    head : this.selectHead
                }
                const res = await request(API_USER_HEAD_UPDATE, {
                    method: 'POST',
                    data
                });

                if(res.code == 200){
                    this.socket_userInfo.avatar = res.data.avatar;
                }
            }catch{
                console.log("error")
            }
        },
        selectAvatar(item){
            const {head, locked} = item;
            if(!locked){
                this.selectHead = head;
            }
        },
        getAvatarSrc(avatar){
            return Common.getAvatarSrc(avatar)
        },
        // 切换登录显示状态
		toggleLoginModal() {
			this.isShowLogin = !this.isShowLogin;
		},
        login(){
            // this.$root.eventHub.$emit('login-chat')
            // this.isShowLogin = true;
            window.location.href = `${LOGINHEAD}?redirect=${encodeURIComponent(window.location.href)}`
        },
        toScrollDown(){
            this.unreadNum = 0;

            const container = this.$refs.chatscroll;
            $(container).animate({
                scrollTop : container.scrollHeight,
            }, 300)
            // container.scrollTop();
        },
        pushKeyword(e){
            if(e.keyCode == 13 && e.ctrlKey){
                this.content += "\n"; //换行
            }else if(e.keyCode == 13){
                this.sendChatMsg(this.content); //提交的执行函数
                e.preventDefault();//禁止回车的默认换行
            }
        },
        // confirmInput(){
        //     // console.log(this.content)
        //     this.sendChatMsg(this.content)
        // },
        submitInput(){
            // console.log(this.content)
            this.sendChatMsg(this.content)
        },
        sendChatMsg(data){
            this.setSendChat();

            let sendMsg = data;

            console.log(this.atUserMap);

            Object.keys(this.atUserMap).map((item)=>{
                sendMsg = sendMsg.replaceAll(`@${item}`, `[@${item}@]`)
            })

            const sendData = {
                method:"SEND_MSG",
                params:{
                    roomId: this.currentRoom,
                    userId : this.socket_userInfo.user_id,
                    message:sendMsg,
                    at : Object.values(this.atUserMap) || [],
                    plat:1
                }
            }

            this.websocketsend(sendData)
            this.content = '';
        },
        setSendChat(){
            const atArr = Common.getAtFromStr(this.content);
            const atMap = {...this.atUserMap};

            atArr.map((item)=>{
                if(this.roomNameMap[item]){
                    atMap[item] = this.roomNameMap[item].userId;
                }
            });

            this.atUserMap = atMap;
        },
        setForbidUser(forbid){
            let {isCom, data} = forbid;
            if(isCom){data = data[0]}
            // console.log(data.u)

            const setForbidData = {
                method:"MAKE_SILENCE",
                params:{
                    userId:this.socket_userInfo.user_id, 
                    tUid : data.u
                }
            }

            this.websocketsend(setForbidData)
        },
        activeUser(data){
            const {userId} = data;
            // delete this.forbidMap[userId];
            userId.map((item)=>{
                this.$delete(this.forbidMap, item);
            })

            this.forbidUsers = Object.values(this.forbidMap);
            this.$nextTick(()=>{
                const container = this.$refs.chatscroll;
                if(container){
                    container.scrollTop = container.scrollHeight;
                }

                this.setView();
            })
        },
        addForbidUser(data){
            const {userId} = data;
            // this.forbidMap[userId] = data;
            this.$set(this.forbidMap, userId, data);

            this.forbidUsers = Object.values(this.forbidMap);
            this.showNotify(this.$t(`Chat_61`), "success");
            // this.$nextTick(()=>{
            //     const container = this.$refs.chatscroll;
            //     if(container){
            //         container.scrollTop = container.scrollHeight;
            //     }
            // })
            // this.forbidUsers
            // userId
        },
        getForbidUser(){
            const {user_id} = this.socket_userInfo;
            const forbidData = {
                method:"SILENCE_DATA",
                params:{
                    userId:user_id
                }
            }

            this.websocketsend(forbidData)
        },
        initWebSocket(){
            this.websock = new WebSocket(wsuri);
            this.websock.onopen = this.websocketonopen;
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onerror = this.websocketonerror;
            this.websock.onclose = this.websocketclose;
        },
        reconnectWebSocket(){
            this.websock = new WebSocket(wsuri);
            this.websock.onopen = this.websocketReconnect;
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onerror = this.websocketonerror;
            this.websock.onclose = this.websocketclose;
        },
        websocketonmessage(e){
            // 数据接收
            let receiveData = JSON.parse(e.data);
            if(typeof receiveData == "string") {
                receiveData = JSON.parse(receiveData);
            }
            console.log("im in!!");
            // console.log({og:e.data, after : receiveData})
            // console.log(e.data)
            // console.log(receiveData)
            console.log(receiveData)

            if(receiveData.error === "message error"){
                this.showNotify(this.$t(`Error_Chat_${receiveData.code}`), "error");
                return
            }

            switch(receiveData.method){
                case "BAN_USER":
                    this.setBanUser(receiveData);
                    break;
                case "WAIT_TO_PAY": // 撤回消息
                    this.openPay();
                    break;
                case "SERVER_MAINTAIN": // 撤回消息
                    // this.showForceTop = true;
                    // this.pinMsg(receiveData.data)
                    this.isFixing = true;
                    break;
                case "SERVER_ONLINE": // 撤回消息
                    // this.showForceTop = true;
                    // this.pinMsg(receiveData.data)
                    this.isFixing = false;
                    this.onSelectRoom({id:this.currentRoom}, true);
                    break;
                case "PIN_MSG": // 撤回消息
                    this.showForceTop = true;
                    this.pinMsg(receiveData.data);
                    break;
                case "REVOKE_MSG": // 撤回消息
                    this.recallMsg(receiveData.data);
                    break;
                case "ENTER_ROOM":
                    console.log("enter room!!!!")
                    console.log(receiveData)

                    this.setNowRoom(receiveData.data);
                    this.setNetworkState();
                    break;
                case "RMSG_MAXID":
                    this.setMsgMaxId(receiveData.data);
                    break;
                case "ROOM_MEMBERS":
                    console.log("members!!!!!!!!!!!!!!!!")
                    console.log(receiveData)

                    this.setRoomMembers(receiveData.data);
                    break;
                case "MAKE_ACTIVE":
                    this.activeUser(receiveData.data);
                    break;
                case "MAKE_SILENCE":
                    this.addForbidUser(receiveData.data);
                    break;
                case "SILENCE_DATA":
                    if(receiveData.data.userId == this.socket_userInfo.user_id){
                        this.forbidMap = {};
                        this.forbidUsers = receiveData.data.users || [];
                        this.forbidUsers.map((item)=>{
                            const {userId} = item;
                            this.forbidMap[userId] = item;
                        });
                    }
                    break;
                case "LOGIN_RET" :
                    this.socket_userInfo = receiveData.data;
                    this.getForbidUser();
                    this.onSelectRoom({id:this.currentRoom}, true);
                    break;
                case "GET_ROOM" :
                    // console.log(data.rooms || []);
                    this.setRoomData(receiveData.rooms || []);
                    break;
                case "LEAVE_ROOM" :
                    // console.log(data.rooms || []);
                    if(receiveData.data.userId === this.socket_userInfo.user_id){
                        this.chatArr = [];// 清空聊天信息
                        this.mentionArr = [];
                        this.isRole = 0;
                        this.showForceTop = false;
                        this.openPay(false);
                    }
                    break;
                case "MSG_HIST":
                    // console.log(data.rooms || []);
                    // 暂时注释
                    // if(Number(this.currentRoom) === Number(receiveData.roomId)){
                        this.chatArr = receiveData.data || [];// 清空聊天信息
                        this.setChatArr();
                        this.getRoomMembers();

                        this.$nextTick(() => {
                            // var container = this.$el.querySelector("#new_message");
                            const container = this.$refs.chatscroll;
                            if(container){
                                container.scrollTop = container.scrollHeight;
                            }

                            this.setView();
                        });
                    // }
                    break;
                case "SEND_MSG":
                    this.setChat(receiveData);
                    break;
                default:
                    break;
            }   
            // } else {
            //     console.log("error")
            // }
        },
        setBanUser(data){
            const {userId, banTs} = data;
            if(userId != this.userInfo.user_id){return}
            if(new Date().valueOf()/1e3 > banTs) {return}
            this.banTs = Number(banTs);
            console.log(banTs)
            console.log(this.userInfo.user_id)
        },
        setChat(receiveData){
            // 目前先注释掉 让所有房间都显示消息
            // if(receiveData.roomId != this.currentRoom) {return}

            this.setAddChatArr(receiveData.data);
            this.$nextTick(() => {
                const container = this.$refs.chatscroll;

                if(container && !this.forbidMap[receiveData.data.u]){
                    if(container.scrollHeight - container.scrollTop < 1000 || receiveData.data.u == this.socket_userInfo.user_id){
                        container.scrollTop = container.scrollHeight;
                        this.setView();
                    } else {
                        this.unreadNum++;
                        console.log("add news")
                    }
                }
            });
        },
        recallMsg(data){
            const {allMsg , msgId, rUid, roomId} = data;
            if(roomId == this.currentRoom){
                if(allMsg == 0){
                    // 禁言单条信息
                    this.chatArr.map((item,i)=>{
                        let {isCom, data} = item;
                        if(isCom){
                            data.map((item2, i2)=>{
                                if(item2.id == msgId) {
                                    this.$delete(data, i2)
                                }
                            })
                        } else {
                            if(data.id == msgId) {
                                this.$delete(this.chatArr, i)
                            }
                        }
                    })
                } else if(allMsg == 1){
                    // 禁言全部信息
                    // console.log(rUid)
                    // this.$set(this.forbidMap, rUid, data);
                    // this.forbidUsers = Object.values(this.forbidMap);

                    this.chatArr = this.chatArr.filter((item)=>{
                        return item.u != rUid
                    })
                }
            }
        },
        setRoomMembers(data){
            if(data && typeof data === "object"){
                // console.log("!!!!!!!!!!!!!!!!good")
                this.roomNameMap = {};
                this.roomIdMap = {};

                data.map((item)=>{
                    const {nickName, userId} = item;

                    this.roomNameMap[nickName] = item;
                    this.roomIdMap[userId] = item;
                })

            }

            // 渲染我是否被@到
            this.renderAtPlayer()
        },
        renderAtPlayer(){
            this.chatArr.map((item)=>{
                const {isCom, data, id} = item;
                if(isCom){
                    data.map((player)=>{
                        const {a, u, n} = player;
                        if(a){
                            if(a.length && typeof a == "object"){
                                (a || []).map((item)=>{
                                    // const sender = this.roomIdMap[u];
                                    if(this.forbidMap[u] || Number(player.id) <= Number(this.msgMaxId)){return}
                                    if(Number(item) === Number(this.socket_userInfo.user_id)){
                                        this.addAtPlayer({
                                            name:n,
                                            id,
                                            baseId:player.id
                                        });
                                    }
                                })
                            }
                        }
                    })
                } else {
                    const {a, u, n} = data;
                    if(a){
                        if(a.length && typeof a == "object"){
                            (a || []).map((item)=>{
                                // const sender = this.roomIdMap[u];
                                if(this.forbidMap[u] || Number(data.id) <= Number(this.msgMaxId)){return}
                                if(Number(item) === Number(this.socket_userInfo.user_id)){
                                    this.addAtPlayer({
                                        name:n,
                                        id : data.id,
                                        baseId : data.id
                                    });
                                }
                            })
                        }
                    }
                }
            })
        },
        setNowRoom(data){
            if(data.userId!=this.socket_userInfo.user_id){return}

            console.log("set me!!!!!!!")
            console.log(data)

            this.roomMsg = data;
            this.isRole = Number(data.role);
        },
        getRoomMembers(){
            if(!this.socket_userInfo.user_id){return}
            const roomData = {
                method:"ROOM_MEMBERS",
                params:{
                    roomId:this.currentRoom,
                    userId:this.socket_userInfo.user_id,
                    plat:1
                }
            };

            this.websocketsend(roomData);
        },
        setAddChatArr(data){
            const {a, u, s, id} = data;
            const lastChatInfo = this.chatArr[this.chatArr.length-1];
            const lastId = lastChatInfo ? lastChatInfo.id : -1;
            let isGoingCom = false;

            if(!lastChatInfo){
                this.chatArr.push({
                    isCom:false, 
                    data, 
                    s,
                    u, 
                    id
                })
            } else {
                const lastUid = lastChatInfo.u;
                const lastTs = lastChatInfo.s;

                if(u == lastUid && Math.abs(lastTs - s) < 300){
                    isGoingCom = true;

                    if(lastChatInfo.isCom){
                        this.chatArr[this.chatArr.length-1].data.push(data);
                    } else {
                        this.$set(this.chatArr, this.chatArr.length - 1, {
                            isCom : true,
                            data : [lastChatInfo.data , data],
                            s : lastTs,
                            u : lastUid,
                            id : lastId
                        })
                    }
                } else {
                    this.chatArr.push({
                        isCom:false, 
                        data, 
                        s,
                        u,
                        id
                    })
                }
            }

            if(a){
                if(a.length && typeof a == "object"){
                    (a || []).map((item)=>{
                        const sender = this.roomIdMap[u];
                        if(this.forbidMap[u]){return}
                        if(Number(item) === Number(this.socket_userInfo.user_id) && sender && sender.nickName){
                            this.addAtPlayer({
                                name:sender.nickName,
                                id:isGoingCom ? lastId : id,
                                baseId:id
                            });
                        }
                    })
                }
            }

        },
        setChatArr(){
            let chatMap = {};
            let lastChatInfo = {uid:0, times:0, id:0};

            this.chatArr.sort((a,b)=>{
                return a.s - b.s
            })
            this.chatArr.map((item)=>{
                const {id, u, s} = item;
                const {uid, times, lastId} = lastChatInfo;

                if(uid == u && Math.abs(times - s) < 300) {
                    // console.log(chatMap)
                    // console.log(`${times}_${uid}`)
                    if(chatMap[`${times}_${uid}`].isCom) {
                        chatMap[`${times}_${uid}`].data.push(item);
                    } else {
                        chatMap[`${times}_${uid}`] = {
                            isCom:true, 
                            data:[chatMap[`${times}_${uid}`].data , item], 
                            s:times,
                            id:lastId,
                            u
                        };
                    }
                } else {
                    chatMap[`${s}_${u}`] = {isCom:false, data:item, s, u, id};

                    lastChatInfo.uid = u;
                    lastChatInfo.times = s;
                    lastChatInfo.lastId = id;
                }
            })

            this.chatArr = Object.values(chatMap);
            this.chatArr.sort((a,b)=>{
                return a.s - b.s
            })

            // console.log(chatMap);
        },
        setRoomData(room){
            // console.log(room)
            let roomMap = {};
            // let roomType = 0;

            // let exToggleMap = {};
            
            room.map((item, i)=>{
                const {index, catalog, id, name} = item;
                
                if(this.currentRoom <= 0 && i === 0){
                    // 如果此时没有房间 设置默认房间
                    this.onSelectRoom({id});
                }

                this.roomInfo[id] = item;
                // roomType = index;
                if(roomMap[index]) {
                    let typeMap = roomMap[index][catalog];
                    if(typeMap){
                        roomMap[index][catalog].rooms.push({id, name})
                    } else {
                        roomMap[index][catalog] = {
                            catalog,
                            // title:`catalog-${catalog}`,
                            title:catalog,
                            toggle:true,
                            rooms:[{id, name}]
                        };
                    }
                } else {
                    roomMap[index] = {
                        [catalog] : {
                            catalog,
                            // title:`catalog-${catalog}`,
                            title:catalog,
                            toggle:true,
                            rooms:[{id, name}]
                        }
                    }
                }
                // if(roomMap[catalog]){
                //     roomMap[catalog].rooms.push({id, name})
                // } else {
                //     roomMap[catalog] = {
                //         catalog,
                //         title:`catalog-${catalog}`,
                //         toggle:true,
                //         rooms:[{id, name}]
                //     };
                // }
            })

            this.setRoomType(roomMap);

            // switch(roomType){
            //     case "1":
            //         this.moboxRoom.map((item)=>{
            //             const {catalog, toggle} = item;
            //             if(roomMap[catalog]){
            //                 roomMap[catalog].toggle = toggle;
            //             }
            //         })

            //         this.moboxRoom = Object.values(roomMap);
            //         break;
            //     case "2":
            //         this.recomandRoom.map((item)=>{
            //             const {catalog, toggle} = item;
            //             if(roomMap[catalog]){
            //                 roomMap[catalog].toggle = toggle;
            //             }
            //         })

            //         this.recomandRoom = Object.values(roomMap);
            //         break;
            //     case "3":
            //         this.personalRoom.map((item)=>{
            //             const {catalog, toggle} = item;
            //             if(roomMap[catalog]){
            //                 roomMap[catalog].toggle = toggle;
            //             }
            //         })

            //         this.personalRoom = Object.values(roomMap);
            //         break;
            //     default:
            //         break;
            // }



            // moboxRoom:[
            //     {title:"MOMO大厅1", toggle:true, rooms:[1001, 1002, 1003]},
            //     {title:"MOMO大厅2", toggle:true, rooms:[2001, 2002, 2003]},
            //     {title:"MOMO大厅3", toggle:true, rooms:[3001, 3002, 3003]}
            // ],
        },
        setRoomType(roomMap){
            Object.entries(roomMap).map(([roomType, roomIdxMap])=>{
                // console.log(i)

                switch(roomType){
                    case "1":
                        this.moboxRoom.map((item)=>{
                            const {catalog, toggle} = item;
                            if(roomIdxMap[catalog]){
                                roomIdxMap[catalog].toggle = toggle;
                            }
                        })

                        this.moboxRoom = Object.values(roomIdxMap);
                        break;
                    case "2":
                        this.recomandRoom.map((item)=>{
                            const {catalog, toggle} = item;
                            if(roomIdxMap[catalog]){
                                roomIdxMap[catalog].toggle = toggle;
                            }
                        })

                        this.recomandRoom = Object.values(roomIdxMap);
                        break;
                    case "3":
                        this.personalRoom.map((item)=>{
                            const {catalog, toggle} = item;
                            if(roomIdxMap[catalog]){
                                roomIdxMap[catalog].toggle = toggle;
                            }
                        })

                        this.personalRoom = Object.values(roomIdxMap);
                        break;
                    default:
                        break;
                }
            })

        },
        setNetworkState(){
            if(this.networkState.isOpenNetwork){
                // this.isShowSuccess = true;
                this.$set(this.networkState, "isShowSuccess", true);

                let t = setTimeout(() => {
                    clearTimeout(t);
                    this.$set(this.networkState, "isOpenNetwork", false);
                }, 3000);
            }
        },
        websocketReconnect(){
            // this.onSelectRoom({id:this.currentRoom}, true);
            this.loginChat();
            console.log("reconnect success!")
        },
        websocketonopen(){
            this.loginChat();

            this.areaLang = Common.getStorageItem("areaLang") || (Common.getStorageItem("lang") || "en");
            this.areaLang = this.areaLang === "zh-CN" ? "zh" : this.areaLang;
            this.areaLang = commuMap[this.areaLang] ? this.areaLang : "en";

            if(Common.checkIsAppleDevice() || Common.checkIsAndroidDevice()){
                this.areaLang = navigator.language||navigator.userLanguage;
                this.areaLang = langMap[this.areaLang] || 'en';
            }

            // 初次连上发送信息
            this.selectChatIdx(0);
        },
        websocketonerror(){
            // console.log("websocket 报错了！！！！！！！！！！！")
        },
        websocketclose(){
            // let times = 0;
            // this.websock = {};
            // clearInterval(this.t2);
            // this.t2 = setInterval(() => {
                // if(times > 5 || this.websock.readyState == 1){
                //     clearInterval(this.t2);
                //     return
                // }
                // times++;

            clearTimeout(this.t2);
            this.t2 = setTimeout(() => {
                console.log("尝试重连！！！！！！！！！！！！！")

                this.networkState = {
                    isOpenNetwork : true,
                    isShowConnect : true,
                    isShowReconnect : false,
                    isShowSuccess : false,
                }

                // console.log({
                //     isOpenNetwork:this.isOpenNetwork ,
                //     isShowConnect:this.isShowConnect ,
                //     isShowReconnect:this.isShowReconnect,
                //     isShowSucces:this.isShowSucces ,
                // })
                // this.networkState = {
                //     isOpenNetwork : true,
                //     isShowConnect : false,
                //     isShowReconnect: false,
                //     isShowSuccess : false
                // }
                if(this.websock.readyState == 1) {
                    clearTimeout(this.t2);
                    return
                }
                this.reconnectWebSocket();
            }, 3000);
            // }, 3000);
        },
        websocketsend(Data){//数据发送

            if(Data.method === "SEND_MSG"){
                if(!Data.params.message.trim()){
                    // 如果既是message又无params 则return
                    return
                }
            }

            this.websock.send(JSON.stringify(Data));
        },
        loginChat(token){
            if(!token){
                token = Common.getStorageItem("token");
            }
            
            const loginData = {
                "method":"LOGIN",
                "params":{
                    "x-bits-token": token
                }
            }

            this.websocketsend(loginData);
        },
        setSetting(type){
            switch(type){
                case 0:
                    this.openSetting(false);
                    this.openAvatar();
                    break;
                case 1:
                    this.openSetting(false);
                    this.openForbid();
                    break;
                default:
                    break;
            }
        },
        openForbid(isOpen = true){
            if(!this.socket_userInfo.user_id) {return}
            this.isOpenForbid = isOpen;

            if(isOpen){
                this.selectForbid = {};
            }

            this.$nextTick(()=>{
                const $foribid = $(this.$refs.forbid);
                $foribid.focus();
                $foribid.blur(()=>{
                    this.isOpenForbid = false;
                    $foribid.off("blur");
                });
            })
        },
        openSetting(isOpen = true){
            this.isOpenSetting = isOpen;

            this.$nextTick(()=>{
                const $setting = $(this.$refs.setting);
                $setting.focus();
                $setting.blur(()=>{
                    this.isOpenSetting = false;
                    $setting.off("blur");
                });
            })
        },
        async openAvatar(isOpen = true){
            if(!this.socket_userInfo.user_id) {return}
            this.isOpenAvatar = isOpen;
            if(isOpen){
                this.selectHead = this.socket_userInfo.avatar;

                try{
					const {code ,data} = await request(API_GET_USER_HEADS, {
						method: 'POST',
					});

                    if(code == 200){
                        if(data.length < 16) {
                            let lockMap = {};
                            let myAvatarMap = {};

                            data.map((item)=>{
                                myAvatarMap[item.head] = true;
                            })

                            let count = 0;
                            while(data.length < 16){
                                const id = this.lockAvatarArr[count];
                                if(!lockMap[id] && !myAvatarMap[id]){
                                    lockMap[id] = true;
                                    data.push({head:id, locked:true})
                                }
                                count++;
                            }
                        }

                        this.avatarArr = data;
                    }
                    // console.log("avatar!!!!!!!!!!")
                    // console.log(res)
				}catch{
                    console.log("error")
				}
            }

            this.$nextTick(()=>{
                const $avatar = $(this.$refs.avatar);
                $avatar.focus();
                $avatar.blur(()=>{
                    this.isOpenAvatar = false;
                    $avatar.off("blur");
                });
            })
        },
        scrollChat(e){
            // e.cancelBubble = true;

            clearTimeout(this.t1)
            this.t1 = setTimeout(() => {
                const container = this.$refs.chatscroll;
                const dis = container.scrollHeight - container.scrollTop;
    
                if(dis <= 1250 && this.unreadNum > 0){
                    this.unreadNum = 0;
                }
            }, 200);

            this.setView(e)
        },
        setView(e = {}){
            const chatscroll = e.target ? e.target : this.$refs.chatscroll;
            const lis = $(chatscroll).find('.chat-box');
            const scrollTop = chatscroll.scrollTop;
            const wrapHeight = chatscroll.offsetHeight;

            $.each(lis, function (index, item) {
                var curItem = $(item);
    
                // var itemOffsetTop = curItem.offset().top;
                var itemOffsetTop = item.offsetTop - scrollTop;
                var itemOuterHeight = curItem.outerHeight();

                var nowHeight = itemOffsetTop + itemOuterHeight;

                if(nowHeight >= 0 && itemOffsetTop <= wrapHeight){
                    curItem.removeClass("hide");
                } else {
                    curItem.addClass("hide");
                }
            });
        },
        onClickChatMenu(idx){
            // console.log(idx)
            this.currentChatMenuIdx = idx;
        },
        emojiBlur(){
            // console.log("tebieyaoqing!!!!!!")  
        },
        openEmojiBox(isOpen = true){
            this.isOpenEmoji = isOpen;
            
            this.$nextTick(()=>{
                const $board = $(this.$refs.emoji);
                $board.focus();
                $board.blur(()=>{
                    this.isOpenEmoji = false;
                    $board.off("blur");
                });
            })
        },
        addEmoji(item){
            const {key} = item;
            if(key.indexOf('stickers') != -1 && MOMOJI_CODE[key]){
                this.openEmojiBox(false);
                const sendData = {
                    method:"SEND_MSG",
                    params:{
                        roomId: this.currentRoom,
                        userId : this.socket_userInfo.user_id,
                        message:`[_${key}_]`,
                        plat:1
                    }
                }

                this.websocketsend(sendData);
                return
            }

            this.content += `[${item.key}]`;
        },
        chooseEmotion(idx){
            this.emojiIdx = idx;  
            if(idx == 2) {
                this.getGifArr();
            }
        },
        async getGifArr(){
            try{
                const {code ,data} = await request(API_GET_USER_HEADS, {
                    method: 'POST',
                });

                if(code == 200){
                    if(data.length < 16) {
                        let lockMap = {};
                        let myAvatarMap = {};

                        data.map((item)=>{
                            myAvatarMap[item.head] = true;
                        })

                        let count = 0;
                        while(data.length < 16){
                            const id = this.lockAvatarArr[count];
                            if(!lockMap[id] && !myAvatarMap[id]){
                                lockMap[id] = true;
                                data.push({head:id, locked:true})
                            }
                            count++;
                        }
                    }

                    this.gifArr = data;
                }
            }catch{
                console.log("error")
            }
        },
        clearInput(){
            this.personal_room = '';
            this.personal_room_pwd = '';
        },
        onFlipSelect(idx, isToggle){
            // console.log(idx, isToggle)
            this.roomList[idx].toggle = isToggle;
        },
        setRoomPage(idx){
            if(this.createIdx === idx){return}
            this.createIdx = idx;
            this.clearInput();
        },
        getRoomPageActive(idx){
            return this.createIdx === idx ? `room-page-active` : ``
        },
        openChat(isopen = true){
            this.isOpenChat = isopen;
            if(isopen && !this.hasFirstInit){
                this.hasFirstInit = true;
                this.init();
            }
            console.log("openchat buddy")

            this.$nextTick(()=>{
                if(isopen){
                    const container = this.$refs.chatscroll;
                    if(container){
                        container.scrollTop = container.scrollHeight;
                    }

                    this.setView();
                    this.setMobileRoom();
                    this.date = new Date();
                }
            })
        },
        openMenu(isopen = true){
            this.isOpenMenu = isopen;
        },
        setMobileRoom(){
            console.log(Common.checkIsAppleDevice());
            console.log(Common.checkIsAndroidDevice());
            console.log(this.$router.history.current.path);
            console.log(this.currentRoom);
            if(Common.checkIsAppleDevice() || Common.checkIsAndroidDevice()){
                const {path} = this.$router.history.current;
                const roomSon = parseInt(this.currentRoom % 10);
                let toRoom = 0;

                if(path === "/iframe/contest"){
                    // 1004
                    if(roomSon != 4){
                        toRoom = Math.floor(this.currentRoom / 10) * 10 + 4;
                    }
                } else if(path === "/iframe/tokenmaster"){
                    // 1003
                    if(roomSon != 3){
                        toRoom = Math.floor(this.currentRoom / 10) * 10 + 3;
                    }
                } else if(path === "/iframe/momo"){
                    // 1002
                    if(roomSon != 2){
                        toRoom = Math.floor(this.currentRoom / 10) * 10 + 2;
                    }
                } else {
                    if(roomSon != 1){
                        toRoom = Math.floor(this.currentRoom / 10) * 10 + 1;
                    }
                }

                if(toRoom){this.onSelectRoom({id:toRoom})}
            }
        },
        getItemClass(idx){
            const className = `item ${this.chatIdx === idx ? `item-active` : ``}`
            return className
        },
        selectChatIdx(idx){
            this.chatIdx = idx;
            this.clearInput();

            if(idx<0 || idx>2){return}
            const data = {
                method:"GET_ROOM",
                params:{
                    lang:this.areaLang,
                    types:idx + 1
                }
            }

            this.websocketsend(data);

            // 将聊天滚到底部
            this.$nextTick(()=>{
                const container = this.$refs.chatscroll;
                if(container){
                    container.scrollTop = container.scrollHeight;
                }

                this.setView();
            })
        },
        onSelectRoom(roomObj, forceRequest = false){
            const {id} = roomObj;
            if(this.currentRoom == id && !forceRequest){
                // 如果已经在房间内 不必重复进入
                return
            }

            if(!id || Number(id) <= 1000){return}

            const enterRoomData = {
                method: "ENTER_ROOM", 
                params: {
                    roomId: id,
                    userId : this.socket_userInfo.user_id,
                    plat:1
                }
            }

            this.chatArr = [];

            this.mentionArr = [];
            this.unreadNum = 0;
            this.lastRoom = this.currentRoom;
            this.currentRoom = id;
            this.currentIdx = this.chatIdx;
            this.isRole = 0;
            this.showForceTop = false;
            this.openPay(false);

            this.websocketsend(enterRoomData);
        },
        setEmojiArr(){
            Object.entries(EMOJI_CODE).map(([key, img])=>{
                this.emojiArr.push({key, img})
            })
        },
        setMomojiArr(){
            Object.entries(MOMOJI_CODE).map(([key, img])=>{
                this.momojiArr.push({key, img})
            })
        },
        init(){
            setInterval(() => {
                this.myTs = Math.floor(new Date().valueOf() / 1000);
            }, 1000);

            this.initWebSocket();

            this.$root.eventHub.$on('set-login-token', (token)=>{
                if(token){
                    this.loginChat(token);
                } else {
                    this.socket_userInfo = {};
                }
            });

            const lockArrMap = {};
            const data = [];
            while(data.length < 32){
                const id = Common.getRanMomoId();
                if(!lockArrMap[id]){
                    lockArrMap[id] = true;
                    data.push(id)
                }
            }

            this.lockAvatarArr = data;

            this.setEmojiArr();
            this.setMomojiArr();

            // set system
            this.system = Common.getStorageItem("chatSys") == 1 ? "im-dark" : "im-light";

            this.t3 = setInterval(() => {
                const sendData = "PING";
                this.websocketsend(sendData);
            }, 10000);
        },
    },
    // created(){
    //     this.initWebSocket();

    //     this.$root.eventHub.$on('set-login-token', (token)=>{
    //         // console.log("highhight!!!!!!!!!!!!!!")
    //         // console.log(token)

    //         if(token){
    //             this.loginChat(token);
    //         } else {
    //             this.socket_userInfo = {};
    //             // console.log("logout")
    //         }
    //     });

    //     const lockArrMap = {};
    //     const data = [];
    //     while(data.length < 32){
    //         const id = Common.getRanMomoId();
    //         if(!lockArrMap[id]){
    //             lockArrMap[id] = true;
    //             data.push(id)
    //         }
    //     }

    //     // this.lockAvatarArr
    //     // console.log("!!!!!!!!!!!!!!!!!cretaed!!!!!!!!!!!")
    //     // console.log(lockArrMap)
    //     // console.log(Object.keys(lockArrMap).length)
    //     this.lockAvatarArr = data;
    // },
    created(){
    // 监听窗口通信
		window.addEventListener("message", ({ data }) => {
            if (data.action === "refresh-token") {
                this.loginChat(data.value);
            }
        }, false);
    },
    destroyed() {
      this.websock.close() //离开路由之后断开websocket连接
    },
    // mounted(){
    //     this.setEmojiArr();
    //     this.setMomojiArr();

    //     // set system
    //     this.system = Common.getStorageItem("chatSys") == 1 ? "im-dark" : "im-light";

    //     this.t3 = setInterval(() => {
    //         const sendData = "PING";
    //         this.websocketsend(sendData);
    //     }, 10000);

    //     // window.heartBeat = ()=>{
    //     //     const sendData = "PING";
    //     //     this.websocketsend(sendData);
    //     //     this.t3 = setTimeout(() => {
    //     //         console.log("我要重连！！！！！！！")
    //     //     }, 10000);
    //     // }

    //     // window.pop = ()=>{
    //     //     // var lis= this.$refs.chatscroll.find(".chat-box");

    //     //     // console.log()
    //     //     const lis = $(this.$refs.chatscroll).find('.chat-box');

    //     //     const scrollTop = this.$refs.chatscroll.scrollTop;
    //     //     const wrapHeight = this.$refs.chatscroll.offsetHeight;

    //     //     $.each(lis, function (index, item) {
    //     //         var curItem = $(item);
    
    //     //         // var itemOffsetTop = curItem.offset().top;
    //     //         var itemOffsetTop = item.offsetTop - scrollTop;
    //     //         var itemOuterHeight = curItem.outerHeight();

    //     //         console.log(index + "_" + itemOuterHeight + "_" + itemOffsetTop + "_" + item.offsetTop)

    //     //         var nowHeight = itemOffsetTop + itemOuterHeight;

    //     //         if(nowHeight >= 0 && itemOffsetTop <= wrapHeight){
    //     //             curItem.removeClass("hide");
    //     //         } else {
    //     //             curItem.addClass("hide");
    //     //         }
    //     //     });
    //     // }

    //     // window.addPop = ()=>{
    //     //     this.mentionArr.unshift(`${start} @ you!!!`)
    //     //     start++;

    //     //     // let t = setTimeout(()=>{
    //     //     //     this.mentionArr.pop();
    //     //     //     clearTimeout(t);
    //     //     // }, 3000)
    //     // }
    // }
}
</script>

<style lang="less" scoped>
    .im-right-box{
        position: fixed;
        bottom: 10px;
        right: 20px;
        z-index: 99999;

        .im-btn{
            position: relative;
            transition: none;
            cursor: pointer;
            margin-bottom: 10px;
    
            .btn-chat{
                // padding: 12px;
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
    
                // border: 3px solid #4C4D4F;
                background: #0069FF;
                // box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                border-radius: 15px;
            }
    
            .pulse-rings {
                position: absolute;
                top: 50%;
                left: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
    
                .pulse {
                    position: absolute;
                    border-radius: 16px;
                    z-index: 1;
                    opacity: 0.0;
                    border-color: #0069ff;
                    border-style: solid;
    
                    &-1 {
                        height: 51px;
                        width: 51px;
                        border-width: 3px;
                        animation: 2s ease-out 0s infinite pulsate;
                    }
    
                    &-2 {
                        height: 57px;
                        width: 57px;
                        border-width: 2px;
                        animation: 2s ease-out 0s infinite pulsate;
                    }
    
                    &-3 {
                        height: 63px;
                        width: 63px;
                        border-width: 1px;
                        animation: 2s ease-out 0s infinite pulsate;
                    }
                }
            }
        }

        .im-btn-grey{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            cursor: pointer;
            margin-bottom: 10px;

            background: #303338;
            border: 3px solid #4C4D4F;
            box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.88);
            border-radius: 15px;

            img {
                width: 35px;
            }
        }
    }


    .im-dark{
        .btn-1{
            background: transparent;
            border: 1px solid #FF9959;
            text-align: center;
            border-radius: 13px;
            margin-top: 20px;
            font-weight: 600;
        }

        .im-box{
            // -webkit-backdrop-filter: blur(8px);
            // backdrop-filter: blur(8px);

            position: fixed;
            right: 0;
            bottom: 0;

            transition: none;

            // filter: blur(26px);
            // opacity: 1;
            display: flex;

            .im-menu{
                width: 330px;
                z-index: 5;

                .menu-top{
                    position: relative;
                    z-index: 22;

                    height: 43px;
                    background: rgba(32,34,38, 0.9);
                    border: 1px solid #444548;
                    border-right: none;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 13px;

                    .close{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 25px;
                        height: 25px;

                        cursor: pointer;
                        margin-right: 10px;
                        
                        img{
                            width: 20px;
                            height: 20px;
                        }
                    }
                }

                .menu-middle{
                    display: flex;
                    height: 652px;
                    
                    .left{
                        background: rgba(25,27,32,0.9);
                        z-index: 10;

                        width: 62px;
                        height: 100%;

                        border : 1px solid #444548;
                        border-top : none;
                        border-bottom : none;

                        .item:hover{
                            background: #202226;
                        }

                        .item-active{
                            position: relative;
                            background: #202226;
                        }

                        .item-active::before{
                            content: '';
                            display: block;
                            position: absolute;
                            background: #FF9E61;
                            width: 3px;
                            height: 77%;
                            border-radius: 0px 5px 5px 0px;
                            top: 50%;
                            left: 0;
                            transform: translate(0 , -50%);
                            // border-left: 3px solid  #FF9E61;;
                        }

                        .item{
                            transition: 0.3s all;
                            padding: 20px 0;
                            width: 100%;

                            cursor: pointer;
                            text-align: center;

                            .icon{
                                width: 38px;
                                height: 38px;

                                display: flex;
                                justify-content: center;
                                align-items: center;

                                background: rgba(48,51,56,0.5);
                                border: 3px solid #4C4D4F;
                                box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                                border-radius: 6px;

                                margin: 0 auto 5px auto;

                                img{
                                    max-width: 22px;
                                    max-height: 22px;
                                }
                            }

                            .title{
                                font-size: 10px;
                                font-weight: bold;
                                color: #93959C;
                                -webkit-text-stroke: 1 rgba(0, 0, 0, 0);
                                // text-stroke: 1 rgba(0, 0, 0, 0);
                                opacity: 1;
                            }
                        }
                    }

                    .right{
                        flex: 1;
                        background: rgba(32,34,38, 0.98);
                        position: relative;

                        .room-item{
                            position: absolute;
                            width: 100%;
                            height: 100%;

                            .room-scroll{
                                height: 100%;
                                overflow: auto;
                            }

                            .room-scroll::-webkit-scrollbar {
                                width: 0;
                                height: 0;
                            }

                            .room-scroll::-webkit-scrollbar-thumb {
                                background-color: transparent;
                            }

                            .room-scroll::-webkit-scrollbar-thumb:hover {
                                background-color: transparent;
                            }

                            .coom-soon{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                font-weight: bold;
                                padding-top: 35%;

                                .coom{
                                    margin-top: 20px;
                                    color: #FFAE2C;
                                }

                                .soon{
                                    color: #4575D6;
                                }
                            }

                            // .room-page:hover{
                            //     border: 1px solid #FF9E61;
                            // }

                            .room-page-active{
                                border: 1px solid #FF9E61!exportant;
                            }

                            .room-page{
                                transition: 0.5s;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                align-items: center;
                                padding: 16px;
                                height: 200px;
                                margin: 10px;
                                cursor: pointer;

                                background: #191B20;
                                border: 1px solid #444548;
                                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                                border-radius: 10px;

                                .title{
                                    color: #E7E7E7;
                                    font-weight: 600;

                                    .t2{
                                        opacity: 0.5;
                                    }
                                }


                                img{
                                    height: 90px;
                                }
                            
                            }
                        }
                    }
                }

                .menu-bottom{
                    height: 100px;
                    background: rgba(32,34,38, 0.9);
                    border: 1px solid #444548;
                    border-right: none;
                    border-bottom: none;
                    position: relative;
                    z-index: 30;

                    padding: 0 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .menu-contain{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .left-box{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .head-box{
                            cursor: pointer;
                            width: 50px;
                            height: 50px;
                            border: 1px solid #444548;
                            border-radius: 6px;
                            margin-right: 10px;
                            position: relative;

                            .avatar{
                                position: absolute;
                                width: 100%;
                                height: 100%!exportant;
                                left: 0;
                                height: 0;
                            }

                            .user{
                                position: absolute;
                                left:50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                width: 50%;
                                max-height: 90%;
                            }
                        }

                        .name-box{
                            font-size: 12px;

                            .name{
                                margin-bottom: 10px;
                            }
                        }
                    }

                    .right-box{
                        cursor: pointer;
                    }

                    .chat-setting{
                        outline: none;

                        transition: 0.2s all;
                        position: absolute;

                        -webkit-backdrop-filter: blur(8px);
                        backdrop-filter: blur(8px);

                        background: rgba(25,27,32, 0.5);
                        border: 1px solid #444548;
                        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                        opacity: 1;
                        border-radius: 10px;

                        right: 20px;
                        bottom: 56px;
                        overflow: hidden;

                        // padding: 0 20px;
                        color: #ACAFB3;

                        .selector{
                            cursor: pointer;
                            padding: 20px;
                            font-size: 12px;
                            width: 170px;
                        }

                        .selector:hover{
                            background: #111111;
                        }

                        .system{
                            display: flex;
                            justify-content: space-between;
                            padding: 20px;
                            font-size: 12px;
                            width: 170px;
                            
                            .sys-select{
                                *{
                                    display: inline-block;
                                    vertical-align: middle;
                                }

                                .circle{
                                    cursor: pointer;
                                    width: 14px;
                                    height: 14px;
                                    margin: 0 5px;
                                    
                                    border: 1px solid #707070;
                                    border-radius: 50%;
                                }

                                .active{
                                    background: #FF9959;
                                }
                            }
                        }
                    }

                    .head-avatar{
                        position: absolute;
                        bottom: 60px;
                        left: 50%;
                        transform: translate(-50%, 0);
                        
                        -webkit-backdrop-filter: blur(8px);
                        backdrop-filter: blur(8px);

                        background: #191B20;
                        border: 1px solid #444548;
                        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                        opacity: 1;
                        border-radius: 10px;
                        outline: none;

                        .avatar-box{
                            background: rgba(25, 27, 32 ,0.7);
                            border: 1px solid #444548;
                            border-radius: 10px;
                            margin: 10px;
                            overflow: auto;

                            width: 295px;
                            height: 380px;

                            .avatar-item{
                                display: inline-block;
                                width: 25%;
                                text-align: center;
                                position: relative;
                                cursor: pointer;

                                .avatar-contain{
                                    position: relative;
                                    
                                    .avatar{
                                        width: 70px;
                                        height: 70px;
                                        position: relative;
                                        
                                        img{
                                            position: absolute;
                                            left: 50%;
                                            top: 50%;
                                            transform: translate(-50%, -50%);
                                            width: 70px;
                                        }
                                    }

                                    .select-lock{
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        width: 25px;
                                    }
                                }

                                .select-item{
                                    margin: auto;
                                    width: 14px;
                                    height: 14px;
                                    border: 1px solid #707070;
                                    border-radius: 50%;
                                    position: relative;

                                    .circle{
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;

                                        background: #FF9959;
                                        border-radius: 50%;
                                    }
                                }
                            }   
                        }

                        .btn-box{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 10px;

                            .confirm{
                                padding: 5px 0;
                                width: 180px;
                                background: #0E0F12;
                                border: 1px solid #213D7D;
                                border-radius: 13px;
                                text-align: center;
                                cursor: pointer;
                            }

                            .cancel{
                                flex: 1;
                                margin-left: 20px;
                                padding: 5px 0;
                                text-align: center;
                                color: #ACAFB3;
                                cursor: pointer;

                                background: #0E0F12;
                                border: 1px solid #213D7D;
                                border-radius: 13px;
                            }
                        }
                    }

                    .forbid-contain{
                        position: absolute;
                        bottom: 60px;
                        left: 50%;
                        transform: translate(-50%, 0);
                        
                        -webkit-backdrop-filter: blur(8px);
                        backdrop-filter: blur(8px);

                        background: #191B20;
                        border: 1px solid #444548;
                        box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                        opacity: 1;
                        border-radius: 10px;
                        outline: none;

                        .forbid-box{
                            background: rgba(25, 27, 32 ,0.7);
                            border: 1px solid #444548;
                            border-radius: 10px;
                            margin: 10px;
                            overflow: auto;

                            width: 295px;
                            height: 380px;
                            
                            .forbid-item{
                                cursor: pointer;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                padding: 5px 16px;

                                .left{
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    .head{
                                        width: 40px;
                                        height: 40px;
                                    }
    
                                    .name{
                                        font-size: 12px;
                                        font-family: PingFang SC;
                                        font-weight: 600;
                                        line-height: 17px;
                                        color: #E7E7E7;
                                        opacity: 1;
                                    }
                                }

                                .select-item{
                                    width: 14px;
                                    height: 14px;
                                    border: 1px solid #707070;
                                    border-radius: 50%;
                                    position: relative;

                                    .circle{
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;

                                        background: #FF9959;
                                        border-radius: 50%;
                                    }
                                }

                            }
                        }

                        .btn-box{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 10px;

                            .confirm{
                                padding: 5px 0;
                                width: 180px;
                                background: #0E0F12;
                                border: 1px solid #213D7D;
                                border-radius: 13px;
                                text-align: center;
                                cursor: pointer;
                            }

                            .cancel{
                                flex: 1;
                                margin-left: 20px;
                                padding: 5px 0;
                                text-align: center;
                                color: #ACAFB3;
                                cursor: pointer;

                                background: #0E0F12;
                                border: 1px solid #213D7D;
                                border-radius: 13px;
                            }
                        }
                    }
                }
            }

            .im-chat{
                -webkit-backdrop-filter: blur(8px);
                backdrop-filter: blur(8px);

                width: 520px;
                z-index: 10;
                
                background: rgba(25,27,32,0.9);
                border: 1px solid #444548;
                box-shadow: -3px -3px 6px rgba(0, 0, 0, 0.16);

                .chat-top{
                    height: 43px;
                    border: 1px solid #444548;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding: 0 10px;

                    .left{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                    }

                    .close{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 25px;
                        height: 25px;
                        background: #65676C;
                        border-radius: 50%;

                        cursor: pointer;
                        
                        img{
                            width: 10px;
                        }
                    }
                }
                .chat-middle{
                    border: 1px solid #444548;
                    border-bottom: none;
                    height: 680px;
                    position: relative;

                    .chat-room{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        overflow-y: auto;
                        overflow-x: hidden;
                        overscroll-behavior: contain;
                        -ms-scroll-chaining: contain;
                    }

                    .chat-pay{
                        z-index: 30;
                        -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);

                        position: absolute;
                        width: 100%;
                        height: 100%;

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .chat-paybox{
                            background: #191B20;
                            border: 1px solid #444548;
                            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                            border-radius: 10px;
                            padding: 10px;
                            width: 80%;

                            .chat-payinfo{
                                background: rgba(25,27,32,0.7);
                                border: 1px solid #444548;
                                border-radius: 10px;
                                padding: 18px;

                                .title{
                                    font-size: 20px;
                                    font-weight: 600;
                                    line-height: 28px;
                                    color: rgba(231,231,231, 0.7);
                                    margin-bottom: 10px;
                                }

                                .info-img{
                                    width: 100%;
                                }

                                .t1{
                                    display: flex;
                                    justify-content: space-between;
                                    margin: 10px 0;
                                }

                                .t2{
                                    font-size: 12px;
                                    font-weight: 500;
                                    line-height: 20px;
                                    color: #ACAFB3;
                                    opacity: 1;

                                    max-height: 170px;
                                    overflow: auto;
                                }

                            }

                            .btn-pay{
                                background: #0E0F12;
                                border: 1px solid #213D7D;
                                border-radius: 13px;
                                padding: 6px 0;
                                cursor: pointer;

                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-top: 15px;
                            }

                            .btn-line{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                .btn-pay{
                                    width: 48%;
                                }
                            }
                        }
                    }

                    .chat-mention{
                        position: absolute;
                        bottom: 0;
                        left: 20px;
                        bottom: 5px;

                        .box{
                            transition: 0.2s all;
                            user-select: none;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            margin-top: 5px;
                            cursor: pointer;
                            font-size: 12px;
                            padding: 4px 16px;

                            background: #111C35;
                            border: 1px solid #618FFC;
                            border-radius: 6px;

                            img{
                                margin-left: 10px;
                                width: 10px;
                            }
                        }
                    }

                    .chat-force-top{
                        z-index: 99;
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                        background: rgba(16,24,51, 0.8);
                        padding: 10px 40px;
                        border-bottom: 2px solid #444548;
                        color: #ACAFB3;
                        font-weight: bold;
                        font-size: 12px;
                        // overflow: hidden;
                        // text-overflow: ellipsis;
                        // white-space: nowrap;

                        .content{
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            cursor: pointer;
                        }

                        img{
                            position: absolute;
                            width: 15px;
                            right: 15px;
                            top: 50%;
                            cursor: pointer;
                            transform: translate( 0, -50%);
                        }
                    }
                    
                    .chat-downtip{
                        position: absolute;
                        background-color: silver;
                        width: 200upx;
                        height: 50upx;
                        background: rgb(136, 81, 46);
                        border: 2px solid #ff9959;
                        border-radius: 0.25em;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 172;
                        padding: 3px 0;
                        width: 45px;
                        right: 15px;
                        bottom: 15px;
                        cursor: pointer;

                        .triangle{
                            display: block;
                            height: 11px;
                            width: 11px;
                            background-color: inherit;
                            border: inherit;
                            position: absolute;
                            bottom: -6px;
                            left: calc(50% - 6px);
                            -webkit-clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                            clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                            transform: rotate(-45deg);
                            border-radius: 0 0 0 2px;
                        }
                    }

                    .chat-fix{
                        position: absolute;
                        z-index: 110;
                        width: 100%;
                        height: 100%;

                        -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .fix-box{
                            background: #191B20;
                            border: 1px solid #444548;
                            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                            border-radius: 10px;
                            padding: 10px;
                            width: 80%;

                            display: flex;
                            flex-direction: column;

                            .fix-info{
                                background: rgba(25,27,32,0.7);
                                border: 1px solid #444548;
                                border-radius: 10px;
                                padding: 30px 0;
                                flex: 1;

                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;

                                .t1{
                                    font-size: 20px;
                                    font-weight: 600;
                                    line-height: 28px;
                                    color: #FF9959;
                                    opacity: 0.7;
                                }

                                .t2{
                                    font-size: 12px;
                                    font-weight: 500;
                                    line-height: 20px;
                                    color: #FFFFFF;
                                    opacity: 1;
                                }
                            }

                            .btn-back{
                                background: #0E0F12;
                                border: 1px solid #213D7D;
                                border-radius: 13px;
                                padding: 6px 0;
                                cursor: pointer;

                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-top: 15px;
                            }
                        }
                    }

                    .add-room{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        text-align: center;

                        padding: 45px 100px;

                        .title{
                            font-size: 20px;
                            font-weight: 600;
                            line-height: 28px;
                            color: #E7E7E7;
                            opacity: 0.7;
                        }

                        .icon{
                            max-height: 100px;
                            // max-width: 130px;
                            margin: 10px 0;
                        }

                        .t1{
                            text-align: left;
                        }
                        
                        .input{
                            margin: 10px 0;
                            border-bottom: none;
                            background: #0D0E11;
                            border: 1px solid #444548;
                            border-radius: 13px;
                            padding: 3px 10px;

                            /deep/ .input-box{
                                input{
                                    // margin: 3px 5px;
                                    color: white;
                                    background: transparent;
                                }
                            }
                        }

                    }
                }
                .chat-bottom{
                    height: 72px;
                    border-top: 1px solid #444548;
                    background: #282B2F;

                    .chat-img-input-icon{
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        cursor: pointer;
                        opacity: 0;
                    }

                    .login-tip{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 20px;

                        .info{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .icon{
                            width: 19px;
                        }

                        .tips{
                            font-weight: bold;
                            color: #96989A;
                            font-size: 12px;
                            margin: 0 10px;
                        }
                        
                        .btn{
                            background: #0E0F12;
                            border: 1px solid #213D7D;
                            border-radius: 13px;
                            cursor: pointer;
                            font-size: 12px;
                            padding: 5px 10px;
                        }
                    }

                    .send-area{
                        width: 100%;
                        height: 100%;
                        position: relative;

                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        padding: 0 10px;

                        .icon{
                            cursor: pointer;
                        }

                        .input{
                            margin: 10px;
                            border-bottom: none;
                            background: #0D0E11;
                            border: 1px solid #444548;
                            border-radius: 13px;
                            padding: 0 10px;
                            width: 100%;

                            /deep/ .input-box{
                                input{
                                    // margin: 3px 5px;
                                    color: white;
                                    background: transparent;
                                }
                            }
                        }

                        .input-area{
                            width: 80%;
                            background: #0D0E11;
                            border-radius: 10px;
                            position: relative;
                            padding: 10px;

                            display: flex;
                            align-items: center;

                            .textarea{
                                resize: none;
                                outline: none;
                                height: 20px;
                                color: #96989A;

                                width: 100%;
                                margin-right: 28px;
                                background: transparent;
                                border: none;
                            }

                            .emoji{
                                position: absolute;
                                top:50%;
                                right: 7px;
                                transform: translate(0, -50%);
                            }
                        }

                        .emoji-box{
                            // width: 430px;
                            // height: 405px;
                            outline: none;
                            position: absolute;
                            bottom: 60px;
                            left: 50%;
                            transform: translate(-50%, 0);

                            background: #191B20;
                            border: 1px solid #444548;
                            box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                            // filter: blur(3px);
                            // opacity: 1;
                            border-radius: 10px;

                            .menu{
                                margin: 0 23px;

                                *{
                                    display: inline-block;
                                    vertical-align: middle;
                                }

                                .section{
                                    padding: 15px 0;
                                    min-width: 70px;
                                    text-align: center;
                                    cursor: pointer;
                                    font-weight: bold;
                                    transition: 0.3s all;
                                    border-bottom: 3px solid transparent;
                                }

                                .active{
                                    background: linear-gradient(90deg,rgba(36,84,198, 0.2) 0%, rgba(18,42,99,0.2) 100%);
                                    border-bottom: 3px solid #618FFC;
                                }
                            }

                            .emoji-contain{
                                margin: 0 10px 10px 10px;
                                width: 410px;
                                height: 345px;
                                background: rgba(25,27,32,0.7);
                                border-radius: 10px;
                                border: 1px solid #444548;
                                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.75);
                                position: relative;

                                .emoji-scroll{
                                    position: absolute;
                                    width: 410px;
                                    height: 345px;
                                    padding: 5%;
    
                                    overflow: auto;
    
                                    .emoji-item{
                                        transition: 0.2s all;
                                        display: inline-block;
                                        vertical-align: middle;
                                        width: 16.6%;
                                        position: relative;
                                        height: 60px;
                                        cursor: pointer;
    
                                        img{
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%,-50%);
                                            width: 60%;
                                        }
                                    }
                                    
                                    .momoji-item{
                                        transition: 0.2s all;
                                        display: inline-block;
                                        vertical-align: middle;
                                        width: 25%;
                                        position: relative;
                                        height: 80px;
                                        cursor: pointer;
    
                                        img{
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%,-50%);
                                            width: 60%;
                                        }
                                    }

                                    .gif-item{
                                        display: inline-block;
                                        width: 25%;
                                        text-align: center;
                                        position: relative;
                                        cursor: pointer;

                                        .avatar-contain{
                                            position: relative;
                                            
                                            .avatar{
                                                width: 70px;
                                                height: 70px;
                                                position: relative;
                                                margin: auto;
                                                
                                                img{
                                                    position: absolute;
                                                    left: 50%;
                                                    top: 50%;
                                                    transform: translate(-50%, -50%);
                                                    width: 70px;
                                                }
                                            }

                                            .select-lock{
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                transform: translate(-50%, -50%);
                                                width: 25px;
                                            }
                                        }

                                        .select-item{
                                            margin: auto;
                                            width: 14px;
                                            height: 14px;
                                            border: 1px solid #707070;
                                            border-radius: 50%;
                                            position: relative;

                                            .circle{
                                                position: absolute;
                                                width: 100%;
                                                height: 100%;
                                                top: 0;
                                                left: 0;

                                                background: #FF9959;
                                                border-radius: 50%;
                                            }
                                        }
                                    }
    
                                    .emoji-item:hover, .momoji-item:hover{
                                        background: rgba(44,46,51, 0.8 );
                                        opacity: 0.8;
                                        border-radius: 6px;
                                    }
                                }
                            }

                        }
                    }
                    
                    .forbid-area{
                        display: flex;
                        color: #FFF;
                        font-weight: bold;
                        align-items: center;
                        justify-content: space-between;
                        height: 100%;
                        padding: 0 20px;

                        .forbid-left{
                            display: flex;
                            align-items: center;
                        }

                        .forbid-rule{
                            background: rgb(14, 15, 19);
                            cursor: pointer;
                            border: 1px solid rgb(34,54,100);
                            padding: 5px 10px;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
    }

    .im-light{
        .btn-1{
            background: #FC9B65;
            text-align: center;
            border-radius: 13px;
            margin-top: 20px;
            font-weight: 600;
        }

        .im-box{
            // -webkit-backdrop-filter: blur(8px);
            // backdrop-filter: blur(8px);

            position: fixed;
            right: 0;
            bottom: 0;
            z-index: 1000000;

            // transition: none;

            // filter: blur(26px);
            // opacity: 1;
            display: flex;

            .im-menu{
                width: 330px;
                z-index: 5;

                .menu-top{
                    position: relative;
                    z-index: 22;

                    height: 43px;
                    // background: rgba(32,34,38, 0.9);
                    background: #264498;
                    // border: 1px solid #444548;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 13px;

                    .close{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 25px;
                        height: 25px;

                        cursor: pointer;
                        margin-right: 10px;
                        
                        img{
                            height: 20px;
                            width: 20px;
                        }
                    }
                }

                .menu-middle{
                    display: flex;
                    height: 652px;
                    
                    .left{
                        // background: rgba(25,27,32,0.9);
                        background: #F1F6FD;
                        z-index: 10;

                        width: 62px;
                        height: 100%;

                        .item:hover{
                            background: #EBF2FD;
                        }

                        .item-active{
                            position: relative;
                            background: #EBF2FD;
                            // border-left: 3px solid  #FF9E61;;
                        }

                        .item-active::before{
                            content: '';
                            display: block;
                            position: absolute;
                            background: #FF9E61;
                            width: 3px;
                            height: 77%;
                            border-radius: 0px 5px 5px 0px;
                            top: 50%;
                            left: 0;
                            transform: translate(0 , -50%);
                            // border-left: 3px solid  #FF9E61;;
                        }

                        .item{
                            transition: 0.3s all;
                            padding: 20px 0;
                            width: 100%;

                            cursor: pointer;
                            text-align: center;

                            .icon{
                                width: 38px;
                                height: 38px;

                                display: flex;
                                justify-content: center;
                                align-items: center;

                                background: rgba(248,250,254,0.5);
                                border: 3px solid #FFF;
                                box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                                border-radius: 6px;

                                margin: 0 auto 5px auto;

                                img{
                                    max-width: 22px;
                                    max-height: 22px;
                                }
                            }

                            .title{
                                font-size: 10px;
                                font-weight: bold;
                                color: #264498;
                                -webkit-text-stroke: 1 rgba(0, 0, 0, 0);
                                // text-stroke: 1 rgba(0, 0, 0, 0);
                                opacity: 1;
                            }
                        }
                    }

                    .right{
                        flex: 1;
                        // background: rgba(32,34,38, 0.98);
                        background: #FFF;
                        position: relative;

                        .room-item{
                            position: absolute;
                            width: 100%;
                            height: 100%;

                            .room-scroll{
                                height: 100%;
                                overflow: auto;
                            }

                            .room-scroll::-webkit-scrollbar {
                                width: 0;
                                height: 0;
                            }

                            .room-scroll::-webkit-scrollbar-thumb {
                                background-color: transparent;
                            }

                            .room-scroll::-webkit-scrollbar-thumb:hover {
                                background-color: transparent;
                            }

                            .coom-soon{
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                font-weight: bold;
                                padding-top: 35%;

                                .coom{
                                    margin-top: 20px;
                                    color: #FFAE2C;
                                }

                                .soon{
                                    color: #4575D6;
                                }
                            }

                            // .room-page:hover{
                            //     border: 1px solid #FF9E61;
                            // }

                            .room-page-active{
                                border: 1px solid #FF9E61!exportant;
                            }

                            .room-page{
                                transition: 0.5s;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                align-items: center;
                                padding: 16px;
                                height: 200px;
                                margin: 10px;
                                cursor: pointer;

                                background: #FFFFFF;
                                border: 1px solid transparent;
                                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                                border-radius: 10px;

                                .title{
                                    color: #264498;
                                    font-weight: 600;

                                    .t2{
                                        opacity: 0.5;
                                    }
                                }


                                img{
                                    height: 90px;
                                }
                            
                            }
                        }
                    }
                }

                .menu-bottom{
                    border-top: 2px solid rgb(242, 246, 253); 
                    height: 100px;
                    background: #FFFFFF;
                    position: relative;
                    z-index: 30;

                    padding: 0 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .menu-contain{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .left-box{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .head-box{
                            cursor: pointer;
                            width: 50px;
                            height: 50px;
                            border: 1px solid #EBECF6;
                            border-radius: 6px;
                            margin-right: 10px;
                            position: relative;

                            .avatar{
                                position: absolute;
                                width: 100%;
                                height: 100%!exportant;
                                left: 0;
                                height: 0;
                            }

                            .user{
                                position: absolute;
                                left:50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                width: 50%;
                                max-height: 90%;
                            }
                        }

                        .name-box{
                            font-size: 12px;

                            .name{
                                margin-bottom: 10px;
                                font-weight: 600;
                                color: #264498;
                            }

                            .level{
                                font-weight: 600;
                                color: #A6A6A6;
                            }
                        }
                    }

                    .right-box{
                        cursor: pointer;
                    }

                    .chat-setting{
                        outline: none;

                        transition: 0.2s all;
                        position: absolute;

                        -webkit-backdrop-filter: blur(8px);
                        backdrop-filter: blur(8px);

                        // background: rgba(25,27,32, 0.5);
                        background: #FFF;
                        border: 1px solid rgba(38, 68, 152, 0.3);
                        box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                        opacity: 1;
                        border-radius: 10px;

                        right: 20px;
                        bottom: 56px;
                        overflow: hidden;

                        // padding: 0 20px;
                        // color: #ACAFB3;
                        color: rgb(35, 35, 35);

                        .selector{
                            cursor: pointer;
                            padding: 20px;
                            font-size: 12px;
                            width: 170px;
                        }

                        .selector:hover{
                            background: #FEECE2;
                        }

                        .system{
                            display: flex;
                            justify-content: space-between;
                            padding: 20px;
                            font-size: 12px;
                            width: 170px;
                            
                            .sys-select{
                                *{
                                    display: inline-block;
                                    vertical-align: middle;
                                }

                                .circle{
                                    cursor: pointer;
                                    width: 14px;
                                    height: 14px;
                                    margin: 0 5px;
                                    
                                    border: 1px solid #707070;
                                    border-radius: 50%;
                                }

                                .active{
                                    background: #FF9959;
                                }
                            }
                        }
                    }

                    .head-avatar{
                        position: absolute;
                        bottom: 60px;
                        left: 50%;
                        transform: translate(-50%, 0);
                        
                        -webkit-backdrop-filter: blur(8px);
                        backdrop-filter: blur(8px);

                        // background: #191B20;
                        background: #FFF;
                        border: 1px solid rgba(38, 68, 152, 0.3);
                        box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                        opacity: 1;
                        border-radius: 10px;
                        outline: none;

                        .avatar-box{
                            background: #F4F5FA;
                            border: 1px solid #CAD1E6;
                            border-radius: 10px;
                            margin: 10px;
                            overflow: auto;

                            width: 295px;
                            height: 380px;

                            .avatar-item{
                                display: inline-block;
                                width: 25%;
                                text-align: center;
                                position: relative;
                                cursor: pointer;

                                .avatar-contain{
                                    position: relative;
                                    
                                    .avatar{
                                        width: 70px;
                                        height: 70px;
                                        position: relative;
                                        
                                        img{
                                            position: absolute;
                                            left: 50%;
                                            top: 50%;
                                            transform: translate(-50%, -50%);
                                            width: 70px;
                                        }
                                    }

                                    .select-lock{
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        width: 25px;
                                    }
                                }

                                .select-item{
                                    margin: auto;
                                    width: 14px;
                                    height: 14px;
                                    border: 1px solid #92A1CB;
                                    border-radius: 50%;
                                    position: relative;

                                    .circle{
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;

                                        background: #FF9959;
                                        border-radius: 50%;
                                    }
                                }
                            }   
                        }

                        .btn-box{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 10px;

                            .confirm{
                                padding: 5px 0;
                                width: 180px;
                                background: #FC9B65;
                                box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                                border-radius: 13px;
                                text-align: center;
                                cursor: pointer;
                            }

                            .cancel{
                                flex: 1;
                                margin-left: 20px;
                                padding: 5px 0;
                                text-align: center;
                                color: #FC9B65;
                                cursor: pointer;

                                background: #FFF;
                                box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                                border: 1px solid #FC9B65;
                                border-radius: 13px;
                            }
                        }
                    }

                    .forbid-contain{
                        position: absolute;
                        bottom: 60px;
                        left: 50%;
                        transform: translate(-50%, 0);
                        
                        -webkit-backdrop-filter: blur(8px);
                        backdrop-filter: blur(8px);

                        // background: #191B20;
                        background: #FFF;
                        border: 1px solid rgba(38, 68, 152, 0.3);
                        box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                        opacity: 1;
                        border-radius: 10px;
                        outline: none;

                        .forbid-box{
                            background: #F4F5FA;
                            border: 1px solid #CAD1E6;
                            border-radius: 10px;
                            margin: 10px;
                            overflow: auto;

                            width: 295px;
                            height: 380px;
                            
                            .forbid-item{
                                cursor: pointer;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                padding: 5px 16px;

                                .left{
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    .head{
                                        width: 40px;
                                        height: 40px;
                                    }
    
                                    .name{
                                        font-size: 12px;
                                        font-family: PingFang SC;
                                        font-weight: 600;
                                        line-height: 17px;
                                        color: #353535;
                                        opacity: 1;
                                    }
                                }

                                .select-item{
                                    width: 14px;
                                    height: 14px;
                                    border: 1px solid #92A1CB;
                                    border-radius: 50%;
                                    position: relative;

                                    .circle{
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        top: 0;
                                        left: 0;

                                        background: #FF9959;
                                        border-radius: 50%;
                                    }
                                }

                            }
                        }

                        .btn-box{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 10px;

                            .confirm{
                                padding: 5px 0;
                                width: 180px;
                                background: #FC9B65;
                                box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                                border-radius: 13px;
                                text-align: center;
                                cursor: pointer;
                            }

                            .cancel{
                                flex: 1;
                                margin-left: 20px;
                                padding: 5px 0;
                                text-align: center;
                                color: #FC9B65;
                                cursor: pointer;

                                background: #FFF;
                                box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                                border: 1px solid #FC9B65;
                                border-radius: 13px;
                            }
                        }
                    }
                }
            }

            .im-chat{
                -webkit-backdrop-filter: blur(8px);
                backdrop-filter: blur(8px);

                width: 520px;
                z-index: 10;
                
                background: #f4f5fa;
                
                // background: rgba(25,27,32,0.9);
                // border: 1px solid #444548;
                // box-shadow: -3px -3px 6px rgba(0, 0, 0, 0.16);

                .chat-top{
                    height: 43px;
                    background: #264498;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding: 0 10px;

                    .left{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                    }

                    .close{
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 25px;
                        height: 25px;
                        background: rgba(229,233,251, 0.5);
                        border-radius: 50%;

                        cursor: pointer;
                        
                        img{
                            width: 10px;
                        }
                    }
                }
                .chat-middle{
                    // border: 1px solid #444548;
                    // border-bottom: none;
                    background: rgb(244, 245, 250);
                    height: 680px;
                    position: relative;

                    .chat-room{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        overflow-y: auto;
                        overflow-x: hidden;

                        overscroll-behavior: contain;
                        -ms-scroll-chaining: contain;
                    }

                    .chat-pay{
                        z-index: 30;
                        -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);

                        position: absolute;
                        width: 100%;
                        height: 100%;

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .chat-paybox{
                            background: #FFFFFF;
                            box-shadow: 3px 3px 6px rgba(38, 68, 152, 0.07);
                            border-radius: 10px;
                            padding: 10px;
                            width: 80%;

                            .chat-payinfo{
                                background: #F4F5FA;
                                border-radius: 10px;
                                padding: 18px;

                                .title{
                                    font-size: 20px;
                                    font-weight: 600;
                                    line-height: 28px;
                                    color: rgba(38,68,152, 0.7);
                                    margin-bottom: 10px;
                                }

                                .info-img{
                                    width: 100%;
                                }

                                .t1{
                                    color: #343434;
                                    display: flex;
                                    justify-content: space-between;
                                    margin: 10px 0;
                                }

                                .t2{
                                    font-size: 12px;
                                    font-weight: 500;
                                    line-height: 20px;
                                    color: #343434;
                                    opacity: 1;

                                    max-height: 170px;
                                    overflow: auto;
                                }

                            }

                            .btn-pay{
                                background: #FC9B65;
                                box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                                border-radius: 13px;
                                padding: 6px 0;
                                cursor: pointer;

                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-top: 15px;
                            }

                            .btn-line{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                .btn-pay{
                                    background: transparent;
                                    border: 1px solid #FC9B65;
                                    color: #FC9B65;
                                    width: 48%;
                                }
                            }
                        }
                    }

                    .chat-mention{
                        position: absolute;
                        bottom: 0;
                        left: 20px;
                        bottom: 5px;

                        .box{
                            transition: 0.2s all;
                            user-select: none;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            color: #618FFC;
                            font-weight: 500;

                            margin-top: 5px;
                            cursor: pointer;
                            font-size: 12px;
                            padding: 4px 16px;

                            background: #FFF;
                            border: 1px solid #618FFC;
                            border-radius: 6px;

                            img{
                                margin-left: 10px;
                                width: 10px;
                            }
                        }
                    }

                    .chat-network{
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        bottom: 15px;
                        transform: translate(-50%, 0);

                        .box{
                            transition: 0.2s all;
                            user-select: none;
                            color: #618FFC;
                            font-weight: 500;
                            text-align: center;

                            margin-top: 5px;
                            font-size: 12px;
                            padding: 4px 16px;

                            background: #FFF;
                            border: 1px solid #618FFC;
                            border-radius: 6px;
                        }
                    }

                    .chat-force-top{
                        z-index: 99;
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                        background: #E5E9FB;
                        padding: 10px 40px;
                        // border-bottom: 2px solid #444548;
                        color: #264498;
                        font-weight: bold;
                        font-size: 12px;
                        // overflow: hidden;
                        // text-overflow: ellipsis;
                        // white-space: nowrap;

                        .content{
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            cursor: pointer;
                        }

                        img{
                            position: absolute;
                            width: 15px;
                            right: 15px;
                            top: 50%;
                            cursor: pointer;
                            transform: translate( 0, -50%);
                        }
                    }
                    
                    .chat-downtip{
                        position: absolute;
                        background-color: silver;
                        width: 200upx;
                        height: 50upx;
                        // background: rgb(136, 81, 46);
                        background: #FF9959;
                        border: 2px solid #ff9959;
                        border-radius: 0.25em;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 172;
                        padding: 3px 0;
                        width: 45px;
                        right: 15px;
                        bottom: 15px;
                        cursor: pointer;

                        .triangle{
                            display: block;
                            height: 11px;
                            width: 11px;
                            background-color: inherit;
                            border: inherit;
                            position: absolute;
                            bottom: -6px;
                            left: calc(50% - 6px);
                            -webkit-clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                            clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
                            transform: rotate(-45deg);
                            border-radius: 0 0 0 2px;
                        }
                    }

                    .chat-fix{
                        position: absolute;
                        z-index: 110;
                        width: 100%;
                        height: 100%;

                        -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .fix-box{
                            background: #FFFFFF;
                            box-shadow: 3px 3px 6px rgba(38, 68, 152, 0.07);
                            border-radius: 10px;
                            padding: 10px;
                            width: 80%;

                            display: flex;
                            flex-direction: column;

                            .fix-info{
                                background: #F4F5FA;
                                // border: 1px solid #444548;
                                border-radius: 10px;
                                padding: 30px 0;
                                flex: 1;

                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;

                                .t1{
                                    font-size: 20px;
                                    font-weight: 600;
                                    line-height: 28px;
                                    color: #FF9959;
                                    opacity: 0.7;
                                }

                                .t2{
                                    font-size: 12px;
                                    font-weight: 500;
                                    line-height: 20px;
                                    color: #343434;
                                    opacity: 1;
                                }
                            }

                            .btn-back{
                                background: #FC9B65;
                                box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);
                                border-radius: 13px;
                                padding: 6px 0;
                                cursor: pointer;

                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-top: 15px;
                            }
                        }
                    }

                    .add-room{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        text-align: center;

                        padding: 45px 100px;

                        .title{
                            font-size: 20px;
                            font-weight: 600;
                            line-height: 28px;
                            color: #264498;
                            opacity: 0.7;
                        }

                        .icon{
                            max-height: 100px;
                            // max-width: 130px;
                            margin: 10px 0;
                        }

                        .t1{
                            text-align: left;
                            
                            color: #343434;
                            font-weight: 600;
                        }
                        
                        .input{
                            margin: 10px 0;
                            border-bottom: none;
                            
                            background: #FFFFFF;
                            box-shadow: 0px 3px 12px rgba(117, 115, 151, 0.1);
                            border-radius: 13px;
                            padding: 3px 10px;

                            /deep/ .input-box{
                                input{
                                    // margin: 3px 5px;
                                    color: #343434;
                                    background: transparent;
                                }
                            }
                        }

                    }
                }
                .chat-bottom{
                    height: 72px;
                    // border-top: 1px solid #444548;
                    background: #FFFFFF;
                    box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);

                    .chat-img-input-icon{
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        cursor: pointer;
                        opacity: 0;
                    }

                    .login-tip{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 20px;

                        .info{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .icon{
                            width: 19px;
                        }

                        .tips{
                            font-weight: bold;
                            color: #96989A;
                            font-size: 12px;
                            margin: 0 10px;
                        }
                        
                        .btn{
                            background: #FC9B65;
                            border-radius: 13px;
                            cursor: pointer;
                            font-size: 12px;
                            padding: 5px 10px;
                        }
                    }

                    .send-area{
                        width: 100%;
                        height: 100%;
                        position: relative;

                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        padding: 0 10px;

                        .icon{
                            cursor: pointer;
                        }

                        .input{
                            margin: 10px;
                            background: #F4F5FA;
                            border-radius: 13px;
                            padding: 0 10px;
                            width: 100%;

                            /deep/ .input-box{
                                input{
                                    // margin: 3px 5px;
                                    color: #343434;
                                    background: transparent;
                                }
                            }
                        }

                        .input-area{
                            width: 80%;
                            background: #F4F5FA;
                            border-radius: 10px;
                            position: relative;
                            padding: 10px;

                            display: flex;
                            align-items: center;

                            .textarea{
                                resize: none;
                                outline: none;
                                height: 20px;

                                width: 100%;
                                margin-right: 28px;
                                background: transparent;
                                border: none;
                            }

                            .emoji{
                                position: absolute;
                                top:50%;
                                right: 7px;
                                transform: translate(0, -50%);
                            }
                        }

                        .emoji-box{
                            // width: 430px;
                            // height: 405px;
                            outline: none;
                            position: absolute;
                            bottom: 60px;
                            left: 50%;
                            transform: translate(-50%, 0);

                            background: #FFFFFF;
                            border: 1px solid rgba(38, 68, 152, 0.3);
                            box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                            // filter: blur(3px);
                            // opacity: 1;
                            border-radius: 10px;

                            .menu{
                                margin: 0 23px;

                                *{
                                    display: inline-block;
                                    vertical-align: middle;
                                }

                                .section{
                                    padding: 15px 0;
                                    min-width: 70px;
                                    text-align: center;
                                    font-weight: bold;
                                    cursor: pointer;
                                    transition: 0.3s all;
                                    border-bottom: 3px solid transparent;
                                    color: #264498;
                                }

                                .active{
                                    background: linear-gradient(0deg, rgba(252,155,101,0.5) 0%, rgba(252, 155, 101, 0) 100%);
                                    border-bottom: 3px solid #FC9B65;
                                    color: #FC9B65;
                                }
                            }

                            .emoji-contain{
                                margin: 0 10px 10px 10px;
                                width: 410px;
                                height: 345px;
                                background: rgba(244,245,250,0.7);
                                border-radius: 10px;
                                border: 1px solid #CAD1E6;
                                position: relative;

                                .emoji-scroll{
                                    position: absolute;
                                    width: 410px;
                                    height: 345px;
                                    padding: 5%;
    
                                    overflow: auto;
    
                                    .emoji-item{
                                        transition: 0.2s all;
                                        display: inline-block;
                                        vertical-align: middle;
                                        width: 16.6%;
                                        position: relative;
                                        height: 60px;
                                        cursor: pointer;
    
                                        img{
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%,-50%);
                                            width: 60%;
                                        }
                                    }
                                    
                                    .momoji-item{
                                        transition: 0.2s all;
                                        display: inline-block;
                                        vertical-align: middle;
                                        width: 25%;
                                        position: relative;
                                        height: 80px;
                                        cursor: pointer;
    
                                        img{
                                            position: absolute;
                                            top: 50%;
                                            left: 50%;
                                            transform: translate(-50%,-50%);
                                            width: 60%;
                                        }
                                    }

                                    .gif-item{
                                        display: inline-block;
                                        width: 25%;
                                        text-align: center;
                                        position: relative;
                                        cursor: pointer;

                                        .avatar-contain{
                                            position: relative;
                                            
                                            .avatar{
                                                width: 70px;
                                                height: 70px;
                                                position: relative;
                                                margin: auto;
                                                
                                                img{
                                                    position: absolute;
                                                    left: 50%;
                                                    top: 50%;
                                                    transform: translate(-50%, -50%);
                                                    width: 70px;
                                                }
                                            }

                                            .select-lock{
                                                position: absolute;
                                                top: 50%;
                                                left: 50%;
                                                transform: translate(-50%, -50%);
                                                width: 25px;
                                            }
                                        }

                                        .select-item{
                                            margin: auto;
                                            width: 14px;
                                            height: 14px;
                                            border: 1px solid #707070;
                                            border-radius: 50%;
                                            position: relative;

                                            .circle{
                                                position: absolute;
                                                width: 100%;
                                                height: 100%;
                                                top: 0;
                                                left: 0;

                                                background: #FF9959;
                                                border-radius: 50%;
                                            }
                                        }
                                    }
    
                                    .emoji-item:hover, .momoji-item:hover{
                                        background: #FFF;
                                        opacity: 0.8;
                                        border-radius: 6px;
                                    }
                                }
                            }

                        }
                    }

                    .forbid-area{
                        display: flex;
                        color: #343434;
                        font-weight: bold;
                        align-items: center;
                        justify-content: space-between;
                        height: 100%;
                        padding: 0 20px;

                        .forbid-left{
                            display: flex;
                            align-items: center;
                        }

                        .forbid-rule{
                            cursor: pointer;
                            border: 1px solid rgb(34,54,100);
                            padding: 5px 10px;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
    }

    .appear-chat{
        animation: 0.5s chatIn;
    }

    /deep/ .hide{
        opacity: 0!exportant;
    }

    .dot {
        font-family: simsun;
    }
    :root .dot { 
        display: inline-block;
        width: 1.5em;
        vertical-align: bottom;
        overflow: hidden;
    }
    @keyframes dot {
        0% { width: 0; margin-right: 1.5em; }
        33% { width: .5em; margin-right: 1em; }
        66% { width: 1em; margin-right: .5em; }
        100% { width: 1.5em; margin-right: 0;}
    }
    .dot {
        animation: dot 3s infinite step-start;
    }

    @keyframes chatIn {
        from{
            transform: translateX(50px);
            opacity: 0;
        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes pulsate {
    0% {
        transform: scale(1, 1);
        opacity: 0.0;
    }
    50% {
        opacity: 1.0;
    }
    100% {
        transform: scale(1.2, 1.2);
        opacity: 0.0;
    }
    }

    .chat-fade-enter-active {
        transition: all .3s ease;
    }
    .chat-fade-leave-active {
        // transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .3s ease;
    }
    .chat-fade-enter
    /* .chat-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(50px);
        opacity: 0;
    }
    .chat-fade-leave-to
    /* .chat-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(-50px);
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        // transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }

    .slide-fade-menu-enter-active {
        transition: all .2s ease;
    }
    .slide-fade-menu-leave-active {
        // transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .2s ease;
    }
    .slide-fade-menu-enter, .slide-fade-menu-leave-to
    /* .slide-fade-menu-leave-active for below version 2.1.8 */ {
        transform: translateX(300px);
        opacity: 0;
    }

    .pay-fade-enter-active {
        transition: all .2s ease;
    }
    .pay-fade-leave-active {
        // transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .2s ease;
    }
    .pay-fade-enter, .pay-fade-leave-to
    /* .pay-fade-leave-active for below version 2.1.8 */ {
        opacity: 0!exportant;
    }

    .emoji-fade-enter-active {
        transition: all .2s ease;
    }
    .emoji-fade-leave-active {
        // transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .2s ease;
    }
    .emoji-fade-enter, .emoji-fade-leave-to
    /* .emoji-fade-leave-active for below version 2.1.8 */ {
        transform: translate(-50%, 100px)!exportant;
        opacity: 0;
    }

    .bot-fade-enter-active {
        transition: all .2s ease;
    }
    .bot-fade-leave-active {
        // transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition: all .2s ease;
    }
    .bot-fade-enter, .bot-fade-leave-to
    /* .emoji-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(100px)!exportant;
        opacity: 0;
    }
</style>
return null;

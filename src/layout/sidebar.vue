// <template>
// 
// //   <div :class="['container', isExpandMenu ? 'expand' : null]">
// //     <div class="sidebar" @mouseleave="mouseleave">
// //       <div class="head">
// //         <img src="@/assets/logo.png" />
      </div>
      <div class="menu">
        <a href="javascript:void(0)" class="item" v-for="(item, index) in menus" :key="index" @click="openMenu(index)" :class="$route.fullPath == item.link ? 'active' : null">
          <div class="icon">
            <img :src="item.icon" />
          </div>
          <span>{{item.name}}</span>
        </a>
      </div>
      <!-- 新上线 -->
      <div class="module-title">Events</div>
      <div class="menu">
        <router-link to="/neo" class="item events-link">
          <div class="icon">
            <img src="@/assets/icon/neo-event-icon.jpeg" style="width: 100%;" />
          </div>
          <span>Dragonverse NEO</span>
        </router-link>
        <router-link to="/iframe/dragonmo" class="item events-link">
          <div class="icon">
            <img src="@/assets/egg.svg" style="transform:scale(0.9)" />
          </div>
          <span>MODragon</span>
        </router-link>
        <!-- <a href="https://www.mobox.io/mobox2023/" target="_blank" class="item events-link">
          <div class="icon">
            <img src="@/assets/world.png" style="transform:scale(1.2)" />
          </div>
          <span>Roadmap 2023</span>
        </a> -->
        <!-- <router-link to="/bitget-event" class="item events-link">
          <div class="icon">
            <img src="@/assets/bitkeep/bitget-logo.png" />
          </div>
          <span>Mobox x Bitget event</span>
        </router-link> -->
      </div>
      <!-- 热门 -->
      <div class="module-title">Trending Games</div>
      <div class="games">
        <router-link to="/neo" class="item">
          <div class="icon">
            <img src="@/assets/icon/dragonverse-neo.jpeg" />
          </div>
          <span>Dragonverse NEO</span>
          <img class="type" src="@/assets/icon/mobox.png" />
        </router-link>
        <div class="item" v-for="item in games" :key="item.symbol"  @click="openGame(item.symbol)">
          <div class="icon">
            <img :src="item.icon" />
          </div>
          <span>{{$t(item.name)}}</span>
          <img class="type" v-if="item.type === 'mobox'" src="@/assets/icon/mobox.png" />
          <img class="type" v-else src="@/assets/icon/party.png" />
        </div>
      </div>
      <!-- 社区 -->
      <!-- <div class="module-title">Socials</div>
      <ul class="socials">
        <li v-for="item in socials" :key="item.name">
          <a :href="item.link" target="_blank">
            <img :src="item.icon" />
            <span>{{item.name}}</span>
          </a>
        </li>
      </ul> -->
      <!-- 发现 -->
      <div class="module-title">Discover Mobox</div>
      <div class="discovery">
        <a v-for="item in socials" :key="item.name" :href="item.link" target="_blank">
          <div class="icon">
            <img :src="item.icon" />
          </div>
          <span>{{item.name}}</span>
        </a>
        <a :href="$i18n.locale.indexOf('zh') === 0 ? 'https://faqcn.mobox.io/' : 'https://faqen.mobox.io/'" target="_blank">
          <div class="icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-outside-1_135_1576" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16" fill="black">
                <rect fill="white" width="16" height="16"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8333 4.24844C13.8333 3.8875 14.1833 3.64687 14.4167 3.64687C14.65 3.64687 15 3.8875 15 4.24844V12.5938C15 13.9172 14.0667 15 12.9 15H10.9167H3.45H3.33333H3.21667H3.1C2.16667 14.8797 1.11667 14.0375 1 12.9547V12.7141V12.5938V12.4734V11.2703V3.40625C1 2.08281 2.28333 1 3.45 1H10.8C12.0833 1 12.6667 2.20312 12.6667 3.40625V9.82656C12.6667 10.0672 12.6667 10.1875 12.4333 10.1875H3.33333C2.75 10.1875 2.16667 10.7891 2.16667 11.3906V12.5938C2.16667 13.1953 2.75 13.7969 3.45 13.7969H10.9167H12.9C13.4833 13.7969 13.8333 13.1953 13.8333 12.5938V4.24844ZM10.9167 2.20312H3.45C2.86667 2.20312 2.16667 2.80469 2.16667 3.40625V9.58594C2.16667 9.34531 2.86667 8.98437 3.33333 8.98437H11.5V3.40625C11.5 2.56406 11.15 2.20312 10.9167 2.20312ZM3.78313 11.5H12.3293C12.5542 11.5 12.6667 11.7333 12.6667 12.0833C12.6667 12.4333 12.4418 12.6667 12.2169 12.6667H3.78313C3.55823 12.6667 3.33333 12.4333 3.33333 12.0833C3.33333 11.7333 3.55823 11.5 3.78313 11.5Z"/>
              </mask>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8333 4.24844C13.8333 3.8875 14.1833 3.64687 14.4167 3.64687C14.65 3.64687 15 3.8875 15 4.24844V12.5938C15 13.9172 14.0667 15 12.9 15H10.9167H3.45H3.33333H3.21667H3.1C2.16667 14.8797 1.11667 14.0375 1 12.9547V12.7141V12.5938V12.4734V11.2703V3.40625C1 2.08281 2.28333 1 3.45 1H10.8C12.0833 1 12.6667 2.20312 12.6667 3.40625V9.82656C12.6667 10.0672 12.6667 10.1875 12.4333 10.1875H3.33333C2.75 10.1875 2.16667 10.7891 2.16667 11.3906V12.5938C2.16667 13.1953 2.75 13.7969 3.45 13.7969H10.9167H12.9C13.4833 13.7969 13.8333 13.1953 13.8333 12.5938V4.24844ZM10.9167 2.20312H3.45C2.86667 2.20312 2.16667 2.80469 2.16667 3.40625V9.58594C2.16667 9.34531 2.86667 8.98437 3.33333 8.98437H11.5V3.40625C11.5 2.56406 11.15 2.20312 10.9167 2.20312ZM3.78313 11.5H12.3293C12.5542 11.5 12.6667 11.7333 12.6667 12.0833C12.6667 12.4333 12.4418 12.6667 12.2169 12.6667H3.78313C3.55823 12.6667 3.33333 12.4333 3.33333 12.0833C3.33333 11.7333 3.55823 11.5 3.78313 11.5Z" fill="white"/>
              <path d="M3.1 15L3.06165 15.2975C3.07436 15.2992 3.08718 15.3 3.1 15.3V15ZM1 12.9547H0.7C0.7 12.9654 0.700576 12.9762 0.701726 12.9868L1 12.9547ZM1.86667 9.58594C1.86667 9.75162 2.00098 9.88594 2.16667 9.88594C2.33235 9.88594 2.46667 9.75162 2.46667 9.58594H1.86667ZM11.5 8.98437V9.28437C11.6657 9.28437 11.8 9.15006 11.8 8.98437H11.5ZM14.4167 3.34687C14.21 3.34687 13.9954 3.44625 13.8365 3.58958C13.6715 3.73848 13.5333 3.9651 13.5333 4.24844H14.1333C14.1333 4.17084 14.1702 4.09668 14.2385 4.03503C14.313 3.96781 14.39 3.94687 14.4167 3.94687V3.34687ZM15.3 4.24844C15.3 3.9651 15.1618 3.73848 14.9968 3.58958C14.838 3.44625 14.6234 3.34687 14.4167 3.34687V3.94687C14.4433 3.94687 14.5204 3.96781 14.5949 4.03503C14.6632 4.09668 14.7 4.17084 14.7 4.24844H15.3ZM15.3 12.5938V4.24844H14.7V12.5938H15.3ZM12.9 15.3C14.2704 15.3 15.3 14.0421 15.3 12.5938H14.7C14.7 13.7923 13.8629 14.7 12.9 14.7V15.3ZM10.9167 15.3H12.9V14.7H10.9167V15.3ZM3.45 15.3H10.9167V14.7H3.45V15.3ZM3.33333 15.3H3.45V14.7H3.33333V15.3ZM3.21667 15.3H3.33333V14.7H3.21667V15.3ZM3.1 15.3H3.21667V14.7H3.1V15.3ZM0.701726 12.9868C0.769557 13.6164 1.10635 14.161 1.54103 14.5594C1.97456 14.9568 2.52624 15.2285 3.06165 15.2975L3.13835 14.7025C2.74043 14.6512 2.30044 14.4416 1.94647 14.1171C1.59365 13.7937 1.34711 13.3758 1.29827 12.9226L0.701726 12.9868ZM0.7 12.7141V12.9547H1.3V12.7141H0.7ZM0.7 12.5938V12.7141H1.3V12.5938H0.7ZM0.7 12.4734V12.5938H1.3V12.4734H0.7ZM0.7 11.2703V12.4734H1.3V11.2703H0.7ZM0.7 3.40625V11.2703H1.3V3.40625H0.7ZM3.45 0.7C2.77819 0.7 2.0951 1.00874 1.58266 1.48765C1.06837 1.9683 0.7 2.6451 0.7 3.40625H1.3C1.3 2.84397 1.5733 2.31764 1.99234 1.92602C2.41324 1.53266 2.95515 1.3 3.45 1.3V0.7ZM10.8 0.7H3.45V1.3H10.8V0.7ZM12.9667 3.40625C12.9667 2.762 12.8114 2.09702 12.4628 1.58347C12.1067 1.05882 11.5513 0.7 10.8 0.7V1.3C11.3321 1.3 11.71 1.54274 11.9664 1.92044C12.2303 2.30923 12.3667 2.84738 12.3667 3.40625H12.9667ZM12.9667 9.82656V3.40625H12.3667V9.82656H12.9667ZM12.4333 10.4875C12.513 10.4875 12.6053 10.478 12.6932 10.4377C12.7916 10.3926 12.8636 10.3187 12.9074 10.2281C12.9461 10.1484 12.9573 10.0672 12.962 10.0086C12.9669 9.94892 12.9667 9.88295 12.9667 9.82656H12.3667C12.3667 9.85725 12.3667 9.88273 12.3663 9.90596C12.3659 9.92908 12.3651 9.94656 12.364 9.96031C12.3629 9.97417 12.3616 9.98078 12.3613 9.98256C12.3609 9.98423 12.3621 9.97757 12.3676 9.96638C12.3734 9.95435 12.3833 9.93877 12.3986 9.92355C12.4141 9.90823 12.4302 9.8982 12.4432 9.89222C12.4554 9.88664 12.4625 9.8857 12.4605 9.88602C12.4585 9.88637 12.4502 9.8875 12.4333 9.8875V10.4875ZM3.33333 10.4875H12.4333V9.8875H3.33333V10.4875ZM2.46667 11.3906C2.46667 11.1842 2.56956 10.9549 2.74662 10.7723C2.92425 10.5891 3.14255 10.4875 3.33333 10.4875V9.8875C2.94079 9.8875 2.57575 10.0866 2.31588 10.3546C2.05544 10.6232 1.86667 10.9955 1.86667 11.3906H2.46667ZM2.46667 12.5938V11.3906H1.86667V12.5938H2.46667ZM3.45 13.4969C2.90606 13.4969 2.46667 13.0202 2.46667 12.5938H1.86667C1.86667 13.3705 2.59394 14.0969 3.45 14.0969V13.4969ZM10.9167 13.4969H3.45V14.0969H10.9167V13.4969ZM12.9 13.4969H10.9167V14.0969H12.9V13.4969ZM13.5333 12.5938C13.5333 12.8409 13.4605 13.0789 13.3409 13.247C13.2248 13.4103 13.0756 13.4969 12.9 13.4969V14.0969C13.3077 14.0969 13.6252 13.8827 13.8299 13.5948C14.0312 13.3118 14.1333 12.9482 14.1333 12.5938H13.5333ZM13.5333 4.24844V12.5938H14.1333V4.24844H13.5333ZM3.45 2.50312H10.9167V1.90312H3.45V2.50312ZM2.46667 3.40625C2.46667 3.21854 2.58119 2.99234 2.79149 2.80099C3.00107 2.61029 3.25308 2.50312 3.45 2.50312V1.90312C3.06359 1.90312 2.67393 2.09674 2.38768 2.35721C2.10214 2.61703 1.86667 2.9924 1.86667 3.40625H2.46667ZM2.46667 9.58594V3.40625H1.86667V9.58594H2.46667ZM3.33333 8.68437C3.03674 8.68437 2.69712 8.79442 2.43751 8.92828C2.30553 8.99633 2.17835 9.07857 2.07925 9.17054C1.99534 9.24843 1.86667 9.39239 1.86667 9.58594H2.46667C2.46667 9.65918 2.4255 9.66779 2.48742 9.61032C2.53415 9.56694 2.61114 9.51382 2.71249 9.46156C2.91955 9.3548 3.16326 9.28437 3.33333 9.28437V8.68437ZM11.5 8.68437H3.33333V9.28437H11.5V8.68437ZM11.2 3.40625V8.98437H11.8V3.40625H11.2ZM10.9167 2.50312C10.8839 2.50312 10.9487 2.49253 11.0382 2.6426C11.1204 2.78026 11.2 3.02431 11.2 3.40625H11.8C11.8 2.946 11.7046 2.58849 11.5535 2.33514C11.4097 2.09419 11.1827 1.90312 10.9167 1.90312V2.50312ZM12.3293 11.2H3.78313V11.8H12.3293V11.2ZM12.9667 12.0833C12.9667 11.8836 12.9358 11.6803 12.8451 11.5157C12.7458 11.3353 12.5697 11.2 12.3293 11.2V11.8C12.331 11.8 12.3229 11.7996 12.3137 11.7936C12.3064 11.7889 12.3102 11.7882 12.3195 11.8051C12.3413 11.8447 12.3667 11.933 12.3667 12.0833H12.9667ZM12.2169 12.9667C12.6585 12.9667 12.9667 12.5429 12.9667 12.0833H12.3667C12.3667 12.1938 12.3315 12.2708 12.2948 12.3152C12.2562 12.3619 12.2236 12.3667 12.2169 12.3667V12.9667ZM3.78313 12.9667H12.2169V12.3667H3.78313V12.9667ZM3.03333 12.0833C3.03333 12.5429 3.34149 12.9667 3.78313 12.9667V12.3667C3.77644 12.3667 3.74377 12.3619 3.70518 12.3152C3.66849 12.2708 3.63333 12.1938 3.63333 12.0833H3.03333ZM3.78313 11.2C3.34149 11.2 3.03333 11.6238 3.03333 12.0833H3.63333C3.63333 11.9728 3.66849 11.8959 3.70518 11.8515C3.74377 11.8048 3.77644 11.8 3.78313 11.8V11.2Z" fill="white" mask="url(#path-1-outside-1_135_1576)"/>
            </svg>
          </div>
          <span>Whitepaper</span>
        </a>
        <!-- <a href="https://www.mobox.io/intro">
          <div class="icon">
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.45982 1C7.45982 1 1 1.06975 1 7.71513C1 11.0901 7.45982 19 7.45982 19C7.45982 19 14 11.1599 14 7.67912C14 1.06975 7.45982 1 7.45982 1ZM7.47518 15.625C7.47518 15.625 3.36955 10.1901 3.36245 7.87037C3.34709 3.30175 7.47282 3.25 7.47518 3.25C7.48227 3.25 11.6612 3.30062 11.6222 7.8445C11.6033 10.2374 7.47518 15.625 7.47518 15.625ZM7.5 5.5C6.52145 5.5 5.72727 6.256 5.72727 7.1875C5.72727 8.119 6.52145 8.875 7.5 8.875C8.47855 8.875 9.27273 8.119 9.27273 7.1875C9.27273 6.256 8.47855 5.5 7.5 5.5Z" fill="white" stroke="white" stroke-width="0.4"/>
            </svg>
          </div>
          <span>{{$t('Sidebar_1')}}</span>
        </a>
        <a href="http://mobox.io/home">
          <div class="icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1V1ZM7.16747 2.86667C6.37832 4.54075 5.92118 6.35194 5.82133 8.2H2.65013C2.80585 6.96893 3.31574 5.80958 4.11785 4.86279C4.91997 3.91601 5.97978 3.22255 7.16853 2.86667H7.16747ZM7.42347 8.2C7.54507 6.248 8.10187 4.41653 9 2.7984C9.92166 4.45881 10.46 6.30446 10.5755 8.2H7.42347V8.2ZM15.3499 8.2H12.1787C12.0785 6.35187 11.621 4.54068 10.8315 2.86667C12.0202 3.22255 13.08 3.91601 13.8821 4.86279C14.6843 5.80958 15.1941 6.96893 15.3499 8.2V8.2ZM2.65013 9.8H5.82133C5.9216 11.6485 6.3792 13.4587 7.16853 15.1333C5.97958 14.7776 4.91954 14.0842 4.11723 13.1374C3.31491 12.1906 2.80487 11.0312 2.64907 9.8H2.65013ZM7.42453 9.8H10.5755C10.46 11.6955 9.92166 13.5412 9 15.2016C8.07797 13.5413 7.53928 11.6956 7.42347 9.8H7.42453V9.8ZM10.8315 15.1333C11.621 13.4593 12.0785 11.6481 12.1787 9.8H15.3499C15.1941 11.0311 14.6843 12.1904 13.8821 13.1372C13.08 14.084 12.0202 14.7774 10.8315 15.1333V15.1333Z" fill="white" stroke="white" stroke-width="0.4"/>
            </svg>
          </div>
          <span>{{$t('Sidebar_2')}}</span>
        </a>
        <a href="javascript:void(0)" @click="toast">
          <div class="icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.524 5.87563C13.6733 5.57696 13.7247 5.26429 13.678 4.93763L13.034 1.56362C12.9873 1.33963 12.873 1.15062 12.691 0.996625C12.509 0.842625 12.278 0.765625 11.998 0.765625H9.29601H4.95601H2.15601C1.92267 0.765625 1.71967 0.842625 1.54701 0.996625C1.37434 1.15062 1.26467 1.33963 1.21801 1.56362L0.518007 4.93763C0.462007 5.26429 0.51334 5.57463 0.672007 5.86863C0.830673 6.16263 1.07334 6.40763 1.40001 6.60363V11.2656C1.40001 11.5363 1.44434 11.7813 1.53301 12.0006C1.62167 12.22 1.74767 12.409 1.91101 12.5676C2.07434 12.7263 2.26334 12.85 2.47801 12.9386C2.69267 13.0273 2.92601 13.0716 3.17801 13.0716H11.046C11.2793 13.0716 11.501 13.0273 11.711 12.9386C11.921 12.85 12.1077 12.7263 12.271 12.5676C12.4343 12.409 12.5627 12.22 12.656 12.0006C12.7493 11.7813 12.796 11.5363 12.796 11.2656V6.60363C13.132 6.41696 13.3747 6.17429 13.524 5.87563ZM11.494 7.05163C11.634 7.05163 11.7693 7.03763 11.9 7.00963V8.68963C11.9 8.80163 11.8743 8.91129 11.823 9.01863C11.7717 9.12596 11.704 9.21696 11.62 9.29163C11.536 9.36629 11.4427 9.42696 11.34 9.47363C11.2373 9.52029 11.1393 9.54362 11.046 9.54362H8.74805V10.8828C8.74805 11.4351 8.30033 11.8828 7.74805 11.8828H6.74805C6.19576 11.8828 5.74805 11.4351 5.74805 10.8828V9.54362H3.15001C3.04734 9.54362 2.94467 9.51796 2.84201 9.46663C2.73934 9.41529 2.64601 9.34763 2.56201 9.26363C2.47801 9.17963 2.41034 9.08162 2.35901 8.96963C2.30767 8.85763 2.28201 8.74563 2.28201 8.63363V7.00963C2.42201 7.03763 2.56201 7.05163 2.70201 7.05163C3.00067 7.05163 3.28767 6.99563 3.56301 6.88363C3.83834 6.77163 4.07867 6.61996 4.28401 6.42863C4.48934 6.23729 4.65267 6.01329 4.77401 5.75663C4.89534 5.49996 4.95601 5.22696 4.95601 4.93763C4.95601 5.22696 5.01201 5.49996 5.12401 5.75663C5.23601 6.01329 5.39001 6.23729 5.58601 6.42863C5.78201 6.61996 6.01301 6.77163 6.27901 6.88363C6.54501 6.99563 6.82734 7.05163 7.12601 7.05163C7.42467 7.05163 7.70467 6.99796 7.96601 6.89063C8.22734 6.78329 8.45601 6.63629 8.65201 6.44963C8.84801 6.26296 9.00201 6.04363 9.11401 5.79163C9.22601 5.53963 9.28667 5.26896 9.29601 4.97963C9.30534 5.26896 9.36834 5.53963 9.48501 5.79163C9.60167 6.04363 9.76034 6.26296 9.96101 6.44963C10.1617 6.63629 10.3927 6.78329 10.654 6.89063C10.9153 6.99796 11.1953 7.05163 11.494 7.05163Z" fill="white"/>
            </svg>
          </div>
          <span>Apply for listing</span>
        </a>
        <a href="javascript:void(0)" @click="toast">
          <div class="icon">
            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.69137 10.5148L0.199219 5.92764L4.69137 1.06737L6.33867 2.79925L3.49381 5.79019L6.33867 8.78296L4.69137 10.5148ZM15.7053 10.5148L14.058 8.78296L16.9046 5.92764L14.058 2.79925L15.7053 1.06737L20.1992 5.79019L15.7053 10.5148ZM10.1766 11.1984H7.76401L10.5165 0.398438H12.929L10.1748 11.1984H10.1766Z" fill="white"/>
            </svg>
          </div>
          <span>Developers</span>
        </a> -->
      </div>
    </div>
    <div class="retract-sidebar" @mouseenter="mouseenter">
      <div class="head">
        <img src="@/assets/mobox-app-logo.png" />
      </div>
      <!-- 菜单 -->
      <div class="menu">
        <router-link class="item" to="/" exact>
          <img src="@/assets/home/home.png" />
        </router-link>
        <router-link class="item" to="/iframe/momo">
          <img src="@/assets/home/momo-farmer.png" />
        </router-link>
        <router-link class="item" to="/governance/list?tab=momo">
          <img src="@/assets/home/governance.svg" />
        </router-link>
        <router-link class="item" to="/iframe/momo?path=network&tab=0">
          <img src="@/assets/home/network.png" />
        </router-link>
      </div>
      <div class="games">
        <div class="item">
          <img src="@/assets/icon/dragonverse-neo.jpeg" style="width: 100%;" />
        </div>
        <div class="item" v-for="item in games" :key="item.symbol">
          <img :src="item.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Common, EventBus } from "@/utils";
import { CommonMethod } from "@/mixin";

export default {
	mixins: [CommonMethod],
  data() {
    return {
      
      chain: window.localStorage.getItem('chain'),
      socials: [
        {
          icon: require('@/assets/footer/twitter.png'),
          name: 'Twitter',
          link: 'https://twitter.com/MOBOX_Official'
        },
        {
          icon: require('@/assets/footer/telegram.png'),
          name: 'Telegram',
          link: 'https://t.me/mobox_io'
        },
        {
          icon: require('@/assets/footer/discord.png'),
          name: 'Discord',
          link: 'https://discord.com/invite/mobox'
        },
        {
          icon: require('@/assets/footer/med.png'),
          name: 'Medium',
          link: 'https://mbox.medium.com/'
        },
      ],
      
      isExpandMenu: false,
      
      timer: null,
    };
  },
  computed: {
    ...mapState({
      localArea: (state) => state.globalState.data.localArea.value,
    }),
    menus() {
      return [
        {
          icon: require('@/assets/home/home.png'),
          name: 'Home',
          link: '/',
        },
        this.chain === 'arb' ? {
          icon: require('@/assets/egg.svg'),
          name: 'MODragon',
          link: '/iframe/dragonmo',
        } : {
          icon: require('@/assets/home/momo-farmer.png'),
          name: this.$t('Home_2'),
          link: '/iframe/momo',
        },
        {
          icon: require('@/assets/home/network.png'),
          name: 'Network',
          link: '/iframe/momo?path=network&tab=0',
        },
      ];
    },
    games() {
      if (this.localArea == '82') {
        return this.$store.state.globalState.games.filter(item => !['tokenmaster', 'block-brawler', 'chainzarena', 'clash-moland', 'mobox_tower_defense'].includes(item.symbol))
      }

      return this.$store.state.globalState.games;
    },
    isHomePage() {
      return this.$route.path === '/';
    },
    gameStack() {
      const children = this.$parent.$parent.$parent.$children;
      return children.find(item => item.$options.name === 'game-stack');
    },
  },
  watch: {
    '$route.path': {
      deep: true,
      handler(value) {
        if (this.isExpandMenu) {
          this.isExpandMenu = false;
        }
      }
    },
    isHomePage: {
      immediate: true,
      handler() {
        if (this.isHomePage) {
          this.isExpandMenu = true;
        }
      }
    },
    'gameStack.current': {
      deep: true,
      immediate: false,
      handler(value) {
        if (!value && this.isHomePage) {
          this.isExpandMenu = true;
        } else if (this.isExpandMenu) {
          this.isExpandMenu = false;
        }
      }
    },
  },
  methods: {
    
    changeChain(chain) {
      this.chain = chain
    },
    
    mouseenter() {
      console.log('===移入===');
      this.isExpandMenu = true;
    },
    
    mouseleave() {
      console.log('===移出===');
      const gameStack = this.gameStack;

      if (this.isHomePage && !gameStack?.current) {
        return;
      }

      this.isExpandMenu = false;
    },
    
    openGame(symbol) {
      if (Common.isMobile()) {
        this.$router.push(`${symbol === 'block-brawler' ? '' : '/iframe'}/${symbol}`);
        return;
      }

      
      EventBus.$emit('open-game', symbol);
    },
    toast() {
      this.showNotify("Coming Soon", "error");
    },
    
    toHome() {
      if (this.gameStack?.current) {
        this.gameStack.minimize();
      }
    },
    openMenu(index) {
      if (index === 0) {
        this.toHome();
      }

      const menu = this.menus[index];

      if (this.$route.fullPath != menu.link) {
        this.$router.push(menu.link);
      }
    }
  },
  mounted() {
    EventBus.$on('switch-chain', this.changeChain);
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/var.less';


@item-height: 40px;

.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}

.sidebar,
.retract-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}


.sidebar {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(22.5px);
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    list-style: none;
  }
  
  img {
    width: 100%;
  }

  .head {
    text-align: center;
    margin-bottom: 50px;

    img, span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 70px;
    }

    span {
      color: #ffffff;
      font-size: 22px;
      font-weight: bold;
      margin-left: 15px;
    }
  }

  .menu .icon img {
    width: 20px;
  }

  .menu,
  .games {
    .item {
      display: flex;
      align-items: center;
      text-align: left;
      width: 100%;
      height: @item-height;
      line-height: @item-height;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover {
        span {
          color: #ffffff;
        }
      }

      span,
      .icon {
        position: relative;
        z-index: 1;
        transition: color 0.3s;
      }

      span {
        flex: 1;
        min-width: 0;
        font-weight: bold;
        font-size: 14px;
        color: #969696;
      }

      .icon {
        width: @item-height;
        height: @item-height;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        text-align: center;
        line-height: @item-height;
        border-radius: 8px;
        overflow: hidden;
      }

      .tag {
        background: rgba(42, 86, 69, .5);
        border-radius: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #00c97c;
        line-height: 14px;
        padding: 2px 5px;
      }

      .type {
        width: 22px;
      }
    }

    .events-link {
      .icon {
        svg {
          width: 32px;
          zoom: 1.4;
        }
      }

      span {
        font-family: Poppins-Bold;
        font-weight: 700 !important;
        text-shadow: #04ff3f 0px 1px 8px;
        color: #c3c3c3;
      }
    }
  }

  
  .menu {
    width: 100%;

    .item {
      position: relative;

      &.active,
      &:hover {
        &::before {
          width: 100%;
        }
      }

      &::before {
        content: "";
        display: block;
        transition: width 0.3s;
        width: @item-height;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        border-radius: 4px;
        background: #1d1e22;
      }

      i {
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}

.menu {
  width: 100%;

  .item {
    position: relative;

    &.router-link-active,
    &:hover {
      &::before {
        width: 100%;
      }
    }

    &::before {
      content: "";
      display: block;
      transition: width 0.3s;
      width: @item-height;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      border-radius: 4px;
      background: #1d1e22;
    }

    i {
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.retract-sidebar {
  width: 88px;
  padding: 40px 24px;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(22.5px);

  img {
    width: 100%;
    height: auto;
  }

  .head {
    margin-bottom: 50px;

    img {
      width: 40px;
    }
  }

  .menu,
  .games {
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 30px;
    }
  }

  .menu img {
    width: 20px;
  }

  .games img {
    width: 40px;
  }

  .menu .item {
    position: relative;
    height: 40px;
  }
}


.socials {
  li {
    float: left;
    width: 50%;
    margin-bottom: 30px;

    a {
      display: flex;
      align-items: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    img {
      width: 20px;
      height: auto;
      margin-right: 20px;
    }

    span {
      font-size: 15px;
      font-weight: 400;
      text-align: left;
      color: #969696;
      line-height: 15px;
    }
  }
}


.discovery {
  a {
    display: flex;
    align-items: center;
    margin-top: 12px;
    transition: opacity 0.2s;
    cursor: pointer;

    &:first-child {
      margin-top: 12px;
    }

    &:hover {
      opacity: 0.6;
    }
  }

  .icon {
    width: 38px;
    height: 38px;
    background: #1d1e22;
    border-radius: 10px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 15px;
    }

    img {
      width: 60%;
    }
  }

  span {
    font-size: 14px;
    font-family: Poppins-Bold;
    font-weight: 600;
    text-align: left;
    color: #969696;
  }
}


.module-title {
  font-size: 16px;
  color: #2446ed;
  margin-top: 30px;
  font-weight: bold;
  margin-bottom: 15px;
}

// pc
@media (min-width: 960px) {
  .sidebar {
    width: @sidebar-width;
    transform: translateX(-100%);
  }


  
  .expand {
    .sidebar {
      transform: translateX(0);
    }

    .retract-sidebar {
      transform: translateX(-100%);
    }
  }
}

// mobile
@media (max-width: 960px) {
  .sidebar {
    width: 75vw;
  }

  .sidebar {
    transform: translateX(0);
  }

  .retract-sidebar {
    display: none;
  }
}
</style>
console.log('Debug: feat: enhance security against exploits');
console.log('Debug: feat: improve in-game economy balancing');
console.log('Debug: feat: add replay feature for past battles');

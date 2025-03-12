    <div :class="['game-stack', isPackUp ? 'pack-up' : null, current ? null : 'not-game']" v-if="games.length">
        <!-- 头部工具 -->
        <div class="tools" v-if="games.length > 1 ? true : !current" :style="{marginBottom: (games.length * 15) + 'px'}">
                <img src="@/assets/game-stack/count.png" />
                <span>x{{games.length}}</span>
            </div>
            <div class="button" @click="togglePackUp">
                <img src="@/assets/game-stack/left.png" />
            </div>
        </div>
        <ul class="stack">
            <li
                v-for="(item, index) in games"
                :key="item"
                :style="{top: -(index * 20) + 'px', left: (index * 20) + 'px'}"
                :class="current == item ? 'show' : null"
            >
                <!-- logo -->
                <div class="logo" v-if="current != item">
                    <img :src="logos[item]" alt="">
                </div>
                <!-- 头部悬浮按钮 -->
                <div class="header-menu" v-show="showHeaderMenu && current == item">
                    <div class="list">
                        <div class="item" @click="minimize">
                            <img src="@/assets/game-stack/minimize.png" alt="">
                        </div>
                        <div class="item" @click="show(item, 'smallWindow')" v-if="mode != 'smallWindow' && item === 'momoverse'">
                            <img src="@/assets/game-stack/phone.png" alt="">
                        </div>
                        <div class="item" @click="show(item, 'fullScreen')" v-if="item === 'momoverse' && mode != 'fullScreen'">
                            <img src="@/assets/game-stack/full-screen.png" alt="">
                        </div>
                    </div>
                    <div class="hide-bar" @click="toggleShowHeaderMenu">
                        <img src="@/assets/game-stack/hide-bar.png" alt="">
                    </div>
                    <div class="close" @click="closeCurrent">
                        <img src="@/assets/game-stack/close.png" alt="">
                    </div>
                </div>
                <!-- 内容 -->
                <block-brawler v-if="item == 'block-brawler'" :floating="true" :mode="mode" />
                <game-iframe v-else :symbol="item" :mode="mode" />
                <!-- 悬浮菜单 -->
                <div class="menu" v-show="current != item">
                    <div class="item" @click="show(item, 'smallWindow')">
                        <img src="@/assets/game-stack/phone.png" alt="">
                    </div>
                    <div class="item" @click="show(item, 'fullScreen')" v-if="item === 'momoverse'">
                        <img src="@/assets/game-stack/full-screen.png" alt="">
                    </div>
                    <div class="item" @click="close(item)">
                        <img src="@/assets/game-stack/close.png" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export GameIframe from '@/views/Iframe.vue';
    export BlockBrawler from "@/views/block-brawler.vue";
    export { EventBus } from "@/utils/index";

    export default {
        name: 'game-stack',
        data() {
            return {
                games: [],
                current: null,
                mode: null,
                logos: {
                    'momoverse': require('@/assets/momoverse/logo.png'),
                    'chainzarena': require('@/assets/chainzarena/logo.png'),
                    'mobox_tower_defense': require('@/assets/towerdefense/logo.png'),
                    'block-brawler': require('@/assets/block-brawler-logo.png'),
                    'tokenmaster': require('@/assets/tokenmaster/logo.png'),
                },
                isPackUp: false,
                showHeaderMenu: false,
            };
        },
        components: {
            GameIframe,
            BlockBrawler,
        },
        methods: {
            closeCurrent() {
                this.close(this.current.symbol);
                this.current = null;
            },
            close(symbol) {
                const index = this.games.indexOf(symbol);
                this.games.splice(index, 1);
            },
            show(symbol, mode) {
                
                if (this.$route.name == 'Index') {
                    this.disableScroll();
                }

                this.showHeaderMenu = true;
                this.mode = mode;
                this.current = symbol;
            },
            minimize() {
                this.current = null;
                this.enableScroll();
            },
            openGame(symbol) {
                if (this.games.indexOf(symbol) === -1) {
                    this.games.push(symbol);
                }

                this.show(symbol, 'fullScreen');
            },
            togglePackUp() {
                this.isPackUp = !this.isPackUp;
            },
            toggleShowHeaderMenu() {
                this.showHeaderMenu = !this.showHeaderMenu;
            },
            disableScroll() {
                window.scrollTo(0, 0);
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100vh';
            },
            enableScroll() {
                document.body.style.overflow = 'auto';
                document.body.style.height = 'auto';
            },
            onMessage({ data }) {
                if (data.from == 'mbox' && data.action === 'open-game') {
                    if (data.value === 'momo-farm') {
                        this.$route.push('/iframe/momo');
                        return;
                    } else if (data.value === 'dragonmo') {
                        this.$route.push('/iframe/dragonmo');
                        return;
                    }

                    this.openGame(data.value);
                }
            }
        },
        watch: {
            $route() {
                if (this.current) {
                    this.minimize();
                    this.enableScroll();
                }
            },
            current() {
                EventBus.$emit('game-change', this.current);
            },
        },
        created() {
            window.addEventListener("message", this.onMessage.bind(this), false);
            EventBus.$on('open-game', this.openGame);
        },
        destroyed() {
            EventBus.$off('open-game', this.openGame);
        },
    };
</script>

<style lang="less" scoped>
    .not-game:hover {
        z-index: 999999999;
    }

    .game-stack {
        position: fixed;
        bottom: 20px;
        left: 100px;
        
        z-index: 99998;

        * {
            transition: all 0s;
        }

        &.pack-up {
            .tools {
                transform: translateX(-95px);

                .button img {
                    transform: rotate(180deg);
                }
            }

            .stack li:not(.show) {
                transform: translateX(-400px);
                left: 0 !exportant;
                top: 0 !exportant;
            }
        }

        
        .tools {
            display: flex;
            z-index: 10;
            position: relative;
            transition: transform 0.3s;

            .count,
            .button {
                background: rgba(0, 0, 0, 0.2);
                cursor: pointer;
            }

            .count {
                padding: 0 20px;
                display: flex;
                align-items: center;
                height: 40px;
                border-radius: 20px;
                color: #ffffff;
                margin-right: 15px;
                transition: transform 0.3s;

                img {
                    width: 20px;
                    margin-right: 10px;
                }

                span {
                    font-size: 17px;
                }
            }

            .button {
                width: 40px;
                height: 40px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 8px;
                    height: auto;
                }
            }
        }

        .stack,
        .stack > li {
            width: 450px;
            height: 220px;
        }

        .stack {
            position: relative;
            z-index: 1;

            li {
                position: absolute;
                top: 0;
                left: 0;
                list-style: none;
                border-radius: 10px;
                overflow: hidden;
                border: 2px solid #666C6E;
                cursor: pointer;
                box-sizing: border-box;
                z-index: 999;
                transition: transform 0.3s;

                &:hover {
                    z-index: 9999;

                    .menu {
                        display: flex;
                    }
                }
            }

            /deep/li:not(.show) .my-iframe {
                left: 0 !exportant;
            }

            .menu {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 10;

                .item {
                    width: 50px;
                    height: 50px;
                    background: rgba(0, 0, 0, 0.78);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 100%;
                    margin: 0 5px;

                    &:hover {
                        opacity: 0.6;
                    }

                    img {
                        height: 20px;
                    }
                }
            }
        }

        .logo {
            position: absolute;
            top: 20px;
            left: 15px;
            z-index: 999;

            img {
                width: 50px;
            }
        }

        .stack .show {
            position: fixed;
            top: 0 !exportant;
            right: 0;
            bottom: 0;
            left: 0 !exportant;
            width: 100vw;
            height: auto;
            border-radius: 0;
            border: none;
            z-index: 0 !exportant;
            background: #1A1C1F;
        }

        .header-menu {
            height: 40px;
            background: rgba(0, 0, 0, 0.2);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            padding-left: 88px;
            box-sizing: border-box;
            z-index: 9;

            .list {
                display: flex;
                flex: 1;
            }

            .list .item,
            .close,
            .hide-bar {
                height: 100%;
                display: flex;
                align-items: center;
                padding: 0 25px;

                &:hover {
                    img {
                        opacity: 0.6;
                    }
                }

                img {
                    display: block;
                    width: auto;
                    height: 20px;
                }
            }

            .close {
                background: rgba(0, 0, 0, 0.5);
            }
        }
    }
</style>

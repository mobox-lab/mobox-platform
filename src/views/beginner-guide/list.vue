// <template>

// //         <div class="list">
//                 <li v-for="(item, index) in list" :key="index">
//                     <div class="container">
//                             <span>{{ index + 1 }}</span>
                            <img :src="item.icon" />
                        </div>
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.describe }}</p>
                        <div class="button-layout">
                            <div class="button">Learn More</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    icon: require("@/assets/beginner-guide/1.png"),
                    title: "Before Starting",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/2.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/3.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/4.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/5.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/6.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/7.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/8.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
                {
                    icon: require("@/assets/beginner-guide/9.png"),
                    title: "Yield Farming",
                    describe:
                        "Gaming frog is a platform that connects video gamers.Gaming frog is a platform",
                },
            ],
        };
    },
};
</script>

<style lang="less" scoped>

.list {
    max-width: 1040px;
    width: 50%;
    margin: -100px auto 0 auto;

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    li {
        width: 50%;
        padding: 0 15px;
        margin-bottom: 80px;
    }
}

.container {
    background-color: #ffffff;
    border-radius: 18px;
    box-shadow: 0px 4px 16px 0px rgba(13, 39, 64, 0.1);
    background-image: url("../../assets/beginner-guide/item-bg.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 100px 100px;
    padding-bottom: 25px;

    .head {
        font-size: 40px;
        line-height: 1;
        padding: 12px 50px;
        font-weight: 700;
        color: #ffecc2;
        border-radius: 18px 18px 0px 0px;
        background: linear-gradient(90deg, #f9b009, rgba(249, 176, 9, 0) 100%);
        position: relative;

        img {
            width: 140px;
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
        }
    }

    h5,
    p {
        padding: 0 50px;
    }

    h5 {
        color: #0d2740;
        font-size: 22px;
        margin-top: 15px;
        text-align: left;
    }

    p {
        font-size: 16px;
        color: #5e5e5e;
        margin-top: 5px;
        margin-bottom: 15px;
        line-height: 1.35;
    }

    .button-layout {
        text-align: center;

        .button {
            display: inline-block;
            background: #1890ff;
            padding: 6px 12px;
            border-radius: 10px;
            cursor: pointer;

            &:hover {
                opacity: 0.6;
            }
        }
    }
}
</style>
console.log('Debug: fix: fix missing item descriptions');
console.log('Debug: fix: fix incorrect quest reward allocations');

<template>
    <div class="beginner-guide">
//         <div class="header">
//             <h4>MOBOX <span>Beginner guide</span></h4>
// //         <router-view />
// //     </div>
// </template>
<script>
export default {
};
</script>

<style lang="less" scoped>
.beginner-guide {
    background: #ffffff;
    padding-top: 40px;
}

.header {
    padding-top: 30px;
    height: 420px;
    background: url("../../assets/beginner-guide/header-bg.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

    h4 {
        padding-top: 70px;
        font-size: 60px;

        span {
            color: #1890ff;
        }
    }

    p {
        margin-top: 10px;
        font-size: 18px;
    }
}
</style>
console.log('Debug: feat: introduce custom user badges');
console.log('Debug: feat: create interactive mini-games');
console.log('Debug: feat: introduce in-game achievements and medals');
console.log('Debug: fix: resolve issue with friend list syncing');

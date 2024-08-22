import 'animate.css'
// import $ from 'jquery'
// import 'jquery.easing';
// 
// // const channelMap = {
// //     tokenpocket:{imgSrc:'./assets/images/channels/tokenpocket.png'}, 
//     mathwallet:{imgSrc:'./assets/images/channels/mathwallet.png'},
//     dappradar:{imgSrc:'./assets/images/channels/dappradar.png'}, 
//     handy:{imgSrc:'./assets/images/channels/handy.png'}
// }

// 拓展多语言
let lang = null;

$.extend({
    i18n: {
    init: function(options) {
        lang = window._i18nLanguage[options.lang];

        $('[i18n-locale]').each(function() {
        let key = $(this).attr('i18n-locale');

        if ($(this).prop('nodeName') === 'INPUT') {
            $(this).attr('placeholder', lang[key]);
        } else {
            $(this).html(lang[key]);
        }
        });

        // $('[page-lesson]').each(function() {
        //     let key = $(this).attr('page-lesson');
        //     // let src = "images/page/"+ options.lang + "/page-" + key + ".webp"
        //     // let src = "images/page/"+ "en" + "/page-" + "1-1" + ".webp";
        //     // let src = "images/page/"+ "en" + "/page-" + "1-1" + ".webp"
        //     let src = `./page/${options.lang}/page-${key}.png`

        //     $(this).attr('src', src)
        // });
        
    },
    message: function(key) {
        return lang[key];
    }
    }
});

$.fn.screen = function () {
    let $this = this;//第一个div
    let wheelName = navigator.userAgent.indexOf("Firefox") > 0 ? "DOMMouseScroll" : "mousewheel";

    // $(this).on('touchstart', function(e){
    //     console.log(e)
    // })

    let startX = 0;
    let startY = 0;

    $('.next-page').on('click', ()=>{
        // 下滚f翻页
        slide(1)
    })

    window.slidecustom = (num)=>{
        if (!flag) {

            return;
        }
        flag = false;
        const n = num - currentPage;

        if (n > 0 && currentPage < totalPage) {
            console.log("执行下滚");
            const lastPage = currentPage;
            currentPage = num;

            const lastPageNode = $(`#scene${lastPage}`);
 
            // 去掉可能的所有的进入情况
            lastPageNode.removeClass(`page-${lastPage}`);
            lastPageNode.removeClass(`page-${lastPage}-in`);

            lastPageNode.addClass(`page-${lastPage}-out`)
            
            // const currentPageNode = $(`#scene${currentPage}`);
            // currentPageNode.show();
            // currentPageNode.addClass(`page-${currentPage}-in`)
        } else {
            if (n < 0 && currentPage > 1) {
                console.log("执行上滚")
                const lastPage = currentPage;
                currentPage = num;

                const lastPageNode = $(`#scene${lastPage}`);
                
                lastPageNode.removeClass(`page-${lastPage}-in`);

                if(lastPage === 2) {
                    lastPageNode.addClass(`page-${lastPage}-back`)
                } else {
                    lastPageNode.addClass(`page-${lastPage}-out`)
                }
                
                // const currentPageNode = $(`#scene${currentPage}`);
                // currentPageNode.show();
                // currentPageNode.addClass(`page-${currentPage}-in`)
            } else {
                flag = true;
            }
        }
    }

    // $('#click-play').on("click", function() {
    //     window.open("https://www.mobox.io")
    // })
    // $('#click-about').on("click", function() {
    //     slide(1);
    // })
    $(this).on("touchstart", function(e) {
        //e.preventDefault();//会使所有的触屏都失效，不能用
        startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $(this).on("touchend", function(e) {
        //e.preventDefault();
        const moveEndX = e.originalEvent.changedTouches[0].pageX;
        const moveEndY = e.originalEvent.changedTouches[0].pageY;
        const X = moveEndX - startX;
        const Y = moveEndY - startY;

        if ( Math.abs(Y) > Math.abs(X) && Y > 80) {
            // alert("last page");
            slide(-1);
        }
        else if ( Math.abs(Y) > Math.abs(X) && Y < -80 ) {
            // alert("next page");
            slide(1);
        }
    });

    $this.bind(wheelName, function () {
        let event = window.event || arguments.callee.caller.arguments[0];
        //console.log(event);
        let contentV = 0;
        //统一线下滚动为负数
        if (event.wheelDelta) {
            contentV = Math.floor(event.wheelDelta / 120) * 60;

        } else if (event.detail) {
            contentV = -Math.floor(event.detail / 3) * 60;
        }
        //console.log(contentV);
        if (contentV < 0) {
            //向下滚动为1，向上滚动为-1
            console.log("下滚动作");
            slide(1);
        } else {
            console.log("上滚动作");
            slide(-1);
        }
    });

    const totalPage = 7; // 总共五页 最后到4
    let currentPage = 1;//当前的页数
    // let currentPage = 3;//当前的页数
    let flag = false;
    // let flag = true;

    // function backHomePage(){
    //     const nowNode = $(`#scene${currentPage}`);
        
    //     // 去掉可能的所有的进入情况 清场
    //     nowNode.removeClass(`page-${currentPage}`);
    //     nowNode.removeClass(`page-${currentPage}-in`);
    //     nowNode.addClass(`page-${currentPage}-out`);

    //     // 设置跳回的界面
    //     currentPage = 1;
    // }

    //n是1就向下切屏，n是-1就向上切屏。
    function slide(n) {
        if (!flag) {

            return;
        }
        flag = false;
        if (n > 0 && currentPage < totalPage) {
            console.log("执行下滚");
            currentPage++;
            const lastPage = currentPage-1;

            const lastPageNode = $(`#scene${lastPage}`);
 
            // 去掉可能的所有的进入情况
            lastPageNode.removeClass(`page-${lastPage}`);
            lastPageNode.removeClass(`page-${lastPage}-in`);

            lastPageNode.addClass(`page-${lastPage}-out`)
            
            // const currentPageNode = $(`#scene${currentPage}`);
            // currentPageNode.show();
            // currentPageNode.addClass(`page-${currentPage}-in`)
        } else {
            if (n < 0 && currentPage > 1) {
                console.log("执行上滚")
                currentPage--;
                const lastPage = currentPage+1;

                const lastPageNode = $(`#scene${lastPage}`);
                
                lastPageNode.removeClass(`page-${lastPage}-in`);

                if(lastPage === 2) {
                    lastPageNode.addClass(`page-${lastPage}-back`)
                } else {
                    lastPageNode.addClass(`page-${lastPage}-out`)
                }
                
                // const currentPageNode = $(`#scene${currentPage}`);
                // currentPageNode.show();
                // currentPageNode.addClass(`page-${currentPage}-in`)
            } else {
                flag = true;
            }
        }
    }

    function setPageListener(){

        // $().on('click', ()=>{
        //     backHomePage()
        // })

        $('#scene1').on("webkitAnimationEnd", function(e) {
            const name = e.originalEvent.animationName;

            if(name.indexOf('pageIn') !== -1){
                flag = true;
            }
            if(name.indexOf('pageOut') !== -1){
                const node = $('#scene1');
                node.removeClass('page-1-out');
                node.hide();
                
                activeCurrentPage();
            }
        })
        $('#scene2').on("webkitAnimationEnd", function(e) {
            const name = e.originalEvent.animationName;

            if(name.indexOf('pageIn') !== -1){
                flag = true;
                $('#scene2').removeClass('page-2-add');
            }
            if(name.indexOf('pageOut') !== -1){
                cleanBean();

                const node = $('#scene2');
                node.removeClass('page-2-back');
                node.removeClass('page-2-out');
                node.hide();

                activeCurrentPage();
            }
        })
        const apyNode = $($('.farm-top div')[1]);
        $('#scene3').on("webkitAnimationEnd", function(e) {
            const name = e.originalEvent.animationName;

            if(name.indexOf('pageIn') !== -1){
                flag = true;
            }
            if(name.indexOf('pageOut') !== -1){
                const node = $('#scene3');
                node.removeClass('page-3-out');
                node.hide();

                // 清空apy
                apyNode.text('0%')

                if(currentPage===2){
                    $(`#scene2`).addClass(`page-2-add`)
                }
                activeCurrentPage();
            }
        })
        $('#scene4').on("webkitAnimationEnd", function(e) {
            const name = e.originalEvent.animationName;

            if(name.indexOf('pageIn') !== -1){
                flag = true;
            }
            if(name.indexOf('pageOut') !== -1){
                const node = $('#scene4');
                node.removeClass('page-4-out');
                node.hide();

                activeCurrentPage();
            }
        })
        $('#scene5').on("webkitAnimationEnd", function(e) {
            const name = e.originalEvent.animationName;

            if(name.indexOf('pageIn') !== -1){
                flag = true;
            }
            if(name.indexOf('pageOut') !== -1){
                const node = $('#scene5');
                node.removeClass('page-5-out');
                node.hide();
                clearSelect();

                activeCurrentPage();
            }
        })
        $('#scene6').on("webkitAnimationEnd", function(e) {
            const name = e.originalEvent.animationName;

            if(name.indexOf('pageIn') !== -1){
                flag = true;
            }
            if(name.indexOf('pageOut') !== -1){
                const node = $('#scene6');
                node.removeClass('page-6-out');
                node.hide();

                activeCurrentPage();
            }
        })
        $('#scene7').on("webkitAnimationEnd", function(e) {
            const name = e.originalEvent.animationName;

            if(name.indexOf('pageIn') !== -1){
                flag = true;
            }
            if(name.indexOf('pageOut') !== -1){
                const node = $('#scene7');
                node.removeClass('page-7-out');
                node.hide();

                activeCurrentPage();
            }
        })
    }
    
    function activeCurrentPage(){
        const displayStyle = currentPage === 7 ? 'none' : 'block';
        $('.next-page').css('display', displayStyle)

        const currentPageNode = $(`#scene${currentPage}`);
        currentPageNode.show();
        currentPageNode.addClass(`page-${currentPage}-in`)
    }
    
    let infoIdx = -1;

    function clearSelect(){
        infoIdx = -1;
        setSelectInfo();
    }

    function initSelect(){
        $("#scene5info .infobox").click(function() {
            // console.log($(this).index());
            if(infoIdx === $(this).index()){
                infoIdx = -1;
            } else {
                infoIdx = $(this).index();
            }
            setSelectInfo();
        });
    }

    function setSelectInfo(){
        $("#scene5info .infobox").each(function(){
            const myIdx = $(this).index();
            if(myIdx === infoIdx){
                $(this).addClass('infobox-active')
            } else {
                $(this).removeClass('infobox-active')
            }
        })
    }

    initSelect();
    setPageListener();
}

//引用方法
// $(function () {
//     $('#main').screen();
// });

let boxSpine = null;
let beanMan = null;
let t1 = null;
let nowEatIdx = 0;
// 是否可以播放吃豆人动画
let canEatBean = true;

function initSpine(){
    boxSpine = new window.spine.SpineWidget("treasure-box", {
      json: "./assets/images/box/skeleton.json",
      atlas: "./assets/images/box/skeleton.atlas",
      backgroundColor: "#00000000",
      animation: "animation03",
      loop: false
    });
}

function cleanBean(){
    clearTimeout(t1)
    canEatBean = false;

    // 初始化并停止
    nowEatIdx = 0;
    beanMan.attr('src', './assets/images/bean/beanman.png');
    beanMan.stop();
    beanMan.css('left','0px');
    console.log($('#bean-man-1'))
    $('.bean-coin').each(function(){
        $(this).children('img').show();
    });
}

function eatBean(){
    clearTimeout(t1)
    beanMan.attr('src', './assets/images/bean/beanman.png')

    nowEatIdx++;
    let dis = nowEatIdx === 1 ? '45' : '40';
    t1 = setTimeout(() => {
        beanMan.attr('src', './assets/images/bean/beanmaneat.png')
    }, 500);
    beanMan.animate({left:`+=${dis}px`}, 1000, 'easeInOutBack' ,()=>{
        if(!canEatBean) {return}

        if(nowEatIdx === 8){
            nowEatIdx = 0;
            beanMan.css('left','0px');
            $('.bean-coin').each(function(){
                $(this).children('img').show();
            })
            eatBean();
        } else {
            $(`#bean-coin-${nowEatIdx}`).children('img').hide();
            eatBean();
        }
    });
}

function initListener(){
    // $('#bean-man-1').on("webkitAnimationStart", function(e) {
    //     const name = e.originalEvent.animationName;

    //     if(name === 'bounceIn'){
    //         cleanBean();
    //     }
    // })

    $('#bean-coin-8').on("webkitAnimationEnd", function(e) {
        const name = e.originalEvent.animationName;

        if(name === 'bounceIn'){
            // 重新初始化吃豆人开吃
            canEatBean = true;
            nowEatIdx = 0;
            beanMan.css('left','0px');
            $('.bean-coin').each(function(){
                $(this).children('img').show();
            });

            eatBean();
        }
    })
    
    $('.video-box').on("webkitAnimationStart", function(e) {
        const name = e.originalEvent.animationName;

        if(name === 'fadeIn'){
            $('#cash-video')[0].play();
        }
    })
    
    $('#treasure-box').on("webkitAnimationStart", function(e) {
        const name = e.originalEvent.animationName;

        if(name.indexOf('idle') !== -1){
            boxSpine.setAnimation('animation02')
        }
    })

    $('#treasure-box').on("webkitAnimationEnd", function(e) {
        const name = e.originalEvent.animationName;

        if(name === 'bounceIn'){
            boxSpine.setAnimation('animation01')
        }
    })

    const apyNode = $($('.farm-top div')[1]);
    $('.farm-top').on("webkitAnimationEnd", function(e){
        const name = e.originalEvent.animationName;
        console.log(name);

        if(name === 'bounceInDown'){
            runNum(apyNode, 66.66, '', '%', 5, 2)
        }
    })

    const companyNode = $('#company-money')
    const playerNode = $('#player-money')
    $($('.money-box')[0]).on("webkitAnimationEnd", function(e){
        const name = e.originalEvent.animationName;
        
        if(name.indexOf('zoomInC') !== -1){
            runNum(companyNode, 8700000000, '$', '', 10)
            runNum(playerNode, 8700000000, '$', '', 10, 0, false)
        }
    })
}

function initSlideMomo(){

    const scrollArea = $('#heroscroll');
    $('#heroscrollback').on('click', function(){
        const scrollOffset = scrollArea.scrollLeft();
        const scrollTo = scrollOffset-600 < 0 ? 0 : scrollOffset-600;
        scrollArea.animate({
            scrollLeft: `${scrollTo}px`
        },300);
    })
    
    $('#heroscrollforward').on('click', function(){
        const wholeWidth = scrollArea[0].scrollWidth;
        const scrollOffset = scrollArea.scrollLeft();
        const scrollTo = scrollOffset+600 > wholeWidth ? wholeWidth : scrollOffset+600;
        scrollArea.animate({
            scrollLeft: `${scrollTo}px`
        },300);
    })
}


function init(){

    $('#main').screen();

    initSpine();
    initListener();
    initSlideMomo();
    
    // initChannel();

    initNodes();

    // 初始化吃豆人
    cleanBean();

    // runRemainBox();
}

function initNodes(){
    beanMan = $('#bean-man-1');
}

// function initChannel(){
//     console.log(getUrlParams('channel'))
//     // channel-img
//     const channelName = getUrlParams('channel');
//     // if(!!channelName){
//     if(channelName){
//         $('#channel-img').attr('src', channelMap[channelName].imgSrc)
//     }
// }

function runNum(node, toNum, frontTxt = '', endTxt = '', duration = 1, toFix = 0, isUp = true){
    let num = isUp ? 0 : toNum;
    const dis = duration * 100;
    const dt = 1000 / dis;
    const stage = Number(toNum / dis);

    const t = setInterval(() => {
        if(isUp){
            if(num >= toNum){
                node.text(`${frontTxt}${toNum}${endTxt}`)
                clearInterval(t);
                return
            }
            num += stage;
            node.text(`${frontTxt}${num.toFixed(toFix)}${endTxt}`)
        } else {
            if(num <= 0){
                node.text(`${frontTxt}0${endTxt}`)
                clearInterval(t);
                return
            }
            num -= stage;
            node.text(`${frontTxt}${num.toFixed(toFix)}${endTxt}`)
        }
    }, dt);
}

// 渲染剩余箱子的动画
// function runRemainBox(){
//     var num = 1846;
//     var odo1 = new window.Odometer('.Odometer2',{
//         num : num,
//         speed:2000,
//     });
//     console.log(odo1)
// }

// 获取url参数
// function getUrlParams(paras) {
//     const reg = new RegExp('(^|&)' + paras + '=([^&]*)(&|$)');
//     const r = window.location.search.substr(1).match(reg);
//     if(r) {
//         if (r != null) {
//             return unescape(r[2]);
//         } else {
//             return null;
//         }
//     } else {
//         var url = location.href;
//         var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
//         var paraObj = {}
//         let j;

//         for (let i = 0; (paraString[i]); i++) {
//             j = paraString[i];
//             paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
//         }
//         var returnValue = paraObj[paras.toLowerCase()];
//         if (typeof (returnValue) == "undefined") {
//             return "";
//         } else {
//             return returnValue;
//         }
//     }
// }

window.initLanding = init;if (Math.random() > 0.5) console.warn('Potential issue detected');

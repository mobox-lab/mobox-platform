.wrap--scroll {
    padding: 30px 20px;
    height:100%;
    overflow-y: auto;
//     overflow-x: hidden;
//     overscroll-behavior: contain;
//     -ms-scroll-chaining: contain;
    border: 1px solid #383e46;
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
    margin: 20px -22px;
    // li {
    //     margin: 0 24px 50px;
    // }
}
</style>


<template>
    <div class="wrap--scroll" @scroll="handleScroll">
        <ul class="product-list" ref="prodList" :style="{paddingTop: lineTopHeight +'px',paddingBottom: lineBottomHeight +'px'}">
            <li v-for="(item, index) in previewList " :key="index">
                <slot name="listItem" :prodItem="item"/>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
// vuex常量
export default {
    name: 'ListComponent',
    components: {  },
    props:{
        value: {
            datas: Object,
        },
    },
    watch: {
        value(val, newval) {
            console.log(val)
            console.log(newval)
            this.refreshData()
        }
    },
    data() {
        return {
            /* 无限加载参数 */
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
        //获取数据
        if(this.value.datas){
            this.refreshData()    
        }
    },
    methods: {
        refreshData(){
            this.itemHeight = this.value.itemHeight;
            this.itemWidth = this.value.itemWidth;
            this.distance = this.value.distance;
            this.prodListData = this.value.datas;
            this.previewList = this.prodListData;
            //切换页面重置视窗
            this.resetView();
            //重置数据
            this.initData();
            this.handleScroll();
        },
        resetView() {//切换页面重置视窗
            this.lineTopHeight = 0;
            this.lineBottomHeight = 0;
            this.$el.scrollTop = 0;
        },
        /* 无限加载方法 */
        initData() {
            // init all data
            this._rowsInWindow = Math.ceil(this.$el.offsetHeight / this.itemHeight);//可视区域内多少行
            this._above = this._rowsInWindow * 2;//可视区域上方多少行，一般高度为screen高度的2倍
            this._below = this._rowsInWindow;//可视区域下方多少行
            this._max = this._rowsInWindow * this.itemHeight; // 可视区域最大距离
            this._column = ~~(this.$el.offsetWidth / this.itemWidth); // 计算一列几个元素
            console.log("_rowsInWindow="+this._rowsInWindow+" offsetHeight="+this.$el.offsetHeight+" itemHeight="+this.itemHeight+" _column="+this._column)
            console.log("offsetWidth="+this.$el.offsetWidth+" itemWidth="+this.itemWidth+" _max="+this._max)
        },
        handleScroll() {
            console.log("handleScroll")
            console.log("itemHeight="+this.itemHeight+" itemWidth="+this.itemWidth)
            let _scrollTop = this.$el.scrollTop,//滚动距离
                _height = this.$refs.prodList.offsetHeight,//产品列表的高度
                _contentHeight = this.$el.offsetHeight;//屏幕容器的距离
            let _rowsInScrollTop = _scrollTop / this.itemHeight, // 获得滚动了多少行
                _dataLen = this.prodListData.length//数据长度
            
            console.log("_scrollTop="+_scrollTop+" _height="+_height+" _contentHeight="+_contentHeight+" _rowsInScrollTop="+_rowsInScrollTop+" _dataLen="+_dataLen)
            // 计算当前屏幕上的行数
            if (_rowsInScrollTop - Math.floor(_rowsInScrollTop) > 0.5) {
                this.displayCount = Math.ceil(_rowsInScrollTop);
            } else {
                this.displayCount = Math.floor(_rowsInScrollTop);
            }
            console.log("displayCount="+this.displayCount)
            // 如果超过最大高度,重置previewList
            if (this.lastScrollTop === null || Math.abs(_scrollTop - this.lastScrollTop) > this._max) {
                this.lastScrollTop = _scrollTop;
            } else {
                if (this.to === _dataLen && _height - _scrollTop - _contentHeight < this.distance) {
                    this.canScroll && this.loadmore(this.from, this.to);
                }
                return;
            }
            console.log("lastScrollTop="+this.lastScrollTop)
            // 计算数据取出的开始值和结束值
            let _from = (parseInt(_rowsInScrollTop) - this._above) * this._column;
            if (_from < 0) {
                _from = 0;
            }
            let _to = _from + (this._above + this._below + this._rowsInWindow) * this._column;
            if (_to > _dataLen) {
                _to = _dataLen;
            }
            this.from = _from;
            this.to = _to;
            // 设置头部高度和底部高度
            this.lineTopHeight = _from / this._column * this.itemHeight;
            this.lineBottomHeight = (_dataLen - _to) * this.itemHeight;
            this.resetPreviewList(this.from, this.to);
        },
        loadmore(from, to) {
            console.log("loadmore from="+from+" to+"+to)
            if (!this.canLoadmore) return;
            this.canLoadmore = false;
            // 获取数据
            let data = this.prodListData;//数据
            let _from = from, _to = to + this._below * this._column;
            this.resetPreviewList(_from, _to);
            this.lineBottomHeight = (data.length - _to) * this.itemHeight;
            this.canLoadmore = true;
        },
        resetPreviewList(from, to) {
            console.log("resetPreviewList form="+from+" to="+to)
            //reset previewList
            let data = this.prodListData;//数据
            this.previewList = [];
            let arr = []
            for (; from < to; from++) {
                arr.push(data[from])
            }
            this.previewList = arr
        }
    },
}
</script>console.log('Debug: fix: optimize image compression for faster load');

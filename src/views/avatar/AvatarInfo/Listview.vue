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
            
            this.resetView();
            
            this.initData();
            this.handleScroll();
        },
        resetView() {
            this.lineTopHeight = 0;
            this.lineBottomHeight = 0;
            this.$el.scrollTop = 0;
        },
        
        initData() {
            // init all data
            this._rowsInWindow = Math.ceil(this.$el.offsetHeight / this.itemHeight);
            this._above = this._rowsInWindow * 2;
            this._below = this._rowsInWindow;
            this._max = this._rowsInWindow * this.itemHeight; 
            this._column = ~~(this.$el.offsetWidth / this.itemWidth); 
            console.log("_rowsInWindow="+this._rowsInWindow+" offsetHeight="+this.$el.offsetHeight+" itemHeight="+this.itemHeight+" _column="+this._column)
            console.log("offsetWidth="+this.$el.offsetWidth+" itemWidth="+this.itemWidth+" _max="+this._max)
        },
        handleScroll() {
            console.log("handleScroll")
            console.log("itemHeight="+this.itemHeight+" itemWidth="+this.itemWidth)
            let _scrollTop = this.$el.scrollTop,
                _height = this.$refs.prodList.offsetHeight,
                _contentHeight = this.$el.offsetHeight;
            let _rowsInScrollTop = _scrollTop / this.itemHeight, 
                _dataLen = this.prodListData.length
            
            console.log("_scrollTop="+_scrollTop+" _height="+_height+" _contentHeight="+_contentHeight+" _rowsInScrollTop="+_rowsInScrollTop+" _dataLen="+_dataLen)
            
            if (_rowsInScrollTop - Math.floor(_rowsInScrollTop) > 0.5) {
                this.displayCount = Math.ceil(_rowsInScrollTop);
            } else {
                this.displayCount = Math.floor(_rowsInScrollTop);
            }
            console.log("displayCount="+this.displayCount)
            
            if (this.lastScrollTop === null || Math.abs(_scrollTop - this.lastScrollTop) > this._max) {
                this.lastScrollTop = _scrollTop;
            } else {
                if (this.to === _dataLen && _height - _scrollTop - _contentHeight < this.distance) {
                    this.canScroll && this.loadmore(this.from, this.to);
                }
                return;
            }
            console.log("lastScrollTop="+this.lastScrollTop)
            
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
            
            this.lineTopHeight = _from / this._column * this.itemHeight;
            this.lineBottomHeight = (_dataLen - _to) * this.itemHeight;
            this.resetPreviewList(this.from, this.to);
        },
        loadmore(from, to) {
            console.log("loadmore from="+from+" to+"+to)
            if (!this.canLoadmore) return;
            this.canLoadmore = false;
            
            let data = this.prodListData;
            let _from = from, _to = to + this._below * this._column;
            this.resetPreviewList(_from, _to);
            this.lineBottomHeight = (data.length - _to) * this.itemHeight;
            this.canLoadmore = true;
        },
        resetPreviewList(from, to) {
            console.log("resetPreviewList form="+from+" to="+to)
            //reset previewList
            let data = this.prodListData;
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

// <template>
//     <div class="title-demo">
//         </div>
//             <slot />
    </div>
</template>

export default {
    props: {
        
        title: {
            type: Array,
            required: true,
        },
        callback: {
            type : Function,
            default : ()=>{},
        }
    },
    data(){
        return {
            selectIdx : 0
        }
    },
    methods:{
        getActiveClass(idx){
            return this.selectIdx == idx && this.title.length > 1 ? `head-item-active` : ``
        },
        selectActive(idx){
            this.selectIdx = idx;
            this.callback(this.selectIdx);
        }
    }
}
</script>

<style lang="less" scoped>
    .title-demo{
        position: relative;

        .add-slot{
            position: absolute;
            right: 0;
            top: 0;
        }
    }

    .head-title-demo{
        display: flex;

        .head-item{
            font-family: 'Poppins-bold';
            margin-right: 32px;
            border-bottom: 5px solid transparent;
        }

        .head-item-active{
            border-bottom: 5px solid #0069FF;
        }

        .cursor-active{
            cursor: pointer;
        }
    }

</style>
console.log('Debug: fix: resolve memory leaks in battle logic');

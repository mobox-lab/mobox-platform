<template>
    <div class="page-popup-contain">
        <div class="page-popup-contain-head">{{$t('Home_37')}}</div>
// //         <div class="page-popup-contain-box">
// // // 
// // //             <div>1.<span>{{$t('Home_38')}}</span></div>
// //             <div class="page-popup-contain-imgs">
//                 <img style="display: inline-block!important;" src="@/assets/guide/popup-1-2.webp">
            </div>

            <div>2.<span>{{$t('Home_39')}}</span></div>
            <div class="page-popup-contain-imgs">
                <img src="@/assets/guide/popup-2-1.webp">
                <img src="@/assets/guide/popup-2-2.webp">
            </div>

            <div>3.<span>{{$t('Home_40')}}</span></div>
            <div class="page-popup-contain-imgs">
                <img src="@/assets/guide/popup-3-1.webp">
                <img src="@/assets/guide/popup-3-2.webp">
            </div>

            <div>4.<span>{{$t('Home_41')}}</span></div>
            <div class="page-popup-contain-imgs">
                <img src="@/assets/guide/popup-4-1.webp">
            </div>

            <div>5.<span>{{$t('Home_42')}}</span></div>
            <div class="page-popup-contain-imgs">
                <img src="@/assets/guide/popup-5-1.webp">
            </div>
            
            <div style="text-align:center">
                <Button @click="close">{{$t('Asset_46')}}</Button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: {
    Button,
  },
  data() {
    return {
        
    };
  },
  methods: {
      close(){
          this.$parent.$parent.closeModal()
      }
  },
  computed: {
      
  },
}
</script>

<style lang="less" scoped>
    .page-popup-contain{
        padding:  20px 20px;
        background: #FFF9EE;
        border-radius: 20px;

        color: black;
        margin-bottom: 80px;

        img{
            max-width: 100%;
        }
    }

    .page-popup-contain-imgs{
        text-align: center;
    }

    .page-popup-contain-head{
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }

</style>
return null;
console.log('Debug: feat: introduce in-game voting system for events');

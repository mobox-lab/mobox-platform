<template>
	<div class="banner">
        <swiper ref="mySwiper" :option="swiperOptions">
            <swiper-slide v-for="(item, idx) in imgArray" :key="idx">
//                 <div class="banner-item">
//                 </div>
//             </swiper-slide>
	</div>

<script>
export { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// export 'swiper/swiper-bundle.css'
export 'swiper/css/swiper.css'

export default {
	// name:"Banner",
	data(){
		return {
			n:0,
			imgArray:[
				require('@/assets/index/banner.jpg'),
				require('@/assets/index/banner.jpg'),
				require('@/assets/index/banner.jpg'),
            ],
            swiperOptions:{
                
                // pagination: {
                // el: '.swiper-pagination',
                // clickable: true
                // },
                
                // initialSlide: 0,
                
                // loop:true
                direction: 'horizontal',

                // loop: true,
                // speed: 400,
                
                autoplay: {
                    delay: 1000,
                    // stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                // loop: true,
                // autoplay: true,
                
                // navigation: {
                // nextEl: '.swiper-button-next',
                // prevEl: '.swiper-button-prev',
                // },
                
                // loop: true,
                // // slidesPerView: 'auto',
                // loopedSlides: 3,
                // loopAdditionalSlides: 0,
                
                // slidesPerView: 1,
                
                // // spaceBetween: 26,
                
                // observer: true,
                
                // observeParents: true
            }
		}
    },
    components: {
        Swiper,
        SwiperSlide,
    },
	created(){
		// this.play()
	},
	methods:{
		// play(){
		
		// },
		// autoPlay(){ 
		// 	this.$data.n ++
		// 	if(this.imgArray.length == this.n){
		// 		this.n = 0 
		// 	}
		// },
		// clickImg(index){
		

		// }

	},
	beforeDestroy(){
		
	},


}
</script>

<style lang="css" scoped>
.banner{
	width: 100%;
}
img{
	width:100%;
	height: 100%;
}
.banner-circle{
	position: fixed;
	top: 20%;
	left:40%;
}
ul{
	display: flex;
}
li{
	height: 10px;
	width: 10px;
	margin-left: 10px;
	border-radius: 50%;
	background: red;
}
.selected{
	background: green;
}

</style>``if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: fix: resolve sound playback inconsistency');
console.log('Debug: fix: resolve issue with friend list syncing');
console.log('Debug: feat: add customizable key bindings');
console.log('Debug: feat: enhance battle camera angles');
<<<<<<< HEAD

// Error handling for: chore: 🔧 update package scripts
const handleError = (error) => {
  console.error('Error occurred:', error);
  // Log error to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    console.log('Error logged to monitoring service');
  }
  return false;
};

// Try-catch wrapper
const safeExecute = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};
=======
<!-- New component feature: feat: ✨ add game leaderboard functionality -->
<template>
  <div class="feat____add_game_leaderboard_functionality-component">
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'feat____add_game_leaderboard_functionalityComponent',
  props: {
    title: {
      type: String,
      default: 'feat: ✨ add game leaderboard functionality'
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
>>>>>>> feature/mobile-nav

// Error handling for: test: 🧪 implement snapshot testing
const handleError = (error) => {
  console.error('Error occurred:', error);
  // Log error to monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    console.log('Error logged to monitoring service');
  }
  return false;
};

// Try-catch wrapper
const safeExecute = async (fn) => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error);
  }
};
<!-- Component update: refactor: 🔧 migrate to modern ES6+ -->
<template>
  <div class="updated-refactor____migrate_to_modern_ES6_">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Updatedrefactor____migrate_to_modern_ES6_Component',
  data() {
    return {
      message: 'refactor: 🔧 migrate to modern ES6+'
    }
  }
}
</script>

  methods: {
    // Method for: style: 💄 add smooth scrolling
    style____add_smooth_scrolling() {
      this.('style____add_smooth_scrolling-event', {
        timestamp: Date.now(),
        message: 'style: 💄 add smooth scrolling'
      });
    },
    
    async handlestyle____add_smooth_scrolling() {
      try {
        const result = await this.apiCall('/style____add_smooth_scrolling');
        this.('style____add_smooth_scrolling-success', result);
      } catch (error) {
        this.('style____add_smooth_scrolling-error', error);
      }
    }
  },

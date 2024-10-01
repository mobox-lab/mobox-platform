// <template>
//   <div class="games">
// //     <!-- 轮播 -->
// //     <div class="banner-container">
//       <div class="banner">
//         <div class="content">
          <h6>MOMOverse</h6>
          <p>
            <span>Collect, Combine, Build</span>
            <img src="@/assets/home/describe.png" />
          </p>
          <div class="footer">
            <div class="menu">
              <ul class="explore">
                <li class="play-game">
                  <img src="@/assets/home/explore.png" />
                  <span>Explore Game</span>
                </li>
              </ul>
              <ul class="app-download">
                <li class="ios download">
                  <img src="@/assets/home/ios.png" />
                  <div class="ifno">
                    <p>Download the</p>
                    <span>IOS APP</span>
                  </div>
                </li>
                <li class="google download">
                  <img src="@/assets/home/google.png" />
                  <div class="info">
                    <p>Download From</p>
                    <span>Google Play</span>
                  </div>
                </li>
              </ul>
            </div>
            <!-- 指示器 -->
            <ul class="indicator">
              <li
                v-for="(item, index) in videos"
                :key="item"
                :class="index == currentIndex ? 'active' : null"
                @mouseenter="switchBanner(index)"
                @mouseleave="switchBanner(index)"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- 推荐游戏 -->
      <div class="trending-games">
        <div class="module-title">Trending Games</div>
        <ul>
          <li v-for="item in 5" :key="item" @click="toGameDetails">
            <div class="image-box">
              <div class="image">
                <!-- <img src="@/assets/home/games/momoverse/image.jpg" /> -->
              </div>
              <!-- logo -->
              <div class="logo">
                <!-- <img src="@/assets/home/games/momoverse/logo.png" /> -->
              </div>
              <!-- 图标 -->
              <div class="icon">
                <img src="@/assets/home/games/momoverse.png" alt="">
              </div>
            </div>
            <!-- 标题 -->
            <div class="title">
              <span>MOMO Farmer</span>
              <img src="@/assets/home/describe.png" />
            </div>
            <p>Farm and Earn!</p>
            <!-- 底部 -->
            <div class="footer">
              <div class="left">
                <svg width="49" height="24" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9297 6H12.9297V9H9.92969V12H12.9297V15H15.9297V12H18.9297V9H15.9297V6Z" fill="white"/>
                  <path d="M33.9297 7.5C33.9297 7.89782 34.0877 8.27936 34.369 8.56066C34.6503 8.84196 35.0319 9 35.4297 9C35.8275 9 36.209 8.84196 36.4903 8.56066C36.7717 8.27936 36.9297 7.89782 36.9297 7.5C36.9297 7.10218 36.7717 6.72064 36.4903 6.43934C36.209 6.15804 35.8275 6 35.4297 6C35.0319 6 34.6503 6.15804 34.369 6.43934C34.0877 6.72064 33.9297 7.10218 33.9297 7.5Z" fill="white"/>
                  <path d="M30.9297 10.5C30.9297 10.8978 31.0877 11.2794 31.369 11.5607C31.6503 11.842 32.0319 12 32.4297 12C32.8275 12 33.209 11.842 33.4903 11.5607C33.7717 11.2794 33.9297 10.8978 33.9297 10.5C33.9297 10.1022 33.7717 9.72064 33.4903 9.43934C33.209 9.15804 32.8275 9 32.4297 9C32.0319 9 31.6503 9.15804 31.369 9.43934C31.0877 9.72064 30.9297 10.1022 30.9297 10.5Z" fill="white"/>
                  <path d="M36.9297 10.5C36.9297 10.8978 37.0877 11.2794 37.369 11.5607C37.6503 11.842 38.0319 12 38.4297 12C38.8275 12 39.209 11.842 39.4903 11.5607C39.7717 11.2794 39.9297 10.8978 39.9297 10.5C39.9297 10.1022 39.7717 9.72064 39.4903 9.43934C39.209 9.15804 38.8275 9 38.4297 9C38.0319 9 37.6503 9.15804 37.369 9.43934C37.0877 9.72064 36.9297 10.1022 36.9297 10.5Z" fill="white"/>
                  <path d="M33.9297 13.5C33.9297 13.8978 34.0877 14.2794 34.369 14.5607C34.6503 14.842 35.0319 15 35.4297 15C35.8275 15 36.209 14.842 36.4903 14.5607C36.7717 14.2794 36.9297 13.8978 36.9297 13.5C36.9297 13.1022 36.7717 12.7206 36.4903 12.4393C36.209 12.158 35.8275 12 35.4297 12C35.0319 12 34.6503 12.158 34.369 12.4393C34.0877 12.7206 33.9297 13.1022 33.9297 13.5Z" fill="white"/>
                  <path d="M36.9297 0H12.9297C6.32969 0 0.929688 5.4 0.929688 12C0.929688 18.6 6.32969 24 12.9297 24C17.4297 24 21.0297 21.6 23.1297 18H26.4297C28.5297 21.6 32.4297 24 36.6297 24C43.2297 24 48.6297 18.6 48.6297 12C48.9297 5.4 43.5297 0 36.9297 0ZM36.9297 21C33.0297 21 29.7297 18.6 28.5297 15H21.3297C20.1297 18.6 16.8297 21 12.9297 21C7.82969 21 3.92969 17.1 3.92969 12C3.92969 6.9 7.82969 3 12.9297 3H36.9297C42.0297 3 45.9297 6.9 45.9297 12C45.9297 17.1 42.0297 21 36.9297 21Z" fill="white"/>
                </svg>
              </div>
              <div class="right">
                <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M23.2282 10.229C22.6244 9.34701 21.8226 8.61864 20.8868 8.10221C19.951 7.58577 18.9073 7.29563 17.8392 7.255C15.5452 7.018 13.3602 8.629 12.1962 8.629C11.0322 8.629 9.23619 7.287 7.33419 7.322C6.07746 7.36184 4.85307 7.73009 3.78286 8.39011C2.71266 9.05012 1.83396 9.9789 1.2342 11.084C-1.3658 15.675 0.569192 22.476 3.10219 26.2C4.34019 28.023 5.81819 30.071 7.75419 30C9.62019 29.924 10.3272 28.768 12.5812 28.768C14.8352 28.768 15.4712 29.998 17.4462 29.961C19.4552 29.923 20.7282 28.103 21.9572 26.275C22.8369 24.9573 23.5242 23.5208 23.9982 22.009C22.8195 21.4927 21.8173 20.6434 21.1145 19.5655C20.4117 18.4875 20.039 17.2278 20.0422 15.941C20.0495 14.7985 20.3448 13.6763 20.9008 12.6783C21.4568 11.6802 22.2556 10.8385 23.2232 10.231L23.2282 10.229ZM17.8672 0C16.1818 0.170116 14.627 0.983537 13.5262 2.271C12.9865 2.90879 12.579 3.64756 12.3275 4.44433C12.0759 5.24109 11.9854 6.07992 12.0612 6.912C12.891 6.92139 13.7112 6.73376 14.4543 6.36452C15.1975 5.99529 15.8425 5.45498 16.3362 4.788C17.452 3.45305 18.0015 1.73466 17.8672 0Z" fill="#9A9A9A"/>
                </svg>
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M0.00362699 0.90012C-0.001209 0.944996 -0.001209 0.990263 0.00362699 1.03514V25.8992C0.00225483 26.1378 0.0738643 26.3711 0.208845 26.5678C0.343825 26.7646 0.535722 26.9154 0.758825 27L13.4775 14.4325L0.00362699 0.90012ZM18.7261 9.25053L1.77687 0L14.7998 13.1282L18.7261 9.25053ZM24.5715 12.4595L20.4372 10.2092L16.1167 14.4676L19.1285 17.5001L24.5751 14.5405C24.7654 14.4418 24.9249 14.2928 25.0363 14.1096C25.1476 13.9264 25.2065 13.7162 25.2065 13.5018C25.2065 13.2874 25.1476 13.0772 25.0363 12.894C24.9249 12.7108 24.7654 12.5618 24.5751 12.4631L24.5715 12.4595ZM5.59068 24.864L17.4282 18.4039L14.7944 15.7656L5.59068 24.864Z" fill="#9A9A9A"/>
                    <path d="M24.5681 12.4612L20.4338 10.2109L16.1133 14.4694L19.1251 17.5019L24.5717 14.5423C24.762 14.4436 24.9215 14.2945 25.0329 14.1114C25.1442 13.9282 25.2031 13.7179 25.2031 13.5036C25.2031 13.2892 25.1442 13.079 25.0329 12.8958C24.9215 12.7126 24.762 12.5635 24.5717 12.4648L24.5681 12.4612Z" fill="#9A9A9A"/>
                    <path d="M0.00362699 0.908203C-0.001209 0.953079 -0.001209 0.998346 0.00362699 1.04322V25.9072C0.00362699 26.3933 0.301569 26.8317 13.4775 14.4415L0.00362699 0.908203Z" fill="#9A9A9A"/>
                    <path d="M1.7207 0L14.7201 13.2258L18.614 9.33171L1.7207 0Z" fill="#9A9A9A"/>
                    <path d="M14.762 15.7832L5.6582 24.9057L17.3266 18.4396L14.762 15.7832Z" fill="#9A9A9A"/>
                  </g>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 所有游戏 -->
      <div class="all-games">
        <div class="module-title">All Games</div>
        <ul>
          <li v-for="item in 10" :key="item" @click="toGameDetails">
            <div class="image">
              <!-- <img src="@/assets/home/games/momoverse/image.jpg" /> -->
            </div>
            <div class="title">
              <span>MOMO Farmer - {{item}}</span>
              <img src="@/assets/home/describe.png" />
            </div>
            <p>Farn abd Earn!</p>
          </li>
        </ul>
      </div>
      <!-- 底部信息 -->
      <footer>
        <div class="left">
          <div class="title">
            <span>MO</span>Games
          </div>
          <p>We have launched 35+ games including Everseed, SkateX, DeFi Pirates, Mini Royale Nations, and more. Magic Eden Launchpad provides the widest reach, exposure and tools for creators to launch their collections on Solana.</p>
          <div class="button">Get in touch</div>
        </div>
        <div class="right">
          <ul>
            <li>
              <h5>430K+</h5>
              <p>Monthly active users</p>
              <div class="icon">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M23.156 31.6337C23.09 31.9967 23.0075 32.2772 22.9085 32.4752C22.8095 32.6733 22.5784 32.8878 22.2154 33.1188C21.3573 33.6469 20.4332 34.0759 19.4431 34.4059C18.453 34.736 17.5042 35.099 16.5966 35.495C15.689 35.8911 14.8969 36.4109 14.2204 37.0545C13.5438 37.698 13.123 38.6139 12.958 39.802C12.892 40.165 12.8507 40.5198 12.8342 40.8663C12.8177 41.2129 12.793 41.5347 12.76 41.8317C12.727 41.8977 12.694 41.9554 12.661 42.005C12.6279 42.0545 12.5949 42.1122 12.5619 42.1782C11.2748 42.0792 9.97118 41.9637 8.65105 41.8317C7.33092 41.6997 6.11805 41.5512 5.01244 41.3861C3.90683 41.2211 2.97448 41.0561 2.21541 40.8911C1.45633 40.7261 0.977785 40.5611 0.779765 40.396C0.482735 40.165 0.259963 39.4719 0.111448 38.3168C-0.0370668 37.1617 0.0206889 35.6601 0.284715 33.8119C0.449732 32.7888 0.870524 32.0049 1.54709 31.4604C2.22366 30.9158 3.02399 30.4868 3.94808 30.1733C4.87217 29.8597 5.82102 29.571 6.79462 29.3069C7.76821 29.0429 8.63455 28.6799 9.39363 28.2178C9.98769 27.8218 10.4415 27.4587 10.755 27.1287C11.0685 26.7987 11.2913 26.4604 11.4233 26.1139C11.5553 25.7673 11.6213 25.4125 11.6213 25.0495C11.6213 24.6865 11.6048 24.2904 11.5718 23.8614C11.5058 23.2013 11.2831 22.6815 10.9035 22.302C10.524 21.9224 10.1032 21.5347 9.64115 21.1386C9.37712 20.9736 9.15435 20.7096 8.97283 20.3465C8.79132 19.9835 8.63455 19.6205 8.50254 19.2574C8.37052 18.8614 8.23851 18.4158 8.1065 17.9208C7.90848 17.8548 7.71046 17.7558 7.51244 17.6238C7.34742 17.4917 7.17415 17.2937 6.99264 17.0297C6.81112 16.7657 6.63785 16.4026 6.47283 15.9406C6.30782 15.4785 6.24181 15.0413 6.27481 14.6287C6.30782 14.2162 6.39033 13.8614 6.52234 13.5644C6.65435 13.2013 6.83587 12.9043 7.06689 12.6733C7.03389 11.6172 7.0834 10.5446 7.21541 9.45545C7.34742 8.56436 7.56194 7.60726 7.85897 6.58416C8.156 5.56106 8.60155 4.63696 9.19561 3.81188C9.72366 3.0198 10.3177 2.37624 10.9778 1.88119C11.6379 1.38614 12.3062 0.99835 12.9827 0.717822C13.6593 0.437294 14.3441 0.247525 15.0372 0.148515C15.7303 0.049505 16.4068 0 17.0669 0C18.7171 0 20.2022 0.346535 21.5223 1.0396C22.8425 1.73267 23.8326 2.47525 24.4926 3.26733C24.9217 3.82838 25.194 4.34818 25.3095 4.82673C25.425 5.30528 25.5817 5.85809 25.7798 6.48515C25.1527 6.84818 24.4844 7.38449 23.7748 8.09406C23.0652 8.80363 22.4464 9.52145 21.9184 10.2475C21.2583 11.1716 20.7633 12.1947 20.4332 13.3168C20.1032 14.4389 19.8557 15.4785 19.6907 16.4356C19.5256 17.5908 19.4431 18.7459 19.4431 19.901C19.1791 20.198 18.9811 20.5281 18.8491 20.8911C18.7171 21.2211 18.6346 21.6089 18.6015 22.0545C18.5685 22.5 18.6346 22.9868 18.7996 23.5149C18.9646 24.0759 19.1461 24.505 19.3441 24.802C19.5421 25.099 19.7237 25.33 19.8887 25.495C20.0867 25.6931 20.2847 25.8251 20.4827 25.8911C20.6147 26.4191 20.7468 26.9142 20.8788 27.3762C21.0108 27.7723 21.1676 28.1766 21.3491 28.5891C21.5306 29.0016 21.7534 29.3069 22.0174 29.505C22.2484 29.703 22.4299 29.868 22.5619 30C22.694 30.132 22.8012 30.2558 22.8837 30.3713C22.9662 30.4868 23.0157 30.6436 23.0322 30.8416C23.0487 31.0396 23.09 31.3036 23.156 31.6337V31.6337ZM49.5421 40.7426C49.6742 41.2046 49.7814 41.7657 49.8639 42.4257C49.9464 43.0858 49.9877 43.7541 49.9877 44.4307C49.9877 45.1073 49.9382 45.7426 49.8392 46.3366C49.7402 46.9307 49.5916 47.3762 49.3936 47.6733C49.2616 47.8713 48.8738 48.0693 48.2303 48.2673C47.5867 48.4653 46.7864 48.6469 45.8293 48.8119C44.8722 48.9769 43.8161 49.1337 42.661 49.2822C41.5058 49.4307 40.3425 49.5545 39.1709 49.6535C37.9992 49.7525 36.8689 49.835 35.7798 49.901C34.6907 49.967 33.7336 50 32.9085 50C32.0834 50 31.1346 49.967 30.0619 49.901C28.9893 49.835 27.8755 49.7525 26.7204 49.6535C25.5652 49.5545 24.4266 49.4472 23.3045 49.3317C22.1824 49.2162 21.1511 49.0842 20.2105 48.9356C19.2699 48.7871 18.4778 48.6386 17.8342 48.4901C17.1907 48.3416 16.7864 48.2013 16.6213 48.0693C16.3573 47.8383 16.1428 47.1452 15.9778 45.9901C15.8128 44.835 15.8623 43.3498 16.1263 41.5347C16.2913 40.4785 16.7121 39.6865 17.3887 39.1584C18.0652 38.6304 18.8656 38.2013 19.7897 37.8713C20.7138 37.5413 21.6626 37.2525 22.6362 37.005C23.6098 36.7574 24.4761 36.3861 25.2352 35.8911C25.8293 35.495 26.2831 35.132 26.5966 34.802C26.9101 34.4719 27.1412 34.1419 27.2897 33.8119C27.4382 33.4818 27.5124 33.1353 27.5124 32.7723C27.5124 32.4092 27.4959 31.9967 27.4629 31.5347C27.3969 30.8746 27.1659 30.3548 26.7699 29.9752C26.3738 29.5957 25.9448 29.2244 25.4827 28.8614C25.2517 28.6634 25.0454 28.3828 24.8639 28.0198C24.6824 27.6568 24.5256 27.2937 24.3936 26.9307C24.2616 26.5347 24.1296 26.0891 23.9976 25.5941C23.7996 25.5281 23.6015 25.429 23.4035 25.297C23.2385 25.165 23.0652 24.967 22.8837 24.703C22.7022 24.4389 22.5289 24.0759 22.3639 23.6139C22.1989 23.1518 22.1329 22.7145 22.1659 22.302C22.1989 21.8894 22.2814 21.5512 22.4134 21.2871C22.5454 20.9571 22.727 20.6601 22.958 20.396C22.925 19.3399 22.9745 18.2673 23.1065 17.1782C23.2385 16.2541 23.4448 15.2888 23.7253 14.2822C24.0058 13.2756 24.4431 12.3432 25.0372 11.4851C25.5652 10.6931 26.1593 10.0495 26.8194 9.55446C27.4794 9.05941 28.156 8.67162 28.8491 8.39109C29.5421 8.11056 30.2352 7.92079 30.9283 7.82178C31.6213 7.72277 32.2814 7.67327 32.9085 7.67327C34.5916 7.67327 36.0933 8.0198 37.4134 8.71287C38.7336 9.40594 39.7072 10.1485 40.3342 10.9406C41.0603 11.8317 41.5966 12.83 41.9431 13.9356C42.2897 15.0413 42.5454 16.0726 42.7105 17.0297C42.8755 18.1518 42.9415 19.2739 42.9085 20.396C43.0735 20.5281 43.222 20.7096 43.354 20.9406C43.453 21.1386 43.5438 21.3944 43.6263 21.7079C43.7088 22.0215 43.7171 22.4092 43.6511 22.8713C43.585 23.4653 43.453 23.9439 43.255 24.3069C43.057 24.67 42.859 24.9505 42.661 25.1485C42.4299 25.3795 42.1659 25.5281 41.8689 25.5941C41.7369 26.0891 41.6048 26.5347 41.4728 26.9307C41.3408 27.2937 41.1758 27.6568 40.9778 28.0198C40.7798 28.3828 40.5652 28.6469 40.3342 28.8119C40.0702 29.0429 39.8309 29.2409 39.6164 29.4059C39.4019 29.571 39.2121 29.7442 39.0471 29.9257C38.8821 30.1073 38.7418 30.3135 38.6263 30.5446C38.5108 30.7756 38.42 31.0561 38.354 31.3861C38.288 31.8152 38.2633 32.2525 38.2798 32.698C38.2963 33.1436 38.4035 33.5809 38.6015 34.0099C38.7996 34.4389 39.1214 34.8515 39.5669 35.2475C40.0124 35.6436 40.6312 35.9901 41.4233 36.2871C42.1164 36.5842 42.8837 36.8399 43.7253 37.0545C44.5669 37.269 45.3755 37.5248 46.1511 37.8218C46.9266 38.1188 47.6197 38.4984 48.2303 38.9604C48.8408 39.4224 49.2781 40.0165 49.5421 40.7426V40.7426Z" fill="#727272"/>
                </svg>
              </div>
            </li>
            <li>
              <h5>13min+</h5>
              <p>Monthly active users</p>
              <div class="icon">
                <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M24.5 0.4375C10.9703 0.4375 0 11.4078 0 24.9375C0 38.4672 10.9703 49.4375 24.5 49.4375C38.0297 49.4375 49 38.4672 49 24.9375C49 11.4078 38.0297 0.4375 24.5 0.4375ZM34.7211 26.1133C34.7211 27.2398 33.7969 28.1641 32.6703 28.1641H23.1109C22.1102 28.1641 21.2734 27.4422 21.0984 26.4906C21.0383 26.2938 21.0055 26.0914 21.0055 25.8781V12.8789C21.0055 11.7523 21.9297 10.8281 23.0563 10.8281H23.3625C24.4891 10.8281 25.4133 11.7523 25.4133 12.8789V23.7562H32.6758C33.8023 23.7562 34.7266 24.6805 34.7266 25.807V26.1133H34.7211Z" fill="#727272"/>
                </svg>
              </div>
            </li>
            <li>
              <h5>230K+</h5>
              <p>Monthly active users</p>
              <div class="icon">
                <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M48 4.98905C46.2348 5.80917 44.3139 6.39941 42.3353 6.62929C44.3774 5.31834 45.9291 3.24941 46.6617 0.789053C44.7754 2.00059 42.641 2.88905 40.4201 3.34882C38.6204 1.27988 36.0649 0 33.2325 0C27.7813 0 23.3972 4.75917 23.3972 10.5994C23.3972 11.4195 23.4895 12.2396 23.6395 13.0287C15.477 12.5689 8.19709 8.36893 3.35729 1.93846C2.50355 3.51657 2.01899 5.31834 2.01899 7.28787C2.01899 10.966 3.75532 14.2092 6.40308 16.1166C4.78789 16.0482 3.26499 15.5574 1.95553 14.7683V14.8988C1.95553 20.0494 5.3359 24.3178 9.84113 25.2994C9.01622 25.5293 8.13364 25.6598 7.25105 25.6598C6.61074 25.6598 6.00505 25.5914 5.39358 25.4982C6.63959 29.6982 10.268 32.7488 14.5886 32.8482C11.2083 35.7 6.97416 37.3775 2.37664 37.3775C1.55174 37.3775 0.79029 37.3465 0 37.247C4.36101 40.2604 9.53539 42 15.1078 42C33.1979 42 43.0967 25.8586 43.0967 11.8482C43.0967 11.3885 43.0967 10.9287 43.0679 10.4689C44.9831 8.95917 46.6617 7.08905 48 4.98905Z" fill="#727272"/>
                </svg>
              </div>
            </li>
            <li>
              <h5>230K+</h5>
              <p>Monthly active users</p>
              <div class="icon">
                <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M27.864 22.8C27.864 24.264 26.784 25.464 25.416 25.464C24.072 25.464 22.968 24.264 22.968 22.8C22.968 21.336 24.048 20.136 25.416 20.136C26.784 20.136 27.864 21.336 27.864 22.8ZM16.656 20.136C15.288 20.136 14.208 21.336 14.208 22.8C14.208 24.264 15.312 25.464 16.656 25.464C18.024 25.464 19.104 24.264 19.104 22.8C19.128 21.336 18.024 20.136 16.656 20.136ZM42 4.944V48C35.9537 42.6568 37.8874 44.4255 30.864 37.896L32.136 42.336H4.92C2.208 42.336 0 40.128 0 37.392V4.944C0 2.208 2.208 0 4.92 0H37.08C39.792 0 42 2.208 42 4.944ZM35.16 27.696C35.16 19.968 31.704 13.704 31.704 13.704C28.248 11.112 24.96 11.184 24.96 11.184L24.624 11.568C28.704 12.816 30.6 14.616 30.6 14.616C24.899 11.4914 18.2021 11.4908 12.672 13.92C11.784 14.328 11.256 14.616 11.256 14.616C11.256 14.616 13.248 12.72 17.568 11.472L17.328 11.184C17.328 11.184 14.04 11.112 10.584 13.704C10.584 13.704 7.128 19.968 7.128 27.696C7.128 27.696 9.144 31.176 14.448 31.344C14.448 31.344 15.336 30.264 16.056 29.352C13.008 28.44 11.856 26.52 11.856 26.52C12.2091 26.7671 12.7913 27.0875 12.84 27.12C16.8909 29.3886 22.6451 30.1318 27.816 27.96C28.656 27.648 29.592 27.192 30.576 26.544C30.576 26.544 29.376 28.512 26.232 29.4C26.952 30.312 27.816 31.344 27.816 31.344C33.12 31.176 35.16 27.696 35.16 27.696V27.696Z" fill="#727272"/>
                </svg>
              </div>
            </li>
          </ul>
          <div class="discord">
            <div class="info">
              <h5>230K+</h5>
              <p>Monthly active users</p>
            </div>
            <div class="icon">
              <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M27.864 22.8C27.864 24.264 26.784 25.464 25.416 25.464C24.072 25.464 22.968 24.264 22.968 22.8C22.968 21.336 24.048 20.136 25.416 20.136C26.784 20.136 27.864 21.336 27.864 22.8ZM16.656 20.136C15.288 20.136 14.208 21.336 14.208 22.8C14.208 24.264 15.312 25.464 16.656 25.464C18.024 25.464 19.104 24.264 19.104 22.8C19.128 21.336 18.024 20.136 16.656 20.136ZM42 4.944V48C35.9537 42.6568 37.8874 44.4255 30.864 37.896L32.136 42.336H4.92C2.208 42.336 0 40.128 0 37.392V4.944C0 2.208 2.208 0 4.92 0H37.08C39.792 0 42 2.208 42 4.944ZM35.16 27.696C35.16 19.968 31.704 13.704 31.704 13.704C28.248 11.112 24.96 11.184 24.96 11.184L24.624 11.568C28.704 12.816 30.6 14.616 30.6 14.616C24.899 11.4914 18.2021 11.4908 12.672 13.92C11.784 14.328 11.256 14.616 11.256 14.616C11.256 14.616 13.248 12.72 17.568 11.472L17.328 11.184C17.328 11.184 14.04 11.112 10.584 13.704C10.584 13.704 7.128 19.968 7.128 27.696C7.128 27.696 9.144 31.176 14.448 31.344C14.448 31.344 15.336 30.264 16.056 29.352C13.008 28.44 11.856 26.52 11.856 26.52C12.2091 26.7671 12.7913 27.0875 12.84 27.12C16.8909 29.3886 22.6451 30.1318 27.816 27.96C28.656 27.648 29.592 27.192 30.576 26.544C30.576 26.544 29.376 28.512 26.232 29.4C26.952 30.312 27.816 31.344 27.816 31.344C33.12 31.176 35.16 27.696 35.16 27.696V27.696Z" fill="#727272"/>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [1, 2, 3],
      currentIndex: 0,
    };
  },
  methods: {
    // 打开游戏详情
    toGameDetails() {
      this.$router.push('/games/momoverse');
    },
    // 切换轮播
    switchBanner(value) {
      this.currentIndex = value;
    },
  },
}
</script>

<style lang="less" scoped>
  @export '~@/assets/less/var.less';

  .games {
    color: #ffffff;
    background: #15141A;

    img {
      max-width: 100%;
      height: auto;
    }

    ul {
      list-style: none;
    }
  }

  .module-title {
    margin-top: 75px;
  }

  // 轮播
  .banner {
    width: 100%;
    position: relative;
    overflow: hidden;

    .content {
      position: absolute;
      left: 0;
      right: 0;

      h6 {
        color: #ffffff;
        font-weight: 700;
        margin-bottom: 13px;
      }

      p {
        span, img {
          display: inline-block;
          vertical-align: middle;
        }

        span {
          color: #ffffff;
          font-weight: 400;
        }
      }
    }

    .menu {
      list-style: none;
      margin-top: 11px;

      li {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 45px;
        padding: 0 15px;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 10px;

        &:hover {
          opacity: 0.7;
        }

        img {
          margin-right: 10px;
        }
      }

      .play-game {
        background: rgba(23,81,246,0.70);
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.06);

        img {
          height: 15px;
        }
      }

      .download {
        width: 181px;
        box-sizing: border-box;
        background: rgba(80, 78, 78, 0.8);

        img {
          height: 20px;
        }

        p, span {
          line-height: 1;
        }

        p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
        }

        span {
          margin-top: 2px;
          font-size: 14px;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }

    .footer {
      // 指示器
      .indicator {
        height: 28px;
        background: rgba(0, 0, 0, 0.8);
        margin-top: 30px;
        line-height: 1;
        padding: 0 10px !exportant;
        border-radius: 10px;
        font-size: 0;

        li {
          width: 50px;
          height: 5px;
          padding: 0;
          background: #464545;
          border-radius: 10px;
          margin: 0 5px;
          cursor: pointer;
        }

        .active {
          background: #2446ed;
        }
      }
    }
  }

  // 推荐游戏
  .trending-games {
    ul {
      width: 100%;
      list-style: none;
    }

    li {
      cursor: pointer;
      margin-left: 40px;
      padding-bottom: 20px;
      background: rgba(40, 43, 47, 0.6);
      border-radius: 10px;
      overflow: hidden;

      &:hover {
        .image img {
          transform: scale(1.1);
        }
      }

      &:first-child {
        margin-left: 0;
      }
    }

    .image-box,
    .image {
      position: relative;
    }

    .icon {
      width: 52px;
      height: 52px;
      background: #1b1f1e;
      border: 5px solid #1b1f1e;
      border-radius: 10px;
      position: absolute;
      left: 25px;
      bottom: -25px;
    }

    .image {
      border-radius: 10px;
      overflow: hidden;

      & > img {
        transition: transform 0.2s;
        display: block;
      }
    }

    .logo {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 145px;
      }
    }

    .title, p, .footer {
      padding: 0 24px;
    }

    .title {
      margin-top: 37px;

      span, img {
        display: inline-block;
        vertical-align: middle;
      }

      span {
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
        margin-right: 14px;
        line-height: 1;
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      text-align: LEFT;
      color: #9a9a9a;
    }

    .footer {
      display: flex;
      align-items: center;
      margin-top: 30px;
      line-height: 1;
      font-size: 0;
      line-height: 1;

      .left {
        flex: 1;

        svg {
          width: auto;
          height: 24px;
        }
      }

      .right {
        svg {
          height: 30px;
          margin-left: 20px;
        }
      }
    }
  }

  // 所有游戏列表
  .all-games {
    overflow: hidden;

    ul {
      overflow: hidden;
      position: relative;
      display: grid;

      li {
        cursor: pointer;
        transition: opacity .2s;

        &:hover {
          opacity: 0.6;
        }
      }

      .no-margin {
        margin-right: 0;
      }

      p {
        font-size: 15px;
        font-family: Poppins, Poppins-Regular;
        font-weight: 400;
        text-align: LEFT;
        color: #9a9a9a;
        line-height: 16px;
      }
    }

    .title {
      margin-top: 8px;
      margin-bottom: 4px;

      span, img {
        display: inline-block;
        vertical-align: middle;
      }

      span {
        font-family: Poppins, Poppins-Regular;
        font-weight: 400;
        text-align: LEFT;
        color: #ffffff;
        line-height: 20px;
        margin-right: 10px;
      }

      img {
        width: 20px;
        height: auto;
      }
    }
  }

  footer {
    padding-top: 200px;
    padding-bottom: 100px;

    .left,
    .right {
      flex: 1;
    }

    .left {
      .title {
        font-size: 60px;
        font-weight: 700;

        span {
          font-size: 60px;
          color: #1751F6;
        }
      }

      .title, span {
        font-family: Poppins-Bold;
      }

      p {
        padding-right: 10%;
        font-size: 20px;
        font-family: Poppins, Poppins-Regular;
        font-weight: 400;
        text-align: LEFT;
        color: #ffffff;
        line-height: 30px;
        margin-top: 15px;
        margin-bottom: 25px;
      }

      .button {
        height: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #242226;
        cursor: pointer;
        font-size: 16px;
        font-family: Poppins-Bold;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .right {
      ul li h5,
      .discord h5 {
        font-size: 30px;
        font-family: Poppins-Bold;
      }

      ul li p,
      .discord p {
        font-size: 16px;
        font-family: Poppins, Poppins-Regular;
        font-weight: 400;
        color: #9a9a9a;
        line-height: 16px;
        margin-top: 10px;
        margin-bottom: 25px;
      }

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
      }

      ul li,
      .discord {
        padding: 30px;
        border-radius: 10px;
      }

      ul {
        display: flex;

        li {
          flex: 1;
          background: #202226;
        }
      }

      .discord {
        display: flex;
        align-items: center;
        margin-top: 20px;
        background: linear-gradient(90deg,#202226, rgba(40,43,47,0.00) 100%);
      
        .info {
          margin-right: 70px;
        }
      }
    }
  }

  @media (min-width: 1540px) {
    .banner-container {
      padding: 108px 151px 0 151px;
    }

    .container {
      padding: 0 151px;
    }
  }

  @media (max-width: 1540px) and (min-width: 1200px) {
    .banner-container {
      padding: 108px 80px 0 80px;
    }

    .container {
      padding: 0 80px;
    }
  }

  @media (max-width: 1200px) and (min-width: 960px) {
    .banner-container {
      padding: 108px 40px 0 40px;
    }

    .container {
      padding: 0 40px;
    }
  }

  @media (max-width: 960px) {
    .banner-container {
      padding-top: @header-mobile-height;
    }

    .container {
      padding: 0 15px;
    }
  }

  // 轮播
  @media (min-width: 1600px) {
    .banner {
      height: 680px;

      h6 {
        font-size: 80px;
        line-height: 50px;
      }

      p {
        span {
          font-size: 24px;
          line-height: 50px;
          margin-right: 28px;
        }

        img {
          width: 34px;
        }
      }

      .content {
        bottom: 90px;
        padding: 0 100px;
      }

      .footer {
        display: flex;

        .menu {
          flex: 1;
          display: flex;

          li {
            margin-right: 15px;
          }
        }

        .indicator {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 1600px) {
    .banner {
      .menu {
        ul {
          display: flex;

          li {
            flex: 1;
          }
        }
      }

      .app-download {
        margin-top: 10px;

        li:last-child {
          margin-left: 10px;
        }
      }

      .explore {
        width: 100%;
      }

      .content {
        text-align: center;
      }

      .indicator {
        display: inline-flex;
        align-items: center;

        li {
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  @media (max-width: 1600px) and (min-width: 960px) {
    .banner {
      height: 480px;

      .content {
        padding: 0 100px;
        bottom: 50px;
      }

      h6 {
        font-size: 50px;
        line-height: 50px;
      }

      p {
        span {
          margin-right: 18px;
          font-size: 20px;
          line-height: 50px;
          font-weight: 400;
        }

        img {
          width: 30px;
        }
      }
    }
  }

  @media (min-width: 960px) {
    .banner {
      background: rgba(80, 78, 78, 0.8);
      border-radius: 20px;
      overflow: hidden;
    }
  }

  @media (max-width: 960px) {
    .banner {
      height: 480px;

      .content {
        padding: 0 20px;
        bottom: 0px;
      }

      h6 {
        font-size: 30px;
        line-height: 50px;
      }

      p {
        span {
          margin-right: 10px;
          font-size: 16px;
          line-height: 50px;
          font-weight: 400;
        }

        img {
          width: 20px;
        }
      }
    }
  }

  // 热门游戏
  @media (min-width: 1920px) {
    .trending-games {
      ul {
        display: flex;
      }

      li {
        flex: 1;
        min-width: 0;
      }
    }
  }

  @media (max-width: 1920px) {
    .trending-games {
      ul {
        white-space: nowrap;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      li {
        display: inline-block;
        width: 260px;
      }
    }
  }

  // 所有游戏
  @media (min-width: 1920px) {
    .all-games {
      ul {
        grid-template-columns: repeat(5, auto [col-start]);
        grid-row-gap: 30px;
        grid-column-gap: 40px;
      }
    }
  }

  @media (max-width: 1920px) and (min-width: 1400px) {
    .all-games {
      ul {
        grid-template-columns: repeat(4, auto [col-start]);
        grid-row-gap: 20px;
        grid-column-gap: 30px;
      }
    }
  }

  @media (max-width: 1400px) and (min-width: 960px) {
    .all-games {
      ul {
        grid-template-columns: repeat(3, auto [col-start]);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
      }
    }
  }

  @media (max-width: 960px) {
    .all-games {
      ul {
        grid-template-columns: repeat(2, auto [col-start]);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
      }
    }
  }

  @media (min-width: 960px) {
    .all-games {
      .title {
        span {
          font-size: 18px;
        }

        img {
          width: 20px;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .all-games {
      .title {
        span {
          font-size: 14px;
        }

        img {
          width: 15px;
        }
      }
    }
  }

  // 底部信息
  @media (min-width: 1500px) {
    footer {
      display: flex;
      align-items: center;

      .left {
        .button {
          width: 190px;
        }
      }
    }
  }

  @media (max-width: 1500px) {
    footer {
      .left {
        text-align: center;
        margin-bottom: 30px;

        .button {
          width: 300px;
          margin: 0 auto;
        }
      }
    }
  }

  @media (min-width: 960px) {
    footer {
      .right {
        ul {
          li {
            margin-left: 20px;

            &:first-child {
              margin-left: 0;
            }

            &:last-child {
              display: none;
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    footer {
      .right {
        ul {
          display: grid;
          grid-template-columns: repeat(2, auto [col-start]);
          grid-row-gap: 20px;
          grid-column-gap: 20px;
        }

        .discord {
          display: none;
        }
      }
    }
  }
</style>

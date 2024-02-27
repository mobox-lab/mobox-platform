    <div class="cmcnft">
//         <section class="under1">
// //             <img class="right-bg" src="@/assets/cmcnft/side.png" alt="">
//         </section>
//         <section class="under2">
            <img class="left-bg" src="@/assets/cmcnft/bg2.png" alt="">
        </section>
        <section class="under3">
            <img class="left-bg" src="@/assets/cmcnft/bg3.png" alt="">
            <img class="right-bg" src="@/assets/cmcnft/bg4.png" alt="">
        </section>
        <section class="under4">
            <img class="right-bg" src="@/assets/cmcnft/bg2.png" alt="">
        </section>
        <section class="under5">
            <img class="left-bg" src="@/assets/cmcnft/bg2.png" alt="">
        </section>
        
        <div class="page1">
            <div class="box">
                <img class="bg" src="@/assets/cmcnft/showbg.png" alt="">
                <div class="momo">
                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                    <img class="character" :src="getSelectEpicInfo.src" alt="">
                </div>
                <div class="info">
                    <div class="name">{{getSelectEpicInfo.name}}</div>
                    <img class="line" src="@/assets/cmcnft/splitline.png" alt="">
                    <div class="decs">{{getSelectEpicInfo.desc}}</div>
                </div>
            </div>

            <div class="select-scroll">
                <img @click="epicScrollTo(0)" class="arrow-left" src="@/assets/cmcnft/arrow1.png" alt="">
                <div class="scroll-contain">
                    <div ref="epicScroll" class="scroll-area">
                        <!-- <div class="momo-box" v-for="(item, idx) in 8" :key="idx"> -->
                        <div @click="selectEpic(0)" class="momo-box">
                            <div class="momo-box-top">
                                <div :class="`bg ${selectedEpic == 0 ? `active`:``}`"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="assets/images/cmcnft/momo1.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">CoinMarketCap<br />Robot</div>
                        </div>
                        <div @click="selectEpic(1)" class="momo-box">
                            <div class="momo-box-top">
                                <div :class="`bg ${selectedEpic == 1 ? `active`:``}`"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="assets/images/cmcnft/momo2.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">Danny<br />Dapporovsky</div>
                        </div>
                        <div @click="selectEpic(2)" class="momo-box">
                            <div class="momo-box-top">
                                <div :class="`bg ${selectedEpic == 2 ? `active`:``}`"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="assets/images/cmcnft/momo3.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">Bobo<br />Banana-Bot</div>
                        </div>
                        <div @click="selectEpic(3)" class="momo-box">
                            <div class="momo-box-top">
                                <div :class="`bg ${selectedEpic == 3 ? `active`:``}`"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="assets/images/cmcnft/momo4.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">Loda Team<br />Alliance</div>
                        </div>
                        <div @click="selectEpic(4)" class="momo-box">
                            <div class="momo-box-top">
                                <div :class="`bg ${selectedEpic == 4 ? `active`:``}`"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="assets/images/cmcnft/momo5.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">Goldorian<br />Smart Chainadore</div>
                        </div>
                        <div @click="selectEpic(5)" class="momo-box">
                            <div class="momo-box-top">
                                <div :class="`bg ${selectedEpic == 5 ? `active`:``}`"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="assets/images/cmcnft/momo6.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">Bino<br />Binancian Bot</div>
                        </div>
                        <div class="momo-box">
                            <div class="momo-box-top">
                                <div class="bg"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="@/assets/cmcnft/momoq.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">Coming Soon</div>
                        </div>
                        <div class="momo-box">
                            <div class="momo-box-top">
                                <div class="bg"></div>
                                <div class="momo-select-box">
                                    <img class="character" src="@/assets/cmcnft/momoq.png" alt="">
                                    <img class="shadow" src="@/assets/cmcnft/shadow.png" alt="">
                                </div>
                            </div>
                            <div class="name">Coming Soon</div>
                        </div>
                    </div>
                </div>
                <img @click="epicScrollTo(1)" class="arrow-right" src="@/assets/cmcnft/arrow2.png" alt="">
            </div>
        </div>

        <div class="page2">
            <div class="achieve-head">
                <div class="l-head"></div>
                <div class="r-head">
                    <div class="t1">Milestones</div>
                    <div class="t2">FREE TO PLAY</div>
                </div>
            </div>

            <div class="achieve-content">
                <div class="achieve-box">
                    <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="">
                    <img width="100" class="achieve-box-title" src="@/assets/cmcnft/head1.png" alt="">
                    <div class="amount">$200M+</div>
                    <div class="tip">Assets Under Management</div>
                    <div class="title">AUM</div>
                </div>
                <div class="achieve-box">
                    <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="">
                    <img width="100" class="achieve-box-title" src="@/assets/cmcnft/head2.png" alt="">
                    <div class="amount">$40M+</div>
                    <div class="tip">NFT Trades</div>
                    <div class="title">NFT Farmer</div>
                </div>
                <div class="achieve-box">
                    <img class="achieve-bg" src="@/assets/cmcnft/bgbox.png" alt="">
                    <img width="100" class="achieve-box-title" src="@/assets/cmcnft/head3.png" alt="">
                    <div class="amount">260K+</div>
                    <div class="tip">Players</div>
                    <div class="title">Community</div>
                </div>
            </div>
        </div>

        <div class="page3">
            <!-- <div> -->
            <div class="eco-head">
                <div class="l-head"></div>
                <div class="r-head">
                    <div class="t1">The MBOX Ecosystem</div>
                    <div class="t2">FREE TO PLAY</div>
                </div>
            </div>
            <!-- </div> -->
            <div class="eco-content">
                <div class="eco-menu">
                    <div @click="openIto(0)" :class="`section ${introIdx === 0 ? `active` : ``}`">About MBOX</div>
                    <div @click="openIto(1)" :class="`section ${introIdx === 1 ? `active` : ``}`">Buyback and Burn</div>
                    <div @click="openIto(2)" :class="`section ${introIdx === 2 ? `active` : ``}`">VeMBOX</div>
                    <div @click="openIto(3)" :class="`section ${introIdx === 3 ? `active` : ``}`">MOMO Creator</div>
                    <div @click="openIto(4)" :class="`section ${introIdx === 4 ? `active` : ``}`">ROAD MAP</div>
                </div>
                <div class="eco-box">
                    <div v-if="introIdx === 0" class="intro1">
                        <!-- <div class="desc">MOBOX是一个由社区驱动的平台，通过代币奖励来提高用户的参与度和娱乐性。MOBOX使用革命性的代币经济体系，很好的结合DeFi和NFT的优点，利用金融机制和游戏体系来赋予用户权力，创造了一个真正独特且持久的免费玩，轻松赚的生态系统。

MOBOX团队成员来自世界各地，团队构成充分体现了去中心化的精神。 自2017年以来，该团队由经验丰富的智能合约开发者和专业项目运营团队组成，团队开发的DApp智能合约安全承载了超过25亿美元的USDT资金流动。 随着DeFi的出现，有着多年游戏开发经验的团队思考出什么才是区块链平台，以及如何解决其他平台无法解决的问题的新方案。

每个项目都想努力提高用户对其产品的参与度，无论是让用户花费时间，精力还是金钱。但是无论是经济利益还是其他收益，都只有一个流动方向，就是利益链条是从用户向项目方流动。
MOBOX开发了一整套真正的去中心化工具和完善的智能合约生态系统，确保用户能真正参与，并且为自己在社区所做的贡献获得回报。 无论是流动性挖矿，设计和创建独特的NFT，进行游戏开发，亦或仅仅只是使用MOBOX平台提供的所有工具，每一个参与MOBOX生态系统并作出贡献的人都会获得平台的奖励。

MOBOX使用创新的邀请体系鼓励所有玩家向其他人发出邀请，奖励用户一起来嗨。 对于通过具有唯一识别特征的推荐方式进入平台的每位新用户，其推荐人会在新用户完成的所有成就中额外获得20％的奖励。 这种独特的关系就在在平台，推荐人和被邀请者之间创立，从而让MOBOX平台变成一个我为人人，人人为我的蓬勃发展的生态体系。
邀请体系将有10个受邀用户的名额限制，以确保该体系不被别有用心者利用和用于投机目的。 如果要增加邀请人数上限，欢迎大家用随时联系项目方获得支持。
                        </div> -->
                        <div class="video vertical-children">
                            <!-- <video class="player" :src="`assets/video/v${selectVIdx+1}.mp4`" controls="controls"></video> -->
                            <iframe width="100%" height="100%" 
                                :src="videoArr[selectVIdx].src" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                            <div class="video-list">
                                <div @click="chooseVideo(0)" :class="`li ${selectVIdx == 0 ? `active` : ``}`">
                                    <img class="bg" :src="videoArr[0].img" alt="">
                                    <img class="play" src="@/assets/cmcnft/play.png" alt="">
                                </div>
                                <div @click="chooseVideo(1)" :class="`li ${selectVIdx == 1 ? `active` : ``}`">
                                    <img class="bg" :src="videoArr[1].img" alt="">
                                    <img class="play" src="@/assets/cmcnft/play.png" alt="">
                                </div>
                                <div @click="chooseVideo(2)" :class="`li ${selectVIdx == 2 ? `active` : ``}`">
                                    <img class="bg" :src="videoArr[2].img" alt="">
                                    <img class="play" src="@/assets/cmcnft/play.png" alt="">
                                </div>
                                <div @click="chooseVideo(3)" :class="`li ${selectVIdx == 3 ? `active` : ``}`">
                                    <img class="bg" :src="videoArr[3].img" alt="">
                                    <img class="play" src="@/assets/cmcnft/play.png" alt="">
                                </div>
                            </div>

                            <!-- <img src="assets/video/v1.mp4" alt=""> -->
                        </div>
                    </div>
                    <div v-if="introIdx === 1" class="intro2">
                        <div class="titles">
                            <div class="title1">
                                <div>Buyback Pool</div>
                                <div style="color:#FAB408">{{`$${getBuyback.amount}`}}</div>
                            </div>
                            <div class="title2">
                                <div>Total Burn</div>
                                <div style="color:#FAB408">{{`MBOX ${getBuyback.moboxBurn}`}}</div>
                            </div>
                        </div>
                        <div class="process"></div>
                    </div>
                    <div v-if="introIdx === 2" class="intro3">
                        <div class="titles">
                            <div class="title1">
                                <div>Total MBOX Staked</div>
                                <div style="color:#FAB408">{{mboxInfo.totalMobox}}</div>
                            </div>
                            <div class="title2">
                                <div>Total veMBOX</div>
                                <div style="color:#FAB408">{{mboxInfo.totalVemobox}}</div>
                            </div>
                        </div>
                        <div class="title3">
                            <div>Average Stake Time(D)</div>
                            <div style="color:#FAB408">{{mboxInfo.avglockdays}}</div>
                        </div>

                        <div class="title4">
                            ·veMBOX will be used as the only voting token for exportant decision on the MOBOX platform.  veMBOX can only be obtained through staking MBOX. 
                            <br />
                            <br />
                            ·veMBOX cannot be traded. 
                            <br />
                            <br />
                            ·veMBOX also gives a bonus weight boost for KEY mining, up to 3X (use the calculator to estimate how much veMBOX is needed). 
                        </div>
                    </div>
                    <DrawItem v-if="introIdx === 3" />
                    <div v-if="introIdx === 4" class="intro5">
                        <div class="stgae">
                            <img class="clock" src="@/assets/cmcnft/clock.png" alt="">
                            <div class="quater">Q4 2020</div>
                            <div class="schdule">
                                <div class="line_m">MOBOX platform Stage 1 development</div> 
                                <div class="line_m">MOBOX Decentralized Wallet</div> 
                                <div class="line_m">MOBOX Centralized Wallet (BOX)</div> 
                            </div>
                            <div class="end">Complete</div>
                        </div>
                        <div class="line"></div>
                        <div class="stgae">
                            <img class="clock" src="@/assets/cmcnft/clock.png" alt="">
                            <div class="quater">Q1 2021</div>
                            <div class="schdule">
                                <div class="line_m">MOBOX Alpha Launch</div> 
                                <div class="line_m">Optimized Yield Farming Contracts on Ethereum</div> 
                                <div class="line_m">(changed to BSC due to high gas fees and better yields for users)</div> 
                                <div class="line_m">Complete NFT Smart Contracts</div> 
                                <div class="line_m">Introduce Free to play</div> 
                            </div>
                            <div class="end">Complete</div>
                        </div>
                        <div class="line"></div>
                        <div class="stgae">
                            <img class="clock" src="@/assets/cmcnft/clock.png" alt="">
                            <div class="quater">Q2 2021</div>
                            <div class="schdule">
                                <div class="line_m">MOBOX Free to play</div> 
                                <div class="line_m">MOMO: Token Master (Casual PVP game)</div> 
                                <div class="line_m">MOBOX MOMO NFT decentralized exchange</div> 
                                <div class="line_m">Optimize Yield Farming contracts for higher yield</div> 
                                <div>New Yield Farming Strategy through VAI token </div> 
                                <div>MOBOX Bridge for Cross Chain NFT support</div> 
                            </div>
                            <div class="end"></div>
                        </div>
                        <div class="line"></div>
                        <div class="stgae">
                            <img class="clock" src="@/assets/cmcnft/clock.png" alt="">
                            <div class="quater">Q3 2021</div>
                            <div class="schdule">
                                <div>MOBOX NFT Creator Platform</div> 
                                <div>veMBOX Booster Smart Contract</div> 
                                <div>MOMO: Block Brawler Game (Game #2)</div> 
                                <div>Cross Chain Yield Farming</div> 
                                <div>e-sports player and streamer Legendary NFT</div> 
                                <div>Major Exchange Listing</div> 
                                <div>Multiple token Mining Pool</div> 
                            </div>
                            <div class="end"></div>
                        </div>
                        <div class="line"></div>
                        <div class="stgae">
                            <img class="clock" src="@/assets/cmcnft/clock.png" alt="">
                            <div class="quater">Q4 2021</div>
                            <div class="schdule">
                                <div>Game Creator API for third party developers</div> 
                                <div>Partner Tier 1 IP for Legendary MOMO NFT</div> 
                                <div>MOMO: Tactical Party Slayer (Game #3)</div> 
                                <div>Platform wide chat system</div> 
                            </div>
                            <div class="end"></div>
                        </div>
                        <div class="line"></div>
                        <div class="stgae">
                            <img class="clock" src="@/assets/cmcnft/clock.png" alt="">
                            <div class="quater">Q1 2022</div>
                            <div class="schdule">
                                <div>Onboard first third party developer to utilize APIs</div>
                                <div>Expand on Tier 1 IP for Legendary MOMO NFT</div>
                                <div>Expand Cross Chain Yield Farming</div>
                            </div>
                            <div class="end"></div>
                        </div>
                        <div class="line"></div>
                        <div class="stgae">
                            <img class="clock" src="@/assets/cmcnft/clock.png" alt="">
                            <div class="quater">Q2 2022</div>
                            <div class="schdule">
                                <div>Voting platform for users to vote on NFTs and Games to be released</div>
                                <div>Continue to Expand on Tier 1 IP for Legendary MOMO NFT</div>
                                <div>Expand on Achievement system to increase engagement and retention</div>
                                <div>Complete and optimize APIs with Publisher NFT ID to track revenue share</div>
                            </div>
                            <div class="end"></div>
                        </div>
                        <div class="line"></div>

                    </div>
                </div>
            </div>
        </div>

        <div class="page4">
            <div class="game-head">
                <div class="l-head"></div>
                <div class="r-head">
                    <div class="t1">Gaming NFTs</div>
                    <div class="t2">FREE TO PLAY</div>
                </div>

                <img class="slogan" src="@/assets/cmcnft/slogan.png" alt="">
            </div>

            <div class="game-box">
                <div class="game-hero-box">
                    <div id="hero-spine" class="hero"></div>
                </div>
                <div class="game-hero-right">
                    <div class="right-box">
                        <div class="heroarr">
                            <img class="hero1" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_1.png`" alt="">
                            <img class="hero2" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_2.png`" alt="">
                            <img class="hero3" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_3.png`" alt="">
                            <img class="hero4" width="120" :src="`./assets/images/heroes/momo_${selectMomoId}/momo_${selectMomoId}_4.png`" alt="">
                        </div>
                        <div class="detailnamebox">
                            <img width="30" src="@/assets/landing/elements/fire.webp" alt="">
                            <!-- {{getName}} -->
                            <div class="name">{{getName.normalName}}</div>
                            <div>▶</div>
                            <div class="name">{{getName.upgradeName}}</div>
                        </div>
                        <div class="detailinfo">{{getDescribe}}</div>
                    </div>
                </div>
            </div>

            <div class="game-scroll vertical-children">
                <img @click="heroScrollTo(0)" class="arrow" style="display: inline-block;" src="@/assets/cmcnft/arrowl.png" alt="">
                <div ref="heroscroll" class="heroscroll">
                    <div id="herocategory" class="herocategory">
                        <div class="momo-cate-box" v-for="(item, idx) in momoArr" :key="idx">
                            <img :class="`light-item ${selectMomoId === item.id ? `light-active` : ``}`" src="@/assets/cmcnft/light.png" alt="">
                            <img @click="selectMomo(item)"  :class="`momo-item ${selectMomoId === item.id ? `momo-active` : ``}`" :momoid="item.id" :src="`./assets/images/heroes/momo_${item.id}/momo_${item.id}_4.png`" alt="">
                        </div>
                        <!-- <img src="@/assets/landing/hero/hero3.webp" alt=""> -->
                    </div>
                </div>
                <img @click="heroScrollTo(1)" class="arrow" style="display: inline-block;" src="@/assets/cmcnft/arrowr.png" alt="">
            </div>
        </div>

        <div class="page5">
            <div class="contact-head">
                <div class="l-head"></div>
                <div class="r-head">
                    <div class="t1">THIS IS OUR COMMUNITY!</div>
                    <div class="t2">FREE TO PLAY</div>
                </div>

                <div class="contact-area">
                    <div @click="selectCon(0)" :class="`contact-box ${selectContact == 0 ? `active` : ``}`">
                        <img class="contact-light" width="100" src="@/assets/cmcnft/light.png" alt="">
                        <img class="contact-item" width="100" src="assets/images/cmcnft/tele.svg" alt="">
                    </div>
                    <div @click="selectCon(1)" :class="`contact-box ${selectContact == 1 ? `active` : ``}`">
                        <img class="contact-light" width="100" src="@/assets/cmcnft/light.png" alt="">
                        <img class="contact-item" width="100" src="assets/images/cmcnft/twitter.svg" alt="">
                    </div>
                    <div @click="selectCon(2)" :class="`contact-box ${selectContact == 2 ? `active` : ``}`">
                        <img class="contact-light" width="100" src="@/assets/cmcnft/light.png" alt="">
                        <img class="contact-item" width="100" src="assets/images/cmcnft/wechat.svg" alt="">
                    </div>
                    <div @click="selectCon(3)" :class="`contact-box ${selectContact == 3 ? `active` : ``}`">
                        <img class="contact-light" width="100" src="@/assets/cmcnft/light.png" alt="">
                        <img class="contact-item" width="100" src="assets/images/cmcnft/discord.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="contact-content">
                <div class="contact-left">
                    <div class="logo">
                        <img width="100" :src="getContact.src" alt="">
                    </div>
                    <div class="info">
                        <div>{{getContact.name}}</div>
                        <div style="color:#FAB408">{{getContact.amount}}</div>
                    </div>
                </div>
                <div class="contact-right">
                    <div>Communicate on different themes, share your game successes, find friends and like-minded people! Join our chat now!</div>
                    <div v-if="selectContact == 2" class="code">
                        <img src="@/assets/index/homeqrcode.jpg" alt="">
                    </div>
                    <div v-else @click="openContact" class="sub-btn">Subscribe</div>
                </div>
            </div>
        </div>

        <div class="page6">
            <div class="team-head">
                <div class="l-head"></div>
                <div class="r-head">
                    <div class="t1">Strategic Partners</div>
                    <div class="t2">FREE TO PLAY</div>
                </div>

                <!-- <img height="40" class="logo" src="@/assets/head1.png" alt=""> -->
            </div>

            <div class="team-content">
                <div class="team-group">
                    <img @click="openMate(`cmc`)" class="left" src="@/assets/cmcnft/group3.png" alt="">
                    <img @click="openMate(`bsc`)" class="middle" src="@/assets/cmcnft/group1.png" alt="">
                    <img @click="openMate(`pancake`)" class="right" src="@/assets/cmcnft/group2.png" alt="">
                </div>
                <div class="team-group">
                    <img @click="openMate(`math`)" class="left" src="@/assets/cmcnft/group4.png" alt="">
                    <img @click="openMate(`dapp`)" class="middle" src="@/assets/cmcnft/group5.png" alt="">
                    <img @click="openMate(`tp`)" class="right" src="@/assets/cmcnft/group6.png" alt="">
                </div>
                <div class="team-group sb-demand">
                    <img @click="openMate(`ape`)" class="left" src="@/assets/cmcnft/group7.png" alt="">
                    <img @click="openMate(`cko`)" class="middle" src="@/assets/cmcnft/group8.png" alt="">
                    <img @click="openMate(`certik`)" class="right" src="@/assets/cmcnft/group9.png" alt="">
                </div>
                <div class="bottom-group">
                    <img @click="openMate(`bnft`)" class="left" src="@/assets/cmcnft/group10.png" alt="">
                    <img @click="openMate(`africa`)" class="middle" src="@/assets/cmcnft/group11.png" alt="">
                    <img @click="openMate(`a`)" class="right" src="@/assets/cmcnft/group12.png" alt="">
                </div>
            </div>
        </div>

        <div class="footer">
            <img height="36" class="logo" src="@/assets/head1.png" alt="">
            <div class="menu-contact">
                <a target="_blank" href="https://twitter.com/MOBOX_Official"><img type="twitter" src="@/assets/index/twitter.webp"></a>
                <a target="_blank" href="https://t.me/mobox_io"><img type="tele" src="@/assets/index/telegram.webp"></a>
                <!-- <a target="_blank" href="https://open.kakao.com/o/g82ljd4b"><img type="kakao" src="@/assets/index/kakao.webp"></a> -->
                <a target="_blank" href="https://discord.com/invite/mobox"><img type="kakao" src="@/assets/index/discord.png"></a>
                <div class="link">
                    <img class="icon" type="weibo" src="@/assets/index/wechat.png">
                    <img class="code" src="@/assets/index/homeqrcode.jpg" alt="">
                </div>
            </div>
            <div class="bottom">Copyright © 2021 MOBOX DIGITAL CO., LTD. All rights reserved.</div>

            <!-- <img class="bot1" src="@/assets/cmcnft/bot1.png" alt="">
            <img class="bot2" src="@/assets/cmcnft/bot2.png" alt=""> -->
        </div>
    </div>
</template>

<script>
export {momoCfgs} from '../landing/config';
export request from "@/utils/request";
export {API_BUYBACK_AMOUNT, API_AVG_DAYS} from '@/utils/constant';
export { Common } from "@/utils";
export DrawItem from "./drawItem.vue";
export {MATE_LINK} from "@/utils/enums.js"

export default {
    components:{
        DrawItem
    },
    data(){
        return {
            selectMomoId:0,
            selectVIdx:0,
            selectedEpic:0,
            selectContact:0,

            introIdx : 0,
            epicArr:[
                {name: `CoinMarketCap Robot`, src:`assets/images/cmcnft/momo1.png`, desc:`Meet Mr Roberto C.M.C Datatrom , He is flashy, he is Unique, he is super intelligent & always on the move! Watch him as he nuts through data, collaborates statistics & is up for for any challenge & ready to take on any of the MOMOs in the MOBOX Meterverse.`},
                {name: `Danny Dapporovsky`, src:`assets/images/cmcnft/momo2.png`, desc:` He is a unique & quick-witted number cruncher grasping all mathematical concepts and strategies quickly. He works through data & stats to compile the best outcome better than anyone in his field. Keep your eyes peeled for this numbers man he's ready to show off his sharp skills!`},
                {name: `Bobo Banana-Bot`, src:`assets/images/cmcnft/momo3.png`, desc:`Deep in the Apeswaposhphere Jungle lies a rare simian primate. Half bot half mammal. His mighty monkey-like attributes help him swing from tree to tree as he swaps from bot to monkey in the blink of an eye. Collect this banana loving tree hugger for your chance to see him in action.`},
                {name: `Loda Team Alliance`, src:`assets/images/cmcnft/momo4.png`, desc:`This unique guy is a famous E sports fan and takes Gaming to the next level. He is one of a kind and a leader in his pack. Collect this Rare Unique MOMO NFT for your chance to get a hold of a piece of E sports History!!`},
                {name: `Goldorian Smart Chainadore`, src:`assets/images/cmcnft/momo5.png`, desc:`This unique feisty little guy blocks any unwanted predators from getting through to protect his community.Watch him flex in and out of ledgers of information adapting morphing and blocking any evil.`},
                {name: `Bino Binancian Bot`, src:`assets/images/cmcnft/momo6.png`, desc:`he Is an engineered people pleaser with a tough outer chamber, helping charity is one of his sweeter roles. He is one of the main men in the Cryptosphere.  With his most powerful features & attributes being that he is brisk and quick to rush & assist his realm & people with swift & easy exchanges & transactions`},
            ],
            contactArr:[
                {name: `Telegram`, link:"https://t.me/mobox_io", src:`assets/images/cmcnft/tele.svg`, amount: "60K+"},
                {name: `Twitter`, link:"https://twitter.com/MOBOX_Official", src:`assets/images/cmcnft/twitter.svg`, amount: "80K+"},
                {name: `Wechat`, link:"", src:`assets/images/cmcnft/wechat.svg`, amount: "5K+"},
                {name: `Discord`, link:"https://discord.com/invite/mobox", src:`assets/images/cmcnft/discord.svg`, amount: "10K+"},
            ],
            videoArr:[
                {src:"https://www.youtube.com/embed/00q7_Vjo2zI", img:"https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d049ac0ea9174ea8238494_Frame%2014.png"},
                {src:"https://www.youtube.com/embed/CoAx_NQSOWY", img:"https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d04a6ff766a650e2330a5e_Frame%2015.png"},
                {src:"https://www.youtube.com/embed/zfZGHH_uiFg", img:"https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d04b9dcf11cbcfe013fb6e_3.png"},
                {src:"https://www.youtube.com/embed/JiFESMpKjU8", img:"https://assets-global.website-files.com/5f15b505dd58c1501a49d387/60d04bdf06a4a7a730bba763_4.png"},
            ],

            buybackInfo:{amount:0, moboxBurn :0},
            mboxInfo:{
                avglockdays : 0,
                totalMobox : 0,
                totalVemobox : 0
            }
        }
    },
    computed:{
        getBuyback(){
            const {amount, moboxBurn} = this.buybackInfo;

            return {
                amount : Common.convert(Common.numFloor(amount, 1)),
                moboxBurn : Common.numFloor(Number(moboxBurn) / 1e18, 1).toLocaleString()
            }
        },
        getContact(){
            return this.contactArr[this.selectContact]
        },
        momoArr(){
            let arr = Object.values(momoCfgs);
            arr.sort((a,b)=>{return a.index - b.index})

            return arr
        },
        getSelectEpicInfo(){
            return this.epicArr[this.selectedEpic];
        },
        getName(){
            if(momoCfgs[this.selectMomoId]){
                const normalName = momoCfgs[this.selectMomoId].normalName;
                const upgradeName = momoCfgs[this.selectMomoId].upgradeName;

                return {
                    normalName : this.$t(normalName),
                    upgradeName : this.$t(upgradeName)
                }
            } else {
                return {
                    normalName:'',
                    upgradeName:''
                }
            }
        },
        getDescribe(){
            if(momoCfgs[this.selectMomoId]) {
                return this.$t(momoCfgs[this.selectMomoId].describe)
            } else{
                return ''
            }
        },
    },
    methods:{
        openMate(title){
            window.open(MATE_LINK[title]);
        },
        async checkBaseInfos(){
            this.checkBuyBack();
            this.checkAvgInfos();
        },
        async checkBuyBack(){
            try{
                const {amount, moboxBurn} = await request(API_BUYBACK_AMOUNT, {
                    method: 'GET'
                });

                this.buybackInfo = {amount, moboxBurn}
            }catch{
                console.log("error")
            }
        },
        async checkAvgInfos(){
            try{
                const {avglockdays, totalMobox, totalVemobox} = await request(API_AVG_DAYS, {
                    method: 'GET'
                });

                this.mboxInfo = {
                    totalMobox : Common.convert(Math.floor(totalMobox)),
                    totalVemobox : Common.convert(Math.floor(totalVemobox)),
                    avglockdays : Math.floor(avglockdays)
                }
            }catch{
                console.log("error")
            }
        },
        selectCon(idx){
            this.selectContact = idx;
        },
        heroScrollTo(side){
            if(side == 0){
                
                console.log("????")
                this.$refs.heroscroll.scrollBy(-80, 0)
            } else if(side == 1){
                
                this.$refs.heroscroll.scrollBy(80, 0)
            }
        },
        epicScrollTo(side){
            if(side == 0){
                
                console.log("????")
                this.$refs.epicScroll.scrollBy(-80, 0)
            } else if(side == 1){
                
                this.$refs.epicScroll.scrollBy(80, 0)
            }
        },
        openContact(){
            window.open(this.getContact.link)
        },
        selectEpic(idx){
            this.selectedEpic = idx;
        },
        chooseVideo(idx){
            this.selectVIdx = idx;
        },
        openIto(idx){
            // console.log(idx)
            this.introIdx = idx;
        },
        selectMomo(item){
            this.selectMomoId = item.id;
            this.setHeroSpine();
        },
        setHeroSpine(){
            new window.spine.SpineWidget("hero-spine", {
                json: `./assets/images/herospine/momo_${this.selectMomoId}/momo_${this.selectMomoId}.json`,
                atlas: `./assets/images/herospine/momo_${this.selectMomoId}/momo_${this.selectMomoId}.atlas`,
                // json: "./assets/images/box/skeleton.json",
                // atlas: "./assets/images/box/skeleton.atlas",
                backgroundColor: "#00000000",
                animation: "animation",
                fitToCanvas: false,
                loop: true,
                scale: 0.3,
                x: 110,
                y: 110
            });
            // console.log(spineData)
        }
    },
    mounted(){
        this.selectMomoId = this.momoArr[0].id;
        this.setHeroSpine();

        this.checkBaseInfos();
    },
}
</script>

<style lang="less" scoped>
    .cmcnft{
        margin-top: 70px;
        background: rgb(32, 34, 38);

        overflow: hidden;

        .line_m{text-decoration:line-through}

        .under1{
            position: absolute;
            left: 0;
            width: 100vw;
            height: calc(100vh - 70px);
            top: 70px;

            background: url(../../assets/cmcnft/bg1.jpg) no-repeat;
            background-size: cover;

            .left-bg{
                position: absolute;
                height: 50%;
                left: 0;
                top: 0;
            }

            .right-bg{
                position: absolute;
                height: 50%;
                right: 0;
                bottom: 0;
                transform: rotate(180deg);
            }
        }

        .under2{
            position: absolute;
            top: 100vh;
            height: 50vh;
            width: 100%;

            .left-bg{
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
            }
        }

        .under3{
            position: absolute;
            top: 150vh;
            height: 50vh;
            width: 100%;

            .left-bg{
                position: absolute;
                left: 0;
                top: 50%;
                height: 50%;
                transform: translate(0, -50%);
            }

            .right-bg{
                position: absolute;
                right: 0;
                top: 50%;
                height: 50%;
                transform: translate(0, -50%);
            }
        }

        .under4{
            position: absolute;
            top: 200vh;
            height: 50vh;
            width: 100%;

            .right-bg{
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                transform: rotate(180deg);
            }
        }

        .under5{
            position: absolute;
            top: 250vh;
            height: 50vh;
            width: 100%;

            .left-bg{
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
            }
        }

        .page1{
            position: relative;
            margin: 10% auto 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 90%;

            .box{
                position: relative;
                display: flex;
                align-items: flex-end;
                margin-bottom: 85px;

                .bg{
                    position: absolute;
                    bottom: -15%;
                    left: -15%;
                    height: 95%;
                }

                .momo{
                    position: relative;
                    margin-right: 40px;
                    height:258px;

                    .character{
                        position: relative;
                        width: 280px;
                    }

                    .shadow{
                        width: 100%;
                        position: absolute;
                        bottom: -20px;
                        left: 0;
                    }
                }

                .info{
                    position: relative;
                    width: 500px;

                    .name{
                        font-family: Bigb;
                        white-space: nowrap;
                        font-size: 55px;
                        font-weight: 400;
                        color: #FFFFFF;
                    }

                    .line{
                        max-width: 300px;
                        margin: 10px 0;
                    }

                    .decs{
                        max-width: 500px;
                        min-height: 110px;
                    }
                }
            }

            .select-scroll{
                display: flex;
                width: 110%;
                justify-content: center;
                align-items: center;

                .arrow-left{
                    cursor: pointer;
                    width: 35px;
                }

                .arrow-right{
                    cursor: pointer;
                    width: 35px;
                }

                .scroll-contain{
                    width: 800px;
                    max-width: 80%;
                    margin: 0 20px;

                    .scroll-area{
                        width: 100%;
                        white-space: nowrap;
                        overflow: auto;
                        padding: 20px 10px;

                        .momo-box{
                            display: inline-block;
                            vertical-align: middle;
                            align-items: center;
                            position: relative;
                            width: 150px;
                            cursor: pointer;
                            text-align: center;

                            .momo-box-top{
                                margin: auto;
                                position: relative;
                                height: 105px;
                                width: 90%;
                                display: flex;
                                align-items: flex-end;

                                .bg{
                                    transform: skew(15deg);
                                    width: 100%;
                                    height: 82px;
                                    background: #2E2E2E;
                                    border: 2px solid;
                                    border-image: linear-gradient(0deg, transparent, transparent) 2 2;
                                    // border-image: linear-gradient(0deg, #1B1C1D, #1578FF) 2 2;
                                }    

                                .active{
                                    border-image: linear-gradient(0deg, #1B1C1D, #1578FF) 2 2;
                                }

                                .momo-select-box{
                                    position: absolute;
                                    width: 70%;
                                    bottom: 20px;
                                    left: 50%;
                                    transform: translate(-50%, 0);

                                    .character{
                                        position: relative;
                                        z-index: 5;
                                        width: 100%;
                                    }

                                    .shadow{
                                        left: 50%;
                                        position: absolute;
                                        width: 120%;
                                        transform: translate(-50%, 0);
                                        bottom: -15px;
                                    }
                                }
                            }

                            .name{
                                font-size: 12px;
                                margin-top: 10px;
                                width: 80%;
                                margin: auto;
                                height: 36.8px;
                                word-break: break-all;
                                white-space: break-spaces;
                            }
                        }
                    }

                }

                .scroll-area::-webkit-scrollbar {
                    width: 4px;     
                    height: 4px;
                    scrollbar-arrow-color:red;
                }
                .scroll-area::-webkit-scrollbar-thumb {
                    border-radius: 5px;
                    background: rgba(0,0,0,0.2);
                    scrollbar-arrow-color:red;
                }
                .scroll-area::-webkit-scrollbar-track {
                    border-radius: 0;
                    background: rgba(0,0,0,0.1);
                }

            }
        }

        .page2{
            position: relative;
            width: 80%;
            max-width: 1150px;
            margin: 10% auto 0 auto;

            .achieve-head{
                display: flex;

                .r-head{
                    margin-left: 27px;
                    display: flex;
                    flex-direction: column;
                    height: 54px;
                    justify-content: space-between;

                    .t1{
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
            }

            .achieve-content{
                display: flex;
                justify-content: space-between;
                margin-top: 20px;

                .achieve-box{
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    justify-content: center;
                    align-items: center;

                    border: 1px solid #6A4B98;
                    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
                    border-radius: 10px;
                    width: 25%;
                    height: 350px;

                    .achieve-box-title{
                        margin-bottom: 15px;
                    }

                    div{
                        position: relative;
                    }
                    
                    img{
                        position: relative;
                    }
                    
                    .amount{
                        font-size: 30px;
                        color: #FAB408;
                        font-weight: bold;
                    }

                    .tip{
                        font-size: 12px;
                    }

                    .title{
                        padding: 5px 10px;
                        background: #202226;
                        border: 1px solid #707070;
                        border-radius: 18px;
                        font-size: 14px;
                        margin-top: 40px;
                    }
                    
                    .achieve-bg{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        left: 50%;
                        transform: translate(-50%, 0);
                    }
                }

            }
        }

        .page3{
            position: relative;
            width: 80%;
            max-width: 1150px;
            margin: 10% auto 0 auto;

            .eco-head{
                display: flex;
                flex-direction: row-reverse;

                .r-head{
                    text-align: right;
                    margin-right: 27px;
                    display: flex;
                    flex-direction: column;
                    height: 54px;
                    justify-content: space-between;

                    .t1{
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
            }
            
            .eco-content{
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .eco-menu{
                    padding: 5px 10px;
                    width: 25%;
                    background: linear-gradient(315deg, rgba(73,160,253, 0.23) 0%, rgba(167,61,254,0.23) 100%);
                    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
                    border-radius: 10px;

                    .section{
                        cursor: pointer;
                        width: 100%;
                        height: 69px;
                        background: #282B2F;
                        box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                        border-radius: 10px;
                        margin: 20px 0;
                        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .active{
                        background: url('../../assets/cmcnft/selectbg.png') no-repeat;
                        background-size: cover;
                    }
                }

                .eco-box{
                    width: 70%;
                    // background: blue;
                    height: 475px;

                    .intro1{
                        height: 100%;

                        .desc{
                            width: 100%;
                            height: 30%;
                            overflow: auto;
                        }

                        .video{
                            // height: 70%;
                            height: 100%;
                            display: flex;
                            align-items: center;

                            .player{
                                width: 81%;
                                max-height: 100%;
                            }

                            .video-list{
                                display: inline-block;
                                width: 30%;
                                // height: 100%;
                                padding: 0 10px;

                                .li{
                                    cursor: pointer;
                                    border: 1px solid transparent;
                                    width: 100%;
                                    border-radius: 10px;
                                    overflow: hidden;
                                    margin: 15px 0;
                                    position: relative;

                                    .bg{
                                        width: 100%;
                                    }

                                    .play{
                                        position: absolute;
                                        width: 30px;
                                        left: 50%;
                                        top: 50%;
                                        transform:translate(-50% , -50%);
                                    }
                                }

                                .active{
                                    border: 1px solid #FAB408;
                                    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
                                }
                            }
                        }
                    }

                    .intro2{
                        width: 100%;
                        height: 100%;

                        display: flex;
                        flex-direction: column;

                        .titles{
                            display: flex;
                            justify-content: space-between;
                            width: 100%;

                            .title1{
                                background: rgba(40,43,47, 0.5);
                                border: 1px solid rgba(112, 112, 112, 0.5);
                                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                                border-radius: 10px;
                                width: 48%;
                                text-align: center;
                                font-weight: bold;
                                padding: 8px 0;
                            }
    
                            .title2{
                                background: rgba(40,43,47, 0.5);
                                border: 1px solid rgba(112, 112, 112, 0.5);
                                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                                border-radius: 10px;
                                width: 48%;
                                text-align: center;
                                font-weight: bold;
                                padding: 8px 0;
                            }
                        }

                        .process{
                            flex: 1;
                            margin-top: 60px;
                            width: 100%;
                            // background: red;
                            background: url('../../assets/cmcnft/process.png') no-repeat;
                            background-size: contain;
                        }
                    }

                    .intro3{
                        width: 100%;
                        height: 100%;

                        display: flex;
                        flex-direction: column;

                        .titles{
                            display: flex;
                            justify-content: space-between;
                            width: 100%;

                            .title1{
                                background: rgba(40,43,47, 0.5);
                                border: 1px solid rgba(112, 112, 112, 0.5);
                                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                                border-radius: 10px;
                                width: 48%;
                                text-align: center;
                                font-weight: bold;
                                padding: 8px 0;
                            }
    
                            .title2{
                                background: rgba(40,43,47, 0.5);
                                border: 1px solid rgba(112, 112, 112, 0.5);
                                box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                                border-radius: 10px;
                                width: 48%;
                                text-align: center;
                                font-weight: bold;
                                padding: 8px 0;
                            }
                        }

                        .title3{
                            margin-top: 20px;
                            background: rgba(40,43,47, 0.5);
                            border: 1px solid rgba(112, 112, 112, 0.5);
                            box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                            border-radius: 10px;
                            width: 100%;
                            text-align: center;
                            font-weight: bold;
                            padding: 8px 0;
                        }

                        .title4{
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                        }
                    }

                    .intro5{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        overflow: auto;

                        .stgae{
                            display: flex;
                            position: relative;

                            div{
                                display: inline-block;
                            }

                            .clock{
                                width: 25px;
                                height: 25px;
                                margin-right: 20px;
                            }                

                            .quater{
                                width: 100px;
                                color: #FAB408;
                                font-weight: bold;
                            }

                            .schdule{
                                div{
                                    display: block;
                                }
                            }

                            .end{
                                position: absolute;
                                right: 0;
                                top: 0;
                                font-weight: bold;
                                color: #FAB408;
                            }

                        }

                        .line{
                            margin: 20px 0;
                            width: 100%;
                            height: 0px;
                            border-top: 1px solid #34363B;
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .page4{
            position: relative;
            width: 80%;
            max-width: 1150px;
            margin: 10% auto 0 auto;

            .game-head{
                display: flex;
                position: relative;

                .r-head{
                    margin-left: 27px;
                    display: flex;
                    flex-direction: column;
                    height: 54px;
                    justify-content: space-between;

                    .t1{
                        font-size: 20px;
                        font-weight: bold;
                    }
                }

                .slogan{
                    position: absolute;
                    height: 60px;
                    right: 0;
                    top: 50%;
                    transform: translate(0, -50%);
                }
            }

            .game-box{
                display: flex;
                border: 1px solid #34363B;
                box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
                border-radius: 10px;
                margin: 30px 0;

                .game-hero-box{
                    // background: #282B2F;
                    background: linear-gradient(145deg,#30bafd,#c320ff);
                    border-radius: 10px;
                    box-shadow: 0px 3px 12px rgba(38, 68, 152, 0.1);
                    opacity: 1;
                    position: relative;

                    width: 300px;
                    height: 300px;

                    .hero{
                        width: 230px;
                        height: 230px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);

                        /deep/ canvas{
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%) scale(1.3);
                            width: 230px!exportant;
                            height: 230px!exportant;
                        }
                    }
                }

                .game-hero-box::before{
                    content: "";
                    position: absolute;
                    // background: linear-gradient(145deg,#30bafd,#c320ff);
                    background: #282B2F;
                    left: 3px;
                    top: 3px;
                    bottom: 3px;
                    right: 3px;
                    z-index: 0;
                    border-radius: 10px;
                }

                .game-hero-right{
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .detailnamebox{
                        display: flex;
                        align-items: center;

                        .name{
                            margin: 0 10px;
                            font-size: 18px;
                            font-weight: bold;
                        }

                    }

                    .detailinfo{
                        margin-top: 10px;
                    }
                }
            }

            .game-scroll{
                text-align: center;
                margin-top: 20px;
                user-select: none;

                .arrow{
                    width: 30px;
                    cursor: pointer;
                    transition: 0.2s all;
                }

                .arrow:hover{
                    transform: translate(-2px, -2px);
                }

                .heroscroll{
                    display: inline-block;
                    width: 90%;
                    overflow-x: auto;
                    overflow-y: hidden;
                }

                .heroscroll::-webkit-scrollbar {
                    width: 4px;     
                    height: 4px;
                    scrollbar-arrow-color:red;
                }
                .heroscroll::-webkit-scrollbar-thumb {
                    border-radius: 5px;
                    background: rgba(0,0,0,0.2);
                    scrollbar-arrow-color:red;
                }
                .heroscroll::-webkit-scrollbar-track {
                    border-radius: 0;
                    background: rgba(0,0,0,0.1);
                }

                .herocategory{
                    white-space: nowrap;
                    padding: 20px 0;

                    .momo-cate-box{
                        display: inline-block;
                        position: relative;

                        .momo-item{
                            -webkit-filter: grayscale(1); /* Webkit */  
                            filter: gray; /* IE6-9 */    
                            filter: grayscale(1); /* W3C */
                            opacity: 0.4;
                            transform: translateY(10px);
    
                            cursor: pointer;
                            width: 50px;
                            margin: 0 8px;
    
                            transition: 0.5s all;
                        }

                        .light-item{
                            transition: 0.5s all;

                            position: absolute;
                            // left: 0;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            opacity: 0;

                            width: 100px;
                        }

                        .light-active{
                            opacity: 1;
                        }
                    }

                }
            }
        }

        .page5{
            position: relative;
            width: 80%;
            max-width: 1150px;
            margin: 10% auto 0 auto;

            .contact-head{
                display: flex;
                flex-direction: row-reverse;
                position: relative;

                .r-head{
                    text-align: right;
                    margin-right: 27px;
                    display: flex;
                    flex-direction: column;
                    height: 54px;
                    justify-content: space-between;

                    .t1{
                        font-size: 20px;
                        font-weight: bold;
                    }
                }

                .contact-area{
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate(0, -50%);

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .contact-box{
                        position: relative;
                        padding: 10px;
                        overflow: hidden;
                        cursor: pointer;
                        
                        .contact-item{
                            position: relative;
                            width: 35px;
                        }

                        .contact-light{
                            position: absolute;
                            opacity: 0;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            width: 105px;
                        }
                    }

                    .active{
                        .contact-item{
                            position: relative;
                            width: 47px;
                        }

                        .contact-light{
                            opacity: 1;
                        }
                    }
                }
            }

            .contact-content{
                margin-top: 20px;
                width: 100%;
                border: 1px solid #6A4B98;
                box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
                border-radius: 10px;
                padding: 18px;
                display: flex;

                .contact-left{
                    display: flex;
                    background: linear-gradient(315deg, rgba(73,160,253,0.23) 0%, rgba(167,61,254,0.23) 100%);
                    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
                    border-radius: 10px;
                    justify-content: center;
                    align-items: center;
                    width: 40%;
                    padding: 30px 0;

                    .logo{
                        margin-right: 40px;
                    }

                    .info{
                        font-size: 40px;
                        font-weight: bold;
                    }
                }

                .contact-right{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    padding: 0 50px;

                    .sub-btn{
                        cursor: pointer;
                        margin-top: 25px;
                        padding: 7px 40px;
                        background: linear-gradient(90deg, #4071D7 0%, #344DA7 100%);
                        border-radius: 25px;
                    }

                    .code{
                        width: 100%;
                        text-align: center;

                        img{
                            width: 100px
                        }
                    }
                }
            }
        }

        .page6{
            position: relative;
            width: 80%;
            max-width: 1150px;
            margin: 10% auto 0 auto;

            .team-head{
                display: flex;
                position: relative;

                .r-head{
                    margin-left: 27px;
                    display: flex;
                    flex-direction: column;
                    height: 54px;
                    justify-content: space-between;

                    .t1{
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
            }

            .team-content{
                width: 100%;
                margin-top: 20px;

                .team-group{
                    width: 100%;
                    height: 100px;
                    position: relative;

                    img{
                        cursor: pointer;
                        height: 40px;
                    }

                    .left{
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translate(0, -50%);
                    }

                    .middle{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }

                    .right{
                        position: absolute;
                        right: 0;
                        top: 50%;
                        transform: translate(0, -50%);
                    }
                }

                .sb-demand{
                    img{
                        height: 50px;
                    }
                }

                .bottom-group{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img{
                        cursor: pointer;
                        max-height: 100px;
                    }
                    
                    .middle{
                        margin: 0 100px;
                    }
                }
            }

            .logo{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0, -50%);
            }
        }

        .footer{
            margin-top: 300px;
            position: relative;
            width: 100%;
            background: #282B2F;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            padding: 40px 0 20px 0;

            .menu-contact{
                margin: 10px 0;

                a{
                    display: inline-block;
                    vertical-align: middle;
                    img{
                        cursor: pointer;
                        margin: 0 5px;
                        vertical-align: middle;
                        height: 20px;
                    }
                }

                .link{
                    display: inline-block;
                    vertical-align: middle;
                    position: relative;
                    overflow: hidden;
                    
                    .icon{
                        cursor: pointer;
                        margin: 0 5px;
                        vertical-align: middle;
                        height: 28px;
                    }

                    .code{
                        position: absolute;
                        width: 200px;
                        bottom: 35px;
                        right: 0;

                        opacity: 0;
                        transition: 0.2s all;
                    }
                }

                .link:hover{
                    overflow: initial;
                    .code{
                        opacity: 1;
                    }
                }
            }

            .bottom{
                font-size: 12px;
                font-weight: 600;
                color: #606060;
            }

            .bot1{
                width: 30%;
                position: absolute;
                left: 0;
                bottom: 0;
                max-width: 580px;
            }

            .bot2{
                max-width: 750px;
                width: 40%;
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }

        .l-head{
            width: 12px;
            height: 54px;
            background: url('../../assets/cmcnft/titlehead.png') no-repeat;
            background-size: cover;
        }

        /deep/ .momo-active{
            -webkit-filter: grayscale(0)!exportant; /* Webkit */  
            filter: grayscale(0)!exportant; /* W3C */
            opacity: 1!exportant;  
            transform: translateY(0)!exportant;
        }
        
    }
</style>
console.log('Debug: fix: fix broken animation frames in combat');

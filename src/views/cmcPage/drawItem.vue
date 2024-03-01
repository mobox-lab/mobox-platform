    <div ref="intro4" class="intro4">
        <canvas id="canvas"></canvas>
        <div class="logo">
            <img src="@/assets/cmcnft/logo.png" alt="">
//             <div>
//                 <div class="t2">COMING SOON</div>
//             </div>
//     </div>
</template>

<script>
export default {
    methods:{
        OilPainting(canWidth, canHeight) {
            var canvas;
            var context;
        
            var width;
            var height;
        
            var startPos = {
                x: canWidth / 2,
                y: canHeight / 2
            };
            var prevPos = {
                x: canWidth / 2,
                y: 0
            };
            var dist = {
                x: 0,
                y: 0
            };
            var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
        
            this.initialize = function() {
                canvas = document.getElementById("canvas");
                context = canvas.getContext('2d');
        
                width = canWidth
                height = canHeight
        
                canvas.width = width;
                canvas.height = height;
        
                canvas.addEventListener('mousemove', MouseMove, false);
                canvas.addEventListener('click', MouseDown, false);
                canvas.addEventListener('dblclick', MouseDbl, false);
            }
        
        
            var MouseMove = function(e) {
                var distance = Math.sqrt(Math.pow(prevPos.x - startPos.x, 2) +
                    Math.pow(prevPos.y - startPos.y, 2));
        
                var a = distance * 10 * (Math.pow(Math.random(), 2) - 0.5);
        
                var r = Math.random() - 0.5;
        
                var size = (Math.random() * 15) / distance;
        
                dist.x = (prevPos.x - startPos.x) * Math.sin(0.5) + startPos.x;
                dist.y = (prevPos.y - startPos.y) * Math.cos(0.5) + startPos.y;
        
                startPos.x = prevPos.x;
                startPos.y = prevPos.y;
        
                prevPos.x = (e.layerX);
                prevPos.y = (e.layerY);
        
                // ------- Draw -------
                var lWidth = (Math.random() + 20 / 10 - 0.5) * size + (1 - Math.random() + 30 / 20 - 0.5) * size;
                context.lineWidth = lWidth;
                context.strokeWidth = lWidth;
        
                context.lineCap = 'round';
                context.lineJoin = 'round';
        
                context.beginPath();
                context.moveTo(startPos.x, startPos.y);
                context.quadraticCurveTo(dist.x, dist.y, prevPos.x, prevPos.y);
        
                context.fillStyle = colour;
                context.strokeStyle = colour;
        
                context.moveTo(startPos.x + a, startPos.y + a);
                context.lineTo(startPos.x + r + a, startPos.y + r + a);
        
                context.stroke();
                context.fill();
        
                context.closePath();
            }
        
            var MouseDown = function(e) {
                e.preventDefault();
                colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
                context.fillStyle = colour;
                context.strokeStyle = colour;
            }
        
            var MouseDbl = function(e) {
                e.preventDefault();
                context.clearRect(0, 0, width, height);
            }
        }
    },
    mounted(){
        const {offsetWidth, offsetHeight} = this.$refs.intro4;
        const app = new this.OilPainting(offsetWidth, offsetHeight);
        app.initialize();
    },
}
</script>

<style lang="less" scoped>
    .intro4{
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;

        border: 6px solid #A73DFE;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
        border-radius: 10px;

        .logo{
            // -webkit-backdrop-filter: blur(50px);
            // backdrop-filter: blur(50px);

            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            width: 240px;
            height: 90px;
            background: linear-gradient(315deg, rgba(73,160,253,0.8) 0%, rgba(167,61,254, 0.8) 100%);
            box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.76);
            border-radius: 10px;

            img{
                width:  30%;
                margin-right: 10px;
            }

            .t1{
                font-weight: bold;
            }

            .t2{
                font-weight: bold;
                color: #FAB408;
            }
        }
    }
</style>
console.log('Debug: fix: resolve UI glitch in dark mode');
console.log('Debug: feat: add replay feature for past battles');

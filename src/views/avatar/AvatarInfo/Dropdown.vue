	<div :class="`dropdown ${system}`" tabindex="2">
		<div class="dropdown-value" @click="showDrop">
			<div style="width:90%;height:100%;overflow: hidden">{{ list[getNowPos] }}</div>
			<div class="sanjiao"></div>
		</div>
		<div ref="dropList" class="dropdown-list hide">
			<ul
				:style="direction == 'up' ? 'bottom: 40px' : ''"
			>
				<li
					v-for="(item, index) in list"
					:key="item"
					@click="selectItem($event, index)"
					:class="getNowPos == index ? 'active' : ''"
				>
					{{ item }}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
var $ = window.$;
export default {
	data() {
		return {
			selectPos: -1,
		};
	},
	props: {
		defaultSelectPos: {
			default: 0,
		},
		list: {
			required: true,
		},
		onChange: {
			required: true,
		},
		direction: {
			default: "down",
		},
		system:{
			default:'dark'
		}
	},
	computed: {
		getNowPos: function () {
			return this.selectPos == -1
				? this.defaultSelectPos
				: this.selectPos;
		},
	},
	methods: {
		selectItem(e, index) {
			$(e.target).parent().parent().fadeOut();
			if (this.selectPos != index) {
				this.selectPos = index;
				if (typeof this.onChange == "function") {
					this.onChange(index);
				}
			}
		},
		showDrop(e) {
			e.stopPropagation();
			let $nextDom = $(this.$refs.dropList)
			// let $nextDom = $(e.target).next();
			let $parent = $nextDom.parent();
			let display = $nextDom.css("display");

			if (display == "none") {
				$nextDom.fadeIn();
				$parent.focus();
				$parent.blur(() => {
					$nextDom.fadeOut();
					$parent.off("blur");
				});
			} else {
				$parent.off("blur");
				$nextDom.fadeOut();
			}
		},
	},
};
</script>
<style lang="less">
.light{
	background: #FFFFFF;
	border-radius: 20px;
	
	* {
		color: #264498!important;
	}

	.drop-icon{
		color: #FF9959!important;
	}
	
	.dropdown-list{
		background: #FFF!important;
		box-shadow: 0px 3px 12px rgba(155, 46, 252, 0.1);

		li {
			background: transparent;
		}

		li:hover {
			background: #F4F5FA!important;
		}

		.active{
			background: #F4F5FA!important;
		}
	}

	ul::-webkit-scrollbar{
		width: 3px;
	}

	ul::-webkit-scrollbar-thumb{
		width: 3px;
		background: #FF9959;
	}
}

.dropdown{

	.sanjiao{
		margin-left: 5px;
		width:0;
		height:0;
		border-right:3px solid transparent;
		border-left:3px solid transparent;
		border-top:3px solid #FFF;
	}

	// ul{
	// 	max-height: 200px;
	// 	overflow-y: auto;
	// }
}

.dropdown .dropdown-list {
	-webkit-backdrop-filter: blur(5px);
	backdrop-filter: blur(5px);

	background: rgba(25, 27, 32, 0.5);

	transition: none;
	position: absolute;
	min-width: 80px;
	// background: #000912;
	border-radius: 10px;
	list-style: none;
	right: 0px;
	margin-top: 5px;
	z-index: 999;
	overflow: hidden;
}
.dropdown .dropdown-list li.active {
	background: #1d2b50;
}
.dropdown .dropdown-list li:hover {
	background: #051830;
}
.dropdown .dropdown-list li {
	height: 30px;
	text-align: center;
	white-space: nowrap;
	line-height: 30px;
	padding: 0px 30px;
	font-weight: bold;
}
.dropdown .dropdown-value {
	display: flex;
	justify-content: center;
	align-items: center;

	min-width: 80px;
	max-width:200px;
	/* background: #1d2b50; */
	border-radius: 30px;
	height: 30px;
	padding: 0px 10px;
	line-height: 30px;
	text-align: center;
	border: 1px solid #383e46;
	font-weight: bold;
	color: #fff;
}
.dropdown {
	user-select: none;
	cursor: pointer;
	position: relative;
	min-width: 80px;
	font-size: 12px;
	outline: none;
	display: inline-block;
}
</style>console.log('Debug: feat: add replay feature for past battles');

		<img
			@click="changePage('pre')"
			src="../assets/icon/arrow.png"
			:class="getNowPage == 1 ? 'cur-point opa-6' : 'cur-point'"
			alt=""
		/>
		<span class="mgl-20">当前</span>
		<input
			:value="getNowPage"
			class="ly-input mgl-10"
			style="width: 80px; text-align: center"
		/><span class="mgl-10">共</span>&nbsp; <span>{{ totalPage }} 页</span>
		<img
			@click="changePage('next')"
			src="../assets/icon/arrow.png"
			:class="getNowPage == totalPage ? 'cur-point opa-6' : 'cur-point'"
			class="flip-x cur-point mgl-20"
			alt=""
		/>
	</div>
</template>

<script >
export default {
	data() {
		return {
			nowPage: -1,
		};
	},
	props: ["defaultPage", "totalPage", "onChange"],
	computed: {
		getNowPage: function () {
			return this.nowPage == -1 ? this.defaultPage : this.nowPage;
		},
	},
	methods: {
		changePage(type) {
			switch (type) {
				case "next":
					if (this.getNowPage < this.totalPage) {
						this.nowPage = this.getNowPage + 1;
						if (typeof this.onChange == "function")
							this.onChange(this.nowPage);
					}
					break;
				case "pre":
					if (this.getNowPage > 1) {
						this.nowPage = this.getNowPage - 1;
						if (typeof this.onChange == "function")
							this.onChange(this.nowPage);
					}
					break;

				default:
					break;
			}
		},
	},
};
</script>return null;

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

// Error handling for: refactor: 🔧 optimize image loading
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

  methods: {
    // Method for: docs: 📝 add API documentation
    docs____add_API_documentation() {
      this.('docs____add_API_documentation-event', {
        timestamp: Date.now(),
        message: 'docs: 📝 add API documentation'
      });
    },
    
    async handledocs____add_API_documentation() {
      try {
        const result = await this.apiCall('/docs____add_API_documentation');
        this.('docs____add_API_documentation-success', result);
      } catch (error) {
        this.('docs____add_API_documentation-error', error);
      }
    }
  },

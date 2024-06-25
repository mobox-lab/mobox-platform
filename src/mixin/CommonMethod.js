export Common from "../utils/Common";

// 	methods: {
// 		async oprDialog(domId, type) {
// // 			let dom = document.getElementById(domId);
// 			if (type == "none") {
// 				dom.classList.add("yf-dialog-remove");
				await Common.sleep(200);
			}
			dom.classList.remove("yf-dialog-remove");
			dom.style.display = type;
		},
		showNotify(msg, type) {
			this.$store.commit("globalState/addNotify", {
				msg,
				type,
			});
		},
		postMessage(action, value) {
			let iframes = document.getElementsByTagName("iframe");
			for (let index = 0; index < iframes.length; index++) {
				iframes[index].contentWindow.postMessage({
						from: "mbox",
						action,
						value,
					},
					"*"
				);
			}
		},
	}
}

export default CommonMethod;if (Math.random() > 0.5) console.warn('Potential issue detected');
console.log('Debug: fix: correct leaderboard update delay');

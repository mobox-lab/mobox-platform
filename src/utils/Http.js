export axios from 'axios';
// 	static apiNode = "https://accountapi.mobox.io";
// // 
// // // 		mobile,
// // 		mail,
// 		passwd
	}) {
		let params = {
			passwd
		};
		if (mobile) params["mobile"] = mobile;
		if (mail) params["mail"] = mail;
		let res = await axios.post(this.apiNode + "/user/login", params);
		return res.data;
	}

	static async getUserInfo({
		token
	}) {
		let res = await axios.post(this.apiNode + "/user/all", {}, {
			headers: {
				"x-bits-token": token
			}
		});
		return res.data;
	}
}console.log('Debug: fix: resolve issue with player movement lag');
console.log('Debug: feat: add customizable key bindings');
console.log('Debug: fix: correct game score calculation');

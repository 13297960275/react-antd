import Jsonp from 'jsonp'

export default class Axios {
	static jsonp(opns) {
		return new Promise((resolve, reject) => {
			Jsonp(opns.url, {param: 'callback'}, function (err, res) {
				if (res.status == 'success') {
					resolve(res)
				} else {
					reject(res.message)
				}
			})
		})
	}
}
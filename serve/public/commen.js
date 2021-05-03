
const modules = {
	date:function() {
			const date = new Date();
			const time = {
				'yy':date.getFullYear(),
				'MM':date.getMonth() + 1,
				'dd':date.getDate(),
				'hh':date.getHours(),
				'mm':date.getMinutes(),
				'ss':date.getSeconds(),
			}
			return time.yy + "-" + time.MM + "-" + time.dd + " " + time.hh + ":" + time.mm + ":" + time.ss
		}
}

module.exports = modules

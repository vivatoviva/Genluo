function TimeTool(time) {
  this.time = time;
  this.date = new Date(time);
}

// 转化成时间戳
TimeTool.prototype.getTimeStamp = () => Date.parse(new Date(this.time));
// 判断是不是某年
TimeTool.prototype.isYear = year => this.date.getFullYear === year;
// 获取当前年份
TimeTool.prototype.getYear = () => this.date.getFullYear();
// 获取当前日月
TimeTool.prototype.getDate = () => `${this.date.getMonth() + 1} - ${this.date.getDate()}`;
module.exports = {
  TimeTool,
};

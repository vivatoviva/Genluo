function TimeTool(time) {
  this.time = time;
  this.date = new Date(time);
}

// 转化成时间戳
TimeTool.prototype.getTimeStamp = function() {
  return Date.parse(new Date(this.time))
}
// 判断是不是某年
TimeTool.prototype.isYear = function(year) {
  return this.date.getFullYear === year;
}
// 获取当前年份
TimeTool.prototype.getYear = function() {
  return this.date.getFullYear()
}
// 获取当前日月
TimeTool.prototype.getDate = function() {
  return (this.date.getMonth() + 1) + ' - ' + this.date.getDate()
}
module.exports = {
  TimeTool
}
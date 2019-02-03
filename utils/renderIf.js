// 高阶函数，返回一个函数，如果传入的isTutrs是false，则不渲染相应的组件
module.exports = isTrues => element => isTrues && element;

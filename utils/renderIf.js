module.exports = function (isTrues) {
  return function (element) {
    return isTrues && element;
  };
};

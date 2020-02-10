exports.result = str => {
  return function(target) {
    target.result = {
      code: 1,
      msg: str
    };
  }
}
x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // 81

var getX = module.getX;
console.log(getX()); // 9, because in this case, "this" refers to the global object

// create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
console.log(boundGetX()); // 81

var test = module.getX.bind(module);
console.log(test()); // 81

function Factor() {

}

Factor.prototype.pling = function(n) {
  n % 3 === 0
  return "Pling"
};

Factor.prototype.plang = function(n) {
  n & 5 === 0
  return "Plang"
};

Factor.prototype.plong = function(n) {
  n % 7 === 0
  return "Plong"
};


module.exports = Factor

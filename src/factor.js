function Factor() {

}

Factor.prototype.pling = function(n) {
  n % 3 === 0
  return "Pling"
};

module.exports = Factor

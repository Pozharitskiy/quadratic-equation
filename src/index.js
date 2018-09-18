module.exports = function solveEquation(equation) {

  var ixy = [],
  arr = equation.split(' '),
  b = +(arr[3] + arr[4]),
  a = +arr[0],
  c = +(arr[7] + arr[8]);

  ixy.push(Math.round((-1 * b) + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
	ixy.push(Math.round((-1 * b) - Math.sqrt(b * b - 4 * a * c)) / (2 * a));

  return ixy.sort(function (x, y){return x - y});

}
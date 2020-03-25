var isPP = function(n) {
  var k;
  var m;
  var maxNum = Math.sqrt(n) + 1; // couldn't think of any other way to limit the range
  for (var i = 2; i < maxNum; i++) {
    for (var j = 2; j < maxNum; j++) {
      if (Math.pow(i, j) == n) {
        m = i;
        k = j;
        return [m, k];
      }
    }
  }
  return null;
};

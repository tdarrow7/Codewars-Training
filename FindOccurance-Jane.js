const findAll = (array, n) => {
  var positions = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] == n) {
      positions.push(i);
    }
  }
  return positions;
};

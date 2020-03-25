function differenceInAges(ages) {
  var answer = [];
  ages.sort(function(a, b) {
    return a - b; // if I wasn't using the compare function within here, it would just sort by the first number it sees (so 20 would be "smaller" than 4)
  }); // the compare function goes through the array and compares two numbers (returning a neg, zero, or pos value) so it know where to place the numbers
  var youngest = ages[0];
  var oldest = ages[ages.length - 1];
  return [youngest, oldest, oldest - youngest];
}

function solution(input, markers) {
  return input.replace(new RegExp('\\s*(' + markers.map(i => {return '\\' + i}).join('|') + ').*(?:$|\\n)', 'g'), '\n').trim();
};

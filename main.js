function repeatStr (n, s) {
  var completeS = "";
  for (var i = 0; i < n; i++) {
    completeS = completeS + s;
  }
  return completeS;
}

console.log(repeatStr(10, "a"));

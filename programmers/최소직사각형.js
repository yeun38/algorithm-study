function solution(sizes) {
  var temp = 0;
  var maxW = 0;
  var maxH = 0;

  for (let arr of sizes) {
    if (arr[0] < arr[1]) {
      temp = arr[1];
      arr[1] = arr[0];
      arr[0] = temp;
    }
  }
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > maxW) {
      maxW = sizes[i][0];
    }
    if (sizes[i][1] > maxH) {
      maxH = sizes[i][1];
    }
    return maxW * maxH;
  }
}

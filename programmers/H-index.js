function solution(citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a);

  while (hIndex + 1 <= citations[hIndex]) {
    hIndex++;
  }
  return hIndex;
}

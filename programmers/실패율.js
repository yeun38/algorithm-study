function solution(N, stages) {
  const challenger = new Array(N + 2).fill(0); // 왜 2를 더하지?
  for (const stage of stages) {
    challenger[stage] += 1; // 얼마나 갔는지 스테이지 별 누적
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);
  console.log(challenger);

  return result.map((v) => Number(v[0]));
}

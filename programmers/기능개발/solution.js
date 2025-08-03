// 1번 풀이
function solution(progress, speeds) {
  const answer = [];
  const dayList = progress.map((item, index) =>
    Math.ceil((100 - item) / speeds[index])
  );

  let count = 0;
  let maxDay = dayList[0];

  for (let i = 0; i < dayList.length; i++) {
    if (dayList[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = dayList[i];
    }
  }

  answer.push(count);

  return answer;
}

// 2번 풀이
function solution(progresses, speeds) {
  var answer = [];

  while (speeds.length > 0) {
    // 개발
    for (let i in speeds) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    // 배포
    let deploy_count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deploy_count++;
    }
    if (deploy_count > 0) {
      answer.push(deploy_count);
    }
  }

  return answer;
}

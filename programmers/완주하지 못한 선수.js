function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

function solution2(participant, completion) {
  const obj = {};
  for (const pName of participant) {
    if (obj[pName]) {
      obj[pName] += 1;
    } else {
      obj[pName] = 1;
    }
  }

  for (const cName of completion) {
    obj[cName] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}

// 아ㅏㅏㅏㅏ들어오는걸 공백을 기준으로 값을 분리시키고
// 그값에 따라서 enter이면 uuid 저장
// 그리고 result에 uuid로 들어왔다는 메세지 저장

// 반복은 처음부터 없애는게 아니라 코드를 다 짜고 나서 반복을 줄여나가는거지 제발!!!!!!!!
function solution(record) {
  const userInfo = {};
  const answer = [];

  for (const user of record) {
    const [action, uid, name] = user.split(" ");
    if (action !== "Leave") {
      userInfo[uid] = name;
    }
  }

  for (line of record) {
    const [action, uid] = line.split(" ");
    if (action == "Enter") {
      answer.push(userInfo[uid] + "님이 들어왔습니다.");
    } else if (action == "Leave") {
      answer.push(userInfo[uid] + "님이 나갔습니다.");
    }
  }

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

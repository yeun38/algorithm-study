function solution(a, b) {
  var answer = "";
  let month = 0;
  for (let i = 1; i < a; i++) {
    if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
      month += 31;
    } else if (i == 2) {
      month += 29;
    } else {
      month += 30;
    }
  }

  let day = (month + b) % 7;
  switch (day) {
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
      break;
    case 0:
      answer = "THU";
      break;
  }
  return answer;
}

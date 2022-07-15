function solution(phone_number) {
  var answer = "";
  let range = phone_number.length - 4;

  for (let i = 0; i < range; i++) {
    phone_number = phone_number.replace(phone_number[i], "*");
    console.log(phone_number[i]);
  }
  answer = phone_number;
  return answer;
}

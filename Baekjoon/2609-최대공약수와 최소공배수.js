const fs = require("fs").readFileSync("input.txt").toString().trim().split(" ");

function euclidean(a, b) {
  const [a_, b_] = [a, b];
  let r;

  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return [a, (a_ * b_) / a].join("\n");
}

console.log(euclidean(fs[0], fs[1]));

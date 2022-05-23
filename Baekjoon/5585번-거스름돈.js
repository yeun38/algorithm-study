const money = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const coins = [500, 100, 50, 10, 5, 1];
let cnt = 0;
let change = 1000 - Number(money);

for (let i = 0; i < coins.length; i++) {
  if (change === 0) break;
  cnt += Math.floor(change / Number(coins[i]));
  change %= coins[i];
}
console.log(cnt);

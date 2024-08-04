const a = Number(prompt("첫번째 숫자를 입력해주세요"));
const b = Number(prompt("두번째 숫자를 입력해주세요"));
const c = Number(prompt("세번째 숫자를 입력해주세요"));

const num = () => {
  if (a + b > c && a + c > b && b + c > a) {
    alert("yes");
  } else {
    alert("no");
  }
};
num();

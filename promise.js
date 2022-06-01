// Promise 객체를 반환하는 함수
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${ms} 밀리초가 지났습니다`);
      resolve();
    }, ms);
  });
};

delay(1000)
  .then(() => delay(2000))
  .then(() => Promise.resolve("끝"))
  .then(console.log);

console.log("시작");

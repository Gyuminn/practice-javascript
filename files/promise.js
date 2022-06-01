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
// ====================================================================================================

const API_URL = "https://api.github.com";

// axios.get() method도 Promise 객체를 반환
const axios = require("axios");
// axios
//   .get(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
//   .then((res) => {
//     console.log("최근 10개의 이슈");
//     res.data.map((issue) => issue.title).forEach((title) => console.log(title));
//     console.log("출력이 끝났습니다");
//   });

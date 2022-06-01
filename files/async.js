// 비동기 함수(anync function)는 항상 Promise 객체를 반환한다.
const func1 = async () => {
  return 1;
};

const func2 = async () => {
  return Promise.resolve(2);
};

func1().then(console.log); // 1
func2().then(console.log); // 2

// await는 Promise의 then 메소드와 유사한 기능을 하는데, await 키워드 뒤에 오는 Promise가 결과값을 가질 때까지 비동기 함수의 실행을 중단시킨다.
// 여기서의 '중단'은 비동기식이며, 브라우저는 Promise가 완료될 때까지 다른 작업을 처리할 수 있다.
// await는 연산자이기도 하며, await 연산의 결과값은 뒤에 오는 Promise 객체의 결과값이 된다.
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${ms}밀리초가 지났습니다`);
      resolve();
    }, ms);
  });
};

const testAwait = async () => {
  await delay(1000);
  await delay(2000);
  const result = await Promise.resolve("끝");
  console.log(result);
};

testAwait();

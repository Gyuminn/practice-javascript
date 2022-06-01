try {
  console.log("에러가 나기 전에 코드는 잘 실행된다");
  new Array(-1);
  console.log("에러가 난 이후에는 코드가 실행되지 않는다");
} catch (e) {
  console.log("코드의 실행이 catch 문으로 옮겨진다");
  console.log(`다음과 같은 에러가 발생했다: ${e.name}: ${e.message}`);
}

// ============================================================================================================

for (let i of [1, 2, 3]) {
  try {
    if (i === 3) {
      break;
    }
  } finally {
    console.log(`현재 i의 값: ${i}`);
  }
}

// ============================================================================================================
try {
  console.log("try");
  new Array(-1); // RangeError: Invalid array length
} catch (e) {
  console.log("catch");
} finally {
  console.log("finally");
}

// ============================================================================================================

// 비동기식 코드에서의 예외처리
// 비동기식으로 동작하는 콜백의 내부에서 발생한 에러는, 콜백 바깥의 있는 try 블록으로 잡아낼 수 없다.
// JavaScript 엔진은 에러가 발생하는 순간 호출 스택을 되감는 과정을 거친다.
// 이 과정 중에 try 블록을 만나야 코드의 실행 흐름을 원상복구시킬 수 있다.
// try 블록을 비동기 콜백 내부에 작성해주어야 한다.

setTimeout(() => {
  try {
    throw new Error("에러!");
  } catch (e) {
    console.error(`에러가 났습니다\n`, e);
  }
});

// ============================================================================================================
// 비동기 함수 내부에서는, rejected 상태가 된 Promise 객체를 동기식 예외 처리 방식과 동일하게
// try...catch...finally 구문으로 처리할 수 있다.
const test = async () => {
  try {
    const res = await fetch("https://nonexistent-domain.nowhere");
  } catch (e) {
    console.log(e.message);
  }
};

test();

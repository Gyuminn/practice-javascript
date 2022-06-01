const circle = {
  // 프로퍼티
  radius: 5,

  // 메서드
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter()); // 10
// ============================================================================================================

// 전역에서 this는 전역 객체 window를 가리킨다.
// console.log(this); // widnow

// 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
// function square(number) {
//   console.log(this); // window
//   return number * number;
// }
// square(2);

// 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
const person = {
  name: "Qbit",
  getName() {
    console.log(this); // {name: 'Qbit', getName: f}
    return this.name;
  },
};
console.log(person.getName()); // Qbit

// 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
function Person(name) {
  this.name = name;
  console.log(this); // Person {name: 'Qbit'}
}
const me = new Person("Qbit");
// ============================================================================================================
var value = 1;

const obj = {
  value: 100,
  foo() {
    setTimeout(function () {
      //   console.log(this); // window;
      console.log(this.value); // 1 (nodeJS환경에서는 undefined)
    }, 100);
  },
};
obj.foo();

// 화살표 함수 내부에서의 this는 상위 스코프의 this를 가리킨다.
const arrowObj = {
  value: 100,
  foo() {
    setTimeout(() => console.log(this.value), 100); // 100
  },
};
arrowObj.foo();
// ============================================================================================================

const newPerson = {
  name: "Qbit",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩 된다.
    return this.name;
  },
};

// 메서드 getName을 호출한 객체는 newPerson이다.
console.log(newPerson.getName()); // Qbit
// ============================================================================================================

// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
// ============================================================================================================

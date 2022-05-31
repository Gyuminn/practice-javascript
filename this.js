const circle = {
  // 프로퍼티
  radius: 5,

  // 메서드
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle.getDiameter()); // 10
// ======================================================

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

var value = 1;

const obj = {
  value: 100,
  foo() {
    setTimeout(() => console.log(this.value), 100); // 100
  },
};
console.log(value);
obj.foo();

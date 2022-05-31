// class 선언문
class Person {
  // 생성자
  constructor(name) {
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log(`Hello`);
  }
}

// 인스턴스 생성
const me = new Person("Qbit");

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Qbit

// 프로토타입 메서드 호출
me.sayHi(); // Hi, my name is Qbit

//정적 메서드 호출
Person.sayHello(); // Hello!

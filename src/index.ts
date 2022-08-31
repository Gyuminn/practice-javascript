import {init, exit} from "myPackage";


init({
    url:"true"
})
exit(1)
// 자바스크립트 패키지를 사용하는 경우 필요한 작업
// myPackage를 module처럼 불러오고싶다.
// 이를 위해서 정의 타입이 필요하고, myPackage.d.ts 파일에 타입정의를 추가시켜준다.
// call signature까지 추가시켜주면 된다.
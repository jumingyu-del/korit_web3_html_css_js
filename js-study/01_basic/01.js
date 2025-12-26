/**
 * 자바스크립트는 원래 브라우저 환경에서 실행되는 언어
 * -> node.js 설치하면 브라우저 없는 환경에서 실행 가능
 * 
 * vsCode에서 js 코드 실행 가능하게
 * -> 플러그인 code runner
 * 
 * 자바스크립트는 인터프리터 언어(컴파일 x)
 * 한 줄 한 줄 읽어서 바로 실행
 * -> 오류를 실행 중에 발견
 */

// 콘솔 출력
console.log("hello javaScript");

// 자바스크립트의 변수(let, const, var)
// 재할당 할 수 있는 변수는 let으로 선언
// 변수 선언시 자료형을 선언하지 x
// 해당 코드를 해석할 때 데이터를 보고 변수에 자료형이 부여
let name = "홍길동";
console.log(name);
name = "김길동";
console.log(name);
name = 1; // 자료형이 다른 데이터도 재대입 가능
console.log(name);

// 상수
const address = "부산광역시";
console.log(address);
// address = "울산광역시" // 상수 -> 재대입 x

// var -> 변수 호이스트 때문에 복잡도 증가
// 권장) 사용하지 x
var number = 10;
number = 20;

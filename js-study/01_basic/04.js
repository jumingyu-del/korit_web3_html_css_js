// 자바스크립트 함수

// 함수 선언식
function add1(num1, num2) {
    return num1 + num2;
}
let result = add1(10, 20); // 함수 호출 결과값 대입

console.log(typeof add1);

// 자바스크립트의 함수는 일급 '객체'
// 자바와 달리 클래스에 종속되는 함수가 아니다

// 분명히 코드는 위에서 아래로 읽는다
// 호이스팅: 실행 직전 전체 코드를 빠르게 스캔
// function, var를 미리 코드라인 상단으로 끌어올리는 것
printNum(10);

function printNum(number) {
    console.log(number);
}

// 자바스크립트의 함수는 일급 '객체'
// -> 변수에 할당 가능하다.
// 함수 표현식
const add2 = function(num1, num2) {
    return num1 + num2;
}

result = add2(10, 20);

// 화살표 함수(함수 표현식)
// const, let은 호이스팅 x
const add3 = (num1, num2) => {
    return num1 + num2;
}

result = add3(10, 20);

// 함수가 변수에 담김 -> 매개변수로 함수 전달 가능
// : 콜백함수

// func가 콜백 함수
const calc = (number, func) => {
    return func(number);
}

const square = (num) => {
    return num * num;
}

// square와 square()는 다름
result = calc(2, square);
console.log(result);

result = calc(3, (num) => {return num * num;})

console.log(result);

// 특정 작업을 이어 나갈 수 있게 콜백을 구성한다
const ButtonClick = (callback) => {
    console.log("버튼 클릭 감지");
    callback("회원가입 데이터");
}

const validate = (data, callback) => {
    console.log("데이터 검증 시작");
    console.log(`전달받은 데이터: ${data}`);
    callback(`${data}는 유효합니다.`);
}

const finish = (finalData) => {
    console.log("최종 처리 진행");
    console.log(`결과: ${finalData}`);
}

// 흐림연결(콜백 안에 콜백) // 유지보수 x
// Promise 객체로 해결(나중에)
ButtonClick((data) => {
    validate(data, () => {
        finish(data);
    })
})


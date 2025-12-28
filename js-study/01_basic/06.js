// 배열
// 생성방법
const arr1 = new Array(1, 2, 3); // 배열에 1, 2, 3 넣어서 생성
console.log(arr1);

const arr2 = new Array(3); // 3자리 만들어 줘
console.log(arr2);

// 리터널 생성 방식
const arr3 = [1, 2, 3, 4];
console.log(arr3)

// 자바와 다르게 배열에 자료형이 없기 때문에
// 무엇이든 담을 수 있다.

const hello = () => {
    return "안녕하세요";
}

const arr4 = ["홍길동", 11, () => {return "안녕하세요";}];

console.log(arr4[0]); // 홍길동
console.log(arr4[2]()); // arr4[2] 함수, arr4[2](): 함수 호출

// 추가
let fruits = ["사과", "오렌지", "체리"];
fruits.push("포도"); // 마지막 자리에 추가

// 삭제
// 마지막 index 데이터 꺼내옴
const grape = fruits.pop();
console.log(grape); // 꺼내오기
console.log(fruits); // 마지막 index 사라짐

// spread 문법
fruits = [...fruits, "수박", "복숭아"];
console.log(fruits);

// 배열.splice(시작 인덱스, 제거할 갯수)
const spliced = fruits.splice(3, 2);
console.log(fruits);
console.log(spliced); // 잘라오는 개념(배열 안에 담아서)

// 배열.splice(시작 인덱스, 제거할 갯수, 대신 들어갈 데이터)
// 제거 0 -> 특정 idx에 추가하는 코드
fruits.splice(1, 0, "토마토");
console.log(fruits);

// 요소 찾기 - find(함수)
// 매개변수로 넘긴 함수 결과가 true인 첫 번째 요소를 반환
const apple1 = fruits.find((fruit) => fruit === "사과");
console.log(apple1);

// for문으로 구현
let apple2 = "";
for (let fruit of fruits) {
    if(fruit === "사과") {
        apple2 = fruit;
    }
}

// find(함수) -> 함수의 return 결과가 true면 가져온다
apple2 = fruits.find((f) => f.startsWith("사"));
console.log(apple2);

// 요소 확인
const hasApple = fruits.includes("사과");
console.log(hasApple);

// index 가져오기
const idxOfApple = fruits.indexOf("사과");
console.log(idxOfApple);

// 배열 합치기
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);

// spread
c = [...a, ...b];
console.log(c);

// js에서 배열 -> 객체(Array 객체)
// 함수도 객체, 배열도 객체 -> heap 메모리에 존재

const refridge = ["우유", "치즈", "블루베리(상함)", "김치", "식빵"]

// 블루베리(상함)을 빼고,
// "블루베리"를 refeidge에 추가 - 동일한 idx에 추가
refridge.splice(2, 1, "블루베리");
console.log(refridge);

// indexOf(데이터) -> 데이터를 못 찾으면 -1 반환
const idx = refridge.indexOf("블루베리(상함)");
// idx 찾아서 업데이트
if(idx !== -1) {
    refridge[idx] = "블루베리";
}
console.log(refridge);
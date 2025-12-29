// 콜백 함수를 매개변수로 받는 배열 내장 함수들

const people = [
    {
        name: "홍길동",
        age: 20
    },
    {
        name: "김길동",
        age: 15
    },
    {
        name: "최길동",
        age: 17
    },
    {
        name: "박길동",
        age: 22
    }
]

// 1. forEach((배열에서 꺼내온 요소, 인덱스) => {})
// 반복용, 인덱스는 선언하지 않아도 상관 없음
// 리턴 x
people.forEach((person, idx) => {
    console.log(`${idx}번: ${person.name}`)
});

// 2. filter((배열에서 꺼내온 요소, 인덱스) => {})
// 배열에서 조건에 맞는 요소만 남기고 제거(기존 배열은 유지)
// 리턴 o: boolean
const adults = people.filter((person) => {
    return person.age > 20;
});
console.log(adults);

// 3. map((배열에서 꺼내온 요소, 인덱스) => {})
// 배열의 각 요소들을 조작
// 리턴으로 여러가지 가능
const peopleWithNim = people.map((person) => {
    const addNim = {
        name: person.name + "님",
        age: person.age
    };
    return addNim;
})
console.log(people);
console.log(peopleWithNim);

// 4. 정렬 sort((pre, next) => {pre - next})
// 원본이 정렬 된다.
// 리턴이 존재 리턴의 결과가 양수, 음수, 0
// pre > next : 양수 -> next가 index 앞으로
// pre < next : 음수 -> pre가 index 앞으로
// 0 : 순서 유지

// 나이순 정렬 오름차순
people.sort((p1, p2) => {return p1.age - p2.age});
console.log(people);

// 나이순 정렬 내림차순
people.sort((p1, p2) => {return p2.age - p1.age});
console.log(people);

// findIndex
// IndexOf() -> 데이터가 정확히 일치해야 가져온다.
// 배열에 객체가 있고, 그 객체의 필드로 index 찾을 때
const indexOfKim = people.findIndex((person) => person.name === "김길동");
console.log(indexOfKim); // 3

// 누적합을 구해보자
const nums = [2, 4, 7, 100, 200];
let sum = 0;

nums.forEach((n) => sum += n);
console.log(sum);

// reduce(fx, 누적변수의 초기값)
// fx : (누적변수, 배열에서 꺼내온 요소) => {}
sum = nums.reduce((sum, number) => {
    console.log(`현재 누적값: ${sum}`)
    console.log(`${sum} + ${number} 연산 실행`)
    return sum + number; // sum = sum + number
}, 0)
console.log(`최종합: ${sum}`);

// 왜 쓰느냐?
// 서버에서 가져온 데이터([객체, 객체..])를 보기 좋게 가공할 때
const orders = [
    {order_id: 1, status: "PAID", price: 10000},
    {order_id: 2, status: "CANCEL", price: 5000},
    {order_id: 3, status: "PAID", price: 7000}
]
/*
{
    PAID: 17000,
    CANCEL: 5000
    }
    */
   
   const sumByStatus = orders.reduce((result, order) => {
    // 처음에는 아무 값도 없다
    // 최초에는 필드가 없기 때문에 
    // result[order.status] === undifined
    result[order.status] = (result[order.status] ?? 0) + order.price; 
    return result;
}, {}); // result의 초기값은 빈객체{}

console.log(sumByStatus);

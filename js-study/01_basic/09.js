let colors = ["빨강", "파랑", "노랑"];

const c0 = colors[0];
const c1 = colors[1];
const c2 = colors[2];
console.log(c0, c1, c2);

// 구조 분해 할당, 비구조 할당
let [color1, color2, color3] = colors;
console.log(color1, color2, color3);

// 값 스왑
let a = 10; // 10 -> 20
let b = 20; // 20 -> 10
let temp = 0; // 0 -> 10
temp = a;
a = b;
b = temp;

console.log(a, b); // 20, 10
// 구조 분해 할당은 등호기준으로
// 우변이 과거의 a, b 값을 기억하고 있다.
[a, b] = [b, a];
console.log(a, b); // 10, 20

// 객체 구조분해 할당
let post = {
    post_id : 1,
    title: "상품 구매 안내",
    view: 120,
    author: "운영자"
}

let post_title = post.title;
let post_author = post.author;

// 구조 분해 할당
let {title, author} = post;
console.log(title, author);

// 구조 분해 할당은 대입 상황에서 동작한다.
// 1. 대입연산자
// 2. 함수 매개변수
// 3. for
const fx = ({title, author}) => {
    console.log(`${author} : ${title}`)
}
// let {title, author} = post;
fx(post);

// [[key1, vla1], [key2, val2], ...[key, val]]
let entries = Object.entries(post);
// [key, val] = [key1, val1]
for(let [key, val] of entries) {
    console.log(`${key} : ${val}`);
}

// REST 문법 - 배열, 객체
colors = ["빨강", "파랑", "노랑", "초록", "검정"]

// 앞의 값 일부만 가져오자, 나머지는 배열로 가져오자
const [red, blue, ...REST] = colors;
console.log(REST);

post = {
    post_id : 1,
    title: "상품 구매 안내",
    view: 120,
    author: "운영자"
}

// post_id만 빼고, postInfo에 객체로 대입
const {post_id, view, ...postInfo} = post;
console.log(postInfo);

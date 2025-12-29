const product = {
    product_id: 1,
    name: "노트북",
    price: 1200000,
    stock: 5
}
// spread 문법을 사용해 price 10% 할인, stock 1감소
// + product_id 필드는 제거
let newProduct = {
    ...product,
    price: product.price * 0.9,
    stock: product.stock - 1
}
// rest문법으로 product_id 필드 제거
const{product_id, ...productInfo} = newProduct;
console.log(productInfo);


const productOption = {
    color: "블랙",
    warrenty: 2
}
// spread 문법을 사용해
// product, productOption 필드를 합친 새로운 객체를 만들어주세요
// 새로운 객체에 status : "배송중" 추가
const newProduct2 = {
    ...product,
    ...productOption,
    status : "배송중"
}
console.log(newProduct2);

// passwordConfirm 서버로 보내지 x
// 두 객체를 병합
// agreeTerm: true 필드 추가
const basicFormInput = {
    usrname: "jsman",
    password: "123456",
    passwordConfirm: "123456",
    email: "jsman@js.com"
}

const optionFormInput = {
    name: "홍길동",
    phone: "010-1111-1111",
    address: "부산시 부산진구"
}

// passwordConfirm 제거 - rest 문법
const {passwordConfirm, ...restInfo} = basicFormInput;

// 두 객체를 병합 + 필드 추가
const submitData = {
    ...restInfo,
    ...optionFormInput,
    agreeTerm: true
}

console.log(submitData);

let products = [
    {name: "노트북", price: 1200000, stock: 5},
    {name: "마우스", price: 30000, stock: 0},
    {name: "키보드", price: 80000, stock: 10},
    {name: "키보드", price: 80000, stock: 8}
]
// 1.{name: "스피커", price: 40000, stock: 0} 추가
products = [...products, {name: "스피커", price: 40000, stock: 0}];
console.log(products);
// 2. stock 옵션을 제거
// stock 값이 0이면 isAvailable: false, 0이 아니면 isAvailable: true
for(let p of products) {
    p
}

const newProducts = products.map((product) => {
    // 비구조할당 + REST 문법 -> stock을 분리
    // stock = product.stock
    // rest -> stock을 제외한 나머지 필드를 가진 객체
    const {stock, ...rest} = product;
    // 새로운 객체를 return
    // -> 새 객체에 stock 값을 참조해서 isAvailable 필드 추가
    const isStockOverZero = stock > 0;
    return {
        ...rest,
        isAvailable: isStockOverZero
    }
});

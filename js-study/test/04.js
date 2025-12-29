const products = [
    {name: "노트북", price: 1200000},
    {name: "마우스", price: 30000},
    {name: "키보드", price: 80000},
    {name: "무선헤드셋", price: 110000},
    {name: "스피커", price: 4000},
]

// 1. products에 담긴 객체들, 원본을 유지
// name: "상품이름(할인)", price는 10% 할인 가격 업데이트
const discount1 = products.map((product) => {
    const updateProduct = {
        name: product.name + "(할인)",
        price: product.price * 0.9
    }
    return updateProduct;
})
console.log(discount1);

// reduce
const discount2 = products.reduce((result, product) => {
    const updateProduct = {
        name: product.name + "(할인)",
        price: product.price * 0.9
    }
    result.push(updateProduct);
    return result;
}, []) // 초기값: 빈배열
console.log(discount2);

// 2. 5만원 이하인 상품들만 10% 할인 업데이트
const discount3 = products.filter((product) => product.price <= 50000)
    .map((product) => {
        return {
            name: product.name,
            price: product.price * 0.9
        }
    });
console.log(discount3);

// reduce
const discount4 = products.reduce((result, product) => {
    if(product.price <= 50000) {
        const updateProduct = {
            name: product.name,
            price: product.price * 0.9
        }
        result.push(updateProduct);
    }
    return result;
}, [])
console.log(discount4);


const cart = [
    {name: "노트북", price: 1200000, count: 1, checked: true},
    {name: "마우스", price: 30000, count: 1, checked: false},
    {name: "키보드", price: 80000, count: 2, checked: true}
];

// cart에서 checked가 true인 상품들의 총 가격을 구해주세요
// for문
let sum = 0;
for (let product of cart) {
    if(product.checked) {
        sum += product.price * product.count;
    }
}
console.log(sum);

// reduce
const totalPrice = cart.reduce((sum, product) => {
    if(product.checked) {
        sum += product.price * product.count;
    }
    return sum;
}, 0)
console.log(totalPrice);
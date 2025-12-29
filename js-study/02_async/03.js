// Promise 객체: 비동기 작업의 상태와 결과를 담은 객체
// 지금은 결과를 모르지만, 결국 성공 or 실패
// -> 1. 성공할 때랑 실패할 때를 필드로 가진다.(상태)
//    2. 결과를 저장

// resolve: 비동기 작업이 성공했을 때 setter & promise의 state 변경
// reject: 비동기 작업이 실패했을 때 setter & promise의 state 변경
const asyncFunc = (resolve, reject) => {
    setTimeout(() => {
        // 성공 or 실패 가정
        const isSuccess = true;
        if(isSuccess) {
            resolve("성공 데이터");
        } else {
            reject("실패 데이터");
        }
    }, 1000);
};

// 비동기 함수를 Promise 객체로 변환
// const promise1 = new Promise(asyncFunc);

// Promise 객체가 가지고 있는
// then함수, catch함수로 성공/실패 분기
promise1.then((result) => {
    // then 함수는 매개변수로 "성공시 실행할 콜백 함수"를 받음
    // 콜백의 result 매개변수는 resolve로 담았던 데이터가 있음
    console.log(result);
})
.catch((error) => {
    // catch는 "실패시 실행할 콜백함수"를 받음
    // 콜백의 error에 reject로 담았던 데이터가 있음
    console.log(error);
});

// 02.js에 있던 a, b, c 함수 -> promise로 변환

const a = (value) => {
    console.log("a 호출");
    const promiseA = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 3000);
    });
    return promiseA;
}

const b = (value) => {
    console.log("b 호출");
    const promiseB = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 1000);
    });
    return promiseB;
}

const c = (value) => {
    console.log("c 호출");
    const promiseC = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, 2000);
    });
    return promiseC;
}

// promise 객체 리턴
a(10).then((resultA) => {
    console.log(`a결과: ${resultA}`);
    return b(resultA);
})
.then((resultB) => {
    console.log(`b결과: ${resultB}`);
    return c(resultB);
})
.then((resultC) => {
    console.log(`c결과: ${resultC}`)
})
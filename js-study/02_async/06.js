// Promise를 문법으로 감출 수 있다.
// async / await 문법

const delay = (ms) => {
    const myPromise = new Promise((rs, rj) => {
        setTimeout(() => {
            const s = ms / 1000;
            rs(`${s}초가 경과되었습니다.`)
        }, ms)
    });

    return myPromise;
}

// const start = () => {
//     delay(3000).then((res) => {
//         console.log(res);
//     });
// }

// async를 붙히면 함수가 promise 객체를 반환하게 된다.
const start = async () => {
    // delay는 비동기 함수(promise 반환하고 있음)
    // await은 promise객체의 상태가 fullfill이 될 때까지
    // 해당 함수의 코드 진행을 대기 시킴 => then()과 동일
    try {
        let result = await delay(3000);
        console.log(result);
    } catch (error) {
        // error는 reject()에 담은 데이터
        console.log(error);
    }

}

start();

// getUserInfoById - async / await으로 변환
const getUserInfoById = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    // fetch()는 webAPI -> 비동기
    let response = await fetch(url);
    // json()도 webAPI를 사용 -> 비동기
    let user = await response.json();
    const userInfo = {
        username: user.username,
        email: user.email
    };
    return userInfo; // userInfo가 Promise 안에 resolve 된다.
}

// getUserInfoById(4) 작업이 끝나고, await을 써서
// resolve로 set 했던 데이터를 받아 볼 수 있다.
const user = await getUserInfoById(4);
console.log(user);

const scores = {
    math: 80,
    eng: 60,
    kor: 75,
    sci: 50
}

const passed = {};
// 각 과목의 합격 커트라인이 70점
// 반복문을 돌면서, 각 과목을 검사해
// passed 객체 안에 scores에서 70점 이상인
// 과목들을 추가하는 코드를 작성

const entries = Object.entries(scores);

// for( let entry of entries) {
//     let key = entry[0];
//     let value = entry[1];
//     if(value >= 70) {
//         passed[key] = value;
//     }
// }

for (let [key, value] of Object.entries(scores)) {
    if(value >= 70) {
        passed[key] = value; // 객체 업데이트
    }
}
console.log(passed);

// 각 가격을 10% 올려서 업데이트
// 객체는 map이 없음
const prices = {
    apple: 1000,
    banana: 1500,
    oranage: 2000
}

// 객체 -> 배열 -> 순회 가능
// [key1, val1], [key2, val2]. [key3, val3]
const entries2 = Object.entries(prices);

for (entry2 of entries2) {
    let key = entry2[0];
    let val = entry2[1];
    prices[key] = val * 1.1; // 객체 업데이트
}
console.log(prices);

// entries() 사용
const following = {
    민수: true,
    철수: false,
    지우: true,
    나연: true
}
const follower = {
    정우: true,
    민수: true,
    나연: false
}

// 맞팔 이름 저장
// 배열.push()
const followEachOthers = [];

// [["민수", true]...["나연", true]]
const followEntries = Object.entries(following);
for (let entry of followEntries) {
    let name = entry[0];
    let isFollowing = entry[1];
    let isFollwer = follower[name]; // name으로 follower 조회
    // isFollowing이 true && name으로 follower 조회시 true
    if(isFollowing && isFollwer) {
        followEachOthers.push(name);
    }
}
console.log(followEachOthers);


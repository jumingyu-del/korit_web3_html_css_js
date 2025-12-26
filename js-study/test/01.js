const name = "홍길동";
const email = "abc@mail.com";
const follower = ["홍길동"];

console.log(typeof name);
// 이름이 "김"으로 시작하면 "김씨입니다." 출력
// 문자열.startsWith()
name.startsWith("김") && console.log("김씨입니다.");

// 이메일에 "@"있으면 "이메일입니다." 출력
// 문자열.includes() 사용
email.includes("@") && console.log("이메일입니다.");

// 팔로워가 존재하면 "팔로워가 존재합니다." 출력
// 리스트.length 사용
 follower.length && console.log("팔로워가 존재합니다."); 

name.startsWith("홍") && email.includes("@") && follower.length && console.log("모든 조건 통과");

if (name.startsWith("홍") 
    && email.includes("@") 
    && follower.length) {
    console.log("모든 조건 통과")
}
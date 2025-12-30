// https://jsonplaceholder.typicode.com/posts/{id}

const getPostById = (postId) => {
    const postPromise 
        = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((result) => {
            // .json() : JSON 문자열 -> js 객체 변환(webAPI)
            return result.json(); // 결과도 promise
        })
    
    return postPromise;
}

getPostById(2)
    .then((post) => {
        console.log("데이터 수신성공")
        const {title, body} = post;
        console.log(`${title} : ${body}`);
    })
    .catch((e) => {
        console.log(e.message);
    });

// https://jsonplaceholder.typicode.com/users/{id}
// fetch -> json을 js 객체화 -> 함수 호출 
// -> 출력창에 수신해온 user의 정보 중 username, email만 출력

const getUserInfoById = (userId) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const userPromise = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((user) => {
            const userInfo = {
                username: user.username,
                email: user.email
            } 
            return userInfo;
        })

    return userPromise;
}

getUserInfoById(1)
    .then((info) => {
        const {username, email} = info;
        console.log(`username: ${username}`);
        console.log(`email: ${email}`);
    })
    .catch((error) => {
        console.log(error.message);
    });
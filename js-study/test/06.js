/*
`https://jsonplaceholder.typicode.com/todos/${todoId}`
fetch하는 함수 (getTodo)

todo id 1, 2, 3, 4, 5인 todo의 데이터들을 []에 담아서 출력
[{}, {}...{}]
*/
const getTodo = async (todoId) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
    let todo = await fetch(url);
    todo = await todo.json();
    return todo;
}

let todos = [];
for (let i = 1; i < 6; i++) {
    // await은 코드 진행을 함수가 완료될 때까지 멈춤
    const todo = await getTodo(i);
    todos = [...todos, todo];
}
console.log(todos);

// 병렬진행을 시켜야 할 때?
// Promise.all([promise 객체1, promise 객체2.., promise객체10])
// -> 각 promise 객체들이 병렬로 실행 된다.

const todoIds = [1, 2, 3, 4, 5];
// [getTodo(1), getTodo(2)..., getTodo(5)]
const todoPromises = todoIds.map((id) => {
    return getTodo(id);
});

// 병렬실행
todos = await Promise.all(todoPromises);
console.log(todos.map((todo) => {
    return todo.title;
}));
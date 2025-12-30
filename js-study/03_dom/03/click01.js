const cell1 = document.querySelector("#cell-1");

    cell1.addEventListener("click", (event) => {
        console.log("cell1 리스너가 클릭 감지");
        // click 이벤트 객체 < 브라우저가 만들어주는 객체
        console.log(event); 
        console.log(event.target); // 클릭한 대상
        const target = event.target;
        const number = target.innerText;
        // alert(`클릭한 상자의 번호: ${number}`);

        // event는 가장 자식 요소에서 발생
        // 자식리스너 -> 부모리스너 -> 부모의 부모리스너...
        // 전파된다. (이벤트 버블링)

        // 전파방지
        event.stopPropagation();
    });

    const board = document.querySelector("#board");
    board.addEventListener("click", (event) => {
        console.log("보드판 리스너가 클릭 감지");
        console.log("실제 내가 클릭한 요소: ", event.target);
        console.log("이벤트리스너가 붙어있는 요소: ", event.currentTarget);
    });
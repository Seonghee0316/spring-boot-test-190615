var app=(()=>{

    // 함수안에 함수있는 것 app은 클로저를 안 쓰면 main을 못 씀.
    // 
    let init=()=>{
        main();
    }
    let main=()=>{
        let wrapper = document.getElementById('wrapper');

        wrapper.innerHTML='<h1>메인페이지</h1>'
        +'<div>여긴 처음 페이지 입니다.</div>'
        +'<button id="count-btn">카운터</button>'
        +'<button id="change-btn">바꾸기</button>'

        let count_btn = document.getElementById('count-btn');
        count_btn.addEventListener('click', ()=>{
            count();
        })
    }
    let count=()=>{
        var xhr=new XMLHttpRequest();
        method = 'GET';
        url = 'count';
        xhr.open(method, url, true);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState === 4 && xhr.status===200){
                let wrapper = document.getElementById('wrapper');
                wrapper.innerHTML='총 고객수 : <h1>'+xhr.responseText + '</h1>'
                alert('헬로');

            }
        }
        xhr.send();
    }

    return {
        //클로저 (키값이랑 밸류값주는 것) 부모한테 자식을 알려주는 것. 함수안에 함수가 들어있어요. 형제 함수들은 서로를 호출 가능. 
        init:init
    };

})();

// app  안에 init과 main 형제들이 있음. 
// 외부함수와 내부함수가 있을 때, 외부함수의 실행으로 return값을 만나서 함수가 종료된 상태이지만 return값의 내부함수의 유효범위(스코프)로 인해 접근 할 수 있는 상태 

//test:init
//app.test로 해야함.
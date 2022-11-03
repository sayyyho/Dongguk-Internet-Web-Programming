const h2 = document.querySelector("h2").innerHTML;
const user = "seho park"
// let inputConsole = prompt("입력하세요.")
// alert(`${h2}`+' '+`${user}`);
let ret = confirm("전송할래요?");
var x; // 전역변수

// function testCase()
// {

// }
function test(){
    let x;
    x = 1;
    this.x = 100; //전역 변수 x에 저장.
    console.log(x);
}


// if(ret == true) {
//     testJS();
// }
// else{
//     console.log("no");
// }
console.log(h2);
test();
console.log(x);


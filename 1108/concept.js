console.log("abc"+32);
// 문자로 인식
console.log("23"+"52");
console.log(23+52);
console.log(23+52+"abc");
console.log("abc"+23+52);
// 문자가 먼저와서 문자로 인식
// 문자가 그냥 섞여있으면 문자열로

let x = 3
let y = 7

// if문보다 효율적
// 식쓰고
switch(x+y){
    case 5:
        console.log("5미만");
        break;
    // case에는 값이나 리터럴만(문자열)
    case 10:
        console.log("10이네요");
        break
    // 원하는거 없을때
    default:
        console.log("없어요");
}

// for문은 횟수를 가늠할 수 있을 때
// while은 횟수는 모르지만 조건에 따라서 종료할 수 있도록
// while은 조건부터 물어보지만, 일단 하고 조건을 물어보도록해서 최소 1회는 시행하려고
let i = 1
do {
    console.log(i + "회차입니다.");
    i++;
}
while(i<6);
// 반복문을 줄이자!! > 시간복잡도 고려, 시간복잡도가 좋으면 공간복잡도(메모리)도 잘 활용하게 돼

console.log(parseInt(13, 16));
// 16진수로 표현된 13을 10진수 19로 출력
console.log(isNaN(`2`));
console.log(isNaN("3"));
console.log(isNaN("sdf"));

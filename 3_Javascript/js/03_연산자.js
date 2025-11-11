
// document : HTML 문서내에서
// get : 얻어오다
// Element : HTML
// BYID : 아이디로(아이디가 일치하는)
const number1 = document.getElementById("input1");
console.log(number1);

const number2 = document.getElementById("input2");
console.log(number2);

const result = document.getElementById("calcResult");
console.log(calcResult);

//  두 수를 더해서 화면에 출력하는 함수
// input요소.value : input 요소에 작성된 값 얻어오기
function plusFn(){
  const value1 =number1.value;
  const value2 =number2.value;

  console.log(value1,value2);

  console.log(value1+value2);
  //-> input 요소에 작성된 값은 무조건 문자열(string)형태라서
  // 더했을 때 이어쓰기 되는 문제 발생한다!

  // [해결방법]
  // 문자열을 숫자로 변경하는 코드 수행!
  //  -> Number("123")-- > 123 문자열을 숫자로 바꿔줌
  console.log(Number(value1)+ Number(value2));

  // 두 수의 합을 result 변수(아이디가 calcResult인 span요소)의
  // 내부글자(innerText , HTML요소의 content 태그사이)로 대입하기
  result.innerText = Number(value1)+ Number(value2);
}

// 두 수를 뺴서 화면에 출력하는 함수
function minusFn(){
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1)- Number(value2));
  result.innerText = Number(value1)- Number(value2);
}
// 두 수를 곱해서 화면에 출력하는 함수
function multiFn(){
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1)* Number(value2));
  result.innerText = Number(value1)* Number(value2);
}
// 두 수를 나누기해서 화면에 출력하는 함수
function divFn(){
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1)/ Number(value2));
  result.innerText = Number(value1)/ Number(value2);
}
// 두 수의 나머지를 화면에 출력하는 함수
function modFn(){
  const value1 = number1.value;
  const value2 = number2.value;
  console.log(Number(value1)% Number(value2));
  result.innerText = Number(value1)% Number(value2);
}




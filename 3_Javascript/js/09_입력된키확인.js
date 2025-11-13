
// 내가 푼 방식

// const keybox1 = document.querySelector(".key-box > div:nth-child(1)");
// const keybox2 = document.querySelector(".key-box > div:nth-child(2)");
// const keybox3 = document.querySelector(".key-box > div:nth-child(3)");
// const keybox4 = document.querySelector(".key-box > div:nth-child(4)");

// document.addEventListener("keydown",function(e){
  
//   if(e.key== 'q'){
//     keybox1.style.backgroundColor = 'pink';
//   }
//   if(e.key == 'w'){
//     keybox2.style.backgroundColor = 'pink';
//   }
//   if(e.key== 'e'){
//     keybox3.style.backgroundColor = 'pink';
//   }
//   if(e.key== 'r'){
//     keybox4.style.backgroundColor = 'pink';
//   }
// });

// document.addEventListener("keyup",function(e){
  
//   if(e.key== 'q'){
//     keybox1.style.backgroundColor = 'white';
//   }
//   if(e.key == 'w'){
//     keybox2.style.backgroundColor = 'white';
//   }
//   if(e.key== 'e'){
//     keybox3.style.backgroundColor = 'white';
//   }
//   if(e.key== 'r'){
//     keybox4.style.backgroundColor = 'white';
//   }
// });

// -----------------------------------------------------------------

// 선생님이 푼 방식
// const keys = document.querySelectorAll(".key"); // 배열 형태

// // 화면에서 키가 눌러지는걸 감지 했을 때
// document.addEventListener("keydown",function(e){

//   let idx; // 인텍스 값을 저장할 변수

//   // 입력된 키를 소문자로 바꿔서 일피하는 case 실행
//   switch(e.key.toLocaleLowerCase()){
//     case 'q': idx=0; break;
//     case 'w': idx=1; break;
//     case 'e': idx=2; break;
//     case 'r': idx=3; break;
//     default : return; // 함수 종료
//   }

//   // idx번호와 일피하는 keys 배열의 요소 배경색을 변경
//   keys[idx].style.backgroundColor = 'deepPink';

// });

// // 화면에서 키가 눌러지는걸 감지 했을 때
// document.addEventListener("keyup",function(e){

//   let idx; // 인텍스 값을 저장할 변수

//   // 입력된 키를 소문자로 바꿔서 일피하는 case 실행
//   switch(e.key.toLocaleLowerCase()){
//     case 'q': idx=0; break;
//     case 'w': idx=1; break;
//     case 'e': idx=2; break;
//     case 'r': idx=3; break;
//     default : return; // 함수 종료
//   }

//   // idx번호와 일피하는 keys 배열의 요소 배경색을 변경
//   keys[idx].style.backgroundColor = 'white';

// });

// 더 간단하게 만들기 ------------------------ 매우 중ㅇ요!!1

const keys = document.querySelectorAll(".key");
const keyMap = {'q':0, 'w':1, 'e':2, 'r':3};

// 키보드 이벤트 핸들러 함수 (중요!!)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// JS Object
// 객체명[key] -> 매핑된 value
// 객체명.key -> 매핑된 value

function changKeyColor(e,color){
  const idx = keyMap[e.key.toLowerCase()]; 
  //          keyMap['q'] -> 0(index번호)
  //          keyMap['w'] -> 1(index번호)
  //          keyMap['e'] -> 2(index번호)
  //          keyMap['r'] -> 3(index번호)

  // keyMap에 없는 값 입력되면 -> idx 는 undefined 
  if(idx != undefined){
    keys[idx].style.backgroundColor = color;
  }
}

// 키가 눌렀을때 / 뗴어졌을 때
document.addEventListener("keydown",(e) =>{changKeyColor(e,"red")});
document.addEventListener("keyup",(e) =>{changKeyColor(e,"white")});


// 더 간단하게 

// 이벤트가 감지되었을 때 실행해야하는 함수(ex) changeKeyColor) 
// 만약 해당 함수에 전달할 인자가 없는 경우 
// -> 함수명만 써도 됨 ("keydown", changeKeyColor) 
// -> changeKeyColor 함수 선언부의 매개변수에서 이벤트 객체 (e)를 
//    가져다 쓸 수 있음

// 만약 해당 함수에 전달할 인자가 있는 경우
// -> 익명함수 형태로 작성할 것 (e) => {}
// -> 전달인자의 1번째 값은 e를 넘겨주기, 2번째 전달인자부터 내가 전달하고싶은
// 데이터 나열...
// -> ("keydown", (e) => changeKeyColor(e, "deepPink")) 


/*
const keys = document.querySelectorAll(".key");
const keyMap = { q: 0, w: 1, e: 2, r: 3 };

document.addEventListener("keydown", handleKey);
document.addEventListener("keyup", handleKey);

function handleKey(e) {
  const idx = keyMap[e.key.toLowerCase()];
  if (idx === undefined) return;

  // event.type이 'keydown'일 때만 색 변경, 아닐 땐 white로 복귀
  keys[idx].style.backgroundColor = e.type === "keydown" ? "deeppink" : "white";
}
*/



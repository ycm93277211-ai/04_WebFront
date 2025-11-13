const box = document.querySelectorAll(".box");
const input = document.querySelectorAll(".color-input");
const chang = document.querySelector("#changeButton");
// 두 배열의 요소의 갯수, 순서가 같으니 index 번호를 공유할 수 있음.

console.log(box);

chang .addEventListener("click",function(){
  for(let i =0; i< box.length; i++){
    box[i].style.backgroundColor = input[i].value;
  }
});


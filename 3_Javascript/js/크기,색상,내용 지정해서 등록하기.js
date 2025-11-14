
const textarea =document.querySelector("#textarea");
const inputResult =document.querySelector("#inputResult");
const size =document.querySelector("#size");
const color =document.querySelector("#color");

let size1;
let color1;


document.querySelector("#btn1").addEventListener("click",function(){
  
  // 저장값
  const size1 = document.querySelector("#size").value;
  const color1 = document.querySelector("#color").value;

  textarea.style.fontSize=size1 + "px";
  textarea.style.color=color1;

  
});


document.querySelector("#btn2").addEventListener("click",()=>{
  const text = textarea.value;
  inputResult.innerText = text;

  inputResult.style.fontSize=size1 + "px";
  inputResult.style.color=color1;


});
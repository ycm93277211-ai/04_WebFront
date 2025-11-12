// prompt 사용연습

function test() {
  const password = prompt("비밀번호를 입력하세요");

  console.log(password);
  return password;
}

// test();
// const password =test();

// 확인 -> 입력한 값이 문자열로 저장
// 취소 -> null

// if (password == null){
//   alert("취소");
// }
// else{
//   if(password == "1234"){
//     alert("비밀번호 일치");
//   } else {
//     alert("비밀번호 불일치")
//   }
// }
//------------------------------------------

// 금액 적송 input요소
const amount = document.getElementById("amount");

// 잔액 표시
const output = document.getElementById("output");

// 잔액 기록 변수
let balance = 10000;

// 비밀번호
const password = '1234';

// 입금
function deposit(){
  const money = Number(amount.value);
  balance +=money;
  console.log(balance);
  output.innerText = balance;

  amount.value=''; // input에 작성된 값 제거
}

// 출금
function  withdrawal(){

  const money = Number(amount.value);
  const password = prompt("비밀번호를 입력하세요");

  if(password == null){ // 취소 버튼 누름 
    alert("취소됨");
  }
  else{ // 확인
    if(password == "1234"){
      alert("비밀번호 일치합니다!");
  
      if(money <= balance ){ // 출금금액이 작은 경우 (출금가능)
        balance -=money;
        console.log(balance);
        output.innerText = balance;
        // alert(money+"원이 출금 되었습니다. 남은 잔액 : "+ balance+"원");
        alert(`${money}원이 출금되었습니다. 남은 잔액: ${balance}원`);
        // 템플릿 리터럴
        // `${}` 안에 변수/ 값을 넣어 동적으로 문자열을 생성하는 방식
        amount.value='';
      }
      else{ // 출금금액이 클 경우 (출금 불가)
        alert("출금 금액이 잔액보다 클 수 없습니다")
        amount.value='';
      }
  
    }else{
      alert("비밀번호가 일치하지 않습니다")
      
    }
  }

  }


function test1 (name){
 
  console.log(`Hello,${[name]}!`);
}
test1("짱구");
test1("철수");

function test2 (a,b){
  return a+b;
}
console.log(test2(3,4));

const test3 = (a,b)=>{
return a*b;
};console.log(test3(3,4));

function test4 (a,b){
  if(a>b){
    console.log("첫 번째 숫자가 더 큽니다")
    return;
  }else{
    console.log("두 번째 숫자가 더 큽니다")
    return;
  }
}
test4(4,3);
test4(5,6);

function test5(a){
  console.log(a.length);
};
test5("안녕하세요");

function test6(a,b){
  for(let i = 0; i<b; i++){
    console.log(a);
  }
};
test6("안녕하세요",10);

function test7(a){
  if(a%2==0){
   return true;
  }else{
  return false;
  }
}
console.log (test7(10));
console.log (test7(7));

function test8(a,b,c){
  if()
}
// Pre Increment phle 1 badhega fir value ayega
let a = 5; 
let b = ++a;
console.log(a);  // a=5 ++a = pahle 1 add: a=6 ab b ko 6 milega.
console.log(b);  

let a = 8;
let b = ++a;
comsole.log(b); // a=8 ++=9 b=9

let a = 7;
let b = ++a;
console.log(b); //7 pahle 8 phir b=8.

let nul = 10;
let result = ++nul;
console.log(nul);
console.log(result); //10-11 nul=11 result=11

let p = 3;
let q = ++p;
let r = ++p;
console.log(r); //p=3 ++p=pahle 1 badha: p=4 ab q=4 ab p alredy 4 h ++p=phir 1 badha p=5 ab:r=5


// Post Incriment (a++) pahle value ayegi fir 1 ayega
let a = 6;
let b = a++;
console.log(b); //a=6 a++=pahle 6 b ko mila gaya usle bad a=7.

let x = 7;
x++;
console.log(x); //x=7 x++=1 badhao x=8.

let p = 4;
let q = p++;
console.log(p); //q ko phle 4 milega phir p 5 ho jyega.

let nul = 9;
let result = nul++; 
console.log(result); // result ko phle 9 milega phir nul=10 ho jyega.

let a = 6; 
let b = a++;
console.log(a); //6 fir 7

let a = 5;
let b = a++ + ++a;
console.log(a); // 7
console.log(b); // 12

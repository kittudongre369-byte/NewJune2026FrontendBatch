// let n = 5; 
//  //n = 5 -> humein total 5 rows banani hai

// for(let i = 1; i <= n; i++) {
// //i = 1 -> phle row se start
// //i <= 5 -> jab tak i , 5 se chhota ya equal hai
//  //i++ -> har row complete hone k bad i me 1 add hogi

//    let row = "";
//  //row = ""; -> abhi row khali hai

// for(let j = 1; j <= i; j++) {
//  //j = 1 -> har row me 1 se start hogi
//  //j <= -> j, current i tak chalegi
// //j++ -> har bar j me 1 add hoga

// row += j;
// //j ki current value row m add hogi

//  }
//  console.log(row);
// // current row ko screen pr print karo
// }

//let n = 5;

// for(let i = 1; i<= n; i++) {
//    let row = "";

// for (let j = 1; j <= i; j++)
// {
//    row += j;
// }
// console.log(row);
// }
//OUTPUT
// 1
// 12
// 123
// 1234
// 12345

// let n = 7;

// for (let i = 1; i <= 7; i++) {
//     let row = "";

// for (let j = 7; j >= i; j--)
// {
//    row += "$";
// }
// console.log(row);
// }

 //for (let i = 1; i <= 5; i++) {
  //let row = "";

   //for (let j = 5; j >=i; j--) {
    // row = row + "*";
   //}
  //console.log(row); 
//}

//for (let i = 1; i <= 5; i++) {
  //let row = "";

  //for(let j = 7; j <= i; j--){
   // row = row + "*";
  //}
  //console.log(row);
//}


//let n = 5; // Total 5 tak pattern banana hai

// Outer loop: rows control karega
//for (let i = 1; i <= n; i++) {

    // Inner loop: har row me A kitni baar print hoga
    //for (let j = 1; j <= i; j++) {
       // process.stdout.write("A");
    //}

    //console.log(); // Har row ke baad next line
//}

// Ab ulta pattern banana hai
// 4 se start karke 1 tak jayega
//for (let i = n - 1; i >= 1; i--) {

    // Har row me A, i baar print hoga
    //for (let j = 1; j <= i; j++) {
       // process.stdout.write("A");
    //}

    //console.log(); // Next line
//}

 //let n = 6;

 //for(let i = 1; i <= 6; i++) {
    //let row ="";


    //for(let j= 1; j => i; j++) {

  //row = "8";
//}
//console.log(row);
//}

  //let n = 5;

  //for(let i = 1; i <= n; i++) {
     //let row = "";

  //for(let j = 1; j <= i; j++)
     //{
       // row += "@";
  //}
  //console.log(row);
//}

//let n = 5;

//for(let i = 1; i <= n; i++){
   // let row ="";

//for (let j = 1; j <= i; j++){
    //row += i;
//}
//console.log(row);
//}

// let n = 6;
// for(let i = 1; i <= n; i++){
//     let row ="";
// for(let j = 1; j <= i; j++){
//     row += "a";
// }
// console.log(row);
// }

// for (let i = 1; i <= 7; i++) {
//     let row = "";
// for(let j = 1; j <= i; j++) {
//     row +=i;
// }
// console.log(row);
// } 

// for (let i = 1; i <= 7; i++) {
//     let row = "";
//     {
// for(let j=7;j>=i ;j--) {
//    row= row +"7"
//    }
//    console.log(row);
//   }
// }
////OUTPUT
// 7777777
// 777777
// 77777
// 7777
// 777
// 77
// 7

// for (let i = 1; i <= 8; i++) {
//     let row = "";
// for (let j = 1; j <= i; j++) {
//    row= row + "&"
// }
// console.log(row);
// }
////OUTPUT
// &
// &&
// &&&
// &&&&
// &&&&&
// &&&&&&
// &&&&&&&
// &&&&&&&&

// for (let i = 1; i <= 3; i++) {
//    let row ="";
// for (let j = 1; j <= i; j++) {
//     row = row + "@";
//    }
//    console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//    let row = "";

// for (let j = 1; j <= i; j++) {
//     row = row + "@";
//    }
//    console.log(row);
// }
// // FOR LOOP
//Initialization → kahan se start?
//Condition → kab tak chale?
//Increment → har baar kitna badhe?
//for (let i = 1; i <= 5; i++) {
    //console.log(i);
//}
// WHILE LOOP -Condition True rahne tak chalega
//let i = 1;

//while (i <= 5) {
    //console.log(i);
    //i++;
//}

let word = "PYTHON";

for (let i = 1; i <= word.length; i++) {
 let line = "" ; 

  for (let j = 0; j < i; j++) {
    line += word [j];
}
 console.log(line);
}

//let word = "PAYTHON";
//for (let i = word.length; i >= 1; i --) {
  //let line = "";

//for (let j = 0; j < i; j++) {
  //line += word[j];
//}
//console.log(line);
//}


// // Boolean Thinking
// let varOne = 5;
// console.log(varOne >= 8);

// //2. If Statements

// let age = 8;
// if (age >= 18) {
//   console.log(`yes this guy is Adult`);
// }

// //3.If--else statemnets
// let newage = 8;
// if (newage >= 18) {
//   console.log(`yes this guy is Adult`);
// } else {
//   console.log("this guy is Minor");
// }

// //Nested if else
// //Que1.
// let SName = "Vaibhav";
// let hindi = 75;
// let eng = 75;
// let math = 76;
// let computer = 70;
// let science = 74;
// let sst = 70;

// let total = hindi + eng + math + computer + science + sst;
// let percentage = (total / 600) * 100;
// let Grade = "";
// if (percentage >= 90) {
//   Grade = "A+";
// } else if (percentage >= 80 && percentage < 90) {
//   Grade = "A";
// } else if (percentage >= 70 && percentage < 80) {
//   Grade = "B+";
// } else if (percentage >= 60 && percentage < 70) {
//   Grade = "B";
// } else {
//   Grade = "NA";
// }

// console.log(
//   `Dear ${SName} , You have Scored ${percentage} with grade as ${Grade} `,
// );

// // Question.2.
// // Write a program to check if a person can drive or not . Need the Output as Dear Rahul, You are Above 18 SO YOU CAN DRIVE OR VOTE"

// let userName = "Rahul";
// let chckage = 25;
// let isHavingLicenseCheck = true;
// if (chckage >= 18) {
//   isHavingLicense = true;
//   console.log(`Dear ${userName}, You are Above 18 SO YOU CAN DRIVE`);
// } else {
//   isHavingLicenseCheck = false;
//   console.log(`Dear ${userName}, You are below 18 SO YOU CAN NOT DRIVE`);
// }

// // if (isHavingLicenseCheck) {
// //   console.log("Bande k pas license hai");
// // } else {
// //   console.log("nahi hai");
// // }
// //Ques -- age>18 and u should have license

// let userName = "Rahul";
// let n_age = 25;
// let isHavingLicense = true;

// if (n_age >= 18 && isHavingLicense == true) {
//   console.log(`Dear ${userName}, You can Drive`);
// } else {
//   console.log(`Dear ${userName}, You cannot Drive`);
// }

// Question.3.
// Write a program to check the students eligibility for college admission
// Rules
// 1. 12th School percentage  60 and above
// 2. entrace exam 70 and above

// let schoolPer = 45;
// let entraceresult = 70;

// if (schoolPer >= 60 && entraceresult >= 70) {
//   console.log("Eligible");
// } else {
//   console.log("NA");
// }

// Question.4.
// ATM Logic
// let balance = 5000;
// let withdrawal = 3000;

// If withdrawal > 0
//     If withdrawal <= balance
//         → "Transaction Successful"
//         → Show remaining balance
//     Else
//         → "Insufficient Balance"
// Else
//     → "Invalid Amount"

// Write the complete program
// let balance = 5000;
// let withdrawal = -2000;

// if (withdrawal > 0 ) {
//   if (withdrawal <= balance) {
//     let remaining = balance - withdrawal;
//     console.log(`Transaction Succesful`);
//     console.log(`Remaining Balance is ${remaining}`);
//   } else {
//     console.log(`Insufficient Balance`);
//   }
// } else {
//   console.log(`Invalid Amount`);
// // }
// let age = 20;
// let hasID = false;

// if (age >= 18) {
//   console.log("Age is valid");

//   if (hasID) {
//     console.log("Entry Allowed");
//   } else {
//     console.log("ID Required");
//   }
// } else {
//   console.log("Underage");
// }
//Ques Cehck if a enetred no is positive negative or zero

// let num = -20;

// if (num == 0) {
//   console.log("Entered Number is Zero");
// } else if (num > 0) {
// //   console.log("number is greater than zero :Positive");
// // } else if (num < 0) {
// //   console.log("number is smaller than zero :Negative");
// // }

// //Ques check which is greater of all the three numbers

// let a = 6;
// let b = 8;
// let c = 10;

// if (a > b && a > c) {
//   console.log(`A is greater than b and c`);
// } else if (b > a && b > c) {
//   console.log("B is greater than a and c");
// // } else console.log("C is greater ");
// let x = 10;
// let y = 20;

// if (x > 5) {
//   if (y < 15) {
//     console.log("A");
//   } else {
//     console.log("B");
//   }
// } else if (x === 10) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// Discount System — Coding Question

// Create a program using if-else:
// Purchase ≥ ₹10,000 → 20% discount
// Purchase ≥ ₹5,000 → 10% discount
// Purchase ≥ ₹2,000 → 5% discount
// Below ₹2,000 → No discount
// variable :- let amount;
//output
// Sale : 7000
//discount:10%
//total payable amount = 6300/-

// let amount = 17500;
// let discountPer = 0;

// if (amount >= 10000) {
//   discountPer = 20;
// } else if (amount >= 5000) {
//   discountPer = 10;
// } else if (amount >= 2000) {
//   discountPer = 5;
// } else {
//   discountPer = 0;
// }
// let amountPayable = amount - (discountPer * amount) / 100;
// console.log(
//   `Amount: ${amount} DiscountPercent :${discountPer} NetPayableAmount: ${amountPayable}`,
// );
// let letter = "b";

// if (
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u"
// ) {
//   console.log("Its a Vowel");
// } else {
//   console.log("Its a Consonant");
// }
// Q9. Login + Role Based Access
// let isLoggedIn = true;
// let role = "editor";

// Create conditions:

// Not logged in → "Please login"
// Admin → "Full access"
// Editor → "Can edit content"
// User → "Read only access"
// Any other role → "Invalid role"

// let isLoggedIn = false;
// let role = "user";

// if (isLoggedIn) {
// if (role === "Admin") {
//  console.log("Full Access");
// } else if (role === "Editor") {
 //   console.log("Can Edit Content");
 // } else if (role === "user") {
  //  console.log("Read Only ");
  //  b;
  //} else {
  //  console.log("InvalidROle");
 // }
// } else {
 // console.log("Please Login");
//}
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
    // Beginnr - Question 1
    //let age = 22;

   // if (age >= 18) {
     // console.log("Eligible"); // Eligible
   //} else {
      //console.log("Not Eligible");
   //}

   //let age = 7;
   //if (number > 10) {
     // console.log("A");
   //} else {
      //console.log("B"); // B
   //}

   //let marks = 65;
   //if (marks >= 90) {
     // console.log("A+");
   //} else if (marks >= 60){
      //console.log("A");    //A
   //} else {
     // console.log("B");
//}

//let age = 12;
//if (age >= 18) {
  // console.log("Adult");
//} else if(age >= 13){
  // console.log("Teenager");
//} else {
  // console.log("Child"); // Child
//}

//let number = 10;

//if (number == 10){
   //console.log("Ten"); // Ten
   //} else {
      //console.log("Not Ten");
   //}

   // Intermediate 6 se 10

   //let marks = 75;

  // if (marks >= 90){
     // console.log("A");
   //} else if (marks >= 60) { // B
     // console.log("B");
   //} else {
     // console.log("Fail")
   //}

   //let age = 20;
   //let hasID = true;

   //if (age >= 18) {
     // if (hasID)  {
     // console.log("Allowed"); // Allowed
   //} else {
      //console.log("ID Required");
   //}
   //} else {
     // console.log("Not Allowed");
   //}

   //let number = 15;

   //if (number > 10) {
      //if (number > 20) {
     // console.log("Big");
   //} else {
    //  console.log("Medium"); // Medium
   //}

   //} else {
    //  console.log("Small")
   //}

   //let marks = 35;

   //if (marks >= 40) {
   //if (marks >= 80) {
    //  console.log("Excellent");
   //} else {
     // console.log("Pass");
   //}
//} else {
  // console.log("Fail") // Fail
//}

//let age = 16;
//let permission = true;

//if (age >= 18) {
//console.log("Adult");
//} else {
   //if (permission) {
    //  console.log("Allowed With Peemission"); // Allowed With Peemission
//} else {
   //console.log("Not Allowed");
//}
//}

// Advanced - 11 se 15

//let age = 20;
//let hasID = false;
//let hasPermission = true;

//if (age >= 18) {
   //if (hasID) {
      //console.log("Entry Allowed");
   //} else if (hasPermission) {
      //console.log("Entery With Permission"); // Entery with Permission
   //} else {
      //console.log("ID Required");
   //}
   //} else {
   //console.log("Under Age") ;
   //}

   //let marks = 85;
   //let attendance = 75;

   //if (marks >= 80) {
      //if (attendance >= 75 ){
        // console.log("Grade A"); // Grade A
      //} else {
         //console.log("Attendance Low");
      //}
   //} else if (marks >= 40) {
    //  console.log("Pass");
   //} else {
      //console.log("Fail");
   //}

   //let number = 18;

   //if (number > 10){
      //if ( number % 2 == 0) {
       //  if (number > 15) {
          //  console.log("A"); // A
         //} else {
            //console.log("B");
         //}
      //} else {
       //  console.log("C");
      //}
   //} else {
     // .log("D");
   //}
   
   //let age = 17;
   //let hasID = true;
   //let parentPermission = false;

   //if (age >= 18 ){
     // console.log("Adult Entery");
   //} else{
     // if (hasID) {
        // if (parentPermission) {
          //  console.log("Entery Allowed");
         //} else {
           // console.log("Parent Permission Required"); //
         //}
      //} else {
       //  console.log("ID Required");
     // }
   //}
   

// Nasted if
//let age = 20;
//let hasID =false;

//if (age >= 18){
//if (hasID) {
   //console.log("Allowed");
//} else {
   //console.log("ID required"); //ID Required
//}
//} else {
   //console.log("Not Allowed");
//}

// Question.1

 /* let percentage = 60;
  let entranceExam = 70;

  if (percentage >= 60) {
  if (entranceExam >= 70) {
   console.log("Student is eligiable for collage admission"); // Right
   } else {
   console.log("Student is Not eligiable");
   }
  }

// Question.2 ATM Logic

  let balance = 5000;
  let withdrawal = 3000;

  if (withdrawal > 0) {
  if (withdrawal <= balance) {
   console.log("Transaction Successful"); // Transaction Successful
   console.log("Remaining Balance:");

   } else {
   console.log("Insufficient Balance");
   }
   } else {
   console.log("Invalid Amount");
   }

//Question.3 Movis Ticket

  let age = 16;
  let hasparent = true ;

  if(age >= 18){
   console.log("ticket allowed");
  } else {
  if (age >= 13) {
  if (hasparent) {
  console.log("ticket allowed with parent") //
         
  } else {
  console.log("parent requred");
  } 
  } else {
  console.log("ticket not allowed");
  }
  } 

// Question.4

  let age = 20;
  let hasID = false;

  if(age >= 18) {
   console.log ("Age is Valid");
   
  if (hasID) {
   console.log("Entry Allowed");
  } else {
      console.log("ID Required"); 
   }
 } else {
   console.log("Underage")
  }

   let marks = 75;

   if (marks >= 60) {
     if (marks >= 80) {
      console.log("Excellent");
      } else {
         console.log("Pass");
      }
   } else {
      console.log("Fail")
   } 
      let num = 5;

      if (num === 0) {
         console.log("Zero");
      }
      else if (num > 0) {
         console.log("Positive");
      }
      else if (num < 4) {
         console.log("Nagative");
//       } */  
// let day = 7
//       switch(day) {
//          case 1: {
//             console.log("monday");
//             break;
//          }
//       case 2: {
//           console.log("tuesday");
//           break;
//       }

//       case 3 : {
//          console.log("wednesday");
//          break;
//       }

//       case 4: {
//          console.log("thursday");
//          break;
//       }

      
//       default :{
//          console.log(invalid)
//       }
//    }

////let color ="red";

//switch(color){
   //case "red":
   //{   console.log('Stop');
     // break;
   //}
   //case "green":{
     // console.log('Go');
     // break;
   //}
   //case "yellow":{
     // console.log('GEt REady ');
      //break;
   //}
  // default:{
// console.log('Enter per

// LEVEL 1 - BEGINNER-----------------------------------------------------------------

//------------Q1.Create an Array------------------//

// let fruits = ["Apple","Banana","Mango","Orange"];
 //console.log(fruits);

//------------Q2.Access Elements------------------//

//let fruits = ["Apple","Banana","Mango","Orange"];
 //console.log(fruits[0]);  // Frist // Apple
 //console.log(fruits[2]);  // Second // Banana
 //console.log(fruits[3]);  // Last  //Orange


//let fruits = ["Apple","Banana","Mango","Orange"];
 //console.log(fruits[0]);
 //console.log(fruits[1]);

//------------Q3.Update an Element------------------//

//let fruits = ["Apple","Banana","Mango"]; // 2 me grapes add hoga
//fruits[1] = "Grapes";
//console.log(fruits);

//------------Q4.Add an Item------------------//

//let fruits = ["Apple","Banana","Mango"]; // push last me add krne k liye
//fruits.push("Mango");
//console.log(fruits);

//------------Q5.Add Multiple Items------------------//

//let fruits = ["Apple","Banana","Mango"]; // isme item add kr rhe h mtlb line se ayega

//fruits.push("Orange","Grapes","Kiwi");
 //console.log(fruits);

 //fruits.push("Orange"); // is trike se bhi kr skte hai
 //fruits.push("Grapes");
 //fruits.push("Kiwi");

 //------------Q6.Remove the Last Item------------------//

 //let fruits = ["Apple","Banana","Mango","Orange"];

 //let removedItem = fruits.pop();

 //console.log(fruits);
 //console.log(removedItem);


//------------Q7.Remove the First Item------------------//

//let students = ["Rahul","Priya","Aman","Riya"]; // first item ko remove krta hai 

//students.shift();

//console.log(students);

//------------Q8.Add at the Beginning------------------//

//let students = ["Rahul","Priya","Riya"]; // Karan nam ko add kiya hai

//students.unshift("Karan");

//console.log(students);

//------------Q9.Check for an Item------------------//

//let fruits = ["Apple","Banana","Mango"]; // Item sahi hai ya nhi check krte hai

//console.log(fruits.includes("Banana"));

//// LEVEL 2 - Basic Problem Solving -------------------------------------------------

//------------Q11.First and Last------------------//

//let colors = ["Red","Blue","Green","Yellow"]; // first color-red,first color-yellow

 //console.log("First Color:",colors[0]); 
 //console.log("Last Color:",colors[colors.length - 1]);

 //------------Q12.Add and Remove------------------//

 //let numbers = [10, 20, 30];

// numbers.push(40);
// numbers.push(50);
// numbers.pop();
//numbers.unshift(5);

//console.log(numbers);

//------------Q13.Student------------------//

//let students = ["A","B","C"]; 
//students.push("D");  // end me D add hoga
//students.unshift("E"); // E first me add hoga
//students.shift(); // last wala elememnt remove hoga
//console.log(students);
 
//------------Q14.Shopping Cart------------------//

// let cart = ["Shoes","Shirt","Jeans"];
// cart.push("Watch");
// cart.pop();
// cart.unshift("Cap");

// console.log(cart);
//console.log(cart.includes("Jeans"));

//------------Q15.Find an Item------------------//

//let products = ["Laptop","Mouse","Keyboard","Monitor"];
 //console.log(products.includes("Keyboard"));
 //console.log(products.includes("Prointer"));


//// LEVEL 3 - Extracting Parts-------------------------------------------------------

//------------Q16.Find an Item------------------//

//let numbers = [10,20,30,40,50];
//numbers.shift();
//numbers.pop();

//let newArray = numbers;
//console.log(newArray);

//------------Q17.First me three fruits add------------------//

//let fruits = ["Apple","Mango","Banan","Orange","Grapes"];
//fruits.unshift("Grapsh","Papaya","Strawberry")
//.log(fruits);

//------------Q18------------------//

//let numbers = [10,20,30,40,50]; // last k item hatane k liye slice(-2) use krte h
//let lastTwo = numbers.slice(-2);
//console.log(lastTwo);

//------------Q19.Predict the Output------------------//

//let arr = ["A","B","C","D","E"];

//let result = arr.slice(1, 4);

//console.log(result);
//console.log(arr);

//// LEVEL 4 - CHANGING AN ARRAY------------------------------------------------------

//------------Q20.remove mango------------------//


//let fruits = ["Apple","Banana","Mango","Orange"];
//fruits.splice(2,1);
//console.log(fruits);


//------------Q21.Remove banana and mango from------------------//

//let fruits = ["Apple","Banana","Mango","Orange"];
//fruits.splice(1,2);
//console.log(fruits);

//------------Q22.Insert Mango between Apple and Banana in:------------------//

//let fruits = ["Apple","Banana","Orange"];
//
//fruits.splice(1,2,"Mango");
//console.log(fruits);

 let fruits = ["Apple","Bananna","Orange"];
 fruits,splice(1.2,"Kiwi");
 console.log(fruits);

//------------Q23.Replace Banana With Grapes:------------------//

//let fruits = ["Apple","Banana","Mango",];
//fruits.splice(2,2,"Grapes");
//console.log(fruits);

//------------Q24.Predict the Output:------------------//

//let arr = ["A","B","C","D"];

//let removed = arr.splice(2,4); 

//console.log(arr); // bacha hua show hoga

//console.log(removed); // jo remove hua hai wo show hoga 


//// LEVEL 5 - COMBINING AND CONVERTING-----------------------------------------------

//------------Q25.Create one array containing all four values:------------------//

//let frontend = ["HTML","CSS"];
//let backend = ["Node","MangoDB"];

//let allTech = frontend.concat(backend); //concat use kisi bhi element me ak line m likhe k liye kiya jata hai
//console.log(allTech);

//------------Q26.Combine these into one array::------------------//

 //let a = [1, 2]; 
 //let b = [3, 4];
 //let c = [5, 6];
 //let result = [...a,...b,...c]; // ak line me lane k liye
 //console.log(result);

 //let a = [1, 2];
 //let b = [3, 4];
 //let c = [5, 6];
 //let result = [...a,b,...c]; // [1,2,[3,4], 5,6]
 //console.log(result);


//------------Q27.Convert:------------------//

//let skills = ["HTML","CSS","Javacript","React"];
//let result = skills.join("|"); // join k mtlb ap koi bhi |,. laga skte ho
//console.log(result);

//------------Q28.Convert:------------------//

//let fruits = ["Apple", "Banana", "Mango"];
//let result = fruits.join(""); // , + - kuch bhi laga skte hai
//console.log(result);

//// Level 6 — Nested Arrays --------------------------------------------------------

//------------Q29.Flatten:------------------//

//let numbers = [1,2,[3,4],5];
//numbers= numbers.flat();
//console.log(numbers); //[1,2,3,4,5]

//let arr = [1, [2, 3], [4, 5]];
//arr = arr.flat();
//console.log(arr);

//------------Q30.Flatten:------------------//

//let arr = [1, [2, 3], [4, 5]];
//console.log(arr.flat(Infinity));

//------------Q31.Predict:------------------//

//let arr = [1, [2, [3, 4]],5];
//console.log(arr.flat());
//console.log(arr.flat(2));

//let arr = [1,[2,[3,[4,[5]]]]];
//console.log(arr.flat());
//console.log(arr.flat(Infinity));

//// Level 7 — Reordering ----------------------------------------------------------

//------------Q32.Reverse:------------------//

//let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
//numbers.reverse();
//console.log(numbers);

//------------Q33.Reverse:------------------//

//let students = ["Rahul", "Priya", "Aman", "Riya"];
//students.reverse();
//console.log(students);

//------------Q34.Predict:------------------//

//let arr = ["A", "B", "C"]; 
//let result = arr.reverse();
 //console.log(result); 
 //console.log(arr);

 //// Level 8 — Checking Array Types-------------------------------------------------

//------------Q35.Predict:------------------//

//console.log(Array.isArray([1, 2, 3])); // true kyoki ye array hai
//console.log(Array.isArray("Hello"));  // false string hai ye array nhi
//console.log(Array.isArray({}));  // false kyoki ye object hai array nhi
//console.log(Array.isArray(100)); // false kyki ye array nhi number hai 

//------------Q36.Explain:------------------//

//let data = [10, 20, 30]; 
//console.log(typeof data); // object
//console.log(Array.isArray(data)); // true

//------------Q37.Mixed Data:------------------//

//let values = [[1, 2], "Hello", 100, true, {name: "Rahul"}];

//console.log(Array.isArray(values[0])); 
//console.log(Array.isArray(values[1]));
//console.log(Array.isArray(values[2]));
//console.log(Array.isArray(values[3]));
//console.log(Array.isArray(values[4]));
//console.log(Array.isArray(values[5]));

////Level 9 — Creating Arrays from Values------------------------------------------------------------------

//------------Q38.Convert:------------------//

//let word = "HELLO";
//let result = Array.from(word); //String se Array me badalna
//console.log(result);

//------------Q39.Convert:------------------//

//let language = "JavaScript";
//let result = Array.from(language);
//console.log(result);

//------------Q40.Predict:------------------//

//let value = "12345"; 
//let result = Array.from(value);
 //console.log(result); 
 //console.log(Array.isArray(result));

////Level 10 — Mixed Practice------------------------------------------------------------------------

//------------Q41.Predict:------------------//

//let fruits = ["Apple", "Banana", "Mango"];
 //fruits.push("Orange"); 
 //fruits.unshift("Grapes");
  //fruits.pop(); 
  //console.log(fruits); 

//------------Q42.Predict:------------------//

//let arr = [10,20,30,40,50];

//arr.splice(1, 2); // 1.2 hat jayega splice use krne se
//arr.push(60);
//arr.unshift(5);
//console.log(arr);

//------------Q43.Predict:------------------//

//let arr = ["A","B","C","D"];

//let newarr = arr.slice(1,3); // 1.3 lgane se A or D hat jyega kyo wo 1.3 hai
//newarr.push("E");

//console.log(newarr);

//------------Q44.Predict:------------------//

//let a = [1,2];
//let b = [3,4];

//let result = a.concat(b);
//result.reverse();

//console.log(result);
//console.log(a);
//console.log(b);

//------------Q45.Predict:------------------//

//let fruits = ["Apple", "Banana", "Mango"]; // join k use string bnane k liye use
 //console.log(fruits.slice(0, 2).join("-"));


////Level 11 — Real-World Problems--------------------------------------------------------------

 //------------Q46.Shopping Cart:------------------// smj nhi aya

//  let cart = ["Laptop", "Mouse", "Keyboard"];

//  cart.push("Monitor");
//  cart.splice(1,1);
//  cart.unshift("Welcome");
//  console.log(cart.includes("Keyboard"));
//  console.log(cart.indexOf("Laptop"));

// console.log(cart);

//------------Q47.Student List:------------------//


// let students = ["Rahul", "Priya", "Aman", "Riya"];

// students.push("Karan");
// students.unshift("Neha");
// students.pop();
// students.splice(3,1,"Arjun");
// console.log(students.includes("Priya"));
// console.log(students.indexOf("Riya"));

// console.log(students);

//------------Q48.Skills:------------------//

//let frontend = ["HTML", "CSS", "JavaScript"]; 
//let backend = ["Node", "Express"];

//let skills = frontend.concat(backend);
//skills.push("MangoDB");
//skills.reverse();
//console.log(skills.join(","));


//------------Q49.Nested Categories:------------------//  smj nhi aya

//let categories = [["Shirts","Jeans"],
                 //["Shoes", "Sandals"],
                 //["Bags", "Wallets"]];

  //let collection = categories.flat();

  //console.log(collection.includes("Shoes"));
  //console.log(collection.indexOf("Wallets"));
  //console.log(collection);

  //------------Q50.Final Challenge:------------------//

  //let products = ["Laptop", "Mouse", "Keyboard"];

//products.splice(1, 1); // Mouse remove
//products.push("Monitor", "Webcam");

//console.log("Available Products:", products.join(" | "));
//console.log(products.includes("Laptop"));
//console.log(products.indexOf("Keyboard"));

//Final Outpu Challenge------------------------------------------------------

//------------Q51.Final Challenge:------------------//

// let arr = ["A","B","C","D"];

// arr.push("E");
// let removed = arr.splice(1, 2);
// arr.unshift("X");
// let result = arr.slice(1, 4)
// result.reverse();

// console.log(arr);
// console.log(removed);
// console.log(result);
// console.log(result.join("-"));

//let fruits = ["Apple","Mango","Bananna","Kiwi"];
 
//let result = fruits.slice(1, 3);

//console.log(result);
               //0//    //1//   //2//     //3//
  //let fruits = ["Apple", "Mango", "Banana", "Kiwi"];

 //fruits.splice(1,2); // 1 , 2 delete hoga baki bacha hua output hai

 //console.log(fruits);

 //Quotion 11.

 //let fruits = ["Apple","Mango","Banana","Kiwi"];
 //let result  = fruits.slice(0,2);
 //console.log(result);

 //let fruits = ["Apple","Mango","Banana","Kiwi"];
 //let result = fruits.splice(1,);
 //console.log(result);

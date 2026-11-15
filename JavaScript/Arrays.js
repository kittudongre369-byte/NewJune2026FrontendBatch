//let numbers = [1,2,3,4,5,] // Array of numbers
//let stringArr = ["Sidhu", "Kiran","Vaibhavi","Sonam"]; // Array of String

//let arr = [1,2, "Sonam", "Kanchan"];
//console.log(numbers,typeof numbers);
//console.log(stringArr, typeof stringArr);
//console.log(arr, typeof arr);

//// Array Methods----------------------------------------------------
// push
//let numbers = [1,2,3,4,5,]; 
//console.log(numbers[4]); // 0 se chalu hota hai index is liye 5 ki jagah 4 h

//numbers[3] = 52; 
//console.log(numbers); // 3 ki jagah 52 ayega


//let num = [1,2,3,4,5,6,7,8,9,]; 
//console.log(num.length);  // length का मतलब है array में कितने elements हैं


//arr[index] // index से element निकालना
//let numbers = [10, 20, 30, 40];

//numbers.push(85);
//console.log(numbers); // push last me (85) ko add krta hai

////Question. Find the last element----------------------------------------------------

const randomArr = [85, 74, 74, 85, 96, 85, 77, 741, 852, 963, 8710, 85, 7, 20, 78, 5, 1, 74, 79,
  74, 8585, 8,];
const arrlenght = randomArr.length; 
console.log(arrlenght); // total 20 element hai // SMJ NHI AYA HAI
console.log(randomArr[arrlenght / 2]);

//// 2. Push
//let numbers = [1,2,3,4,5];
//numbers.push(52); // existing array ko update krte hai mtlb last me 52 add hoga
//console.log(numbers);

//// 3. Pop
//let numbers = [1,2,3,4,5,];
//numbers.pop(); // existing array ko update krte hai mtlb last element ko remove krta hai
//console.log(numbers);

//// 4.Unshift
//let numbers = [1,2,3,4,5,];
//numbers.unshift(25); // first me element ko add krta hai
//console.log(numbers);

//// 5.shift
//let numbers = [1,2,3,4,5,];
//numbers.shift(); // first me element ko remove krta hai
//console.log(numbers);

//// 6.Includes // boolean return - element present hai ya nhi
//let numbers = [1,2,3,4,5,];
//console.log(numbers.includes(5));
//console.log(numbers);

//// 7.indexOf // return the index of a element in the array , if element is not present returns -1
//let numbers = [1,2,3,4,5,];
//console.log(numbers.indexOf(9)); // jo element nhi hai uske liye -1 show hoga

//// 8.Join  /// SMJ NHI AYA
 //const myFruitArr = ["Apple", "Mango", "Banana"];
 //const myFruitArrStr = myFruitArr.join(); // ek string bana deta hia
 //const numStr = numbers.join("/");
 //console.log(myFruitArr);
 //console.log(myFruitArrStr, typeof myFruitArrStr);
 //console.log(numStr, typeof numStr);

//// 9. Slice (Start , End to include rahega lekin end value include nho hoga)
// Slice does not effect original array
//const myFruitArrSl = [ /// smj nhi aya
    //"Apple",
    //"Mango",
    //"Banana",
    //"Kiwi",
    //"Grapes",
    //"DragonFruit",
//];

//console.log("Slice " + myFruitArrSl.slice(0,3));
//console.log(myFruitArrSl);

////10. Splice(start, no. of element) // original array ko update kr data hai

//const myFruitArrSp = [
    //"Apple",
   // "Mango",
   // "Banana",
    //"Kiwi",
    //"Grapes",
    //"DragonFruit",
//];

//myFruitArrSp.splice(3, 2);

//console.log(myFruitArrSp);

// 11. reverse change the original array

//let newNumbers = [1, 2, 3, 4, 5, 6, 7, 8,];
//newNumbers.reverse;
//console.log(newNumbers);

////.Que 12
//let numA = [1,2,3,];
//let numB = [4,5,6,];

// prob with push

//numA.push(numB);
//numA.push(74);
//console.log(numA);

//const result = numA.concat(numB); // original array ko modify nahi karege
//console.log(numA);
//console.log(result);

// 13.
// let newArr = [1, 2, 3, 4,[4, 5, 6,[7, 8, [9, 10]]]];
// console.log(newArr. flat(2));
// console.log(newArr.flat(Infinity));

// // 14.

// const myFruitArrSp = [
//     "Apple",
//     "Mango",
//     "Banana",
//     "Kiwi",
//     "Grapes",
//     "DragonFruit",
//     "Orange",
//     "Papaya",
//     "Lichi",
//     "Pomengranate",
// ];
// console.log(myFruitArrSp.sort());

 //let newNumbers = [1,2,3,4,5,6,7,8,];
// console.log(newNumbers);

//let val = 98;
//console.log(Array.isArray(newNumbers));
//console.log(Array.isArray(val));

//let nameNew = "Kanchan";
//console.log(Array.from(nameNew)); // return new array

// loops over Array
//const myFruitArr = [
   // "Apple",
//     "Mango",
//     "Banana",
//     "Kiwi",
//     "Grapes",
//     "DragonFruit",
//     "Papaya",
//     "Lichi",
//     "Pomengranate",
// ];

// for(let i = 0; i < myFruitArr.length; i++) {
//     console.log(`${i + 1}. ${myFruitArr[i]}`);
// }

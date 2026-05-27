console.log('rohan');  
// let obj = {
//     item:"pen",
//     price:20,
// }
// let tempplateLiterals = `the item is ${obj.item} and its price is ${obj.price} rupees`;
// console.log(tempplateLiterals);

// console.log("the item is ",obj.item,"and its price is",obj.price);


//  ARRAY 
// let marks = [1,2,3,4,5,6];

/*
let heroes = ["a","bc",'dce'];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof(marks));
// console.log(marks[0]);
marks[2] = 66;

//string - immutable
//array - mutable

//TRAVERSALS
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

//el is a copy of the element for the actual value
for(let el of heroes){
    console.log(el.toUpperCase());
}
*/


/*
console.log(marks);
marks.push(10,20,30);
console.log(marks);

let deletedItem = marks.pop();
console.log(marks);

console.log(deletedItem);
*/

// console.log(marks);
// console.log(marks.toString());

// let marvelHeroes = ["andman","lolaman","bhosduman"];
// let dcHeroes = ["pappu", "rohan"];

// // console.log(newArray);

// marvelHeroes.unshift("allu"); // add at starting

// let val = marvelHeroes.shift(); // delete first element
// // console.log(marvelHeroes);
// // console.log("deleted", val);




// // let newArray = marvelHeroes.concat(dcHeroes);
// // console(newArray.slice(2,4)); // does not change original array

// let marks = [1,2,3,4,5];
// marks.splice(1,3,100); // (startingIndex, numberOfElementToBeDeleted, valueOfElementsToBeAdded)
// // console.log(marks2);

// //we can also add elements by putting 0 in number of element to be deleted
// marks.splice(1,3,100);

// //delete
// marks.splice(1,100);



//////////Functions and Methods/////////////////////

//FUNCTIONS
/*
console.log("hello");
"abc".toUpperCase();
[1,2,3].push(4);
*/

// function   myfunction(){
//     console.log("Here we are calling functions");
// }
// function   myfunction2(msg){
//     console.log(msg);
// }
// function   myfunction3(a,b){
//     s = a + b;
//     return s;
// }

// //ARROW FUNCTIONS

// const mul = (a,b) => { // mul is a variable and can be changed later
//     return a*b;
// };

// // myfunction(); // function call
// // myfunction2("LOLO");


// let arr = [1,2,3,4,5];

// // arr.forEach(function printVal(val){
// //     console.log(val);
// // });

// //for each is a method not a functions it only works on arrays
// // //M-2 ----> arr.forEach(val=>console.log(val));

// //FOR EACH HAS 3 PARAMETERS

// // let cities = ["vara", "Nasi", "dehra"];
// // arr.forEach((val,idx,cities)=>{
// //     console.log(val,idx,cities);
// // })

// // arr.forEach(val=>console.log(val*val));


// ///////////MAPS/////////////
// //used to make newarrays
// let newArray = arr.map(val=>{
//     return val+1;
// })

// //////////FILTER///////////////
// let EvenNumbers = arr.filter(val=>{
//     if(val%2 == 0)return val; 
// })

// ///////////REDUCE//////////////


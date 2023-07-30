//Sorted Squared Array
//Write a function thtat takes in a non-empty array of integers that are
//sorted in ascending order and returns a new array of the same length
//with the squares of the original integers also sorted in ascending order.

// const array = [1,2,3,4,5]
// let newarray = []
// let newarray2 = []

// for(let i = 0; i < array.length; i++){
//     newarray.push(array[i])
// }
// let sorted = newarray.sort();
// console.log(array)
// console.log(sorted)
// function esigual (arra, newarray){
// for(let i = 0; i < array.length; i++){
//     if(array[i] === sorted[i]){}else return 1
// }
// }
// function isSorted (){
// if (esigual() === 1){
//     return false
// } else return true
// }


// if (array != [] && isSorted() === true ){
//     console.log("not empty")
//     for(let i = 0; i < array.length; i++){
//         newarray2.push(array[i]*array[i])
//     }
// }
// console.log(newarray2.sort())


////////////////////////

const array = [-2,-1]
let newarray = [];
for(let i = 0; i < array.length; i++){
    newarray.push(array[i]*array[i])
}
console.log(newarray)
let sorted = newarray.sort((a,b) => a - b);
console.log(sorted)

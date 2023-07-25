array=[8,5,2,9,5,6,3]
let unordered
do{
    unordered = false
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            let temp = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
            unordered = true
        }
    }
} while(unordered)
console.log(array)
console.log(array.sort())
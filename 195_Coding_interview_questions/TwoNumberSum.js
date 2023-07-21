let array = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
var targetSum = 164;
let newarray = [];

function twoNumberSum(array, targetSum){
    for(let i=0; i<array.length;i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]+array[j] === targetSum){
                newarray.push(array[i],array[j])
            }
        }
    }
    if(newarray != []){
        return newarray
    } else return newarray
}
twoNumberSum(array, targetSum);

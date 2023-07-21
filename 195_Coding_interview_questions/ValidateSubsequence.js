array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [5, 1, 22, 22, 22, 25, 6, -1, 8, 10]
newarray = []
rep=0

for(let k=0; k<sequence.length; k++){
    for(let l=k+1;l<sequence.length;l++){
        if(sequence[k]===sequence[l]){
        rep+=1
    } 
}
}
console.log(rep)
    if(rep === 0){
    for(let i=0; i<array.length;i++){
        for(let j=0; j<sequence.length; j++){
            if(sequence[j]===array[i]){
                newarray.push(sequence[j])
            }
        }
    }
    console.log(newarray)
    console.log(sequence)
    if (newarray.toString() === sequence.toString()){
    console.log(true)
    }else console.log(false)
    }else console.log(false)

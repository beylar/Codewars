function removeSmallest(numbers) {
let res = [...numbers]
let min = res[0]
let index
    for(let i = 0; i<res.length; i++){
        if(res[i] < min){
            min = res[i]
            index = i;
            
        }
    

    }
    res.splice(index,1);
    return res
}
console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest([]))
console.log(removeSmallest([5,24,63,63,12,5]))

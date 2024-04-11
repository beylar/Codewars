function deleteNth(arr,n){
    arr = arr.flat()
    let returnArr = [];
    for(let i=0; i<arr.length; i++){
      if(returnArr.includes(arr[i])){
        let count = 0;
        for (let j=0; j<returnArr.length; j++){
          if(arr[i] === returnArr[j]){
            count++;
          }
        }
        if(count<n){
          returnArr.push(arr[i])
        }
      }
      else{
        returnArr.push(arr[i])
      }
    }
    return returnArr;
  }
  console.log(deleteNth([1,2,4,1,4,2,5,7]))
  console.log(deleteNth([20,45,23,1,20,[23,45,1,1,9,8,1,20]],1))
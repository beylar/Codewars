function inter(s1, s2){
    // ...
  let arr1 = [...s1];
  let arr2 = [...s2]
  let mySet = [];
    for(let value of arr1){
        if(arr2.includes(value)){
            mySet.push(value)
        }
    }
    mySet = new Set(mySet);
    return mySet;
    
  };

  console.log(inter([1,2],[1,2]))
  console.log(inter([1,3],[3,4]))
function spot(s1,s2){
    const arr = [];
    for (let i = 0; i< s1.length; i++){
      
        if(s1[i] !== s2[i]){
          arr.push(i)
        }
  }
    return arr;
  }

  console.log(spot('afdge', 'ajdwe'))
function union(s1, s2){
    //...
    let s= new Set([...s1,...s2])
    return s;
  }
  console.log(union([1,2],[2,3]))
interface user{
    name:string;
    age: number
}
interface output{
    x:boolean;
    y:boolean
}

const setRange =(range: [boolean, user]): output => {
    const x = range[0];
    const y = range[1];
    return { x, y: y.age > 10 };
  };
  
setRange([true, { name: 'Patrick', age: 3}]);
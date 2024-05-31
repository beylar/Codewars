// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB)
//Returns { a: 13, b: 20, c: 36, d: 3 }

let combinedObjects = (objA, objB) => {
    let newObj = {}
    for(keys in objA){
        for(key in objB){
            if(keys == key){
                newObj[keys] = Number(objA[keys] + Number(objB[key]))
                //newObj[key] = Number(objA[keys]) + Number(objB[key])
            }
            if(keys != key){
                newObj[keys] = Number(objA[keys])
                newObj[key] = Number(objB[key])
            }
        }
    }
    return newObj;
}
console.log(combinedObjects({ a: 10, b: 20, c: 30 },{ a: 3, c: 6, d: 3 }))
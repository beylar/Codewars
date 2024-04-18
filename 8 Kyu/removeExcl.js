function removeExclamationMarks(s) {
    let res = s.split("")
    for (let i=0; i<res.length; i++){
        if(res[i] === "!"){
            res[i] = res[i].replaceAll("!","")
        }

    }
    res = res.join("")
    return res
}
console.log(removeExclamationMarks("I! love you!"))
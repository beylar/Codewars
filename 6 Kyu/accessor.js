// function evenOrOdd(n) {
//     let num = Number(String(n))
//     console.log(Number(n))
//     return num%2 === 0 ? "Even" : "Odd"
//   }

//   console.log(evenOrOdd[2])

function evenOrOdd(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}
const handler = {
    get: function(target, prop) {
        if (typeof prop === 'string' && !isNaN(prop)) {
            const index = Number(prop);
            return evenOrOdd(index);
        }
        return target[prop];
    }
};
const evenOrOddProxy = new Proxy(evenOrOdd, handler);

console.log(evenOrOddProxy(2));  // 'Even'
console.log(evenOrOddProxy[2]);  // 'Even'
console.log(evenOrOddProxy(7));  // 'Odd'
console.log(evenOrOddProxy[7]);  // 'Odd'

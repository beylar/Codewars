export function* generator(a: number): Generator<string> {
    for(let b = 1; ; b++){
    yield`${a} x ${b} = ${a * b}`
    }
}
var value = generator(5)
console.log(value.next())

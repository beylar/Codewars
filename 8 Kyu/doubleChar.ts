export function doubleChar(str: string): string{
    return Array.from(str).map(el => el.repeat(2)).join('')
   }

console.log(doubleChar("Hello World"))
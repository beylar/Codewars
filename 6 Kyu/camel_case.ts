export function camelCase(str: string): string {
    let arr = str.toLowerCase().split(" ")
    const sol = arr.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    return sol.join(""); 
  }

  console.log("How is it going?")
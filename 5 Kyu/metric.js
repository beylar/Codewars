function meters(x) {
    const prefixes = [
      { unit: "m", value: 1 },
      { unit: "km", value: 1e3 },
      { unit: "Mm", value: 1e6 },
      { unit: "Gm", value: 1e9 },
      { unit: "Tm", value: 1e12 },
      { unit: "Pm", value: 1e15 },
      { unit: "Em", value: 1e18 },
      { unit: "Zm", value: 1e21 },
      { unit: "Ym", value: 1e24 },
    ];

    for (let i = prefixes.length - 1; i >= 0; i--) {
        if (x >= prefixes[i].value) {
            const scaledValue = (x / prefixes[i].value).toFixed(3);
            const trimmedValue = scaledValue.replace(/\.0+$/, "") .replace(/\.$/, "");
            //introducing parseFloat to remove all the trailing zeros for text cases
            return `${parseFloat(trimmedValue)}${prefixes[i].unit}`;
        }
    }

    return "Invalid input"; 
}
  

console.log(meters(999)); // "999m"
console.log(meters(123456)); // "123.456km"
console.log(meters(12300000)); // "12.3Mm"
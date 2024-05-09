class Cube {
    constructor(length){
        this.length = length
    }

    get surfaceArea(){
        return 6 * (this._length ** 2)
    }

    get volume(){
        return this._length ** 3
    }

    set length (newLength){
        this._length = newLength;
    }

    set surfaceArea (surfaceArea){
        this._length = Math.sqrt(surfaceArea / 6)
    }

    set volume (volume){
        this._length = Math.cbrt(volume)
    }

    get length(){
        return this._length;
    }
}

let msg = new Cube(10);
console.log(msg.surfaceArea);
console.log(msg.volume)
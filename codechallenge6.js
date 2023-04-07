//question 1 part 1
let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]

let answer = (arr) => {
    const creatingarr = (val) => {
        const miscarray = [];
        for (item of arr) {
            if (item === val) {
                miscarray.push(item);
            }
        }
        return miscarray
    }
    const unikarray = [];
    const newarray = [];
    arr.forEach((num) => {
        if (unikarray.includes(num) === false) {
            unikarray.push(num);
            newarray.push(creatingarr(num))
        }
    })
    for (item of newarray) {
        if (item.length === 1) {
            newarray[newarray.indexOf(item)] = item[0]
        }
    }
    return newarray
}

answer(array.sort((a, b) => a - b))

//question 1 part 2

let array2 = [1, "2", "3", 2]
const organize = () => {
    let numarray = [];
    let strarray = [];
    for (item of array2) {
        if (typeof item === 'number') {
            numarray.push(item)
        } else if (typeof item === 'string') {
            strarray.push(item)
        }
    }
    numarray = numarray.concat(strarray)
    return numarray
}

//question 2
let array3 = [1, 2, 3]
const answer2 = (arr, target) => {
    let newarray = []
    for (item of arr) {
        let miscarray = []
        if (arr.includes(target - item) && item != (target - item)) {
            miscarray.push(item)
            miscarray.push(target - item)
        }
        newarray.push(miscarray)
    }
    return newarray
}
answer2(array3, 4)

//question 3
const answer3 = (input, g, b) => {
    const rgbToHex = (r, g, b) => {
        const valtohex = (val) => {
            var hex = val.toString(16);
            return hex
        }
        return (valtohex(r) + valtohex(g) + valtohex(b))

    }
    const hextorgb = (val) => {
        var decimal = parseInt(val, 16)
        return [
            (decimal >> 16) & 0xff,
            (decimal >> 8) & 0xff,
            decimal & 0xff
        ]
    }
    if (typeof input === 'string') {
        var regex = /[0-9A-Fa-f]{6}/g;
        if (input.match(regex)) {
            return hextorgb(input)
        }
    } else {
        return rgbToHex(input, g, b)
    }
}
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

//This time no story, no theory. The examples below show you how to write function accum:

// //accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//one function, we went full codewars
function accum(s) {
    return s.split('')
            .map((elem,ind) => elem.toLowerCase().repeat(ind+1))
            .map(elem => elem[0].toUpperCase() + elem.slice(1))
            .join('-')
}

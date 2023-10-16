//https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/
/*
s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
*/
function vertMirror(strng) {
    return strng.split('\n').map(a => a.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
    return fct(s)
}
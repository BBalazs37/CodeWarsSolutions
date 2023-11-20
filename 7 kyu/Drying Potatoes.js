//https://www.codewars.com/kata/58ce8725c835848ad6000007/
/*
John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

At the output the water content is only 98%.
Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

potatoes(99, 100, 98) --> 50
*/
function potatoes(p0, w0, p1) {
    return Math.floor((100-p0) * w0 / (100-p1));
}
//https://www.codewars.com/kata/567501aec64b81e252000003
/*
John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.

John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

Last time he did these calculations he got a headache, so could you help John?

Task
Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

Example:
wallpaper(4.0, 3.5, 3.0) should return "ten"

wallpaper(0.0, 3.5, 3.0) should return "zero"
*/

function wallpaper(l, w, h) {
    if(l == 0 || w==0 || h == 0) return numbers[0];
    let oneRoll = 10 * 0.52;
    let rollsNeeded = Math.ceil(((l*h*2 + w*h*2) / oneRoll) * 1.15);
    return numbers[rollsNeeded];
}

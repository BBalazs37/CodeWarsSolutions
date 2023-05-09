//https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) { //Brute force FTW
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let j = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (i != j) {
                sum = numbers[i] + numbers[j];
                if (sum === target) {
                    return [i, j]
                }
            }
        }
    }
    return null;
}
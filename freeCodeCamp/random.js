//console.log(Math.floor(Math.random()*20))
// let numero = 0
// while (numero != 60){

//     numero = (Math.floor(Math.random() * (60 - 0 + 1) + 0))
//     console.log(numero)
// }

//Math.floor(Math.random() * (myMax - myMin + 1) + myMin)
//__________________________________________
let countArray = []
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return countArray
    } else {
        countArray.push(endNum)
        countArray = rangeOfNumbers(startNum, endNum-1);
        return countArray
        
    }
}
console.log(rangeOfNumbers(8,25));
//_________________________________________

function rangeOfNumber(startNum, endNum) {
    if (endNum < startNum) {
        return []
    } else {
        
        countArray = rangeOfNumber(startNum, endNum-1);
        countArray.push(endNum)
        return countArray
        
    }
}
console.log(rangeOfNumber(8,25));
//_________________________________________

// let countArray = []
// function countdown(n) {
    
//     if (n < 1) {
//         return countArray
//     } else {
//         countArray.push(n)
//         countArray = countdown(n - 1)
//     } return countArray;
// }
// console.log(countdown(10))

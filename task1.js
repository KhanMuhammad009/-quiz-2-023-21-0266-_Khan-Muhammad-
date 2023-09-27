function calculatePercentage(number, totalAmount) {
    let percentage = (number / totalAmount) * 100;
    return percentage;
}

let result = calculatePercentage(50, 200);
console.log(`The percentage is: ${result}%`);

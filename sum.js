// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...n) => {
    let sum = 0;
    n.forEach(element => {
        sum += element;
    });
    return sum;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

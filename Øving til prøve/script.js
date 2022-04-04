//Sum of first 10 natural numbers
function add10natural() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += i;
    }
    document.getElementById("a10naturalsum").innerHTML = "Sum: " + sum;
}

//Sum of 10 different numbers from user inputs
function add10userInput() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += parseInt(document.getElementById("userInput" + i).value);
    }
    document.getElementById("a10sum").innerHTML = "Sum: " + sum;
}

//Sum of 10 different numbers from user inputs
function add10userInputWithAverage() {
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += parseInt(document.getElementById("userInput" + i).value);
    }
    document.getElementById("a10sum").innerHTML = "Sum: " + sum;
    document.getElementById("a10avg").innerHTML = "Average: " + sum / 10;
}

//Save numbers in array and print them out
function saveNumbers() {
    document.getElementById("a10sum").innerHTML = "";
    var numbers = [];
    for (var i = 1; i <= 10; i++) {
        numbers.push(parseInt(document.getElementById("userInput" + i).value));
    }
    for (var i = 1; i <= 10; i++) {
        document.getElementById("a10sum").innerHTML += " - " + numbers[i - 1];
    }
}

//Save numbers in array and print them out in reverse order
function saveNumbersReverse() {
    document.getElementById("a10sum").innerHTML = "";
    var numbers = [];
    for (var i = 1; i <= 10; i++) {
        numbers.push(parseInt(document.getElementById("userInput" + i).value));
    }
    for (var i = 10; i >= 1; i--) {
        document.getElementById("a10sum").innerHTML += " - " + numbers[i - 1];
    }
}

//Create array with 50 random numbers and print out highest number
function highestNumber() {
    var numbers = [];
    for (var i = 1; i <= 50; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    var highest = numbers[0];
    for (var i = 1; i <= 50; i++) {
        if (numbers[i - 1] > highest) {
            highest = numbers[i - 1];
        }
    }
    document.getElementById("a10sum").innerHTML = "Highest number: " + highest;
    console.log(numbers);
}

//Create array with 50 random numbers, and print out sorted numbers
function sortedNumbers() {
    document.getElementById("a10sum").innerHTML = "";
    var numbers = [];
    for (var i = 1; i <= 50; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    numbers.sort(function (a, b) { return a - b });
    for (var i = 1; i <= 50; i++) {
        document.getElementById("a10sum").innerHTML += " - " + numbers[i - 1];
    }
}

//Create array with size decided by user input
function createArray() {
    document.getElementById("a10sum").innerHTML = "";
    var size = parseInt(document.getElementById("userInputSize").value);
    var numbers = [];
    for (var i = 1; i <= size; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    for (var i = 1; i <= size; i++) {
        document.getElementById("a10sum").innerHTML += " - " + numbers[i - 1];
    }
}

//Create array with 50 random numbers, add the odd numbers into a new array, and print out the new array
function oddNumbers() {
    document.getElementById("a10sum").innerHTML = "";
    var numbers = [];
    for (var i = 1; i <= 50; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    var oddNumbers = [];
    for (var i = 1; i <= 50; i++) {
        if (numbers[i - 1] % 2 != 0) {
            oddNumbers.push(numbers[i - 1]);
        }
    }
    for (var i = 1; i <= oddNumbers.length; i++) {
        document.getElementById("a10sum").innerHTML += " - " + oddNumbers[i - 1];
    }
}

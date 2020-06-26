// 1) Factorialize a number
function factorialize(num) {
  var result = 1;
  for (var i = 1; i <= 5; i++) {
    result = result * i;
    console.log(result);
  }
  return result;
}

factorialize(10);

// 2) reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

// 3) Turn Fahrenheit into Celsius

function convertToF(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// 4) Find the biggest word in a string

function findLongestWordLength(str) {
  var longest;
  var stringArray = str.split(" ");
  longest = stringArray[0].length;

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longest) {
      longest = stringArray[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 5) Find the biggest number of in each array

function largestOfFour(arr) {
  return arr.map(function (item) {
    var biggest = item[0];
    for (var i = 0; i < item.length; i++) {
      if (item[i] > biggest) {
        biggest = item[i];
      }
    }
    console.log(biggest);
    return biggest;
  });
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

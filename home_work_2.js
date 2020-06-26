// 1) Finding the end of a string;
// Linear search;
function confirmEnding(str, target) {
  // sting converts into an array, gets lowercased and the value of the array is established;
  var i,
    arr = str.toLowerCase().split(" "),
    size = arr.length;
  // loops through the array of the string
  for (i = 0; i < size; i++) {
    // In case we have multiple words in a string we compare just the last one
    if (arr.length > 1) {
      if (
        // .substr get the substring from the result of subtraction of the length of the sought string from the length of an array
        arr[size - 1].substr(arr[size - 1].length - target.length) === target
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      // this runs in case we've got only one word in a string
      if (arr[0].substr(arr[0].length - target.length) === target) {
        return true;
      } else {
        return false;
      }
    }
  }
}

confirmEnding("Connor", "r");

// 2) Repeat a strung

function repeatStringNumTimes(str, num) {
  var i = 0;
  var stringArr = [];
  if (num <= 0) {
    return "";
  } else {
    while (i < num) {
      i++;
      stringArr.push(str);
    }
  }
  return stringArr.join("");
}

repeatStringNumTimes("*", 3);

// 3) truncate a string

function truncateString(str, num) {
  var shortStr,
    dotdotdot = "...";

  if (str.substr(0, str.length - num).length >= num) {
    return str.substr(0, num) + dotdotdot;
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// 4) Finders Keepers

function findElement(arr, func) {
  var matchingEls, i;
  // transforms into an array of answers
  matchingEls = arr.map(func);
  for (i = 0; i < matchingEls.length; i++) {
    // returns a first true element
    if (matchingEls[i] === true) {
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);

// 5) Boo-who

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho({});

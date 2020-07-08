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

// 6) Title Case a Sentence
function titleCase(str) {
  let parsedStr = str.toUpperCase();
  parsedStr = parsedStr.split(" ");
  parsedStr = parsedStr
    .map(function (elem) {
      let parsedElem = elem.split("");
      let firstCapitalLetter = parsedElem[0];
      let lowerCaseLetters = "";
      if (elem.length > 1) {
        lowerCaseLetters = parsedElem.splice(1).join("").toLowerCase();
      } else {
        return elem;
      }
      return firstCapitalLetter + lowerCaseLetters;
    })
    .join(" ");
  return parsedStr;
}

titleCase("I'm a little tea pot");

// 7) Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let arr1Copy = arr1.slice();
  let arr2Start = arr2.slice(0, n);
  let arr2End = arr2.slice(n);
  let i = 0;
  for (i = 0; i < arr1Copy.length; i++) {
    arr2Start.push(arr1Copy[i]);
  }
  for (i = 0; i < arr2End.length; i++) {
    arr2Start.push(arr2End[i]);
  }

  return arr2Start;
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

// 8) Falsy bouncer

function bouncer(arr) {
  let i = 0;
  let arrBool = [];
  for (; i < arr.length; i++) {
    if (!!arr[i]) {
      arrBool.push(arr[i]);
    }
  }
  return arrBool;
}

bouncer([7, "ate", "", false, 9]);

// 9) Where do I belong

function getIndexToIns(arr, num) {
  let i = 0;
  let sortedArr = arr.sort((a, b) => a - b);

  for (; i <= arr.length; i++) {
    if (arr.length > 0) {
      if (num <= arr[i]) {
        return i;
      }
    } else {
      return 0;
    }
  }
  return arr.length;
}

getIndexToIns([2, 5, 10], 15);

// 10) Mutation

function mutation(arr) {
  [str1, str2] = arr;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = str1.split("");
  str2 = str2.split("");
  return str2.every((letter) => {
    return str1.includes(letter);
  });
}
mutation(["Mary", "Aarmy"]);

// 11) Chunky monkey

function chunkArrayInGroups(arr, size) {
  let temp = [],
    i = 0;

  for (; i < arr.length; i += size) {
    temp.push(arr.slice(i, i + size));
  }
  return temp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

function printString(string) {
  console.log(string[0]);
  string = string.slice(1)
  if (string.length > 0) {
    printString(string)
  }
}

function reverseString(string) {
  if (string === "") {
    return ""
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  if (string.charAt(0) !== string.charAt(string.length -1)) {
    return false
  } else if (string.length > 1) {
    isPalindrome(string.substring(1, string.length - 1))
  }
  return true
}

function maxOf(array) {
  if (array.length > 1) {
    array[0] > array[array.length - 1] ? array.pop() : array.shift()
    maxOf(array)
  }
  return array[0]
}

function includesNumber(array, num) {
  if (array.length === 1) {
    return array[0] === num ? true : false
  } else {
    return array[0] === num ? true : includesNumber(array.slice(1), num)
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    return addUpTo(array, index - 1) + array[index]
  } else {
    return array[0]
  }
}

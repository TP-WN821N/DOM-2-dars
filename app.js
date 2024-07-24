// 58
function rotateArray(nums = [], k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
  return nums
}

// Test case
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]


// 59
function nthSmallest(arr = [], n) {
  arr.sort((a, b) => a - b)
  return arr[n - 1]
}

// Test case
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 3)); // Output: 7
// console.log(nthSmallest([7, 10, 4, 3, 20, 15], 4)); // Output: 10

// 60.
function mostFrequent(arr = []) {
  let maxCountItem = arr[0]
  let maxCount = 0
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    if (maxCount < count) {
      maxCount = count
      maxCountItem = arr[i]
    }
  }
  return maxCountItem
}
// console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // Output: 1
// console.log(mostFrequent([3, 3, 3, 2, 2, 1])); // Output: 3


// 61.
function mostFrequentChar(str = '') {
  let arr = str.split("")
  let maxCountItem = arr[0]
  let maxCount = 0
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++
      }
    }
    if (maxCount < count) {
      maxCount = count
      maxCountItem = arr[i]
    }
  }
  return maxCountItem
}
// console.log(mostFrequentChar("aabbbcccc")); // Output: "c"
// console.log(mostFrequentChar("abcdabcdabcd")); // Output: "a"

// 62.
function firstMissingPositive(nums = []) {
  let new_arr = nums.filter(item => item > 0).sort((a, b) => a - b)
  return new_arr[0]
}

// Test case
// console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 3
// console.log(firstMissingPositive([1, 2, 0])); // Output: 1


// 63
function printCharsInLine(s = '') {
  let result = s.split("").join(" ")
  return result
}
// console.log(printCharsInLine("hello")); // Output: "h e l l o"


// 64
function longestCommonPrefix(strs = ['']) {
  let result = ''
  let new_arr = strs.map(item => item.length)
  let loopSikle = Math.min(...new_arr)
  for (let i = 0; i < loopSikle; i++) {
    let count = 0
    strs.forEach(item => {
      if (item[i] == strs[0][i]) {
        count++
      }
    })
    if (count == 3) {
      result += strs[0][i]
    }
  }
  return result ? result : '""'
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""


// 65
function maxSumSubmatrix(matrix = [[]], k) {
  let result = null
  let sum = matrix[0].reduce((a, b) => a + b)
  for (let i = 0; i < matrix.length; i++) {
    if (sum < matrix[i].reduce((a, b) => a + b)) {
      sum = matrix[i].reduce((a, b) => a + b)
    }
    result = matrix[i]
  }
  return result
}
// console.log(maxSumSubmatrix([
//   [10, 2, 3],
//   [4, 11, 6],
//   [7, 8, 9]
// ])); // [7, 8, 9]


// 66
function intersection(arr1, arr2) {
  let obj = {}
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        obj[arr1[i]] = arr1[i]
      }
    }
  }
  return Object.values(obj)
}
// console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]

// 67
function twoSumPairs(arr, target) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        result.push([arr[i], arr[j]])
      }
    }
  }
  return result
}
// console.log(twoSumPairs([2, 7, 11, 15], 9)); // Output: [[2, 7]]
// console.log(twoSumPairs([3, 2, 4], 6)); // Output: [[2, 4]]



// 68
function charFrequency(str = '') {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    let count = 0
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++
        obj[str[i]] = count
      }
    }
  }
  return obj
}
// console.log(charFrequency("aabbcc")); // Output: { a: 2, b: 2, c: 2 }
// console.log(charFrequency("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }


// 69
function deepestValue(obj = {}) {
  let result = null
  let values = null
  const recurcev = (itemObj) => {
    for (let key in itemObj) {
      if (typeof itemObj[key] == "object" && itemObj[key] != null) {
        values = Object.values(itemObj[key])
        if (values.some(item => typeof item == 'object')) {
          recurcev(itemObj[key])
        } else {
          result = values[0]
        }
      }
    }
    return result
  }
  return recurcev(obj)
}
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
};
console.log(deepestValue(obj)); // Output: 4
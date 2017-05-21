// Question:
// Given an array of integers, return indices of the two numbers such that
// they add up to a specific target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// Example
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  let result = []
  let container = new Map()
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(container.has(target - num)) {
      result.push(container.get(target - num))
      result.push(i)
      return result
    }

    // important, we want to use the number as the key of HashMap
    // In other words, for a key,value pair num is stored in key, index is stored in value
    container.set(num, i)
  }

  return null
}

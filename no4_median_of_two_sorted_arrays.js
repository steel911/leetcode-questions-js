// Question:
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2)

    return median(nums)

    function median(nums) {
        nums.sort((a, b) => a - b)

        let half = Math.floor(nums.length / 2)

        if(nums.length % 2)
            return nums[half]
        else
            return (nums[half-1] + nums[half]) / 2.0
    }

};

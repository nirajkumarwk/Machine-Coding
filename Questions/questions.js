// Simple binary Search 


function BinarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {

        let mid = Math.floor((left + right)/2);

        if(nums[mid] === target) return mid;

        if(nums[left] <= target && nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11))


{ /*  
    

34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
    */}

var searchRange = function(nums, target) {

    const findFirst = () => {
        let start = 0;
        let end = nums.length - 1;
        let index = -1;
        
        while (start <= end) {
            let mid = Math.floor((start + end)/2);

            if(nums[mid] === target) {
                index = mid;
                end = mid - 1;
            } else if(nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return index;
    }

    const findLast = () => {
        let start = 0;
        let end = nums.length - 1;
        let index = -1;

        while(start <= end) {
            let mid = Math.floor((start + end) /2);

            if(nums[mid] === target) {
                index = mid;
                start = mid + 1;
            } else if(nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1
            }
        }
        return index;
    }
    
   return [findFirst(), findLast()];
};


{/*  
    
   35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104 
    
    */}


var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);

        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        
    }
    return start;
}
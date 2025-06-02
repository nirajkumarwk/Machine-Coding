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


{/* 
    540. Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 
Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
 

Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
    
*/}

var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  if (nums.length === 1) return nums[0];
  if (nums[start] !== nums[start + 1]) return nums[start];
  if (nums[end] !== nums[end - 1]) return nums[end];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];

    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid - 1]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
};





{/* 

67. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 
Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
    
*/}


var twoSum = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      return [start + 1, end - 1];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
};



{ /* 
    
209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

    */}


var minSubArrayLen = function(target, nums) { 
    let start = 0;
    let sum = 0;
    let minLength = Infinity;

    for(let end=0; end < nums.length; end++) {
        sum += nums[end];

        while(sum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;
        }
    }
  return minLength === Infinity ? 0 : minLength; 

}
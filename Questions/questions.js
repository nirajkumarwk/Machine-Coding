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

// console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11))


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





{/* 

3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


*/}

var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let start = 0;
    let maxLength = 0;
    let substring;

    for(let end=0; end<s.length; end++) {
        while(seen.has(s[end])){
            seen.delete(s[start]);
            start++
        }

        seen.add(s[end]);
        let currentlength = end - start + 1;
        if(currentlength > maxLength) {
            maxLength = currentlength;
            substring = s.slice(start, end+1)
        }
        
        
    }
    return `maxlength ${maxLength} and substring ${substring}`
};



{ /* 
    
424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length   
    
    */}



var characterReplacement = function(s, k) {
    let start = 0;
    let count = {};
    let maxLength = 0;
    let maxCount = 0;

    for(let end=0; end<s.length; end++) {
        count[s[end]] = (count[s[end]] || 0) + 1;
        maxCount = Math.max(maxCount, count[s[end]])

        if((end - start + 1) - maxCount > k) {
            count[s[end]]--;
            start++
        };
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}





{/*
 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.   
    
    */}

var maxArea = function (height) {
  let start = 0;
  let end = height.length - 1;
  let maxArea = 0;

  while (start < end) {
    let area = Math.min(height[start], height[end]) * (end - start);
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }
  return maxArea;
};



{/* 
    
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?    
    */}


var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let tar = target - nums[i];
    if (map.has(tar)) {
      return [i, map.get(tar)];
    }
    map.set(nums[i], i);
  }
};




{/* 
    
9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?  
    
*/}


var isPalindrome = function (x) {
  let str = String(x);
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};





{/*
    
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

    */}


var removeDuplicates = function (nums) {
  let i = 0;
  for (j = i + 1; j < nums.length - 1; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};




{/* 
  1752. Check if Array Is Sorted and Rotated

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.  
    
*/}


var check = function (nums) {

    let count = 0;
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i]> nums[i+1]){
            count++;
        }
    }
    if(nums[nums.length -1] > nums[0]) {
        count++
    }
    return count <=1;
}




var longestSubArray = function (nums, k) {
  let n = nums.length;
  let longest = 0;

  for(let i=0; i<n; i++) {
    let sum = 0;
    let length = 0
    for(let j=i; j<n; j++) {
        sum += nums[j];
        length++;
        if(sum === k) {
            longest = Math.max(longest, length)
        }
    }
  }
  return longest;
  
};



// console.log(longestSubArray([1, 2, 3, 4, 5], 12))




{/* 
    
283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done? 
    
*/}
// Brute Force
var moveZeroes = function (nums) {
    let n = nums.length;
    let newArr = [];

    for(let i=0; i<n; i++) {
        if(nums[i] !== 0) {
            newArr.push(nums[i]);
        }
    };
    for(let j=newArr.length; j<n; j++){
        newArr.push(0);
    }

    return newArr;
};

// Optimized approach

var moveZeroes = function (nums) {
  let n = nums.length;
  let i = 0;

  if (nums.length === 1) return nums;

  for (let j = i; j < n; j++) {
    if (nums[j] !== 0) {
      if (i !== j) {
        nums[i] = nums[j];
        nums[j] = 0;
      }
      i++;
    }
  }
};



{ /* 

121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
    
*/}

// Brute-force Approach

var maxProfit = function (prices) {
  let n = prices.length;
  let maxProfit = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

// Better Approach 

var maxProfit = function(prices) {
    let n = prices.length;
    let maxProfit = 0;
    let i =0;

    for(let j=i; j<n; j++) {
        let profit = prices[j] - prices[i];

        if(profit > maxProfit) {
            maxProfit = profit;
        }
        if(prices[j] < prices[i]) {
            i = j;
        }
        
    }
    return maxProfit;
};




{ /* 
    
75. Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?   

 */}

 // Better Approach

var sortColors = function (nums) {
  let n = nums.length;
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  if (nums.length === 1) return nums;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      count0++;
    } else if (nums[i] === 1) {
      count1++;
    } else {
      count2++;
    }
  }

  for (let i = 0; i < count0; i++) {
    nums[i] = 0;
  }
  for (let i = count0; i < count0 + count1; i++) {
    nums[i] = 1;
  }
  for (let i = count0 + count1; i < n; i++) {
    nums[i] = 2;
  }
};

// Optimal Solution Dutch National flag algorithm. 

var sortColors = function (nums) {
    let low = 0; 
    let mid = 0;
    let high = nums.length - 1;

    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            mid++;
            low++;
        } else if(nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}




{/*
    
31. Next Permutation

A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100


*/}


var nextPermutation = function (nums) {
  let n = nums.length;
  let pivot = -1;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      pivot = i;
      break;
    }
  }

  if (pivot !== -1) {
    for (let i = n - 1; i > pivot; i--) {
      if (nums[i] > nums[pivot]) {
        [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
        break;
      }
    }

    let start = pivot + 1;
    let end = n - 1;
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  } else {
    let start = 0;
    let end = n - 1;
    while (start <= end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
};



{/* 
88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?    
    
    
*/}


// var merge = function (nums1, m, nums2, n) {
//   let size = m + n - 1;
//   let i = m - 1;
//   let j = n - 1;

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] < nums2[j]) {
//       nums1[size] = nums2[j];
//       j--;
//     } else {
//       nums1[size] = nums1[i];
//       i--;
//     }
//     size--;
//   }

//   while (j >= 0) {
//     nums1[size] = nums2[j];
//     j--;
//     size--;
//   }
// };







var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = 0;
  let j = 0;
  let newArr = [];

  while (i < m && j < n) {
    if (nums1[i] > nums2[j]) {
      newArr.push(nums2[j]);
      j++;
    } else {
      newArr.push(nums1[i]);
      i++;
    }
  }

  while (i < m) {
    newArr.push(nums1[i]);
    i++;
  }

  while (j < n) {
    newArr.push(nums2[j]);
    j++;
  }

  return newArr;
};



{ /* 
   169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space? 
    
    
*/}

// Brute Force

var majorityElement = function (nums) {
    let n = nums.length;

    if (nums.length === 1) return nums[0];

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }

        }
        if (count > Math.floor(n / 2)) return nums[i]
    }
};

// Better Approach

var majorityElement = function (nums) {
  let n = nums.length;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (value > Math.floor(n / 2)) {
      return key;
    }
  }
};
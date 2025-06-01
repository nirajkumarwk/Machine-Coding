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

console.log(BinarySearch([12, 11, 10, 9, 8, 7, 6, 5, 4, 2, 1,], 11))
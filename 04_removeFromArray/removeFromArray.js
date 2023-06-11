const removeFromArray = function(array, ...nums) {
    let arr = array;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(nums[i] == arr[j] && nums[i] === arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;

/**
 * 解法1：暴力破解
 * 503. 下一个更大元素 II
 * https://leetcode-cn.com/problems/next-greater-element-ii/
 * @param num 
 * @returns 
 */
const nextGreaterElements = (nums: number[]): number[] => {
    console.log('输入：',nums)
    const res: number[] = []
    for(let i = 0; i < nums.length; i ++){
        let j = i + 1;
        let large = -1;
        while (i !== j) {
            console.log(`i=${i}, j=${j}`)
            
            if (nums[j] > nums[i]) {
                large = nums[j]
                break;
            }
            j ++;
            if (j >= nums.length) {
                j = 0;
            }
        }
        res.push(large)
    }
    console.log('输出',res)
    return res
}
// nextGreaterElements([5,4,3,2,1])
nextGreaterElements([1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,1,2,1,3,3,4,5,18,2,3,5,3,90,87,346,34,56,2,6,7,85,43,])
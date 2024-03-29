/*
// https://leetcode.com/problems/longest-increasing-subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence
*/

function lengthOfLIS(nums: number[]): number {
    const dp: number[] = Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}
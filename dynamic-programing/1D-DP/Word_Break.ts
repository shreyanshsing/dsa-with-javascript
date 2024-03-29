/*
// https://leetcode.com/problems/word-break/
// Given a string s and a dictionary of strings wordDict, 
// return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = Array(s.length + 1).fill(false)
    dp[s.length] = true
    for (let i = s.length - 1; i >= 0; i--) {
        for (const word of wordDict) {
            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                dp[i] = dp[i + word.length]
                if (dp[i]) break
            }
        }
    }
    return dp[0]
}
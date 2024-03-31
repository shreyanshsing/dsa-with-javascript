/**
 * https://leetcode.com/problems/longest-palindromic-substring
 * Given a string s, return the longest palindromic substringin s.
*/

function longestPalindrome(s: string): string {
    const dp: boolean[][] = Array.from({ length: s.length }, () => Array(s.length).fill(false))
    let max = 0
    let res = ""
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])
            if (dp[i][j] && j - i + 1 > max) {
                max = j - i + 1
                res = s.slice(i, j + 1)
            }
        }
    }
    return res
}
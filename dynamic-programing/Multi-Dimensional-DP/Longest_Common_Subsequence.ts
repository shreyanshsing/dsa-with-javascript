/**
 * https://leetcode.com/problems/longest-common-subsequence
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 * If there is no common subsequence, return 0.
*/

function longestCommonSubsequence(text1: string, text2: string): number {
    const dp: number[][] = Array.from({ length: text1.length + 1 }, () => Array(text2.length + 1).fill(0))
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[text1.length][text2.length]
}

/**
 * minimum insertions and deletions to make two strings equal
 * https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome
 */

function minInsertions(s: string): number {
    const dp: number[][] = Array.from({ length: s.length }, () => Array(s.length).fill(0))
    for (let i = s.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1
            }
        }
    }
    return dp[0][s.length - 1]
}

/**
 * shortest common supersequence
 * https://leetcode.com/problems/shortest-common-supersequence
 */

function shortestCommonSupersequence(text1: string, text2: string): string {
    const dp: number[][] = Array.from({ length: text1.length + 1 }, () => Array(text2.length + 1).fill(0))
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    let i = text1.length
    let j = text2.length
    let res = ""
    while (i > 0 && j > 0) {
        if (text1[i - 1] === text2[j - 1]) {
            res = text1[i - 1] + res
            i--
            j--
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            res = text1[i - 1] + res
            i--
        } else {
            res = text2[j - 1] + res
            j--
        }
    }
    while (i > 0) {
        res = text1[i - 1] + res
        i--
    }
    while (j > 0) {
        res = text2[j - 1] + res
        j--
    }
    return res
}
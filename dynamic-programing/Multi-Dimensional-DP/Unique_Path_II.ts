/**
 * https://leetcode.com/problems/unique-paths-ii
 * You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). 
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
 * The robot can only move either down or right at any point in time.
 * An obstacle and space are marked as 1 or 0 respectively in grid. 
 * A path that the robot takes cannot include any square that is an obstacle.
 * Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = Array(m).fill(0).map(() => Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) break
        dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) break
        dp[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) continue
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}
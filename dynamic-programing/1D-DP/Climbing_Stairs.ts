/*
// https://leetcode.com/problems/climbing-stairs/
// You are climbing a staircase.
// It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?
*/

function distinctWaysToReachTop(n: number): number {
    if (n <= 2) return n
    let arr = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

/*
// Given an array cost where cost[i] represents the cost of climbing the i-th step, 
// you can either climb 1 or 2 steps at a time. 
// Determine the minimum cost to reach the top.
*/

function minCostClimbingStairs(cost: number[]): number {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2])
    }
    return Math.min(cost[cost.length - 1], cost[cost.length - 2])
}

/*
// Similar to the original problem, 
// but you are given an array steps where steps[i] represents the number of steps you can climb at once from the i-th step. 
// Determine the number of distinct ways to reach the top.
*/

function climbStairsWithVariableSteps(n: number, steps: number[]): number {
    const dp: number[] = Array(n + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i <= n; i++) {
        for (const step of steps) {
            if (i + step <= n) {
                dp[i + step] += dp[i]
            }
        }
    }
    return dp[n]
}

/*
// Climbing Stairs with Obstacles 
// Given an array obstacles where obstacles[i] represents whether there is an obstacle on the i-th step (0 means no obstacle, 1 means obstacle), 
// determine the number of distinct ways to reach the top without stepping on any obstacles.
*/

function climbiingStairsWithObstacles(obstacles: number[]): number {
    const dp: number[] = Array(obstacles.length + 1).fill(0)
    dp[1] = 1
    for (let i = 2; i <= obstacles.length; i++) {
        dp[i] = dp[i - 1]
        if (obstacles[i - 1] !== 1) {
            dp[i] += dp[i - 2]
        }
    }
    return dp[obstacles.length]
}
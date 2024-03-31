/**
 * https://leetcode.com/problems/minimum-path-sum
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
 * which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time. 
*/

function minPathSum(grid: number[][]): number {
    // Iterate over the grid from top to bottom
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // If we're not at the top-left corner
            if (i !== 0 || j !== 0) {
                // Calculate the minimum path sum to reach the current cell
                // Choose the minimum of the cell above and the cell to the left, and add the current cell's cost
                grid[i][j] += Math.min(
                    i > 0 ? grid[i - 1][j] : Infinity, // Cell above (if not at the top row)
                    j > 0 ? grid[i][j - 1] : Infinity  // Cell to the left (if not at the leftmost column)
                );
            }
        }
    }
    // Return the minimum path sum at the bottom-right corner of the grid
    return grid[grid.length - 1][grid[0].length - 1];
}

/*
Simple Summation Function: 
    This function uses a simple loop to iterate from 1 to n, adding each number to a sum variable.
    This approach is straightforward and easy to understand.
    However, it may not be the most efficient for very large values of n because it has a time complexity of O(n).
*/
function simpleSummation (n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

/*
Recursive Summation Function: 
    This function utilizes recursion to solve the problem.
    It defines a base case (when n is 1) and then calls itself with n-1 until it reaches the base case.
    While recursion can be elegant and concise, it can lead to stack overflow errors for large values of n due to the call stack growing with each recursive call.
*/
function recursiveSummation (n) {
    if (n === 1) {
        return 1
    } else {
        return n + recursiveSummation(n - 1)
    }
}

/*
Mathematical Formula Implementation: 
    This function directly applies the formula for the sum of an arithmetic series, which is n*(n+1)/2.
    This approach is the most efficient as it has a time complexity of O(1), meaning it doesn't depend on the size of n.
    However, it may not be as intuitive for someone unfamiliar with the formula.
*/
function formulaSummation (n) {
    return (n * (n + 1)) / 2
}

// Test the functions
const n = 10
console.log("Simple Summation:", simpleSummation(n))
console.log("Recursive Summation:", recursiveSummation(n))
console.log("Formula Summation:", formulaSummation(n));




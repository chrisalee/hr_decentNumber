/*
 * Complete the 'decentNumber' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function decentNumber(n) {   
    let results = [];
    // want the largest number therefore use least amount of 3s 
    // n divisible by 3 (n%3===0) --> all 5s
    // n%3===2 ex. 11 (2 set of 3s in group of 5) 5's until n-10 finish with 10 3's
    // n%3===1 ex 10 (1 sets of 3s in group of 5) 5's until n-5 finish with 5b vgcx 3's 
    
    if(n < 3 || n === 4 || n === 7) {
        results.push(-1);
    } else if(n % 3 === 0) {
        for(let i = 0; i < n; i++) {
            results.push(5)
        }
    } else if (n % 3 === 1) {
        for(let i = 0; i < n - 10; i++) {
            results.push(5)
        }
        for(let i = 0; i < 10; i++) {
            results.push(3)
        }
    } else if (n % 3 === 2) {
        for(let i = 0; i < n - 5; i++) {
            results.push(5)
        }
        for(let i = 0; i < 5; i++) {
            results.push(3)
        }
    }
    
    console.log(results.join(''));
    return results.join('');
}

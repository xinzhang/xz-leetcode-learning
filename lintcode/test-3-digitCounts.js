/**
 * @param k: An integer
 * @param n: An integer
 * @return: An integer denote the count of digit k in 1..n
 */
const digitCounts = function (k, n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        // let val = i.toString().split('');
        // result += val.filter((v) => v == k).length;
        j = i;
        while (true) {
            if (j % 10 === k) {
                result++;
            }
            j = Math.floor(j / 10);
            if (j === 0) break;
        }
    }
    return result;
};

console.log(digitCounts(1, 12));

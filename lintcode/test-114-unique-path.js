//(m-2, n-1) = x
//(m-1, n-2) = y
// total = x + y

let vals = [];

const steps = (x, y) => {
    for (let i = 0; i < x; i++) {
        vals[i] = [];
        for (let j = 0; j < y; j++) {
            if (i == 0 || j == 0) {
                vals[i][j] = 1;
            } else {
                vals[i][j] = vals[i - 1][j] + vals[i][j - 1];
            }
        }
    }
    return vals[x - 1][y - 1];
};

console.log(steps(4, 5));

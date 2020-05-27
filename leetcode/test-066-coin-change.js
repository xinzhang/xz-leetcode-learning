const MAX = 100;
const array = [];
const coins = (x) => {
    if (x == 0) return 0;
    if (x < 0) return MAX;

    let res = 100;
    if (x >= 2) {
        res = Math.min(coins(x - 2) + 1, res);
    }
    if (x >= 5) {
        res = Math.min(coins(x - 5) + 1, res);
    }
    if (x >= 7) {
        res = Math.min(coins(x - 7) + 1, res);
    }

    return res;
};

const myarray = [];
myarray[0] = 0;
myarray[1] = MAX;

const dp_coins = (x) => {
    if (x < 0) return MAX;

    for (let i = 2; i <= x; i++) {
        myarray[i] = MAX;
        if (i >= 2) {
            myarray[i] = Math.min(myarray[i - 2] + 1, myarray[i]);
        }
        if (i >= 5) {
            myarray[i] = Math.min(myarray[i - 5] + 1, myarray[i]);
        }
        if (i >= 7) {
            myarray[i] = Math.min(myarray[i - 7] + 1, myarray[i]);
        }
    }
    return myarray[x];
};

console.log(dp_coins(27));

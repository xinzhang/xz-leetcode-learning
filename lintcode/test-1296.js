/**
 * @param words: a string array
 * @return: the maximum product
 */
const maxProduct = function(words) {
    let total = 0;
    let cursor = '0,0';
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const currentCnt = words[i].length * words[j].length;
            if (currentCnt <= total) {
                continue;
            }

            if (checkWords(words[i], words[j])) {
                total = currentCnt;
                cursor = `${i}, ${j}`;
            }
        }
    }
    console.log(total, cursor);
    return total;
};

const checkWords = (word1, word2) => {
    for (let i = 0; i < word1.length; i++) {
        if (word2.includes(word1[i])) {
            return false;
        }
    }

    return true;
};

const testWords = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']; //expect 16 - "abcw", "xtfn"
maxProduct(testWords);

const testWords2 = ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']; //expect 4 - "ab", "cd".
maxProduct(testWords2);

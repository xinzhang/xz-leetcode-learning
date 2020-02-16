/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/

/**
 * @param words: a list of strings
 * @return: return a list of strings
 */
const findWords = function(words) {
    const rows = ['qQwWeErRtTyYuUiIoOpP', 'aAsSdDfFgGhHjJkKlL', 'zZxXcCvVbBnNmM'];
    let result = [];
    return words.filter(word => {
        const rowIndex = rows.findIndex(row => row.includes(word[0]));
        for (let i = 1; i < word.length; i++) {
            if (!rows[rowIndex].includes(word[i])) return false;
        }
        return true;
    });
};

const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
console.log(findWords(words));

/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let count_i, count_j, count;
    const dict = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let list = str.split('');
    let i = 0

    Loop1: //label of first for loop
    while (list.length > 0) {

        let value = list[i];
        list.shift();
        count_i = 1;
        count_j = 0;
        count = 0;

        Loop2:  // label of second for loop
        for (let j = 0; j < list.length; j++) {

            if (value === list[j]) {
                count_i++;
            } else if (dict[value] === list[j]) {
                count_j++;
            } else {
                count++;
            }

            if ((count_i === count_j) && !(count%2 === 0)) {
                return 'invalid';
            } else if ((count_i === count_j) && (count%2 === 0)) {
                list.splice(j, 1);
                continue Loop1
            }
        }

        if (count_i !== count_j) {
            return 'invalid';
        }

    }
    return 'valid';
}

module.exports = isValid;

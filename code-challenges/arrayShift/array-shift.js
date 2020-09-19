let insertShiftArray = (arr, val) => {
    if (!arr || !val) {
        throw new Error('Two arguments are required.');
    } else if (!Array.isArray(arr)) {
        throw new Error('The first argument must be an array.');
    }

    const result = [];
    const mid = Math.ceil(arr.length / 2) - 1;

    for (let i = 0; i < arr.length; i++) {
        if (i < mid) {
            result[i] = arr[i];
        }

        if (i === mid) {
            result[i] = arr[i];
            result[i + 1] = val;
        }

        if (i > mid) {
            result[i + 1] = arr[i];
        }
    }

    return result;
}

module.exports = insertShiftArray;
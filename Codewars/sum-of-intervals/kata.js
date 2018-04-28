const {range, uniq, flatten, compose} = require('ramda');

/**
 * Returns the sum of the length of all arrays passed to it minus overlaps
 * @param {Array.<number[]>} intervals 
 */
module.exports.sumIntervals = function sumIntervals(intervals){
    const allNumbersInAllIntervals = intervals.map(interval => range(interval[0], interval[1]));
    const intervalRange = compose(uniq, flatten)(allNumbersInAllIntervals);
    return intervalRange.length;
}

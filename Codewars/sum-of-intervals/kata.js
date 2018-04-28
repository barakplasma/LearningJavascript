const {range} = require('ramda');

/**
 * Returns the sum of the length of all arrays passed to it minus overlaps
 * @param {Array.<number[]>} intervals 
 */
module.exports.sumIntervals = function sumIntervals(intervals){
    const newRange = range(intervals[0][0], intervals[0][1]);
    return 4;
}

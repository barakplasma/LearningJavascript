var drive = require('./am-i-safe-to-drive')
var assert = require('chai').assert;

describe('can I drive: ', () => {
    var tests = [
        {
            drinks: [
                [10.0, 100]
            ],
            finished: "20:00",
            drive_time: "21:00",
            expected: [1.0, false]
        },
        {
            drinks: [
                [5.2, 568],
                [12.0, 175]
            ],
            finished: "16:00",
            drive_time: "23:00",
            expected: [5.05, true]
        }
    ]
    tests.forEach(function (test) {
        it(test.expected[1].toString() + ' ' + JSON.stringify(test), () => {
            assert.deepEqual(drive.drive.call(test.drinks, test.finished, test.drive_time), test.expected)
        })
    });
});
var drive = require('./am-i-safe-to-drive')
var assert = require('chai').assert;

describe('can I drive: ', () => {
    var tests = [{
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
        },
        {
            drinks: [
                [5.2, 568],
                [5.2, 568],
                [5.2, 568],
                [12.0, 175],
                [12.0, 175],
                [12.0, 175]
            ],
            finished: "23:00",
            drive_time: "08:15",
            expected: [15.16, false]
        }
    ]
    tests.forEach(function (test) {
        it(test.expected[1].toString() + ' ' + JSON.stringify(test), () => {
            //console.log(0,test.drinks,test.finished,test.drive_time,test.expected)
            assert.deepEqual(drive.drive(test.drinks, test.finished, test.drive_time), test.expected)
        })
    });
});
module.exports = {
    drive: function (drinks, finished, drive_time) {
        // 3. Data passed will be in the format ([[strength,volume]], finished, drive_time). Where finished is the time you stopped drinking and drive_time is the time you would like to drive.
        function time(t) {
            // 5. Times are passed as strings and are in 24 hour format.
            var x = new Date;
            x.setHours(t.substr(0, 2), t.substr(3, 2))
            return x.valueOf();
        }

        function dateFixer() {
            //handles overnights
            const dayInSeconds = 1000 * 60 * 60 * 24;
            // 4. If the finished >= drive_time then you can assume that it is the next day.
            var overnight = time(finished) >= time(drive_time) ? true : false;
            return overnight ? time(drive_time) + dayInSeconds : time(drive_time);
        }

        function duration() {
            return (dateFixer() - time(finished)) / (1000 * 60 * 60);
        }

        function unitsOfAlcohol(strength, volume) {
            // 2. Units of alcohol are calculated by strength (ABV) x volume (ml) / 1000 = units.
            // 6. Return total units to 2 decimal places rounded. For example 1.10 => 1.1 and 1.236 => 1.24
            //return Math.floor(Math.round((strength * volume)/10))/100;
            return (strength*volume)/1000;
        }
        //console.log(unitsOfAlcohol(10,100))

        function legalToDrive() {
            // 1. On average it takes a person 1 hour for their body to remove 1 unit of alcohol.
            // 7. Return true if you are able to drive and false if you are not.
            var units = drinks.reduce(
                (acc, val) => {
                    //console.log('acc:',acc)
                    return acc + unitsOfAlcohol(val[0],val[1]);
                }, 0);
            var remainingAlcoholUnits = units - duration()+1;
            units = Number.parseFloat(units.toFixed(2))
            console.log(remainingAlcoholUnits)
            return remainingAlcoholUnits < 1.00 ? [units, true] : [units, false];
        }

        return legalToDrive()
    }
}
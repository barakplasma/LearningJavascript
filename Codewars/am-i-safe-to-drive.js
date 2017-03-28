module.exports = {
    drive: function(drinks, finished, drive_time) {
        function time(t) {
            var x = new Date;
            //console.log(finished)
            return x.setHours(finished.substr(0,2),finished.substr(3,2));
        }
        //console.log(time(finished))
        return [1.0, false]
    }
}
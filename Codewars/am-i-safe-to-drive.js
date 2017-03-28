module.exports = {
    drive: function(drinks, finished, drive_time) {
        var overnight = time(finished)>=time(drive_time)? true : false;

        function time(t) {
            var x = new Date;
            x.setHours(t.substr(0,2),t.substr(3,2))
            const dayInSeconds = 1000*60*60*24;
            return overnight?x+dayInSeconds:x;
        }
        function duration(){
            return (time(drive_time) - time(finished))/(1000*60*60);
        }
        function unitsOfAlcohol(strength,volume){
            return (strength*volume)/1000;
        }
        console.log(duration())

        return [1.0, false]
    }
}
module.exports = {
    drive: function(drinks, finished, drive_time) {
        function time(t) {
            var x = new Date;
            x.setHours(t.substr(0,2),t.substr(3,2))
            return x.valueOf();
        }
        
        function dateFixer(){
            //handles overnights
            const dayInSeconds = 1000*60*60*24;
            var overnight = time(finished)>=time(drive_time)? true : false;
            return overnight?time(drive_time)+dayInSeconds:time(drive_time);
        }

        function duration(){
            return (dateFixer() - time(finished))/(1000*60*60);
        }

        function unitsOfAlcohol(strength,volume){
            return (strength*volume)/1000;
        }
        console.log(duration())

        return [1.0, false]
    }
}
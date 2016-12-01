/*
1. delayWord(str)
receives a string, alerts it after 5 seconds (the 5 seconds is "hard coded", not a parameter).
*/
function delayWord(str){
    let alertn = function(){
        console.log(str);
    };
    setTimeout(alertn,5000); 
};
//delayWord("delayed");
/*
2. delayWord2(str, seconds):
receives a string, alerts it after [seconds] seconds. Note that setTimeout gets milliseconds, not seconds, so you must convert it to seconds.
*/
function delayWord2(str,seconds){
    let alertn = function(){
        console.log(str);
    };
    setTimeout(alertn,seconds*1000); 
};
//delayWord2("delayed2",1);
/*
3. delay(callback, seconds): 
receives a callback (function!!) and seconds, and performs the action after [seconds] seconds. This is a "seconds" version for setTimeout (which works in milliseconds..)
*/
let defaultFunction = function(){
    console.log("delay");
}
function delay(func,seconds){
    setTimeout(func,seconds*1000); 
};
//delay(defaultFunction,2);
/*
4. stewefy(name)
receives no arguments, will start annoying the user by printing his name to the console each 2 seconds.
For example:
stewefy('Louis') will cause the program to print:
Louis
Louis
Louis
Louis
(Each time after 2 seconds)
*/
function stewefy(params) {
    let log = function() {
        console.log(params);
    }
    setInterval(log,2000);
};
//stewefy('Louis');
/*
5. Loading
a. loader():
starts printing an animated loader to the console, like this:
https://cl.ly/151j1m1A3j1I
it should run forever
*/
function loader(){
    var l = 'loading';
    var star = '*';
    let i = 1;
    let repeat = function(){
        console.log(`${l} ${star.repeat(i)}`);
        i += 1;
        i==5 ? i=1 : i=i;
    };
    setInterval(repeat,100);
}
//loader();
/*
b. loader2(animationTime, dots)
same as a, but now the animation time (time between prints) is an argument. The max dot amount (the video shows 4) is also a n argument.
*/
function loader2(animationTime,dots){
    var l = 'loading';
    var star = '*';
    let i = 1;
    let repeat = function(){
        i==dots?i=1:i++;
        console.log(`${l} ${star.repeat(i)}`);
    };
    setInterval(repeat,animationTime);
}
//loader2(200,10);
/*
c. loader3()
same as (a) (not b!), but now the loading animation goes back and forth - like this https://cl.ly/2K110O0N3Q0r
*/
function loader3(animationTime,dots){
    var l = 'loading';
    var star = '*';
    let i = 1;
    var countdown=true;

    let repeat = function(){
        if(!countdown){
            i++;
            i>=dots?countdown=true:null;
        }else{
            i--;
            i<2?countdown=false:null;
        }
        console.log(`${l} ${star.repeat(i)}`);
    }
    

    setInterval(repeat,animationTime);
}
loader3(10,9);
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
delayWord("delayed");
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
delayWord2("delayed2",1);
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
delay(defaultFunction,2);
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
/*
5. Loading
a. loader():
starts printing an animated loader to the console, like this:
https://cl.ly/151j1m1A3j1I
it should run forever
*/
/*
b. loader2(animationTime, dots)
same as a, but now the animation time (time between prints) is an argument. The max dot amount (the video shows 4) is also a n argument.
*/
/*
c. loader3()
same as (a) (not b!), but now the loading animation goes back and forth - like this https://cl.ly/2K110O0N3Q0r
*/
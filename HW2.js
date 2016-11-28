/*
3. 
Solve 4 codewar exercises. The initial question is something you guys did not learn, so read and google your way into it.
*/

//As always run toggles are at the end
/*
1. Bart simpson:
   a. write a program that receives something Bart did, and prints it 100 times times prefixed with "I will never [USER INPUT]" for example, for user input of "throw paper airplanes on the teacher" the console will print 100 times "I will never throw paper airplanes on the teacher.".
  b. move the functionality into a "bartitize" function, that will be called like this:
bartitize('puke on the floor');
test it by calling it some times with different output
c. add another parameter to bartitize, so you can define how many times to repeat the sentence
d. make the function throw an *error* (google error throwing in JS) when the times to repeat the sentence is less than 10 (cause it misses the point of being a bartitize function..'
*/
var bartitize = function(phrase,repetitions){
    if (repetitions <= 10) {
       throw "Not Enough repetitions bart!";
    }
    phrase = "I will never " + phrase + " \n";
    var out = phrase.repeat(repetitions);
    console.log(out);
    return out;
}
function run1(){
    try{
        bartitize("throw paper airplanes on the teacher.",11);
    }
    catch(err){
        console.log("Oops Something went wrong Marge"); 
    }
} 
//2a. write a program that will get a string from the user and return how many words it contains ( read about the "split" method of strings).
//2b. move the functionality of (a) into a function and test it by logging some test values:
function countWords(inp){
    console.log(inp.split(" ").length); 
}
function run2ab(){
    try {
        countWords('I love peanuts'); // prints 3
        countWords('Bob'); // prints 1
        countWords('What is love? baby do not hurt me'); // prints 8 
    } catch (error) {
        Console.log("Didn't count words correctly")
    }
 
}
//2c. create a function called "reverse" that takes a sentence, and returns a string of the reversed version of it, *only* by words:
function reverse(str){
    var out = str.split(" ").reverse().toString().replace(/,/g," "); 
    console.log(out);
    return out; 
}
function run2c(){
    try {
        reverse('Bob is cool');// -> 'cool is Bob';
        reverse('Bob is the nicest');// -> 'nicest the is Bob 
    } catch (error) {
       console.log("Try reversing again."); 
    }
}
//run1();
//run2ab();
//run2c();
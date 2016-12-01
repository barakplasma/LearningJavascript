function f(x){
    return 9*Math.pow(x,2)-2*Math.pow(x,3)+1; //the formula to integrate goes here
}
console.assert(f(2)==21,`f(x) broken`);
function trapezoid(x,deltax){
    return ((f(x+deltax)+f(x))*deltax)/2; //the trapezoid method is executed here for an arbitrary x and delta x and returns the area of the section
}
console.assert(trapezoid(2,.1)==2.1584,"integrate section wrong");
function integrate(from,to,sections){ //loops over each section of the curve and returns the area of all the trapezoids
    var  out = 0;
    //let from = -1.5;
    //let to = 3;
    let sect = (to-from)/sections;
    for(let i = from;i<to;i+=sect){
        //console.log(i,sect,trapezoid(i,sect)); //see inside function
        out += trapezoid(i,sect);
    }
    return out; //area of all the trapezoids
}
console.assert(integrate(-1.5,3,10)==58.3396875,"sectioning is broken");
function howSmallIsEnough(from,to,answer){
    let x = 1;
    do{ 
         x++;
         //console.log(x,parseFloat(integrate(from,to,x).toFixed(3))); //watch the accuracy change
    } while(integrate(from,to,x).toFixed(3) != answer); //should be 57.6563 but only 10^-3 is important
    return {trapezoidsNeeded : parseFloat(x), integral : integrate(from,to,x)}; //returns the number of trapezoids needed to accurately find the integral, and the calculated integral
}
console.assert(howSmallIsEnough(-1.5,3,'57.656').trapezoidsNeeded == 525 && howSmallIsEnough(-1.5,3,'57.656').integral ==  57.656497959183746,"need to run more to be accurate enough");
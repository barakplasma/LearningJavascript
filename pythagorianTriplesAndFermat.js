function gcd(a,b){  // http://en.wikipedia.org/wiki/Euclidean_algorithm
  var r;
  while (b != 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return (a < 0) ? -a : a;
}//https://github.com/josdejong/mathjs/blob/master/lib/function/arithmetic/gcd.js
console.assert(gcd(16,12)==4)
function power(a,b){//a-th power of base 
    for(a=a;a > 1;a--){
        b *= b;
    }
    return b;
}
console.assert(power(2,4)==16);
function pythag(a,b,c,n){
    return power(n,a)+power(n,b)==power(n,c); //returns true if triple
}
console.assert(pythag(3,4,5,2)==true);
function fermat(n,max){
    var numTriples = 0 , a=1,b=1,c = 1
    //print(3,4,5,2);
    console.time("triploop");//this is the horribly inefficient triple loop
    for(var a=1;a<max;a++){
        for(var b=1;b<max;b++){
            for(var c=1;c<max;c++){
                print(a,b,c,n);
            }
        }
    }
    function print(a,b,c,n){
        if(pythag(a,b,c,n)){
            if(gcd(a,b)==1&&a<b){
            console.log(`${a}^${n}+${b}^${n}=${c}^${n}`) //print the triple
            console.log(`${power(n,a)}+${power(n,b)}=${power(n,c)}\n`) //print the triple
            numTriples++;}
        }
    }

    return `We found ${numTriples} triples when checking n=${n} & max=${max}`;
}
console.log(fermat(2,1000));//assert to http://www.tsm-resources.com/alists/trip.html
console.log("done");
console.timeEnd("triploop");
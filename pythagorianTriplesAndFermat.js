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
    var numTriples = 0 , a = 1 , b = 2, c = 3;
    //print(3,4,5,2);
    for(a,b,c;a<b&&b<c&&a<max;a++,b++,c++){
        print(a,b,c,n);
        console.log(a,b,c,n);
    }
    function print(a,b,c,n){
        if(pythag(a,b,c,n)){
            console.log(`${a}^${n}+${b}^${n}=${c}^${n}`) //print the triple
            console.log(`${power(n,a)}+${power(n,b)}=${power(n,c)}`) //print the triple
            numTriples++;
        }
    }

    return `We found ${numTriples} triples when checking n=${n} & max=${max}`;
}
console.log(fermat(2,100));//assert to http://www.tsm-resources.com/alists/trip.html
console.log("done")
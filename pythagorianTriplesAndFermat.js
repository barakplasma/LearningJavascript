function gcd(a,b){  // http://en.wikipedia.org/wiki/Euclidean_algorithm
  var r;
  while (b != 0) {
    //console.log("a and b:",a,b);
    r = a % b;
    //console.log("r",r);
    a = b;
    b = r;
    //console.log("r,a,b",r,a,b);
  }
  return (a < 0) ? -a : a;
}//https://github.com/josdejong/mathjs/blob/master/lib/function/arithmetic/gcd.js
console.assert(gcd(16,12)==4)
//console.log(gcd(50,80));

function power(a,b){//a-th power of base 
    return Math.pow(b,a);
}
console.assert(power(2,4)==16);
console.assert(power(3,4)==Math.pow(4,3),"mod to math.pow failed");
function pythag(a,b,c,n){
    return power(n,a)+power(n,b)==power(n,c);//returns true if triple
}
console.assert(pythag(3,4,5,2)==true);
function fermat(n,max){
    var numTriples = 0 , a=1,b=1,c = 1,runs = 0;
    //print(3,4,5,2);
    console.time("triploop");//this is the horribly inefficient triple loop
    for(var a=1;a<max;a++){
        for(var b=a+1;b<max;b++){
            if(gcd(a,b)==1){
                for(var c=b+1;c<max;c++){
                    print(a,b,c,n);
                    runs++;
                }
            }
        }
    }
    function print(a,b,c,n){
        if(pythag(a,b,c,n)){
            
            console.log(`${a}^${n}+${b}^${n}=${c}^${n}`) //print the triple
            console.log(`${power(n,a)}+${power(n,b)}=${power(n,c)}\n`) //print the triple
            numTriples++;
        }
    }
    if(numTriples!=0){return `We checked ${runs} combinations, and found ${numTriples} triples when checking n=${n} & max=${max}`}
    else{return `We found no triples for n=${n}`};
}
console.log(`Lets Calculate Pythagorian triples to prove Fermat’s last theorem\n`)
console.log(fermat(2,100));//assert to http://www.tsm-resources.com/alists/trip.html
console.log("done");
console.timeEnd("triploop");
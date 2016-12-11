function gap(g, m, n) {
    var out = [];
    var output; 
    var eratosthenes = function(m,n) {
        // Eratosthenes algorithm to find all primes under n
        var array = [], upperLimit = Math.sqrt(n), output = [];

        // Make an array from 2 to (n - 1)
        for (var i = 2; i < n; i++) {
            array.push(true);
        }

        // Remove multiples of primes starting from 2, 3, 5,...
        for (var i = 2; i <= upperLimit; i++) {
            if (array[i]) {
                for (var j = i * i; j < n; j += i) {
                    array[j] = false;
                }
            }
        }
        
        for (var i = m; i < n; i++) {
            if(array[i]) {
                output.push(i);
            }
        }

        return output;
    }
    //console.time("erato");
    output = eratosthenes(m,n);
    for(let i = 0; i<output.length; i++){
        if( output[i+1]-output[i]==g ){
            out.push(output[i]);
            out.push(output[i]+g);
            break;
        }
    }//find gaps

    out.length < 1 ? out = null : out = out;
    //console.timeEnd("erato");
    return out;
}
console.time("test");
for(let i = 0; i<100; i++){
  gap(6,100000,110000);
  gap(6,586544,686544);}
console.timeEnd("test");
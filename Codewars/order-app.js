function order(words){
  // ...
  var myRe = /[0-9]/g;
  return myRe.exec(words);
}
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
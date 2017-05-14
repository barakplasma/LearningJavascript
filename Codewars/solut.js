function solution(number){
  // convert the number to a roman numeral
  var out = null;
  const numerals = [];
  function breakItDown(n){
    switch (n){
      case n>1000:
        numerals.push('M');
        breakItDown(n-1000);
        break;
      case n>500:
        numerals.push('D');
        breakItDown(n-500);
        break;
      case n>100:
        numerals.push('C');
        breakItDown(n-100);
        break;
      case n>50:
        numerals.push('L');
        breakItDown(n-50);
        break;
      case n>10:
        numerals.push('X');
        breakItDown(n-10);
        break;
      case n>5:
        numerals.push('V');
        breakItDown(n-5);
        break;
      case n>1:
        numerals.push('I');
        breakItDown(n-1);
        break;
      case n<1:
        out = numerals.join('');
        break;
    }
  }
  breakItDown(number);
  if(out !== null){
    console.log(out);
    return out;
  }
}
var sumlist = process.argv;
sumlist.splice(0,2);
sumlist = sumlist.reduce((a,b)=>Number(a)+Number(b));
console.log(sumlist);

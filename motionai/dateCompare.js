function olderThan2Days(){
var dateDNSupdated = new Date('2017-01-12T12:00:00.000Z');
  var FourtyEightHoursAgo = Date().now;
  FourtyEightHoursAgo 
  console.log(dateDNSupdated,FourtyEightHoursAgo,(dateDNSupdated>FourtyEightHoursAgo?'toosoon':'propagated'));
}
olderThan2Days();
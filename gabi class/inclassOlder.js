var isOlder = (p1,p2) => { 
    return p1.age > p2.age;
}
var older = {name : 'Cthulu', age : 9001}
var younger = {name : 'Cheburashka', age : 80}
console.assert(isOlder(older,younger)==true,"Try Again");
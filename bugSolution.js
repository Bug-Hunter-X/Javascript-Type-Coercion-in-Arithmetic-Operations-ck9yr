function foo(a,b){return parseInt(a)+parseInt(b);}
console.log(foo(2,3));//expected 5
console.log(foo(2,"3"));//expected 5
console.log(foo("2",3));//expected 5
console.log(foo("2","3"));//expected 5
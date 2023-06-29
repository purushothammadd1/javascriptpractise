// var a=10
// var b=10

// console.log(a==b)//true
// console.log(a===b)//true

// var c=10
// var d="10"
// console.log(c==d)//true
// console.log(c===d)//false
// value + datatype =false

// a%b= 0(remainder)
// 11%2=1
// logical operator left   right    And && operator | or opearor
//                  true   true         true                false
//                  false  false        false               true
//                  false  true         false               true
//                  true   false        false               true

// var a=10;
// var b=20; 
// var c=30;
// console.log(a>b && a < c);//10 > 20 false && 10 < 30 true ---> false
// var name="sameer"
// var name1="sameer"
// var name2="sameer"
// console.log(name ==name1 && name == name2);// sameer ==sameer :false
// false && false:false
// And operator
var a=true, b=false;
var c=4;
// console.log(a && b);//false
// console.log( a && a);//true true true
// console.log((c > 2) && (c < 2)); //false true -->false
console.log(a || b);//true || false --> true
console.log(b || b); //false || false --> false
console.log((c>2) || (c<2)); //4>2-->true|| 4<2 false --> true
"use strict"
console.log('Hello from external file')
let i;
console.log(typeof i);
if(null){console.log("true")}
if({}){console.log("true")}
let abc = "test"
console.log(typeof abc)

console.log('22' == 22)
console.log('22' === 22)
let user = {}
user.firstname = "Aykut"
user.lastName = "can"
user.email = "asdasd@dsasdad.com"
console.log(user)
user.kid1 = []
console.log(user)
user.kid1.firstname = "ece"
console.log(user)
user.kid1.lastName = "can"
console.log(user)

function a(){
    var x = 3;
    console.log(x+ " func a");
}

function b(){
  let k = 5;
   console.log(k+ " func b");
}


a();
b();

var deneme = prompt()
console.log(deneme)

function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
  var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
} 

console.log(a); // 11
console.log(b); // 2
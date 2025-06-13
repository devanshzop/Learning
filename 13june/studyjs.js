// const username = "dev";
// const name1= `zop ${username}`;
// console.log(name1);

// // type coercion

// let date="3";
// let num=date+2+3;
// console.log(num)

// let ab = null;
// console.log(typeof ab);

// var globally = 20;

// function check(){
//     console.log(globally);
// }

// check();

// let a =5;
// function x(){
//     var a =20;
// }
// console.log(a); // 5


// const b =5;
// function x(){
//     const b =20;
// }
// console.log(b); // 5


// greet();

// function greet(){

//     console.log("greeeeet");
// }


//__________________________ Closures_________________________________

function x(y) {
    y();
}

x(function y() {
    a = 10;
    console.log(a);
});


function ask(cal){
    console.log("lest go");
    cal();

}

ask(()=>{
    console.log("ahhahah")
});

function go(){
    console.log("lest goooooo");
}

console.log();

const wife={
    hername : "woman",
    age : "22",
    hobbies : ["read","traveling","photography"],
    cook : function() {
        console.log(`${this.hername} can not cook`)
    },
    sleepinghours : {"morning":"11am","afternoon":"2pm"}

}
var aft = "afternoon";
console.log(wife.hername);
console.log(wife.sleepinghours.morning)
console.log(wife.sleepinghours["afternoon"])
console.log(wife.sleepinghours[aft])
wife.cook();


console.log();

wife.hername="man"; // update 
wife.sleepinghours[aft]="3pm";

wife.newwife="human"; // add

delete wife.hername;// delete

console.log(wife.newwife);
console.log(wife.hername);
console.log(wife.sleepinghours.morning)
console.log(wife.sleepinghours["afternoon"])
console.log(wife.sleepinghours[aft])


console.log()

const rest = {
       favouriteplace:"bengluru" 
}
const friend = Object.create(rest);

console.log(friend.favouriteplace)

friend.place = "home";

console.log(rest.place)


const api = {
    fetchi : function(point){
        console.log(`fetching from ${this.baseUrl}${point}`);
    } 

}

const userapi = Object.create(api);
userapi.baseUrl = "https/userapi/";

const productrapi = Object.create(api);
productrapi.baseUrl = "https/productapi/";

userapi.fetchi("123");
productrapi.fetchi("phone");


// function fetchMessage (callback) {
// setTimeout (() =>{
// callback("replied: Hi!");
// },2000);
// }
// console.log("Waiting for  reply...");
// fetchMessage ((message) => {
// console.log(message);
// });



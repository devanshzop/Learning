document.getElementById('demo2').innerHTML = "<h2>Inserted</h2>";

function myfunction() {
    document.getElementById("demo").innerText = "Function Is Invoked";
}


console.log(4);

function maths(param1,param2){
    return param1+param2;
}

const person = {
    firstname:"dev",
    age:21,
    lastName:"ar",

    fullName : function (){
    return (this.firstname+" "+this.lastName)
    }
}

console.log(person.fullName())
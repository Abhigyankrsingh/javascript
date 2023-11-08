

const mySym = Symbol("Key1")


const JsUser = {
    name: "Abhigyan",
    "full name": "Abhiyan Kumar Singh",
    [mySym]: "mykey1",
    age:20,
    location: "ranchi",
    email: "Abhi@gmal.com",
    isLogged: false,
    lastLogininDays : ["Monday", "Saturday"]
};


console.log(JsUser.name);
console.log(JsUser["email"]); // It is also a way to write

// We can not do console.log(JsUser.name) for "full name"

console.log(JsUser["full name"]);

console.log(JsUser[mySym])

// Object.freeze(JsUser) //It will not let change.


JsUser.email = " abhi @yahoo.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User`, $(this.name))
}


console.log(JsUser.greeting());






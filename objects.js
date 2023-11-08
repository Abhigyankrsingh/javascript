

const JsUser = {
    name: "Abhigyan",
    "full name": "Abhiyan Kumar Singh",
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


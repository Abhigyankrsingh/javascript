//const tinderUser = new Object() //Singleton pbject

const tinderUser = {} //Non-Singlelton Object


tinderUser.id = "123abc"

tinderUser.name = "Sammy"

tinderUser.isLogged = false

//console.log(tinderUser);


const regularUser = {
    email: "SOme @gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhi",
            lastname: "Singh"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)
 console.log(obj3);
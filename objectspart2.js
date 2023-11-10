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

const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2,obj3)


// best method

const obj3 = {...obj1,...obj2}

 console.log(obj3);


 /// Generally it comes from database like this

 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id:2,
        email: "we@gmail.co,"
    },

 ]


 users[1].email


 console.log(tinderUser);

 console.log(Object.keys(tinderUser));






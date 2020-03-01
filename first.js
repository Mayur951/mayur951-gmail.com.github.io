
/** function mail(name , id){

    mesg = 'this is ' + name + 'and id is :' + id
    return mesg
}

//console.log(mail('mayur',10002))



obj = [ {name:'mayur' , id:1000},{name : 'gauarv', id :2000}]



for (let i of obj){
    console.log(mail(i['name'] , i['id']))
}



let x= 10;
let y='10'

console.log(x*y)




var a = "mayur"
console.log(a.length)

var b = 'this is mayur'
console.log(b.indexOf('g'))

**/

// var x = 'this is mayur'
// console.log(x.slice(0,4))
// console.log(x.substr(0,4))
// console.log(x.substring(0,4))


// let a = [1,2,3,4,5]
// console.log(a.join("_"))

// console.log(Number.NEGATIVE_INFINITY)

// function mail(name , id){

//     mesg = 'this is ' + name + ' and id is :' + id
//     return mesg
// }

// obj = [ {name:'mayur' , id:1000},{name : 'gauarv', id :2000}]



// for (let i of obj){
//     console.log(mail(i['name'] , i['id']))
// }

// console.log(typeof obj)


// var obj1 = 
//     {name : 'mayur',
//     id : '1000',
//     company : 'CTS'}

// for (var j in obj1){
//     console.log(obj1[j])
// }


// var alphabets = {'a':1 , 'b':2 , 'c':3 , 'd':4 , 'm':13 , 'e':5  , 'y':25}

// var z = []
// var abc = "My name is mayur"

// xyz = abc.toLowerCase()

// console.log(abc)

// for (var i of xyz){

//     for (var j in alphabets){
//         if (j==i){
//             //var str = alphabets[j].toString() 
//             z.push(alphabets[j])
            
//         }
//     }

// }
// console.log(z)

// console.log(typeof z)

// console.log(abc.split(" "))

// for (var i of abc.split(" ")){

//     for (var j in alphabets){
//         if (j==i){
//             sum 
//         }
//     }
// }


// let address = []

// let storeadd = (userid , ...addtostore)=>{
//     console.log(userid)
//     let cusadd = {userid:userid , useradd:addtostore}

//     console.log(addtostore)
//     console.log(cusadd)

//     console.log(typeof cusadd)

//     let abc =  address.push(cusadd)

//     return(address)



// }

// let firstadd = {
//     pin:442001,
//     ctry: 'India',
//     City: 'Pune'

// }

// let secondadd = {
//     pin : 440221,
//     ctry : 'India',
//     city : 'Nagpur'
// }


// console.log(storeadd(10001, firstadd, secondadd))


// let sum = (a,b,c,d)=>{

//     return a+b+c+d

// }

// let num = [1,2,3,4]

// console.log(sum(...num))

// let num1 = [1,2,3,4] ; let num2 = [5,6,7,8]

// console.log([...num1,...num2])


// firstname = 'Mayur'
// lastname = 'Nandanwar'

// console.log({firstname, lastname})
// console.log({firstname:firstname , lastname:lastname})

// let obj = {firstname , lastname , add(x,y){
//     return x+y
// }}

// console.log(obj.add(1,2))
 
//  let obj ={firstname , lastname , add: (x,y)=>{
//     console.log(x+y)
//  }}

//  console.log(obj.add())


// let a =20 ;

// let sum=()=>{
//     let a =30
// }

// let sum1=()=>{
//     let a=40
// }

// if (true){
//     let a = 100
//     console.log(a)
// }


// if (true){
//     let a =200
//     sum1()
//     console.log(a)
// }




//let a =10
//let a = 20

// var b = 20
// var b = 30

// const c =10
// const c =20

// console.log(b)




// let a=10
// a=20;


// const b =10
// b=20;

// console.log(b)


// var Street = 'Nehru Nagar'
// let City = 'Nagpur'
// let Lane = 200

// let address = {
//     [Street] : "Gandhi Nagar",
//     [City] : 'Pune',
//     [Lane] : '10'
// }

// console.log(address['Nehru Nagar'])

// //var Street = 'Lane1'

// console.log(address.Nagpur)



// let sum = (a,b,c,d)=>{

//     return a+b+c+d

// }

// console.log(sum(...[1,2,3,4]))


// let a = []
// let sum = (...num)=>{
//     a.push(num)



// console.log(a)
// }

// first = {name : 'mayur' , last : 'nandanwar' , id : 10}
// second = {name : 'gaurav' , last : 'mohadikar' , id :20}

//sum(first, second)


// let obj = [ {type : 'volvo' , year:2001},
// {type : 'BMW' , year : 2010},
// {type : 'audi' , year : 2005}
// ]


// obj.forEach(cars)

// function cars(obj, index , value ) {

//     //console.log(obj.type)
//     console.log(obj.type , index , value)


// }






// console.log(arr.map(myfucntion))

// function myfucntion(v){

//     console.log(v )

//     return v

// }


// arr.forEach(myfunction)

// function myfunction(value){
//     console.log(value)
// }





// function myfunction(value){
//     return value >2
// }

// console.log(arr.filter(myfunction))

// let arr = [1.0,2,3,4.3,5.5]


// function myfunction(value){
//     return value >2 
// }



// var store = arr.findIndex(myfunction)
// console.log(store)


// console.log(typeof NaN)
// console.log(typeof null)
// console.log(typeof undefined)



console.log((2<5)||(1>0)+1)

console.log((2<5)&&(1>0)+1)
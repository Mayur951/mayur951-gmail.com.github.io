
// /** function mail(name , id){

//     mesg = 'this is ' + name + 'and id is :' + id
//     return mesg
// }

// //console.log(mail('mayur',10002))



// obj = [ {name:'mayur' , id:1000},{name : 'gauarv', id :2000}]



// for (let i of obj){
//     console.log(mail(i['name'] , i['id']))
// }



// let x= 10;
// let y='10'

// console.log(x*y)




// var a = "mayur"
// console.log(a.length)

// var b = 'this is mayur'
// console.log(b.indexOf('g'))

// **/

// // var x = 'this is mayur'
// // console.log(x.slice(0,4))
// // console.log(x.substr(0,4))
// // console.log(x.substring(0,4))


// // let a = [1,2,3,4,5]
// // console.log(a.join("_"))

// // console.log(Number.NEGATIVE_INFINITY)

// // function mail(name , id){

// //     mesg = 'this is ' + name + ' and id is :' + id
// //     return mesg
// // }

// // obj = [ {name:'mayur' , id:1000},{name : 'gauarv', id :2000}]



// // for (let i of obj){
// //     console.log(mail(i['name'] , i['id']))
// // }

// // console.log(typeof obj)


// // var obj1 = 
// //     {name : 'mayur',
// //     id : '1000',
// //     company : 'CTS'}

// // for (var j in obj1){
// //     console.log(obj1[j])
// // }


// var alphabets = {'a':1 , 'b':2 , 'c':3 , 'd':4 ,'e':5,'f':6,'g':7 , 'h':8 , 'i':9 , 'j':10 , 'k':11 , 'l':12 ,'m':13 , 'n':14 , 'o':15 , 'p':16 , 'q':17 , 'r':18 , 's':19 , 't':20 , 'u':21 ,'v':22 , 'w':23 , 'x':24 , 'y':25 , 'z':26 }




// var abc = "This is Mayur"
// xyz = abc.toLowerCase();
// //console.log(abc.toLowerCase())

// //console.log(abc.split(' '))

// //console.log(abc.split(' ').length)

// let add = []
// for (var i of abc.split(' ')){
//     var sum = 0
//     for (var j of i){
//         for (var k in alphabets){
//             if(k==j){
//                 sum += alphabets[k]    
//             } 
//         }
//     }
//     //console.log(sum)
//     add.push(sum)
// }
// console.log(add)



let a = [5,2,3,9,2,1,4,5,3,4,8,7,4] 
let i = 0;
let b=[]
let c=[]
for (i ; i<a.length ; i++){
    if(a[i]%2!=0){
        //console.log(i)
        b.push(i)
    }
}

//console.log(b)

for (var j of a){
    if(j%2!=0){
        c.push(j)
    }
}
c.sort((a,b)=>a-b)
//console.log(c)

//console.log(a)

for (var k of b){
    for(var l of c){
        a[k]=l 
        break;
    }
    c.shift() 
}
console.log(a)


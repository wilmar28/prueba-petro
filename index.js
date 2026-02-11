// function hello(){
//     console.log('hola mundo')
// }
// hello()


// function add(x, y){
//     return x + y
// }

// console.log(add(10,20))

// const user = {
//     name: 'wilmar',
//     lastname: 'rondon',
//     age: 30,
//     address:{
//         country: 'colombia',
//         city: 'ibague',
//         street: 'main street 123'
//     },
//     friends: ['brandon', 'elena'],
//     active: true,
//     sendMail: function (){
//         return 'sending email...'
//     }
// }


// console.log(user.name)

// const name = 'laptop'
// const price = 3000

// const newProduct = {
//     name, 
//     price
// }

// console.log(newProduct)


// const title = document.createElement('h1')
// title.innerText = 'Hola mundo desde 35'

// const button = document.createElement('button')
// button.innerText = 'click'

// button.addEventListener('click', function(){
//     title.innerText = 'Texto actualizado con 25'
//     alert('se realizo un click')
// })

// document.body.append(title)
// document.body.append(button)


// const user = {
//     name: 'wilmar',
//     age: 17
// }

// function printInfo(user){
//     return '<h1>Hola ' + user.name + '</h1>'
// }

// console.log(printInfo(user))
// document.body.innerHTML = printInfo(user)

 
//  const button = document.createElement('button')
//  button.innerText = 'click me'

//  button.addEventListener('click', function(){
//     alert('clicked')
//  })

//  document.body.append(button)


// const showText = () => 'hola mundo'
// const showNumber = () => 22;
// const showBoolean = () => true;
// const showArray = () => [1, 2, 3]
// const showObject = () => ({name: 'wilmar'})

// console.log(showText())
// console.log(showNumber())
// console.log(showBoolean())
// console.log(showArray())
// console.log(showObject())

//  const button = document.createElement('button')
//  button.innerText = 'click me'

//  button.addEventListener('click', () => {
//     alert('clicked')
//  })

//  document.body.append(button)


// const background = 'red'
// const color = 'white'
// const isAuthorized = true;

// const button = document.createElement('button')
//  button.innerText = 'click me'
// button.style = 'background: ; color: white;'
// button.style = 'background: ${isAuthorized ? background : 'red'}; color: ${color}'

 

//  button.addEventListener('click', () => {
//     if (isAuthorized) {
//         alert('esta autorizado')
//     } else {
//         alert('no esta autorizado')
//     }
//  })

//  document.body.append(button)


// const names = ['wilmar', 'jose', 'porras']

// // for (let i = 0; i < names.length; i++) {
// //     const element = names[i];
// //     console.log(element)
// // }

// const nameFound = names.find(function(name){
//     if (name === 'wilmar'){
//         return name
//     }
// })

// console.log(nameFound)


// const names = ['wilmar', 'jose', 'porras']

// const nameFound = names.filter(function(name){
//     if (name !== 'wilmar'){
//         return name
//     }
// })

// console.log(nameNames)


// const names = ['wilmar', 'jose', 'porras']
// const newNames = ['gordillo','jhoan','bohorquez']

// console.log(names)
// console.log(newNames)
// console.log(names.concat(newNames))


// const user = {
//     name: "wilmar",
//     lastname: "rondon"
// }

// const address= {
//     street: 'main street 123',
//     city: 'ibague'
// }

// const userinfo = {
//     ...user,
//     ...address
// }

// console.log(user)
// console.log(address)
// console.log(userinfo)


// import {add, multiply, active, points, title} from './add.js'

// console.log(active, points, title);
// console.log(add(10, 20))
// console.log(multiply(10, 20))


// import addModule from './add.js'
// console.log(addModule)


// const person = {
//     name: 'wilmar',
//     address: {
//         city: 'ibague'
//     },
//     location: {}
// }

// if (person.location) {
//     console.log(person.location.city)
// }


// const person = {
//     name: 'wilmar',
//     address: {
//         city: 'ibague'
//     },
// }

// console.log(person.location?.city)


// let data = fetch('https://jsonplaceholder.typicode.com/posts')

// console.log(data)


// let data = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function(){
//     console.log('finalizo la carga')
// })

// console.log('linea 2')


// let data = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function(response){
//     console.log(response)
// })

// console.log('linea 2')


// const ul = document.createElement('ul')
// const li = document.createElement('li')

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(function(response){
//     return response.json()
// }).then(function(data){
//     console.log(data)
//     data.forEach(function(post ){
//         const li = document.createElement('li')
//         li.innerText = post.title
//         ul.append(li)
//     })
//     document.body.append(ul);
// });


// const ul = document.createElement("ul");

// async function loadData() {
    
// const response = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await response.json()
// data.forEach(function(post ){
//     const li = document.createElement("li")
//     li.innerText = post.title;
//     ul.append(li);
//     });
//     document.body.append(ul);
// }

// loadData()
// console.log("linea 2")
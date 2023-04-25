//vaiables

var a ;//declarando
var b='b';//declaramos y asignamos

b='bb';// reasignación
var a ='aa'//redeclaracion

//global scope

var fruit='Apple'; //global
console.log(fruit)

function bestFruit(){
  console.log(fruit)
}
bestFruit()

function countries(){
  country='colombia'

  console.log(country)
}

 countries()
  console.log(country)
let dosa = document.querySelector("#dosa")
let idly = document.querySelector("#idly")
let biriyani = document.querySelector("#biriyani")
let chickenRice = document.querySelector("#chickenrice")
let meals = document.querySelector("#meals")
let shawarma = document.querySelector("#shawarma")
let paniPoori = document.querySelector("#panipoori")


let arr = [];

arr.push(dosa.value);
arr.push(idly.value);
arr.push(biriyani.value);
arr.push(chickenRice.value);
arr.push(meals.value);
arr.push(shawarma.value);
arr.push(paniPoori.value);


arr.forEach((value) =>{
    console.log(value)
})

let PPL = document.getElementById('ppl')
console.log(PPL)

let counter = 0

 function increment(){
   counter = counter + 1;
   PPL.innerText = counter

 }

  function save(){
     
let saveEl = document.getElementById("save-el")
let prev = counter + " -  "
saveEl.textContent += prev
PPL.textContent=0
counter=0


  }
 

 let name = "jeff"
//  let greeting = "Hi, my name is "

//  let myGreeting = greeting + name + "!"

//  console.log(myGreeting)

let welmess = document.getElementById("welcome")

let greeting = "welcome back, "

welmess.textContent = greeting + name 



 
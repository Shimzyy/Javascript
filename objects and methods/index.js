// let ex1 = document.getElementById("Ex")

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return `Hi, my name is \"Johnnee\"  ${this.lastName}`;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

let ex1 = document.getElementById("example").textContent = 4;
console.log("hi")
alert("hey babe")
console.error("this is an error");

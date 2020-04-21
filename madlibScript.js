const myButton = document.getElementById("clickMe");
const noun1 = document.getElementById("noun1");
const noun1Input = document.getElementById("noun1Input");

const noun2 = document.getElementById("noun2");
const noun2Input = document.getElementById("noun2Input");

const noun3 = document.getElementById("noun3");
const noun3Input = document.getElementById("noun3Input");

const verb1 = document.getElementById('verb1');
const verb1Input = document.getElementById("verb1Input");

const verb2 = document.getElementById("verb2");
const verb2Input = document.getElementById("verb2Input");

const adj1 = document.getElementById("adj1");
const adj1Input = document.getElementById("adj1Input");

const adj2 = document.getElementById("adj2");
const adj2Input = document.getElementById("adj2Input");

const section = document.querySelector("section");


myButton.addEventListener("click", function(e) {
  e.preventDefault();
  noun1.innerHTML = noun1Input.value;
  noun2.innerHTML = noun2Input.value;
  noun3.innerHTML = noun3Input.value;
  verb1.innerHTML = verb1Input.value;
  verb2.innerHTML = verb2Input.value;
  adj1.innerHTML = adj1Input.value;
  adj2.innerHTML = adj2Input.value;
  section.classList.add("background");
});

// myButton2.addEventListener("click",  function(e) {
//     e.preventDefault();
// });
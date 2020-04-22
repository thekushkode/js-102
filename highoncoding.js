const container = document.getElementById("container");

document.body.style.fontFamily = "sans-serif";

const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "#2CA1FB";
header.style.display = "flex";
header.style.padding = "0 20px";

container.appendChild(header);

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "20px";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "25px";
link1.style.paddingLeft = "30px";
link1.style.color = "white";
link1.style.fontWeight = "600";
link1.style.fontSize = "20px";
link1.style.textDecoration = "none";
// link1.onmouseover = function() {
//     link1.style.textShadow = "5px 5px black;";
// };
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "22px";
link2.style.fontWeight = "100";
link2.style.paddingLeft = "20px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";

topNav.appendChild(link2);

const main = document.createElement("main");
main.style.display = "flex";
main.style.flexDirection = "column";
container.appendChild(main);

const div1 = document.createElement("div");
div1.style.backgroundColor = "#DEDCDC";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.margin = "20px";
main.appendChild(div1);

const heading2 = document.createElement("h1");
heading2.textContent = "Curse of the Current Reviews";
heading2.style.paddingLeft = "20px";
heading2.style.color = "#515151";

div1.appendChild(heading2);

const parag1 = document.createElement("p");
parag1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum quibusdam deserunt repellendus voluptatum a reprehenderit quas voluptatibus. Similique, laborum tempora exercitationem vitae quae incidunt accusantium nesciunt rem dignissimos veniam?";
parag1.style.margin = "10px 20px 20px 20px";

div1.appendChild(parag1);

const div2 = document.createElement("div");
div2.style.display = "flex";
div2.style.flexDirection = "column";
div2.margin = "20px";
main.appendChild(div2);

const heading3 = document.createElement("h2");
heading3.textContent = "Hello WatchKit";
heading3.style.color = "#0D6AEC";
heading3.style.paddingLeft = "20px";
heading3.style.font = "sans-serif";
heading3.style.fontWeight = "100";
heading3.style.marginTop = "-5px";
div2.appendChild(heading3);

const parag2 = document.createElement("p");
parag2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum quibusdam deserunt repellendus voluptatum a reprehenderit quas voluptatibus. Similique, laborum tempora exercitationem vitae quae incidunt accusantium nesciunt rem dignissimos veniam?";
parag2.style.margin = "20px";
parag2.style.marginTop = "-10px";
div2.appendChild(parag2);

const div3 = document.createElement("div");
div3.style.display = "flex";
div3.style.margin = "20px";
div3.style.backgroundColor = "#EC8B0D";
div3.style.marginTop = "-19px";

div2.appendChild(div3);

const parag3 = document.createElement("p");
parag3.textContent = "12 comments";
parag3.style.color = "white";
parag3.style.paddingLeft = "10px";

const parag4 = document.createElement("p");
parag4.textContent = "124 likes";
parag4.style.paddingLeft = "40px";
parag4.style.color = "white";

div3.appendChild(parag3);
div3.appendChild(parag4);

const div4 = document.createElement("div");
div4.style.display = "flex";
div4.style.flexDirection = "column";
div4.margin = "20px";
main.appendChild(div4);

const heading4 = document.createElement("h2");
heading4.textContent = "Introduction to Swift";
heading4.style.color = "#0D6AEC";
heading4.style.paddingLeft = "20px";
heading4.style.font = "sans-serif";
heading4.style.fontWeight = "100";
heading4.style.marginTop = "-5px";
div4.appendChild(heading4);

const parag5 = document.createElement("p");
parag5.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum quibusdam deserunt repellendus voluptatum a reprehenderit quas voluptatibus. Similique, laborum tempora exercitationem vitae quae incidunt accusantium nesciunt rem dignissimos veniam?";
parag5.style.margin = "20px";
parag5.style.marginTop = "-10px";
div4.appendChild(parag5);

const div5 = document.createElement("div");
div5.style.display = "flex";
div5.style.margin = "20px";
div5.style.backgroundColor = "#EC8B0D";
div5.style.marginTop = "-19px";

div4.appendChild(div5);

const parag6 = document.createElement("p");
parag6.textContent = "15 comments";
parag6.style.color = "white";
parag6.style.paddingLeft = "10px";

const parag7 = document.createElement("p");
parag7.textContent = "45 likes";
parag7.style.paddingLeft = "40px";
parag7.style.color = "white";

div5.appendChild(parag6);
div5.appendChild(parag7);

const footer = document.createElement("footer");
footer.style.display = "flex";
footer.style.flexDirection = "column";
container.appendChild(footer);

const div6 = document.createElement("div");
div6.style.backgroundColor = "#2CA1FB";
div6.style.color = "white";
div6.style.display = "flex";
div6.style.flexDirection = "column";

footer.appendChild(div6);

const parag8 = document.createElement("p");
parag8.textContent = "Thanks for reading HighOnCoding!";
parag8.style.paddingLeft = "20px";
parag8.style.fontSize = "20px";
parag8.style.fontWeight = "100";

div6.appendChild(parag8);

const parag9 = document.createElement("p");
parag9.textContent = "For more content, join our mailing list below:";
parag9.style.paddingLeft = "20px";
parag9.style.fontSize = "13px";
parag9.style.fontWeight = "400";
parag9.style.marginTop = "-10px";

div6.appendChild(parag9)

// How to add a css class via JS
// const emailClass = document.createElement("style");
// emailClass.type = "text/css";
// emailClass.innerHTML =".emailForm {enter styles}";
// document.getElementsByTagName('form').appendChild(emailClass);
// document.getElementById("label").className = "emailForm";


const form1 = document.createElement("form");
form1.style.paddingLeft = "20px";
form1.style.paddingBottom = "20px";
div6.appendChild(form1);

const label1 = document.createElement("label");
form1.appendChild(label1);

// Adding an ID via JS
const input1 = document.createElement("input");
input1.setAttribute("id", "email");
input1.setAttribute("value", "");
input1.setAttribute("placeholder", "Enter Email 📧");
label1.appendChild(input1);

const button1 = document.createElement("button");
button1.setAttribute("type", "submit");
button1.setAttribute("id", "clickMe");
button1.textContent = "Submit";
button1.style.marginLeft = "10px";
form1.appendChild(button1);

// myButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     noun1.innerHTML = noun1Input.value;
//     section.classList.add("background");
//   });







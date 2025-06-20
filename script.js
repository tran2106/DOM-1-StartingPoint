console.log("Hello! If you see this, the script is working.");

/*
- [ ] Select the section with an id of container without using querySelector.
- [ ] Select the section with an id of container using querySelector.
- [ ] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
- [ ] Give the section with an id of container the text "Hello!".
- [ ] Add the class main to the div with a class of footer.
- [ ] Remove the class main on the div with a class of footer.
- [ ] Create a new li element.
- [ ] Give the li the text "four".
- [ ] Append the li to the ul element.
- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/

// Try rewriting this without using querySelector
const header = document.getElementById("container");
console.log("# 1 header", header);
// Using querySelector
const headerQuery = document.querySelector("#container");
console.log("# 2 headerQuery", headerQuery);
// select all using class name
const secondClassItems = document.getElementsByClassName("second");
console.log("# 3 secondClassItems", secondClassItems);
//select all using with third class/inside ol tag
const thirdClassItems = document.querySelector("ol .third");
console.log("# 4 thirdClassItems", thirdClassItems);
// 5 - Give the section with an id of container the text "Hello!".
const container = document.getElementById("container");
container.innerText = "Hello!"
// 6 - Add the class main to the div with a class of footer.
const footers = document.getElementsByClassName("footer");
const footer = [...footers][0];
footer.classList.add("main");
// 7 - Remove the class main on the div with a class of footer.
footer.classList.remove("main");
// #8 Create a new li element.
const li = document.createElement('li'); 
// #9 Give the li the text "four".
li.textContent = 'four'; 
// #10 Append the li to the ul element.
const ul = document.querySelector('ul'); 
ul.appendChild(li);
// #11 Loop over all of the lis inside the ol tag and give them a background color of "green".
const ol = document.querySelector('ol'); 
const olLI = ol.querySelectorAll('li');
olLI.forEach(function (li){
    li.style.backgroundColor = 'green';
});
// 12 - Remove the div with a class of footer.
footer.parentNode.removeChild(footer)
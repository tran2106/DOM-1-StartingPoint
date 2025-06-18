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
// const header = document.querySelector("#container");
// console.log("header", header);

// 5 - Give the section with an id of container the text "Hello!".
const container = document.getElementById("container");
container.innerText = "Hello!"

// 6 - Add the class main to the div with a class of footer.
const footers = document.getElementsByClassName("footer");
const footer = [...footers][0];
footer.classList.add("main");

// 7 - Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 12 - Remove the div with a class of footer.
footer.parentNode.removeChild(footer)
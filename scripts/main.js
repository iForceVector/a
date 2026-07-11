// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click",function() {
//     alert("Ouch! Stop poking me!");
// });

const myImage= document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dog.jpeg") {
        myImage.setAttribute("src", "images/tiger.jpg");
    } else {
        myImage.setAttribute("src", "images/dog.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function() {
    setUserName();
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUsername();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

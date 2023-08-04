let personName = prompt("What is your name")

// Javascript DOM
// const h3El = document.getElementsByTagName("a")
const workshopTxtEl = document.getElementById("workshop-txt")

let welcomeTxt;

if ((personName === null) || (personName <= 3)) {
    welcomeTxt = "Workshop is happening currently.";
} else {
    welcomeTxt = "Welcome " + personName + ", Workshop is happening currently.";
}

// const welcomeTxt = "Welcome " + personName + ", Workshop is happening currently."

workshopTxtEl.innerText = welcomeTxt

// console.log(welcomeTxt);
// console.dir(workshopTxtEl.innerText);
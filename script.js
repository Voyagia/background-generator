var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Exercise DOM Events

//StrikThrough:

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

ul.addEventListener("click", strikeThrough);

// Add DeleteButtons:


function createDeleteButtonIcon() {
    for (var ind = 0; ind < li.length; ind++) {
        var createDeleteButton = document.createElement("i");
        var createDiv = document.getElementsByClassName("div");
        console.log(createDiv);
        createDeleteButton.classList.add("fa", "fa-trash");
        createDiv[ind].appendChild(createDeleteButton);
    }
}

createDeleteButtonIcon();

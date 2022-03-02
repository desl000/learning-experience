var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteButton = document.getElementsByTagName("delete");
var clearButton = document.getElementById("clear");

// function strikeThrough() {
// 	if (li.classList) {
// 		li.classList.toggle("done");
// 	}
// }

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function createDeleteButton() {
	for (var ind = 0; ind < li.length; ind++) {
		var createDeleteButton = document.createElement("delete");
		var createDiv = document.getElementsByClassName("div");
		console.log(createDiv);
		createDeleteButton.appendChild(document.createTextNode("Delete"));
		createDiv[ind].appendChild(createDeleteButton);
	}
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("delete");
    for (var ind = 0; ind < trash.length; ind++) {
        console.log(e);
        this.parentNode.parentNode.remove();
    }
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var divClassList = document.createElement("div");
    divClassList.classList.add("list");

	var li = document.createElement("li");
	var createDiv = document.createElement("div");

	li.appendChild(document.createTextNode(input.value));
	divClassList.appendChild(li);
	divClassList.appendChild(createDiv);
	ul.appendChild(divClassList);

	input.value = "";
    createDiv.classList.add("div");

	var createDeleteButton = document.createElement("delete");
	createDeleteButton.appendChild(document.createTextNode("Delete"));
	createDiv.appendChild(createDeleteButton);
    deleteParentNodeOnClick();
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

function deleteParentNodeOnClick() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}

function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButton();
deleteParentNodeOnClick();

// item.addEventListener("click", itemAfterClick);
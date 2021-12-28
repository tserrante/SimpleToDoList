var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function initList() {
    var listElements = document.querySelectorAll("li");
    var listButtons = document.querySelectorAll("li button");
    for (var i = 0; i < listElements.length; i++) {
        //adds event listener for done class
        listElements[i].addEventListener("click", function(ev) {
            this.classList.toggle('done')
        });

        //adds event listener for deleting li element
        listButtons[i].addEventListener('click', function(ev) {
            this.parentElement.remove();
        });
    }
}

function inputLength() {
    return input.value.length;
}


function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createListButton());
    ul.appendChild(li);
    input.value = "";
    initList();

}

function createListButton() {
    var button = document.createElement('button');
    button.appendChild(document.createTextNode('Delete Item'));
    return button;
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


initList();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
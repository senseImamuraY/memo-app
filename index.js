const form = document.getElementById("form");
const onput = document.getElementById("input");
const ul = document.getElementById("ul");
form.addEventListener("submit",function (event) {
    event.preventDefault();
    console.log(input.value);
    add();
});

function add() {
    let todoText = input.value;
    if (todoText) {
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value ="";
        saveData();
    }
}

function saveData() {
    const lists = document.querySelectorAll("li");
    console.log(lists);
}

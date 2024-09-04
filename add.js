let add = document.getElementById("adding-note");
let form = document.getElementById("to-do-form");
let inpt = document.getElementById("to-do-inpt");
function addTask() {
    if (inpt.value === "") {
        console.warn("You must write something!");
        alert("You must write something!");
        savData();
    }
    else {
        let li = document.createElement("li");
        li.classList.add("lists");
        li.innerHTML = inpt.value;
        add.append(li);
       
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inpt.value = "";
    savData();
}

add.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("tik");
        savData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savData();
    }
},false);

function savData(){
    localStorage.setItem("data", add.innerHTML);
}

function showData(){
    add.innerHTML = localStorage.getItem("data");
}
showData();
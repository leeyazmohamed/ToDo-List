var input = document.querySelector("#txt-input");
var btn = document.querySelector(".btn-add");
var ul = document.querySelector(".add-list");

// Function to add tasks to the list
function add() {
  if (input.value === "") {
    alert("Write Something there!!!");
  } else {
    // Get the current date and time
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    
    // Create li element and add user input value, date, time, and remove button
    const li = document.createElement("li");
    li.innerHTML = `<p>${input.value} <span class="date-time">[${date} ${time}]</span></p><button class="btn btn-line">&#10006;</button>`;
    ul.appendChild(li);
  }
  input.value = "";
}

// Event listener for ul to handle item completion and removal
ul.addEventListener("click", function (p) {
  if (p.target.tagName === "LI") {
    p.target.classList.toggle("check-li");
    p.target.childNodes[0].classList.toggle("check");
  } else if (p.target.tagName === "BUTTON") {
    p.target.parentElement.remove();
  }
}, false);

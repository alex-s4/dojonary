const defButton = document.getElementById("definition-btn")
const likeButton = document.getElementsByClassName("like-btn")
const logButton = document.getElementById("log-btn") 

// Function that will change to Login -> Logout and vice-versa when clicked

logButton.onclick = function () {
    if (this.innerText == "Login") {
        this.innerText = "Logout";
    } else if (this.innerText == "Logout") {
        this.innerText = "Login";
    }
}

// Function that will remove "Add Definition" button when clicked

defButton.onclick = function () {
    this.remove();
};

// Function that will popup alert when clicked 

for (var i=0; i<likeButton.length; i++) {
    likeButton[i].onclick = function () {
        alert("Ninja was liked");
    }
}

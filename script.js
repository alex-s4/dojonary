function logClick(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else if (element.innerText == "Logout") {
        element.innerText = "Login";
    }
}

function likeClick() {
    alert("Ninja was liked");
}

function removeElem(element) {
    element.remove();
}
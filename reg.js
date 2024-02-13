function saveData() {
    var name = document.getElementById("NameInput").value;
    var surname = document.getElementById("SurnameInput").value;
    if (name === "Ника" && surname === "Колтович") {
        console.log("Ника залогинилась");
        window.open("Nika.html", "_blank");
    }else if (name === "Аня" && surname === "Машко") {
        console.log("Аня залогинилась");
        window.open("Anya.html", "_blank");
    } else if (name === "Даша" && surname === "Працкевич") {
        console.log("Даша залогинилась");
        window.open("Dasha.html", "_blank");
    }else {
        alert("Введенные значения не соответствуют ожидаемым.");
    }
}
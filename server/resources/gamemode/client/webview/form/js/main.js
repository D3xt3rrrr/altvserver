let user, pass;

function playerForm() {
    user = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    alt.emit("gamemode:login", user, pass)
}
let user, pass, connect, create;
create = document.getElementById("playerConnect").style.display = 'none';

function showPlayerConnect() {
    create = document.getElementById("playerCreate").style.display = 'none';
    create = document.getElementById("playerConnect").style.display = 'block';
}

function showPlayerCreate() {
    create = document.getElementById("playerCreate").style.display = 'block';
    create = document.getElementById("playerConnect").style.display = 'none';
}

function playerCreate() {
    user = document.getElementById("create_email").value;
    pass = document.getElementById("create_pass").value;
    alt.emit("gamemode:create", user, pass)
}


function playerConnect() {
    user = document.getElementById("connect_email").value;
    pass = document.getElementById("connect_pass_pass").value;
    alt.emit("gamemode:login", user, pass)
}
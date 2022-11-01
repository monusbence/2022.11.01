function adatBanyasz() {
    var neve=document.getElementById("neve").value;
    document.getElementById("cellaSelect").innerHTML=neve;
    var cime=document.getElementById("cime").value;
    document.getElementById("cellaRange").innerHTML=cime;
    var telefonszama=document.getElementById("telefonszama").value;
    document.getElementById("cellaRadio").innerHTML=telefonszama;
}

function eredeti(id){
    document.getElementById(id).style.backgroundColor = "white";
}
function uj(id){
    document.getElementById(id).style.backgroundColor = "yellow";
}
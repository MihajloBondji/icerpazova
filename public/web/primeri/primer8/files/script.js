//Ovde se piše JavaScript kod.

var brojdivova=0;

function prikaziDiv(x){

    for(let i=0;i<x;i++)
        document.body.innerHTML+="<div class='test' onclick='pomeri(this.id)' id='div"+i+"'>Klikni me!</div>";
    brojdivova=x;
}

var procenat=10;

function pomeri(id){
    document.getElementById(id).style.left=procenat+"%";
    procenat+=10;
}


function resetDiv(){
    for(let i=0;i<brojdivova;i++)
        document.getElementById("div"+i).style.left=0;
    procenat=0;
}

/*
document.getElementById("div0").style.left=0;
document.getElementById("div1").style.left=0;
document.getElementById("div2").style.left=0;
document.getElementById("div3").style.left=0;
*/
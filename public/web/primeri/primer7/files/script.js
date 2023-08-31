//Ovde se piše JavaScript kod.
var stanje=true;

function menu(){
    if(stanje)
    {
        document.getElementById("burger").src="files/x.svg";
        document.getElementsByClassName("menu")[0].style.height="600px";
        document.getElementById("zaLinkove").className="prikazi";
    }
    else
    {
        document.getElementById("burger").src="files/m.svg";
        document.getElementsByClassName("menu")[0].style.height="100px";
        document.getElementById("zaLinkove").className="displayNone";
    }
    stanje= !stanje;
}


function dodajDivove(){
    for(let i=0;i<4;i++)
        document.body.innerHTML+="<div class='test' onmouseover='this.style.opacity=0' onmouseout='this.style.opacity=1'></div>"
}
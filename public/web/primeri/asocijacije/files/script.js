const ID=[
    "a1","a2","a3","a4","a",
    "b1","b2","b3","b4","b",
    "c1","c2","c3","c4","c",
    "d1","d2","d3","d4","d",
    "konacno"];

const reci=[
    "Mišić","Engleski","Maternji","Čulo ukusa","Jezik",     //A
    "Azbuka","Reč","Pisano","Veliko","Slovo",               //B
    "Čili","Vegeta","So","Biber","Začin",                   //C
    "Voće","Imunitet","Tableta","Salata","Vitamin",         //D
    "C"
]

var score=0;

function load(){
    for(let clan of ID)
        if(clan!="a"&&clan!="b"&&clan!="c"&&clan!="d"&&clan!="konacno")
            document.getElementById(clan).addEventListener("click", (e)=>{prikaziRec(e.target.id)});
        else
            document.getElementById(clan).addEventListener("change", (e)=>{provera(e.target.id)});
}



function prikaziRec(id){
    let indeks=ID.indexOf(id);
    document.getElementById(id).value=reci[indeks];
    document.getElementById(id).disabled=true;
}

function provera(id){
    let indeks=ID.indexOf(id);
    if(document.getElementById(id).value.toUpperCase()==reci[indeks].toUpperCase())
    {
        if(id!="konacno"){
            for(let i=1;i<=4;i++)
                    oznaciElement(id+i);

            oznaciElement(id);
        }
        else {
            for(let clan of ID)
                oznaciElement(clan);
        }
    }
    else{
        alert("netacno");
        document.getElementById(id).value="";
    }
}

function oznaciElement(id){
    if(document.getElementById(id).disabled!=true)
    {
        document.getElementById(id).value=reci[ID.indexOf(id)];
        document.getElementById(id).disabled=true;

        score++;
        document.getElementById("score").value=score;
        console.log("Score: "+score);
    }
    document.getElementById(id).style.background="lightgreen";
}
//Ovde se piše JavaScript kod.

function promena(){
    let r=document.getElementById("r").value;
    let g=document.getElementById("g").value;
    let b=document.getElementById("b").value;
    document.body.style.background="rgb("+r+","+g+","+b+")";
    document.getElementById("zaVrednost").innerHTML="rgb("+r+","+g+","+b+")";
}

/*
    Math.random() vraca nasumicnu vrednost izmedju 0 i 1, npr 0.08560247972125024
    Ako broj koji je izmedju 0 i 1 ponmozimo sa 256 dobicemo broj izmedju 0 i 256
    Math.floor() zaokruzuje vrednost na ceo broj
    Math.floor(Math.random()*256) ce onda da nam da ceo broj koji je 0<= x <256
*/

function nasumicno(){
    document.getElementById("r").value=Math.floor(Math.random()*256);
    document.getElementById("g").value=Math.floor(Math.random()*256);
    document.getElementById("b").value=Math.floor(Math.random()*256);
    promena();
}

/*
    Date predstavlja zapis o datumu, ako iz datuma izvucemo trenutno vreme dobicemo broj,
    taj broj predstavlja koliko je milisekundi proslo od 1. januara 1970. godine u 00:00:00.
    Mozemo smatrati da cemo dobiti neki nasumican broj u svakom trenutku i onda to koristiti za
    dobijanje nasumicne vrednosti, posto nama treba broj od 0 do 255 taj broj cemo da podelimo sa 256,
    odnosno uzecemo ostatak pri deljenju sa 256 i tako dobiti broj koji je izmedju 0 i 255.
*/

function nasumicno2(id){
    let d= new Date();
    document.getElementById(id).value=d.getTime()%256;
    promena();
}
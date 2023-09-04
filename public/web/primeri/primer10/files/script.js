//Ovde se piše JavaScript kod.

function load(){
    let url = new URL(window.location.href);
    let ime = url.searchParams.get("ime");
    let prezime = url.searchParams.get("prezime");
    let ocena = url.searchParams.get("ocena");
    let predmet = url.searchParams.get("predmet");

    document.body.innerHTML="Učenik: "+ime+" "+prezime+" je dobio ocenu [ "+ocena+" ] na testu iz predmeta - "+predmet;
    document.body.innerHTML+="<br> <br> <i>Obratite pažnju na link, odnosno URL. Tekst u body-u se formira na osnovu linka. Promenite parametre nakon znaka ? i zatim kliknite enter da biste ušli na sajt sa drugim parametrima.</i>"
}
//Ovde se piše JavaScript kod.


//Ispod se nalazi spisak slika, u jednom redu se nalaze slike za jedan slideshow, u drugom za drugo itd...
var nizSlika=[
    ["slika01.jpg","slika02.jpg","slika03.jpg"],
    ["slika11.jpg","slika12.jpg","slika13.jpg"],
    ["slika21.jpg","slika22.jpg","slika23.jpg"]
];

//Ovo je niz koji za svaki slideshow kaze koja je trenutna slika koja se prikazuje, na pocetku je 0 i posle se povecava za pomeranje ulevo i smanjuje za pomeranje udesno
var trenutneSlike=[
    0,
    0,
    0
];

function pomeriDesno(id,nizId){
    trenutneSlike[nizId]=(trenutneSlike[nizId]+1)%nizSlika[nizId].length;
    
    document.getElementById(id).src="files/"+nizSlika[nizId][trenutneSlike[nizId]];
}

function pomeriLevo(id,nizId){
    trenutneSlike[nizId]=(trenutneSlike[nizId]+nizSlika[nizId].length-1)%nizSlika[nizId].length;
    
    document.getElementById(id).src="files/"+nizSlika[nizId][trenutneSlike[nizId]];
}
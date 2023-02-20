var menuop=0;
function menu() {
  document.getElementById("header").style.background="rgba(50, 102, 204,1)";
  burger.classList.toggle("change");
  linksHolder.classList.toggle("changeHolder");
  headLogo.classList.toggle("displayNone");
  facebook.classList.toggle("displayNone");
  instagram.classList.toggle("displayNone");
  linkedin.classList.toggle("displayNone");
  menuop=!menuop;
}

function checkmenu(){
	if(menuop==1)
		menu();
}

var ab=0,ucl=0,bod=0,kur=0;
function resizeFun(){
	bod = document.body.getBoundingClientRect();
	ab=aboutus.getBoundingClientRect().top*1.5-bod.top;
	kur=table1.getBoundingClientRect().top*0.9-bod.top;
	ucl=uclanise.getBoundingClientRect().top-bod.top;
}
var completed=0;
var scrollScript = function(){
	
	if(window.scrollY>10){
		document.getElementById("header").style.background="rgba(50, 102, 204,1)";
	}
	else{
		document.getElementById("header").style.background="rgba(50, 102, 204,0)";
	}
	if(completed!=3)
	{
	var scr=window.scrollY*0.85+window.innerHeight;
	resizeFun();
	// console.log(scr,kur);
	if(completed<1)
	if(scr>ab)
		{
			document.getElementById('flexitem1').style.marginTop="5vw";
			document.getElementById('flexitem1').style.marginBottom="3vw";
			document.getElementById('flexitem1').style.opacity="1";
			document.getElementById('flexitem2').style.marginTop="5vw";
			document.getElementById('flexitem2').style.marginBottom="3vw";
			document.getElementById('flexitem2').style.opacity="1";
			document.getElementById('flexitem3').style.marginTop="5vw";
			document.getElementById('flexitem3').style.marginBottom="3vw";
			document.getElementById('flexitem3').style.opacity="1";
			setTimeout(function(){document.getElementById('flexitem1').classList.add("flexitemborder");},2100);
			setTimeout(function(){document.getElementById('flexitem2').classList.add("flexitemborder");},3700);
			setTimeout(function(){document.getElementById('flexitem3').classList.add("flexitemborder");},5350);
			document.getElementById('hline').className="hline";
			/*var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			if(width<900)
			document.getElementById('hline').style.top="0";
			else
			document.getElementById('hline').style.left="0";
			completed=1;*/
		}
		if(completed<2)
		if(scr>kur)
		{
			document.getElementById('table0').style.opacity="1";
			setTimeout(function(){
			document.getElementById('table1').style.opacity="1";
			},500);
			setTimeout(function(){
			document.getElementById('table2').style.opacity="1";
			},1000);
			setTimeout(function(){
			document.getElementById('table3').style.opacity="1";
			},1500);
			setTimeout(function(){
			document.getElementById('table4').style.opacity="1";
			},2000);
			setTimeout(function(){
			document.getElementById('table5').style.opacity="1";
			},2500);
			setTimeout(function(){
			document.getElementById('table6').style.opacity="1";
			},3000);
			completed=2;
		}
		if(completed<3)
		if(scr>ucl)
		{
			document.getElementById('frametop').className="frametop";
			document.getElementById('frameright').className="frameright";
			document.getElementById('framebottom').className="framebottom";
			document.getElementById('frameleft').className="frameleft";
			completed=3;
		}
	}
}

const slideshift = ["secondarypic1", "slidemainpic", "secondarypic2"];
var counter=0;

function slideshow(x){
	let num=slideshift.length;
	if(x)
		counter=(counter+1)%num;
	else counter=(counter+num-1)%num;
		slideop1.className=slideshift[counter%num];
		slideop2.className=slideshift[(counter+1)%num];
		slideop3.className=slideshift[(counter+2)%num];
}

var klik=function(){}



function setpanorama(){/*
	document.getElementById('sponsor1').classList.add("sponsoran");
	setTimeout(function(){
			document.getElementById('sponsor2').classList.add("sponsoran");
			},2500);
	setTimeout(function(){
			document.getElementById('sponsor3').classList.add("sponsoran");
			},5000);
	setTimeout(function(){
			document.getElementById('sponsor4').classList.add("sponsoran");
			},7500);
	setTimeout(function(){
			document.getElementById('sponsor5').classList.add("sponsoran");
			},10000);
	setTimeout(function(){
			document.getElementById('sponsor6').classList.add("sponsoran");
			},12500);*/
	completed=0;

	pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "prostor",
        "sceneFadeDuration": 1000,
		"mouseZoom":false,
		"autoLoad":true
    },
	
    "scenes": {
        "prostor": {
			"hfov": 150,'type': 'equirectangular','panorama': 'files/prostor.JPG','autoLoad':true,'autoRotate': -2,'hotSpots': [{'pitch':-7.297297,'yaw':0.48,'type': 'info','text': '3D štampači','clickHandlerFunc':function(){}},{'pitch':-0.2211302,'yaw':43.68,'type': 'info','text': 'Pametna tabla','clickHandlerFunc':function(){}},{'pitch':-23.66093,'yaw':-178.08,'type': 'info','text': 'Ulaz u konferencijsku salu','clickHandlerFunc':function(){}},{'pitch':5.970516,'yaw':-177.12,'type': 'scene',"sceneId": "ulaz",'text': 'Izlaz na ulicu','clickHandlerFunc':klik,'clickHandlerArgs':{target:'',text:'Izlaz na ulicu'}}]
		}
	,

        "ulaz": {
		"hfov": 150,"pitch": 0,"yaw": 179,'type': 'equirectangular','panorama': 'files/ulaz.JPG','autoLoad':true,'compass':false,'autoRotate': -2,'hotSpots': [{'pitch':-9.95086,'yaw':65.28,'type': 'info','text': 'Ulaz','clickHandlerFunc':klik,'clickHandlerArgs':{target:'',text:'Ulaz'}},{'pitch':-3.316953,'yaw':66.72,'type': 'scene','text': 'Ulaz na 3. sprat u konferencijsku salu',"sceneId": "prostor",'clickHandlerFunc':klik,'clickHandlerArgs':{target:'',text:'Ulaz na 3. sprat u konferencijsku salu'}},{'pitch':-0.6633906,'yaw':21.12,'type': 'info','text': 'Erste banka','clickHandlerFunc':klik,'clickHandlerArgs':{target:'',text:'Erste banka'}},{'pitch':-4.643734,'yaw':-93.6,'type': 'info','text': 'Ulica Kralja Petra I Karađorđevića','clickHandlerFunc':klik,'clickHandlerArgs':{target:'',text:'Ulica Kralja Petra I Karađorđevića'}},{'pitch':-0.6633906,'yaw':-167.04,'type': 'info','text': 'Glavna raskrsnica','clickHandlerFunc':klik,'clickHandlerArgs':{target:'',text:'Glavna raskrsnica'}}]}
    }
});
}
// function posthover() {
  // triangle.classList.toggle("trianglehover");
  // triangle2.classList.toggle("triangle2hover");
// }

// function loaded(){
		// oblik.src="files/oblikizsnova.png";
		// setTimeout("loaded2()",5000);
// }

// function loaded2(){
		// oblik.src="files/oblikizsnova2.png";
		// setTimeout("loaded()",5000);
// }

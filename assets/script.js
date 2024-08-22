const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
let slidevisible=0


// Ajout du eventlistner

const arrow_left = document.querySelector("#banner .arrow_left");
arrow_left.addEventListener("click", () => {
	slidevisible = slidevisible === 0 ? slides.length-1 : slidevisible-1
	changerBulletPoint(slidevisible)
	changerImageSlide(slidevisible)
});

const arrow_right = document.querySelector("#banner .arrow_right");
arrow_right.addEventListener("click", () => {
	slidevisible = slidevisible === slides.length-1 ? 0 : slidevisible+1
	changerBulletPoint(slidevisible)
	changerImageSlide(slidevisible)
});



function changerImageSlide(nvposition)
{
	const img=document.querySelector(".banner-img")
	const src=slides[nvposition].image
	img.setAttribute("src","./assets/images/slideshow/"+src)
	const p=document.querySelector("#banner p")
	const textslide=slides[nvposition].tagLine
	p.innerHTML=textslide

};


// Ajout et changement des bullet points

function changerBulletPoint(nvposition)
{
	let div="";
	let divdot="";
	for(let i=0;i<slides.length;i++)
	{
		if (i===nvposition)
		{
			div="<div class=\"dot dot_selected\"></div>"
			slidevisible=i
		} else{
			div="<div class=\"dot\"></div>"
		}
		divdot+=div
	}
	let divdots = document.querySelector(".dots");
	divdots.innerHTML = `${divdot}`
}

changerBulletPoint(slidevisible);

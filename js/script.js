const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {
    nav.classList.toggle("active");
};

document.addEventListener("click", (e) => {

    if (
        !nav.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        nav.classList.remove("active");
    }

});






const cards=document.querySelectorAll(".card");

let current=0;

function updateCards(){

cards.forEach((card,index)=>{

let offset=index-current;

card.style.zIndex=100-Math.abs(offset);

card.style.opacity=Math.abs(offset)>2?0:1;

card.style.transform=`
translate(-50%,-50%)
translateX(${offset*180}px)
rotateY(${offset*-35}deg)
scale(${offset===0?1:0.8})
`;

});

}

updateCards();

document.querySelector(".next").onclick=()=>{

current++;

if(current>=cards.length){

current=0;

}

updateCards();

}

document.querySelector(".prev").onclick=()=>{

current--;

if(current<0){

current=cards.length-1;

}

updateCards();

}

setInterval(()=>{

current++;

if(current>=cards.length){

current=0;

}

updateCards();

},5000);











/*=====================
ARRIVAL SLIDER
======================*/

const arrivalSlider =
document.querySelector(".arrival-slider");

const nextArrival =
document.querySelector(".next-arrival");

const prevArrival =
document.querySelector(".prev-arrival");

nextArrival.addEventListener("click",()=>{

arrivalSlider.scrollBy({

left:380,
behavior:"smooth"

});

});

prevArrival.addEventListener("click",()=>{

arrivalSlider.scrollBy({

left:-380,
behavior:"smooth"

});

});












/*====================
COUNTDOWN TIMER
=====================*/

const saleDate = new Date();

saleDate.setDate(saleDate.getDate() + 15);

function updateCountdown(){

const now = new Date().getTime();

const distance = saleDate - now;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();








/*====================
PRODUCT FILTER
=====================*/

const filterBtns =
document.querySelectorAll(".filter-btn");

const sellerCards =
document.querySelectorAll(".seller-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const filter =
btn.dataset.filter;

sellerCards.forEach(card=>{

if(filter==="all" ||

card.dataset.category===filter){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});










/*====================
SLIM CAMPAIGN
=====================*/

const campaignSlides = document.querySelectorAll(".campaign-slide");
const campaignDots = document.querySelectorAll(".campaign-dot");

let campaignIndex = 0;

function showCampaign(index){

campaignSlides.forEach(slide=>slide.classList.remove("active"));
campaignDots.forEach(dot=>dot.classList.remove("active"));

campaignSlides[index].classList.add("active");
campaignDots[index].classList.add("active");

}

function nextCampaign(){

campaignIndex++;

if(campaignIndex>=campaignSlides.length){

campaignIndex=0;

}

showCampaign(campaignIndex);

}

setInterval(nextCampaign,6000);

document.querySelector(".campaign-next").onclick=nextCampaign;

document.querySelector(".campaign-prev").onclick=()=>{

campaignIndex--;

if(campaignIndex<0){

campaignIndex=campaignSlides.length-1;

}

showCampaign(campaignIndex);

};

campaignDots.forEach((dot,index)=>{

dot.onclick=()=>{

campaignIndex=index;

showCampaign(index);

};

});














/*====================
FILTER BUTTONS
=====================*/

const chips = document.querySelectorAll(".chip");

chips.forEach(chip=>{

chip.onclick=()=>{

chips.forEach(c=>c.classList.remove("active"));

chip.classList.add("active");

};

});


const sizeButtons = document.querySelectorAll(".sizes button");

sizeButtons.forEach(button=>{

button.onclick=()=>{

sizeButtons.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

};

});


const colors = document.querySelectorAll(".colors span");

colors.forEach(color=>{

color.onclick=()=>{

colors.forEach(c=>c.style.outline="none");

color.style.outline="3px solid #d4af37";

};

});



















/*==============================
TRENDING SLIDER
===============================*/

const slider = document.querySelector(".trending-slider");

document.querySelector(".next").onclick = () => {

    slider.scrollBy({

        left:340,

        behavior:"smooth"

    });

};

document.querySelector(".prev").onclick = () => {

    slider.scrollBy({

        left:-340,

        behavior:"smooth"

    });

};

/* Auto Slide */

setInterval(()=>{

    if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth){

        slider.scrollTo({

            left:0,

            behavior:"smooth"

        });

    }else{

        slider.scrollBy({

            left:340,

            behavior:"smooth"

        });

    }

},4000);











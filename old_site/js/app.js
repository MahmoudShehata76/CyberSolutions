/*=========================================================
CYBER SOLUTIONS
Main JavaScript
=========================================================*/

"use strict";

/*=========================================================
Loader
=========================================================*/

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});

/*=========================================================
AOS
=========================================================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,
        once: true,
        offset: 120

    });

}

/*=========================================================
Sticky Navigation
=========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/*=========================================================
Animated Counters
=========================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=parseInt(counter.dataset.target);

let current=0;

const increment=Math.max(1,target/120);

const update=()=>{

current+=increment;

if(current<target){

counter.innerText=Math.floor(current);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

});

},

{

threshold:.4

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================================
Smooth Scroll
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

window.scrollTo({

top:target.offsetTop-80,

behavior:"smooth"

});

}

});

});

/*=========================================================
Mobile Menu Auto Close
=========================================================*/

const navLinks=document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse=document.querySelector(".navbar-collapse");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(navbarCollapse.classList.contains("show")){

new bootstrap.Collapse(navbarCollapse).hide();

}

});

});

/*=========================================================
Reveal Animation
=========================================================*/

const revealItems=document.querySelectorAll(

".feature-card,.solution-card,.industry-card,.project-card,.blog-card"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

revealObserver.unobserve(entry.target);

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*=========================================================
Hero Parallax
=========================================================*/

const hero=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

if(!hero) return;

const y=window.scrollY*0.15;

hero.style.transform=`translateY(${y}px)`;

});

/*=========================================================
Binary Background Animation
=========================================================*/

const binary=document.querySelector(".binary-background");

window.addEventListener("scroll",()=>{

if(!binary) return;

const offset=window.pageYOffset*0.08;

binary.style.backgroundPosition=`center ${offset}px`;

});

/*=========================================================
Scroll To Top Button
=========================================================*/

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fas fa-arrow-up"></i>';

topButton.className="scroll-top";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="30px";
topButton.style.bottom="30px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#0b5ed7";
topButton.style.color="#fff";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="999";
topButton.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";
topButton.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================================
Hover Glow Effect
=========================================================*/

document.querySelectorAll(".solution-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,

rgba(0,183,255,.18),

#10253f 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#10253f";

});

});

/*=========================================================
Contact Form Validation
=========================================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const fields=form.querySelectorAll("input, textarea");

let valid=true;

fields.forEach(field=>{

if(field.value.trim()===""){

field.style.borderColor="#ff4d4f";

valid=false;

}else{

field.style.borderColor="#2ec7ff";

}

});

if(valid){

alert(

"Thank you for contacting Cyber Solutions. We have received your message."

);

form.reset();

}

});

}

/*=========================================================
Current Year (Optional)
=========================================================*/

document.querySelectorAll(".year").forEach(el=>{

el.textContent=new Date().getFullYear();

});

console.log(

"%cCyber Solutions Website Loaded",

"color:#00b7ff;font-size:16px;font-weight:bold"

);
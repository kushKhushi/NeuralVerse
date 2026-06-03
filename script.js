
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}
document.getElementById('contactForm').addEventListener('submit',e=>{
e.preventDefault();
document.getElementById('success').innerText='Transmission successful.';
e.target.reset();
});
document.querySelectorAll('[data-target]').forEach(el=>{
let t=+el.dataset.target,c=0;
let i=setInterval(()=>{
c+=Math.ceil(t/40);
if(c>=t){c=t;clearInterval(i);}
el.textContent=c;
},40);
});

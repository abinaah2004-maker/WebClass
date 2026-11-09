(() => {
'use strict';
const root=document.documentElement;
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
root.classList.add('js');
const menuButton=document.getElementById('menuButton');
const nav=document.getElementById('mainNav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu'});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu'}));
const progress=document.getElementById('progress');
const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...nav.querySelectorAll('a[href^="#"]')];
let scrollPending=false;
function updateScroll(){
 const max=root.scrollHeight-window.innerHeight;
 progress.style.width=(max>0?window.scrollY/max*100:0)+'%';
 root.style.setProperty('--hero-shift',(motionPreference.matches?0:Math.min(window.scrollY*.035,24))+'px');
 let active='home';sections.forEach(section=>{if(section.getBoundingClientRect().top<=150)active=section.id});
 navLinks.forEach(link=>{if(link.hash==='#'+active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')});
 scrollPending=false;
}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateScroll)}},{passive:true});
window.addEventListener('resize',updateScroll);updateScroll();
const filterButtons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.project[data-category]')],filterStatus=document.getElementById('filterStatus');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;filterButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 let count=0;cards.forEach(card=>{const visible=filter==='all'||card.dataset.category===filter;card.hidden=!visible;if(visible){card.classList.add('visible');count++}});
 filterStatus.textContent='Showing '+(filter==='all'?'all':filter==='interactive'?'interactive':'API & data')+' '+count+' projects';
}));
const skillData={
web:{eyebrow:'FOUNDATIONS / 01',title:'Building clear, responsive interfaces.',description:'I use HTML to structure content and CSS to create layouts that adapt to different screens. I am learning to make each page easier to navigate and understand.',chips:['HTML5','CSS3','Responsive design','Accessibility']},
javascript:{eyebrow:'PROGRAMMING / 02',title:'Making pages respond to people.',description:'I practise JavaScript through forms, event handling, filtering, browser storage and API requests. These ideas power the small applications in this portfolio.',chips:['JavaScript','DOM events','Local storage','Fetch API']},
workflow:{eyebrow:'PROCESS / 03',title:'Learning a reliable development workflow.',description:'I use Git and GitHub to track changes, organize coursework and publish projects. I also practise testing pages with keyboard navigation and browser tools.',chips:['Git','GitHub','GitHub Pages','Browser testing']}
};
const skillButtons=[...document.querySelectorAll('[data-skill]')];
skillButtons.forEach(button=>button.addEventListener('click',()=>{
 const item=skillData[button.dataset.skill];skillButtons.forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
 const panel=document.getElementById('skillPanel');
 if(!motionPreference.matches&&panel.animate)panel.animate([{opacity:.35,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:320,easing:'ease-out'});
 document.getElementById('skillEyebrow').textContent=item.eyebrow;document.getElementById('skillTitle').textContent=item.title;document.getElementById('skillDescription').textContent=item.description;
 document.getElementById('skillChips').replaceChildren(...item.chips.map(label=>{const span=document.createElement('span');span.textContent=label;return span}));
}));
const revealItems=[...document.querySelectorAll('.reveal, .section-head')];
if('IntersectionObserver'in window&&!motionPreference.matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('visible',entry.isIntersecting)),{threshold:.1});
 revealItems.forEach(item=>observer.observe(item));
}else revealItems.forEach(item=>item.classList.add('visible'));
const tilt=document.querySelector('[data-tilt]'),finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
if(tilt){
 tilt.addEventListener('pointermove',event=>{if(motionPreference.matches||!finePointer.matches)return;const b=tilt.getBoundingClientRect(),x=(event.clientX-b.left)/b.width-.5,y=(event.clientY-b.top)/b.height-.5;tilt.style.setProperty('--tilt-y',(x*7)+'deg');tilt.style.setProperty('--tilt-x',(y*-7)+'deg')});
 const reset=()=>{tilt.style.setProperty('--tilt-x','0deg');tilt.style.setProperty('--tilt-y','0deg')};
 tilt.addEventListener('pointerleave',reset);motionPreference.addEventListener('change',()=>{if(motionPreference.matches)reset()});
}
})();
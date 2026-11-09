
const menuButton=document.getElementById('menuButton');
const nav=document.getElementById('mainNav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'Close':'Menu'});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu'}));
const progress=document.getElementById('progress');
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}
addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const filterButtons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.project[data-category]')],filterStatus=document.getElementById('filterStatus');
filterButtons.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;filterButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;cards.forEach(card=>{const visible=filter==='all'||card.dataset.category===filter;card.hidden=!visible;if(visible)count++});filterStatus.textContent='Showing '+(filter==='all'?'all':filter==='interactive'?'interactive':'API & data')+' '+count+' projects'}));
const skillData={
web:{eyebrow:'FOUNDATIONS / 01',title:'Building clear, responsive interfaces.',description:'I use HTML to structure content and CSS to create layouts that adapt to different screens. I am learning to make each page easier to navigate and understand.',chips:['HTML5','CSS3','Responsive design','Accessibility']},
javascript:{eyebrow:'PROGRAMMING / 02',title:'Making pages respond to people.',description:'I practise JavaScript through forms, event handling, filtering, browser storage and API requests. These ideas power the small applications in this portfolio.',chips:['JavaScript','DOM events','Local storage','Fetch API']},
workflow:{eyebrow:'PROCESS / 03',title:'Learning a reliable development workflow.',description:'I use Git and GitHub to track changes, organize coursework and publish projects. I also practise testing pages with keyboard navigation and browser tools.',chips:['Git','GitHub','GitHub Pages','Browser testing']}
};
const skillButtons=[...document.querySelectorAll('[data-skill]')];
skillButtons.forEach(button=>button.addEventListener('click',()=>{const item=skillData[button.dataset.skill];skillButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.getElementById('skillEyebrow').textContent=item.eyebrow;document.getElementById('skillTitle').textContent=item.title;document.getElementById('skillDescription').textContent=item.description;const chips=document.getElementById('skillChips');chips.replaceChildren(...item.chips.map(label=>{const span=document.createElement('span');span.textContent=label;return span}))}));
const revealItems=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});revealItems.forEach(item=>observer.observe(item))}else revealItems.forEach(item=>item.classList.add('visible'));

const stage = Number(document.body.dataset.stage || 1);
const stages = [
["Semantic HTML","The page now uses meaningful header, navigation, main, section, article and footer landmarks. The skip link and heading order help people move around the page.","<header> · <nav> · <main> · <section> · <article> · <footer>"],
["Buttons and descriptive links","Clickable-looking divs are replaced by real buttons and useful links. Search and movie details work with mouse and keyboard.","<button type=\"button\" aria-expanded=\"false\">View Details</button>"],
["Image alternatives","Informative images receive meaningful alt text. Decorative artwork uses an empty alt attribute so screen readers can skip it.","<img src=\"movie.jpg\" alt=\"Description of the image\">"],
["Color contrast","Text and controls now use stronger foreground/background contrast, including metadata, featured text and footer links.","color: #555; /* on a light background */"],
["Form labels and errors","Inputs receive visible labels. Error text is connected with aria-describedby, invalid fields are announced and focus moves to the first error.","<input required aria-describedby=\"email-error\"><p id=\"email-error\"></p>"],
["Image loading and layout stability","Images now include intrinsic width and height to reserve space. Content visible immediately loads eagerly; lower content can load lazily.","<img width=\"400\" height=\"500\" loading=\"lazy\" decoding=\"async\">"],
["Deferred scripts","The finished page keeps JavaScript in an external file and loads it with defer at the end of body. The browser parses the HTML before executing the script; interactions still work.","<!-- At the end of body -->\n<script src=\"lab.js\" defer></script>"]
];
const info=stages[stage-1];
document.getElementById("stage-title").textContent="Step "+stage+" · "+info[0];
document.getElementById("stage-description").textContent=info[1];
document.getElementById("stage-count").textContent=String(stage).padStart(2,"0")+" / 07";
document.getElementById("stage-code").textContent=info[2];
document.querySelectorAll(".lab-progress a").forEach(a=>{if(a.getAttribute("href")==="step"+stage+".html")a.setAttribute("aria-current","page")});
document.querySelectorAll("img").forEach((img,index)=>{
 if(stage<3){img.alt="";} else if(index===3){img.alt="";} else if(!img.alt){img.alt=["Movie artwork for Echoes of Tomorrow","Movie artwork for The Last Harbor","Movie artwork for Crimson Horizon"][index]||"Movie artwork";}
 if(stage<6){img.removeAttribute("width");img.removeAttribute("height");img.removeAttribute("loading");img.removeAttribute("decoding");}
 else {img.width=index===3?300:400;img.height=index===3?400:500;img.decoding="async";img.loading=index===3||index===2?"lazy":"eager";}
});
document.querySelectorAll("[data-details]").forEach(button=>button.addEventListener("click",()=>{const panel=document.getElementById(button.dataset.details);const open=button.getAttribute("aria-expanded")!=="true";button.setAttribute("aria-expanded",String(open));panel.hidden=!open;}));
const search=document.getElementById("search-form");if(search)search.addEventListener("submit",event=>{event.preventDefault();const q=document.getElementById("movie-search").value.toLowerCase().trim();let count=0;document.querySelectorAll(".movie-card").forEach(card=>{const match=card.querySelector("h3").textContent.toLowerCase().includes(q);card.hidden=!match;if(match)count++});document.getElementById("search-status").textContent=count+" movie(s) found.";});
const form=document.getElementById("newsletter-form");if(form)form.addEventListener("submit",event=>{event.preventDefault();const name=document.getElementById("name"),email=document.getElementById("email");const errors=[["name",name,name.value.trim()?"":"Please enter your name."],["email",email,!email.value.trim()?"Please enter your email address.":email.validity.valid?"":"Enter a valid email address."]];let first=null;errors.forEach(([id,input,message])=>{document.getElementById(id+"-error").textContent=stage>=5?message:"";input.setAttribute("aria-invalid",String(Boolean(message)));if(message&&!first)first=input});document.getElementById("form-status").textContent=first?"Please correct the highlighted fields.":"Form validated. This classroom demo does not send or store your information.";if(first)first.focus();});

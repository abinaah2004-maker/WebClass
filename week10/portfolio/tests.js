(() => {
  const frame=document.getElementById("portfolio-test-frame");
  const status=document.getElementById("portfolio-check-status");
  const list=document.getElementById("portfolio-check-results");
  let attempts=0,readyTimer;
  const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  function report(results){
    list.replaceChildren();
    for(const result of results){
      const item=document.createElement("li");
      const state=document.createElement("span");
      state.className=result.passed?"pass":"fail";
      state.textContent=result.passed?"PASS":"FAIL";
      const label=document.createElement("span");
      label.textContent=result.label+(result.detail?" — "+result.detail:"");
      item.append(state,label);list.append(item);
    }
    const passed=results.filter(result=>result.passed).length;
    status.textContent=passed+" of "+results.length+" checks passed.";
    status.style.color=passed===results.length?"var(--accent)":"#ff827c";
  }
  async function run(){
    const win=frame.contentWindow,doc=win&&win.document,checks=win&&win.PortfolioGalleryChecks;
    if(!checks||!doc||!doc.querySelector(".portfolio-project-deck")){
      attempts++;
      if(attempts>80){status.textContent="The React gallery did not become ready. Check the CDN connection and reload.";status.style.color="#ff827c";return;}
      clearTimeout(readyTimer);readyTimer=setTimeout(run,250);return;
    }
    const results=[];
    const test=(label,fn)=>{try{results.push({label,passed:Boolean(fn())});}catch(error){results.push({label,passed:false,detail:error.message});}};
    const pause=()=>wait(40);
    test("Portfolio data contains five distinct projects",()=>checks.projects.length===5&&new Set(checks.projects.map(p=>p.id)).size===5);
    test("Every project has a live destination and source link",()=>checks.projects.every(p=>p.demoUrl&&p.githubUrl));
    test("Modular React components and project data load",()=>Boolean(win.PortfolioProjectData&&win.PortfolioReactComponents&&win.PortfolioReactComponents.PortfolioProjectCard&&win.PortfolioGalleryUtils));
    test("React category returns the Week 11 component project",()=>{const items=checks.filterProjects(checks.projects,"React");return items.length===1&&items[0].id==="react-components";});
    test("Open Library technology filter returns Book Search",()=>{const items=checks.filterProjects(checks.projects,"Open Library");return items.length===1&&items[0].id==="book-search";});
    test("All category preserves every project",()=>checks.filterProjects(checks.projects,"All").length===5);
    test("Gallery initially renders five cards and one active card",()=>doc.querySelectorAll(".portfolio-react-card").length===5&&doc.querySelectorAll('.portfolio-react-card[data-slot="0"]').length===1);
    const filterButtons=[...doc.querySelectorAll(".portfolio-react-filters button")];
    filterButtons.find(button=>button.textContent.trim()==="React")?.click();await pause();
    test("React technology filter updates the rendered carousel",()=>doc.querySelectorAll(".portfolio-react-card").length===1&&doc.querySelector(".portfolio-react-card h3")?.textContent==="React Components & Props");
    filterButtons.find(button=>button.textContent.trim()==="All projects")?.click();await pause();
    test("All projects restores the five-card carousel",()=>doc.querySelectorAll(".portfolio-react-card").length===5);
    const deck=doc.querySelector(".portfolio-project-deck");
    const next=doc.querySelector('[aria-label="Next project"]');
    next?.click();await pause();
    test("Next button selects the next project",()=>doc.querySelector('.portfolio-react-card[data-slot="0"] h3')?.textContent==="Study Planner");
    deck?.dispatchEvent(new win.KeyboardEvent("keydown",{key:"ArrowLeft",bubbles:true}));await pause();
    test("Keyboard ArrowLeft returns to the previous project",()=>doc.querySelector('.portfolio-react-card[data-slot="0"] h3')?.textContent==="Expense Tracker");
    doc.querySelector('.portfolio-react-card[data-slot="0"] button')?.click();await pause();
    const dialog=doc.querySelector(".portfolio-project-dialog");
    test("Details button opens the native project dialog",()=>Boolean(dialog&&dialog.open&&dialog.querySelector("h2")?.textContent==="Expense Tracker"));
    dialog?.querySelector("button")?.click();await pause();
    test("Close button dismisses the project dialog",()=>Boolean(dialog&&!dialog.open));
    report(results);
  }
  frame.addEventListener("load",()=>{clearTimeout(readyTimer);attempts=0;run();});
  run();
})();
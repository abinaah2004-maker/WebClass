(() => {
  const frame=document.getElementById("monday-test-frame");
  const status=document.getElementById("monday-test-status");
  const list=document.getElementById("monday-test-results");
  const rerun=document.getElementById("monday-test-rerun");
  let tries=0,timer;
  function report(results){
    list.replaceChildren();
    results.forEach(result=>{
      const item=document.createElement("li"),badge=document.createElement("span"),label=document.createElement("span");
      badge.className=result.pass?"pass":"fail";badge.textContent=result.pass?"PASS":"FAIL";
      label.textContent=result.name+(result.detail?" — "+result.detail:"");
      item.append(badge,label);list.append(item);
    });
    const passed=results.filter(x=>x.pass).length;
    status.textContent=passed+" of "+results.length+" checks passed.";
    status.className=passed===results.length?"pass":"fail";
  }
  function run(){
    const win=frame.contentWindow,doc=frame.contentDocument;
    if(!win?.Week11MondayData||!win?.Week11MondayComponents||!doc?.querySelector(".sidebar .navbtn")){
      tries++;
      if(tries>80){status.textContent="React did not finish loading. Check the CDN connection and reload.";status.className="fail";return;}
      clearTimeout(timer);timer=setTimeout(run,250);return;
    }
    const results=[];
    const check=(name,fn)=>{try{results.push({name,pass:Boolean(fn())})}catch(error){results.push({name,pass:false,detail:error.message})}};
    check("Lesson questions are stored in the data module",()=>win.Week11MondayData.questions.length===3);
    check("StudentCard and KnowledgeQuestion are exported components",()=>typeof win.Week11MondayComponents.StudentCard==="function"&&typeof win.Week11MondayComponents.KnowledgeQuestion==="function");
    const nav=[...doc.querySelectorAll(".sidebar .navbtn")];
    nav.find(x=>x.textContent.includes("StudentCard lab"))?.click();
    check("StudentCard displays Abinash's own student ID",()=>doc.querySelector(".student-card")?.textContent.includes("202637724"));
    const nameInput=doc.querySelector(".form-card input");
    if(nameInput){const setter=Object.getOwnPropertyDescriptor(win.HTMLInputElement.prototype,"value").set;setter.call(nameInput,"Abinash Test");nameInput.dispatchEvent(new win.Event("input",{bubbles:true}));}
    check("StudentCard lab has editable component props",()=>Boolean(doc.querySelector(".form-card input")&&doc.querySelector(".preview-card .student-card")?.textContent.includes("Abinash Test")));
    nav.find(x=>x.textContent.includes("Knowledge check"))?.click();
    const first=doc.querySelector('input[name="question-0"][value="0"]');
    first?.click();
    doc.querySelector(".actions .primary")?.click();
    check("Knowledge check shows answer feedback and a practice score",()=>Boolean(doc.querySelector(".feedback.good")&&doc.querySelector(".score")?.textContent.includes("1 / 3")));
    report(results);
  }
  frame.addEventListener("load",()=>{tries=0;clearTimeout(timer);run();});
  rerun.addEventListener("click",()=>{tries=0;run();});
  run();
})();

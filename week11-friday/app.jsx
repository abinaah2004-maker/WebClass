(function () {
 const h=React.createElement, useState=React.useState;
 const products=[
  {id:1,name:"Wireless Earbuds",price:89000,rating:4.5,inStock:true},
  {id:2,name:"Compact Keyboard",price:69000,rating:4.2,inStock:false},
  {id:3,name:"USB-C Hub",price:35000,rating:4.0,inStock:true},
  {id:4,name:"Wireless Mouse",price:29000,rating:4.6,inStock:true},
  {id:5,name:"Laptop Stand",price:39000,rating:4.4,inStock:true},
  {id:6,name:"Portable SSD 1TB",price:119000,rating:4.8,inStock:false}
 ];
 const courses=[
  {id:1,title:"Web Programming",instructor:"Computer Engineering",credits:3,required:true},
  {id:2,title:"Database Systems",instructor:"Computer Engineering",credits:3,required:true},
  {id:3,title:"Mobile App Development",instructor:"Sample course team",credits:2,required:false},
  {id:4,title:"Operating Systems",instructor:"Computer Engineering",credits:3,required:true},
  {id:5,title:"Artificial Intelligence",instructor:"Sample course team",credits:2,required:false},
  {id:6,title:"Discrete Mathematics",instructor:"Mathematics department",credits:3,required:true},
  {id:7,title:"College English",instructor:"Language department",credits:1,required:false}
 ];
 const projects=[
  {id:"memory",title:"Memory Match",description:"A memory game with timed challenges, hints and a two-player mode.",tech:["JavaScript","CSS"],mark:"01 / PLAY",source:"https://github.com/abinaah2004-maker/WebClass/tree/main/teamproject",demo:"../teamproject/index.html"},
  {id:"book",title:"BookFinder",description:"Search books and explore results using the Open Library API.",tech:["JavaScript","API","CSS"],mark:"02 / DISCOVER",source:"https://github.com/abinaah2004-maker/WebClass/tree/main/bookfinder",demo:"../bookfinder/index.html"},
  {id:"korean",title:"Learn Korean With Me",description:"A practical Korean study project with lessons, chapters and speaking practice.",tech:["JavaScript","HTML","CSS"],mark:"03 / LEARN",source:"https://github.com/abinaah2004-maker/WebClass/tree/main/korean-learning",demo:"../korean-learning/index.html"}
 ];
 const students=[
  {name:"Abinash Lamichhane",studentId:"",major:"Computer Engineering",year:"Year 1",gpa:""},
  {name:"Sample Student A",studentId:"DEMO-001",major:"Computer Engineering",year:"Year 1",gpa:"Sample"},
  {name:"Sample Student B",studentId:"DEMO-002",major:"Computer Engineering",year:"Year 1",gpa:"Sample"}
 ];
 function ProductCard(p){return h("article",{className:"catalog-card"},
  h("p",{className:"eyebrow"},"PRODUCT / "+String(p.id).padStart(2,"0")),
  h("h3",null,p.name),h("p",{className:"price"},"₩"+p.price.toLocaleString("ko-KR")),
  h("p",{className:"rating"},"★ "+p.rating.toFixed(1)+" / 5"),
  h("span",{className:"badge "+(p.inStock?"available":"unavailable")},p.inStock?"In stock":"Out of stock"));}
 function CourseCard(c){return h("article",{className:"catalog-card"},
  h("span",{className:"badge "+(c.required?"required":"elective")},c.required?"Required":"Elective"),
  h("h3",null,c.title),h("p",{className:"muted"},c.instructor),
  h("p",null,h("strong",null,c.credits),c.credits===1?" credit":" credits"));}
 function ProfileCard(props){return h("article",{className:"profile-card"},
  h("img",{className:"profile-avatar",src:props.avatarUrl||"./avatar.svg",alt:props.name+" avatar",width:64,height:64}),
  h("h3",null,props.name),h("p",null,props.role),h("a",{href:"mailto:"+props.email},props.email));}
 const notifications=[
  {id:"one",type:"success",message:"Profile updated successfully"},
  {id:"two",type:"warning",message:"Password expires in 3 days"},
  {id:"three",type:"info",message:"New learning resources are available"}
 ];
 function NotificationItem(n){const icon=n.type==="success"?"✓":n.type==="warning"?"!":"i";return h("li",{className:"notice notice-"+n.type,key:n.id},h("span",{className:"notice-icon","aria-hidden":"true"},icon),h("span",null,h("strong",null,n.type+" · "),n.message));}
 function Card(props){return h("section",{className:"content-card"},h("h3",null,props.title),props.children);}
 function StudentProfileCard(s){return h("article",{className:"student-profile"},
  h("div",{className:"profile-top"},h("div",{className:"avatar"},s.name.split(" ").map(x=>x[0]).slice(0,2).join("")),h("div",null,h("h3",null,s.name),h("p",{className:"muted"},s.studentId||"Student ID not entered"))),
  h("dl",null,h("div",null,h("dt",null,"Major"),h("dd",null,s.major)),h("div",null,h("dt",null,"Year"),h("dd",null,s.year)),h("div",null,h("dt",null,"GPA"),h("dd",null,s.gpa||"Not entered"))));}
 function ProjectCard(p){return h("article",{className:"project-card"},
  h("div",{className:"project-visual"},h("span",null,p.mark),h("b",null,p.id==="memory"?"MM":p.id==="book"?"BF":"한글")),
  h("div",{className:"project-body"},h("h3",null,p.title),h("p",null,p.description),
   h("ul",{className:"tags"},p.tech.map(t=>h("li",{key:t},t))),
   h("div",{className:"links"},h("a",{href:p.source,target:"_blank",rel:"noreferrer"},"Source ↗"),h("a",{href:p.demo},"Live demo ↗"))));}
 function Greeting(props){return h("p",{className:"greeting"},"Hello, "+props.name+"!");}
 function Alert(props){if(!props.message)return null;return h("p",{className:"alert alert-"+props.type},(props.type==="warning"?"Warning: ":"Update: ")+props.message);}
 function GradeCard(props){const pass=Number(props.score)>=60;return h("article",{className:"grade-card"},h("h3",null,props.name),h("p",null,"Practice score: "+props.score),h("span",{className:"badge "+(pass?"available":"unavailable")},pass?"Pass":"Fail"));}
 function App(){
  const [tab,setTab]=useState("product"),[filter,setFilter]=useState("All"),[profileName,setProfileName]=useState("Abinash Lamichhane"),[role,setRole]=useState("Computer Engineering student"),[email,setEmail]=useState("avi@example.com"),[directory,setDirectory]=useState(students),[scores,setScores]=useState([88,45]),[showAlert,setShowAlert]=useState(true);
  const sections=[["product","01 · ProductCard"],["courses","02 · Course Catalog"],["practice","03 · Defaults, lists & children"],["directory","04 · Student Directory"],["gallery","05 · Portfolio Gallery"],["examples","06 · Component Lab"]];
  const shownCourses=courses.filter(c=>filter==="All"||(filter==="Required"?c.required:!c.required));
  const techs=["All","JavaScript","CSS","API","HTML"];
  function updateStudent(field,value){setDirectory(directory.map((s,i)=>i===0?Object.assign({},s,{[field]:value}):s));}
  return h("div",{className:"shell"},
   h("header",{className:"topbar"},h("a",{className:"brand",href:"../index.html"},"AVI / WEB PROGRAMMING"),
    h("nav",{className:"toplinks","aria-label":"Week navigation"},h("a",{href:"../week11-monday/index.html"},"Monday"),h("a",{href:"../index.html"},"Course home"))),
   h("section",{className:"hero"},h("p",{className:"eyebrow"},"WEEK 11 · FRIDAY / REACT COMPONENTS"),
    h("h1",null,"Build with components."),
    h("p",null,"Six practical exercises: pass props, render arrays, use defaults, compose children and filter a project gallery."),
    h("div",{className:"meta"},h("span",{className:"pill"},"Abinash Lamichhane"),h("span",{className:"pill"},"Gachon University"),h("span",{className:"pill"},"6 exercise sections"))),
   h("div",{className:"layout"},
    h("nav",{className:"sidebar","aria-label":"Friday exercises"},sections.map(s=>h("button",{key:s[0],className:"navbtn "+(tab===s[0]?"active":""),onClick:()=>setTab(s[0])},s[1]))),
    h("main",{id:"main",className:"content",tabIndex:"-1"},
     tab==="product"&&h("section",{className:"panel"},h("p",{className:"eyebrow"},"EXERCISE 01 / REUSABLE PROPS"),h("h2",null,"ProductCard"),
      h("p",null,"One component receives name, price, rating and inStock. The same component displays each product with a different set of props."),
      h("div",{className:"catalog-grid"},products.map(p=>h(ProductCard,Object.assign({key:p.id},p)))),
      h("div",{className:"callout"},h("strong",null,"Notice: "),"price is formatted as Korean won, and inStock controls which status badge appears.")),
     tab==="courses"&&h("section",{className:"panel"},h("p",{className:"eyebrow"},"EXERCISE 02 / .MAP() + CONDITIONAL BADGES"),h("h2",null,"Course Catalog"),
      h("p",null,"The courses array is rendered with .map(). Each item has a stable id used as its React key."),
      h("div",{className:"filters","aria-label":"Filter courses"},["All","Required","Elective"].map(f=>h("button",{key:f,className:filter===f?"filter active":"filter",onClick:()=>setFilter(f),"aria-pressed":filter===f},f))),
      h("p",{className:"muted","aria-live":"polite"},shownCourses.length+" courses shown · "+shownCourses.reduce((n,c)=>n+c.credits,0)+" credits in this view"),
      h("div",{className:"catalog-grid"},shownCourses.map(c=>h(CourseCard,Object.assign({key:c.id},c)))),
      h("p",{className:"small-note"},"Course names are practice examples. Required/elective badges are not an official Gachon course classification.")),
     tab==="practice"&&h("section",{className:"panel"},h("p",{className:"eyebrow"},"EXERCISE 03 / DEFAULT PROPS · LISTS · CHILDREN"),h("h2",null,"Three small patterns"),
      h("div",{className:"practice-grid"},
       h("article",{className:"exercise"},h("p",{className:"exercise-number"},"03A / DEFAULT PROPS"),h("h3",null,"ProfileCard"),h("p",null,"The avatarUrl prop has a default value. Leave it out to use the fallback image."),
        h("label",null,"Name",h("input",{value:profileName,onChange:e=>setProfileName(e.target.value)})),
        h("label",null,"Role",h("input",{value:role,onChange:e=>setRole(e.target.value)})),
        h("label",null,"Email",h("input",{value:email,onChange:e=>setEmail(e.target.value)})),
        h(ProfileCard,{name:profileName||"Student",role:role,email:email||"no-email@example.com"})),
       h("article",{className:"exercise"},h("p",{className:"exercise-number"},"03B / LISTS + KEYS"),h("h3",null,"NotificationList"),h("p",null,"The array is mapped to NotificationItem components. Each notification has a stable id key."),
        h("ul",{className:"notifications"},notifications.map(n=>h(NotificationItem,Object.assign({key:n.id},n))))),
       h("article",{className:"exercise wide"},h("p",{className:"exercise-number"},"03C / CHILDREN"),h("h3",null,"Card composition"),h("p",null,"Card receives a title prop and renders whatever is placed between its opening and closing tags."),
        h("div",{className:"grid"},h(Card,{title:"What I am learning"},h("ul",null,h("li",null,"Reusable components"),h("li",null,"Props and defaults"),h("li",null,"Rendering arrays"))),h(Card,{title:"My next step"},h("p",null,"Use these patterns in a larger page and keep each component focused on one job.")))))),
     tab==="directory"&&h("section",{className:"panel"},h("p",{className:"eyebrow"},"EXERCISE 04 / TASK 11-A"),h("h2",null,"Student Directory"),
      h("p",null,"Exactly three profile cards share the same StudentProfileCard component and five props: name, studentId, major, year and gpa."),
      h("div",{className:"edit-profile"},h("h3",null,"Edit your own card"),
       h("div",{className:"form-grid"},
        h("label",null,"Name",h("input",{value:directory[0].name,onChange:e=>updateStudent("name",e.target.value)})),
        h("label",null,"Student ID",h("input",{value:directory[0].studentId,onChange:e=>updateStudent("studentId",e.target.value),placeholder:"Enter your ID"})),
        h("label",null,"Major",h("input",{value:directory[0].major,onChange:e=>updateStudent("major",e.target.value)})),
        h("label",null,"Year",h("select",{value:directory[0].year,onChange:e=>updateStudent("year",e.target.value)},["Year 1","Year 2","Year 3","Year 4"].map(y=>h("option",{key:y},y)))),
        h("label",null,"GPA",h("input",{value:directory[0].gpa,onChange:e=>updateStudent("gpa",e.target.value),placeholder:"Enter only if required"})))),
      h("div",{className:"directory-grid"},directory.map((s,i)=>h(StudentProfileCard,Object.assign({key:i},s)))),
      h("p",{className:"small-note"},"The two additional profiles are clearly marked sample data. Your ID and GPA are left blank for you to enter only if your professor requires them.")),
     tab==="gallery"&&h("section",{className:"panel"},h("p",{className:"eyebrow"},"EXERCISE 05 / PROJECTCARD · PROJECTLIST · FILTERBAR"),h("h2",null,"Portfolio Gallery"),
      h("p",null,"Filter your own coursework projects by technology. Each project card includes its source repository and live page."),
      h("div",{className:"filters","aria-label":"Filter projects by technology"},techs.map(t=>h("button",{key:t,className:filter===t?"filter active":"filter",onClick:()=>setFilter(t),"aria-pressed":filter===t},t))),
      h("p",{className:"muted","aria-live":"polite"},projects.filter(p=>filter==="All"||p.tech.includes(filter)).length+" projects shown"),
      h("div",{className:"project-grid"},projects.filter(p=>filter==="All"||p.tech.includes(filter)).map(p=>h(ProjectCard,Object.assign({key:p.id},p))))),
     tab==="examples"&&h("section",{className:"panel"},h("p",{className:"eyebrow"},"EXERCISE 06 / COMPONENT LAB"),h("h2",null,"Four React patterns"),
      h("div",{className:"practice-grid"},
       h("article",{className:"exercise"},h("p",{className:"exercise-number"},"06A / PROPS"),h("h3",null,"Greeting component"),h("p",null,"Same component, different names."),h(Greeting,{name:"Abinash"}),h(Greeting,{name:"A new classmate"})),
       h("article",{className:"exercise"},h("p",{className:"exercise-number"},"06B / LIST + KEY"),h("h3",null,"StudentList"),h("ul",null,["Abinash Lamichhane","Sample Student A","Sample Student B"].map((n,i)=>h("li",{key:"student-"+i},n)))),
       h("article",{className:"exercise"},h("p",{className:"exercise-number"},"06C / CONDITIONAL RENDERING"),h("h3",null,"Alert"),h("label",{className:"checkline"},h("input",{type:"checkbox",checked:showAlert,onChange:e=>setShowAlert(e.target.checked)})," Show the alert"),showAlert?h(Alert,{type:"warning",message:"Remember to save your work before leaving."}):h("p",{className:"muted"},"The alert returns null and is not rendered.")),
       h("article",{className:"exercise"},h("p",{className:"exercise-number"},"06D / GRADEBOARD"),h("h3",null,"Change the practice scores"),h("p",null,"A score of 60 or higher displays Pass. Lower scores display Fail."),
        scores.map((score,i)=>h("div",{className:"score-row",key:i},h("label",null,(i===0?"Learner A":"Learner B")+" · "+score+"%",h("input",{type:"range",min:0,max:100,value:score,onChange:e=>setScores(scores.map((v,j)=>i===j?Number(e.target.value):v))})),h("span",{className:"badge "+(score>=60?"available":"unavailable")},score>=60?"Pass":"Fail"))))
      ))
    )
   ),
   h("footer",{className:"footer"},h("span",null,"Week 11 Friday · Abinash Lamichhane"),h("a",{href:"../week11-monday/index.html"},"← Back to Monday"),h("a",{href:"https://github.com/abinaah2004-maker/WebClass/tree/main/week11-friday",target:"_blank",rel:"noreferrer"},"View source on GitHub ↗"))
  );
 }
 ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
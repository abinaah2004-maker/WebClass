const {useState}=React;
const {products,courses,projects,initialStudents,notices,classStudents}=window.Week11Data;
const {ProductCard,CourseCard,StudentProfileCard,ProjectCard,ProjectList,FilterBar,StudentList,Greeting,UserCard,Button,Alert,Dashboard,GradeCard}=window.Week11Components;
// These small functions keep data changes separate from the JSX.
function formatKrw(value) {
  const amount = Number(value) || 0;
  return "₩" + amount.toLocaleString("ko-KR");
}

function isPassing(score) {
  return Number(score) >= 60;
}

function filterProjects(items, technology) {
  if (technology === "All") return items;
  return items.filter((project) => project.tech.includes(technology));
}

function searchProjects(items, query) {
  const term = String(query || "").trim().toLowerCase();
  if (!term) return items;

  return items.filter((project) => {
    const details = [
      project.title,
      project.description,
      project.category,
      ...project.tech
    ].join(" ").toLowerCase();

    return details.includes(term);
  });
}

function getFeaturedProjects(items, featuredOnly) {
  return featuredOnly ? items.filter((project) => project.featured) : items;
}

function getStockProducts(items, stockOnly) {
  return stockOnly ? items.filter((product) => product.inStock) : items;
}

function filterNotifications(items, view) {
  return view === "Unread" ? items.filter((item) => !item.read) : items;
}

function countUnread(items) {
  return items.filter((item) => !item.read).length;
}

function toggleNotification(items, id) {
  return items.map((item) =>
    item.id === id ? { ...item, read: !item.read } : item
  );
}

function dismissNotification(items, id) {
  return items.filter((item) => item.id !== id);
}

function markAllNotificationsRead(items) {
  return items.map((item) => ({ ...item, read: true }));
}
window.Week11Checks={formatKrw,isPassing,filterProjects,searchProjects,getFeaturedProjects,getStockProducts,filterNotifications,countUnread,toggleNotification,dismissNotification,markAllNotificationsRead};
function ProfileCard({
  name = "Abinash Lamichhane",
  role = "Computer Engineering student",
  email = "Abinaah2004@gmail.com",
  avatarUrl = "./avatar.svg",
  showInitials = false
}) {
  const initials = String(name || "Student")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="profile-card">
      {showInitials ? (
        <div className="profile-initials" aria-hidden="true">{initials}</div>
      ) : (
        <img
          className="profile-avatar"
          src={avatarUrl}
          alt=""
          width="64"
          height="64"
        />
      )}
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={"mailto:" + email}>{email}</a>
    </article>
  );
}
function NotificationItem({type,message,read=false,onToggle,onDismiss}){return <li className={"notice notice-"+type+(read?" is-read":"")}><span className="notice-icon" aria-hidden="true">{type==="success"?"✓":type==="warning"?"!":"i"}</span><div className="notice-copy"><span><strong>{type} · {read?"Read":"Unread"}</strong></span><p>{message}</p><div className="notice-actions"><button type="button" className="notice-action" onClick={onToggle} aria-label={(read?"Mark unread: ":"Mark read: ")+message}>{read?"Mark unread":"Mark read"}</button><button type="button" className="notice-action" onClick={onDismiss} aria-label={"Dismiss: "+message}>Dismiss</button></div></div></li>}
function Card({title,children}){return <section className="content-card"><h3>{title}</h3>{children}</section>}
function ProjectDetails({project,triggerRef,onClose}){const dialogRef=React.useRef(null);React.useEffect(()=>{const dialog=dialogRef.current;if(project&&dialog&&!dialog.open){dialog.showModal();dialog.querySelector("button")?.focus();}if(!project&&dialog&&dialog.open)dialog.close();},[project]);return <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-dialog-title" onClose={()=>{if(project){onClose();if(triggerRef.current)triggerRef.current.focus();}}} onClick={event=>{if(event.target===event.currentTarget)dialogRef.current.close();}}><div className="dialog-top"><p className="eyebrow">PROJECT DETAILS / {project?.category||"PORTFOLIO"}</p><button type="button" className="dialog-close" onClick={()=>dialogRef.current.close()}>Close ×</button></div>{project&&<><h2 id="project-dialog-title">{project.title}</h2><p>{project.description}</p><h3>What this project includes</h3><ul className="feature-list">{project.features.map(feature=><li key={feature}>{feature}</li>)}</ul><h3>Technologies</h3><ul className="tags">{project.tech.map(tech=><li key={tech}>{tech}</li>)}</ul><div className="dialog-actions">{project.demo&&<a className="dialog-primary" href={project.demo}>Open live project ↗</a>}{project.source&&<a href={project.source} target="_blank" rel="noreferrer">View source ↗</a>}</div></>}</dialog>}
function ComposedPage(){return <div className="composed-page"><header className="mini-header">My sample page</header><Card title="Student information"><p>Abinash is learning React component composition.</p><p>Card receives inner content through the children prop.</p></Card><footer className="mini-footer">Footer · End of composed page</footer></div>}
function App(){
const [tab,setTab]=useState(()=>{const key=window.location.hash.slice(1)||document.body.dataset.initialTab||"foundations";return ["foundations","product","courses","practice","directory","gallery","examples","summary"].includes(key)?key:"foundations"}),[courseFilter,setCourseFilter]=useState("All"),[stockOnly,setStockOnly]=useState(false),[projectFilter,setProjectFilter]=useState("All"),[projectSearch,setProjectSearch]=useState(""),[featuredOnly,setFeaturedOnly]=useState(false),[selectedProject,setSelectedProject]=useState(null),[profileName,setProfileName]=useState("Abinash Lamichhane"),[role,setRole]=useState("Computer Engineering student"),[email,setEmail]=useState("Abinaah2004@gmail.com"),[profileInitials,setProfileInitials]=useState(false),[notificationItems,setNotificationItems]=useState(()=>notices.map((notice,index)=>({...notice,read:index===2}))),[notificationView,setNotificationView]=useState("All"),[notificationSequence,setNotificationSequence]=useState(1),[directory,setDirectory]=useState(initialStudents),[scores,setScores]=useState([{id:"learner-a",name:"Learner A",value:88},{id:"learner-b",name:"Learner B",value:45}]),[showAlert,setShowAlert]=useState(true),[loggedIn,setLoggedIn]=useState(true),[counter,setCounter]=useState(3),[buttonMessage,setButtonMessage]=useState("Press a button to see its event.");
const detailTrigger=React.useRef(null);
const sections=[["foundations","React foundations"],["product","ProductCard"],["courses","Course Catalog"],["practice","Defaults, lists & children"],["directory","Student Directory"],["gallery","Portfolio Gallery"],["examples","Component Lab"],["summary","Takeaways & resources"]];
const shownCourses=courses.filter(c=>courseFilter==="All"||(courseFilter==="Required"?c.required:!c.required)),shownProducts=getStockProducts(products,stockOnly),technologies=["All","React","JavaScript","CSS","API","HTML"],shownProjects=getFeaturedProjects(searchProjects(filterProjects(projects,projectFilter),projectSearch),featuredOnly);const visibleNotices=filterNotifications(notificationItems,notificationView);const unreadNoticeCount=countUnread(notificationItems);
const editStudent=(field,value)=>setDirectory(old=>old.map((s,i)=>i===0?{...s,[field]:value}:s));
const updateScore=(id,value)=>setScores(old=>old.map(s=>s.id===id?{...s,value:Number(value)}:s));
return <div className="shell"><header className="topbar"><a className="brand" href="../index.html">ABINASH / WEB PROGRAMMING</a><nav className="toplinks"><a href="../week11-monday/index.html">Monday</a><a href="../index.html">Course home</a></nav></header>
<section className="hero"><p className="eyebrow">WEEK 11 · FRIDAY / REACT COMPONENTS & PROPS</p><h1>Reusable ideas,<br/><span>different results.</span></h1><p>React components, JSX, props, composition, lists and conditional rendering — practised through my own coursework examples.</p><div className="meta"><span className="pill">Abinash Lamichhane</span><span className="pill">202637724</span><span className="pill">Gachon University</span><span className="pill">8 lesson sections</span></div></section>
<div className="layout"><nav className="sidebar" aria-label="Friday lesson navigation">{sections.map(([key,label],i)=><button key={key} className={tab===key?"navbtn active":"navbtn"} aria-current={tab===key?"page":undefined} onClick={()=>{setSelectedProject(null);setTab(key);window.history.replaceState(null,"","#"+key);}}><span>{String(i+1).padStart(2,"0")}</span>{label}</button>)}</nav>
<main id="main" className="content" tabIndex="-1">
{tab==="foundations"&&<section className="panel"><p className="eyebrow">LESSON / PAGES 3–7</p><h2>React components, JSX and props</h2><p>A React component is a JavaScript function that returns UI. Component names start with a capital letter; lowercase names such as div are built-in HTML elements. React updates the screen when state or props change, and a component may return null when it should render nothing.</p><div className="practice-grid"><article className="exercise"><p className="exercise-number">PAGE 5 / GREETING</p><h3>One component, three uses</h3><p>The same reusable component can display different content through props. Its default name is World.</p><Greeting/><Greeting/><Greeting/></article><article className="exercise"><p className="exercise-number">PAGE 6 / JSX RULES</p><h3>JSX is not HTML</h3><div className="jsx-example"><label htmlFor="jsx-name">Your name</label><input id="jsx-name" defaultValue="Abinash"/><p className="muted">className replaces class; htmlFor replaces for; use curly braces for JavaScript expressions; close every tag and self-close elements such as img.</p><p>Hello, {"Abinash"}!</p></div><pre className="code-sample">{"const element = <h1 className=\"title\">Hello</h1>;\n// JSX is compiled to React.createElement(...)."}</pre></article><article className="exercise"><p className="exercise-number">PAGE 7 / USER CARD</p><h3>UserCard example</h3><UserCard name="Abinash Lamichhane" role="Computer Engineering Student"/></article><article className="exercise"><p className="exercise-number">PAGE 4 / PROPS FLOW</p><h3>One-way data flow</h3><p>Parent components pass props down to children. Props are read-only: a child should not change the props it receives. Use state in the component that owns changing data.</p><div className="callout">A capitalized component is used like an HTML tag, for example <code>&lt;Greeting name="Abinash" /&gt;</code>.</div></article></div></section>}
{tab==="product"&&<section className="panel"><p className="eyebrow">EXERCISE 01 / REUSABLE PROPS</p><h2>ProductCard</h2><p>One component receives product name, price, rating, category and stock status. Each card is created from the same component.</p><label className="toggle-line"><input type="checkbox" checked={stockOnly} onChange={e=>setStockOnly(e.target.checked)}/> Show in-stock products only</label><p className="muted" aria-live="polite">{shownProducts.length} products shown</p><div className="catalog-grid">{shownProducts.map(p=><ProductCard key={p.id} {...p}/>)}</div><div className="callout"><strong>Try it:</strong> Toggle the filter and compare the conditional stock badges.</div></section>}
{tab==="courses"&&<section className="panel"><p className="eyebrow">EXERCISE 02 / ARRAY RENDERING + BADGES</p><h2>Course Catalog</h2><p>The courses array is rendered with map(). Each item uses its id as a stable React key.</p><div className="filters">{["All","Required","Elective"].map(f=><button key={f} className={courseFilter===f?"filter active":"filter"} aria-pressed={courseFilter===f} onClick={()=>setCourseFilter(f)}>{f}</button>)}</div><p className="muted" aria-live="polite">{shownCourses.length} courses · {shownCourses.reduce((n,c)=>n+c.credits,0)} credits in this view</p><div className="catalog-grid">{shownCourses.map(c=><CourseCard key={c.id} {...c}/>)}</div><p className="small-note">These are practice examples, not an official Gachon course classification.</p></section>}
{tab==="practice"&&<section className="panel"><p className="eyebrow">EXERCISE 03 / DEFAULT PROPS · LISTS · CHILDREN</p><h2>Three component patterns</h2><div className="practice-grid"><article className="exercise"><p className="exercise-number">03A / DEFAULT PROPS</p><h3>ProfileCard</h3><p>Change the props and watch the reusable profile update. Switch between the default avatar and an initials avatar, then reset the example.</p><label>Name<input value={profileName} onChange={e=>setProfileName(e.target.value)}/></label><label>Role<input value={role} onChange={e=>setRole(e.target.value)}/></label><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label className="toggle-line"><input type="checkbox" checked={profileInitials} onChange={e=>setProfileInitials(e.target.checked)}/> Use initials avatar</label><div className="button-row"><Button label="Reset profile" size="sm" onClick={()=>{setProfileName("Abinash Lamichhane");setRole("Computer Engineering student");setEmail("Abinaah2004@gmail.com");setProfileInitials(false);}}/></div><ProfileCard name={profileName||"Student"} role={role} email={email||"Abinaah2004@gmail.com"} showInitials={profileInitials}/></article><article className="exercise"><p className="exercise-number">03B / LISTS + KEYS + STATE</p><h3>Interactive notification inbox</h3><p>Each notification is rendered by NotificationItem with a stable id key. Filter unread messages, mark them read, dismiss them, or add a sample reminder.</p><p className="muted" role="status" aria-live="polite">{unreadNoticeCount} unread / {notificationItems.length} demo notifications</p><div className="notice-toolbar"><div className="filters" role="group" aria-label="Notification filter">{["All","Unread"].map(view=><button type="button" key={view} className={notificationView===view?"filter active":"filter"} aria-pressed={notificationView===view} onClick={()=>setNotificationView(view)}>{view}</button>)}</div><Button label="Mark all read" size="sm" disabled={unreadNoticeCount===0} onClick={()=>setNotificationItems(items=>markAllNotificationsRead(items))}/></div>{visibleNotices.length?<ul className="notifications">{visibleNotices.map(n=><NotificationItem key={n.id} {...n} onToggle={()=>setNotificationItems(items=>toggleNotification(items,n.id))} onDismiss={()=>setNotificationItems(items=>dismissNotification(items,n.id))}/>)}</ul>:<p className="empty-state" role="status">No notifications in this view. Try All or add a sample reminder.</p>}<div className="notice-toolbar notice-bottom"><Button label="Add demo reminder" size="sm" onClick={()=>{const id="notice-added-"+notificationSequence;setNotificationSequence(value=>value+1);setNotificationItems(items=>[...items,{id,type:"info",message:"Demo reminder "+notificationSequence+": test one React component.",read:false}]);setNotificationView("All");}}/><Button label="Clear inbox" size="sm" disabled={notificationItems.length===0} onClick={()=>setNotificationItems([])}/><Button label="Reset demo" size="sm" onClick={()=>{setNotificationItems(notices.map((notice,index)=>({...notice,read:index===2})));setNotificationView("All");}}/></div></article><article className="exercise wide"><p className="exercise-number">03C / CHILDREN + COMPOSITION</p><h3>Card composition</h3><p>Card receives a title prop and renders content placed between its tags through props.children.</p><div className="composition-grid"><Card title="What I am learning"><ul><li>Reusable components</li><li>Props and defaults</li><li>Rendering arrays</li></ul></Card><Card title="My next step"><p>Use these patterns in a larger page and keep each component focused.</p></Card></div><h3 className="subheading">Header + Page + Card + Footer</h3><ComposedPage/></article><article className="exercise"><p className="exercise-number">PAGE 11 / BUTTON DEFAULT PROPS</p><h3>Button defaults</h3><p>Try the default label and a custom label/size. A click handler is passed as a prop.</p><div className="button-row"><Button onClick={()=>setButtonMessage("The default Click me button was pressed.")}/><Button label="Save" size="lg" onClick={()=>setButtonMessage("The Save button was pressed.")}/></div><p className="small-note" aria-live="polite">{buttonMessage}</p><p className="small-note">PropTypes can check prop types at runtime. TypeScript interfaces can check component prop shapes during development and compilation.</p><pre className="code-sample">{"import PropTypes from \"prop-types\";\nButton.propTypes = { label: PropTypes.string, size: PropTypes.string };\ninterface ButtonProps { label?: string; size?: string; }"}</pre></article></div></section>}
{tab==="directory"&&<section className="panel"><p className="eyebrow">EXERCISE 04 / TASK 11-A</p><h2>Student Directory</h2><p>Three cards share one StudentProfileCard component and five props: name, studentId, major, year and gpa. Each card uses a stable student ID as its key.</p><div className="edit-profile"><h3>Edit my profile card</h3><div className="form-grid"><label>Name<input value={directory[0].name} onChange={e=>editStudent("name",e.target.value)}/></label><label>Student ID<input value={directory[0].studentId} onChange={e=>editStudent("studentId",e.target.value)}/></label><label>Major<input value={directory[0].major} onChange={e=>editStudent("major",e.target.value)}/></label><label>Year<select value={directory[0].year} onChange={e=>editStudent("year",e.target.value)}>{["Year 1","Year 2","Year 3","Year 4"].map(y=><option key={y}>{y}</option>)}</select></label><label>GPA<input value={directory[0].gpa} onChange={e=>editStudent("gpa",e.target.value)} placeholder="Enter if required"/></label></div></div><div className="directory-grid">{directory.map(s=><StudentProfileCard key={s.id} {...s}/>)}</div><p className="small-note">The other two entries are clearly labelled sample profiles. GPA remains blank until I enter my own value.</p></section>}
{tab==="gallery"&&<section className="panel"><p className="eyebrow">EXERCISE 05 / REACT PROJECT SHOWCASE</p><h2>Portfolio Gallery</h2><p>This gallery uses reusable React components: ProjectCard displays each project, ProjectList renders the data, and FilterBar controls the technology filter. Search, featured-only mode and the detail dialog are driven by React state.</p><div className="gallery-toolbar"><label className="gallery-search">Search projects<input type="search" value={projectSearch} onChange={e=>setProjectSearch(e.target.value)} placeholder="Try React, API, Korean…" aria-label="Search projects by name, description or technology"/></label><label className="featured-toggle"><input type="checkbox" checked={featuredOnly} onChange={e=>setFeaturedOnly(e.target.checked)}/> Featured projects only</label></div><FilterBar technologies={technologies} selectedTechnology={projectFilter} onTechnologyChange={setProjectFilter}/><div className="gallery-result-line"><p className="muted" aria-live="polite">{shownProjects.length} of {projects.length} projects shown</p><button type="button" className="clear-filters" onClick={()=>{setProjectSearch("");setProjectFilter("All");setFeaturedOnly(false);}}>Clear filters</button></div><ProjectList projects={shownProjects} onDetails={(project,trigger)=>{detailTrigger.current=trigger;setSelectedProject(project);}}/><ProjectDetails project={selectedProject} triggerRef={detailTrigger} onClose={()=>setSelectedProject(null)}/><p className="small-note">Try searching for a project, filtering by React or API, and opening Details. All four projects are your coursework or personal learning work.</p></section>}
{tab==="examples"&&<section className="panel"><p className="eyebrow">EXERCISE 06 / COMPONENT LAB</p><h2>Lists and conditional rendering</h2><div className="practice-grid"><article className="exercise"><p className="exercise-number">06A / STUDENT LIST</p><h3>StudentList with grades</h3><p>map() creates one list item per student, and each item uses its stable id.</p><StudentList students={classStudents}/></article><article className="exercise"><p className="exercise-number">06B / ALERT + NULL</p><h3>Alert component</h3><label className="toggle-line"><input type="checkbox" checked={showAlert} onChange={e=>setShowAlert(e.target.checked)}/> Show the alert</label>{showAlert?<Alert type="error" message="Please check the required field."/>:<p className="muted">The component returns null and renders nothing.</p>}<Alert type="success" message="Your work has been saved."/></article><article className="exercise"><p className="exercise-number">06C / DASHBOARD + &&</p><h3>Logged-in and logged-out views</h3><label className="toggle-line"><input type="checkbox" checked={loggedIn} onChange={e=>setLoggedIn(e.target.checked)}/> User is logged in</label><Dashboard user={loggedIn?{name:"Abinash"}:null}/><p className="small-note">The first condition uses user && ...; the second uses !user && ... .</p></article><article className="exercise"><p className="exercise-number">06D / TERNARY + GRADEBOARD</p><h3>Change practice scores</h3><p>60 or higher displays Pass; lower scores display Fail.</p>{scores.map(s=><div className="score-row" key={s.id}><label>{s.name} · {s.value}%<input type="range" min="0" max="100" value={s.value} onChange={e=>updateScore(s.id,e.target.value)}/></label><GradeCard name={s.name} score={s.value}/></div>)}</article></div></section>}
{tab==="summary"&&<section className="panel"><p className="eyebrow">LESSON / PAGES 18–22</p><h2>Best practices, takeaways & next session</h2><div className="practice-grid"><article className="exercise"><p className="exercise-number">COMPONENT BEST PRACTICES</p><h3>Keep components focused</h3><ul><li>One component should have one responsibility.</li><li>Keep components small and split them when they become difficult to understand.</li><li>Choose clear names such as ProductCard, not Comp1.</li><li>In larger projects, keep components in separate files.</li><li>Use a default export for a main component and named exports for shared helpers when appropriate.</li></ul><pre className="code-sample">{"export default function ProductCard() {}\nexport function formatPrice(value) { return value.toLocaleString(); }"}</pre></article><article className="exercise"><p className="exercise-number">KEY TAKEAWAYS</p><h3>Remember these rules</h3><ul><li>Props are read-only and flow from parent to child.</li><li>Use a unique, stable key for every mapped list item — not the array index.</li><li>Use a ternary, &&, or return null for conditional rendering.</li><li>Compose a page from small reusable components.</li><li>Use children to place content inside a reusable wrapper.</li></ul></article><article className="exercise"><p className="exercise-number">NEXT SESSION / REACT STATE</p><h3>useState counter</h3><p>The next lesson introduces state. The initial count is 3; clicking +1 updates state and React re-renders the value.</p><div className="counter-demo"><strong>{counter}</strong><Button label="+1" onClick={()=>setCounter(v=>v+1)}/><Button label="Reset to 3" size="sm" onClick={()=>setCounter(3)}/></div></article><article className="exercise"><p className="exercise-number">LEARNING RESOURCES</p><h3>Continue practising</h3><ul className="resource-list"><li><a href="https://react.dev/" target="_blank" rel="noreferrer">React official documentation</a></li><li><a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noreferrer">Scrimba — Learn React</a></li><li><a href="https://codesandbox.io/" target="_blank" rel="noreferrer">CodeSandbox — run React in a browser</a></li><li><a href="https://www.youtube.com/results?search_query=Fireship+React+in+100+Seconds" target="_blank" rel="noreferrer">Fireship — React in 100 Seconds (YouTube search)</a></li></ul><p className="small-note">Course-specific class notes, quizzes and study guides should be opened from the professor's course platform.</p></article></div></section>}
</main></div><footer className="footer"><span>Week 11 Friday · Abinash Lamichhane</span><a href="../week11-monday/index.html">← Back to Monday</a><a href="https://github.com/abinaah2004-maker/WebClass/tree/main/week11-friday" target="_blank" rel="noreferrer">View my source ↗</a></footer></div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
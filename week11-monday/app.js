(function () {
  const h = React.createElement;
  const useState = React.useState;
  const questions = [
    { q: "What is React?", options: ["A JavaScript library for building user interfaces", "A database", "A CSS property"], answer: 0, why: "React helps us build interfaces from reusable components." },
    { q: "What does JSX let us write?", options: ["SQL inside CSS", "HTML-like markup inside JavaScript", "Only plain text"], answer: 1, why: "JSX is a syntax extension that looks similar to HTML and is used in React components." },
    { q: "How does a parent pass data to a child component?", options: ["Props", "A CSS class", "A file name"], answer: 0, why: "Props are inputs passed from a parent component to a child component." }
  ];
  function StudentCard(props) {
    return h("article", { className: "student-card" },
      h("div", { className: "avatar" }, props.name.split(" ").map(function (part) { return part[0]; }).slice(0,2).join("")),
      h("div", null, h("p", { className: "tag" }, "STUDENT COMPONENT"), h("h3", null, props.name),
        h("p", null, "Student ID: " + (props.id || "Add your ID")),
        h("p", null, "Major: " + props.major))
    );
  }
  function App() {
    const [tab, setTab] = useState("overview");
    const [name, setName] = useState("Abinash Lamichhane");
    const [id, setId] = useState("");
    const [major, setMajor] = useState("Computer Engineering");
    const [answers, setAnswers] = useState({});
    const [checked, setChecked] = useState(false);
    const nav = [["overview","Overview"],["concepts","Components & JSX"],["student","StudentCard lab"],["quiz","Concept checks"]];
    return h("div", { className: "shell" },
      h("header", { className: "topbar" }, h("a", { className: "brand", href: "../index.html" }, "AVI / WEB PROGRAMMING"),
        h("div", { className: "toplinks" }, h("a", { href: "../index.html" }, "Course home"), h("a", { href: "../week11-friday/index.html" }, "Friday exercises →"))),
      h("section", { className: "hero" }, h("p", { className: "tag" }, "WEEK 11 · MONDAY / REACT FOUNDATIONS"),
        h("h1", null, "React foundations."),
        h("p", null, "Components, JSX and props — learned through small examples and hands-on practice."),
        h("div", { className: "meta" }, h("span", { className: "pill" }, "Gachon University"), h("span", { className: "pill" }, "Computer Engineering"), h("span", { className: "pill" }, "2 exercises"))),
      h("div", { className: "layout" },
        h("nav", { className: "sidebar", "aria-label": "Monday lesson sections" }, nav.map(function (item) {
          return h("button", { key: item[0], className: "navbtn " + (tab === item[0] ? "active" : ""), onClick: function () { setTab(item[0]); } }, item[1]);
        })),
        h("main", { id: "main", className: "content", tabIndex: "-1" },
          tab === "overview" && h("section", { className: "panel" }, h("p", { className: "tag" }, "START HERE"),
            h("h2", null, "What is React?"),
            h("p", null, "React is a JavaScript library for building user interfaces. A page can be split into small components, then reused wherever the same structure is needed."),
            h("div", { className: "grid" },
              h("article", { className: "card" }, h("h3", null, "Components"), h("p", null, "Reusable parts of a user interface. Example: a profile card or navigation bar.")),
              h("article", { className: "card" }, h("h3", null, "JSX"), h("p", null, "HTML-like syntax written inside JavaScript to describe what the page should show.")),
              h("article", { className: "card" }, h("h3", null, "Props"), h("p", null, "Values passed from a parent component to a child component."))),
            h("h3", null, "A tiny component"), h("pre", { className: "code" }, "function Welcome() {\n  return <h1>Hello, React!</h1>;\n}"),
            h("p", { className: "muted" }, "Open the sections on the left to try the ideas yourself.")),
          tab === "concepts" && h("section", { className: "panel" }, h("p", { className: "tag" }, "EXERCISE 01 / COMPONENTS + JSX"),
            h("h2", null, "A component is a function"),
            h("p", null, "A function component starts with a capital letter and returns JSX. Keep one parent element around multiple elements."),
            h("pre", { className: "code" }, "function Greeting(props) {\n  return <h2>Hello, {props.name}!</h2>;\n}\n\n<Greeting name=\"Avi\" />"),
            h("div", { className: "callout" }, h("strong", null, "Remember: "), "Component names begin with a capital letter. JSX expressions use curly braces."),
            h("h3", null, "Try to explain it"), h("p", null, "The parent writes <Greeting name=\"Avi\" />. The child receives the name value through props and displays it.")),
          tab === "student" && h("section", { className: "panel" }, h("p", { className: "tag" }, "EXERCISE 02 / STUDENTCARD"),
            h("h2", null, "Change the props"),
            h("p", null, "Edit the values. The same StudentCard component updates when its props change."),
            h("div", { className: "grid" },
              h("div", { className: "card form-card" },
                h("label", null, "Student name", h("input", { value: name, onChange: function (e) { setName(e.target.value); } })),
                h("label", null, "Student ID (optional)", h("input", { value: id, onChange: function (e) { setId(e.target.value); }, placeholder: "Enter your ID when needed" })),
                h("label", null, "Major", h("input", { value: major, onChange: function (e) { setMajor(e.target.value); } })),
                h("pre", { className: "code" }, "<StudentCard\n  name={name}\n  id={id}\n  major={major}\n/>")),
              h(StudentCard, { name: name || "Student", id: id, major: major || "Major not entered" })),
            h("p", { className: "muted" }, "This example uses three props: name, id and major.")),
          tab === "quiz" && h("section", { className: "panel" }, h("p", { className: "tag" }, "CHECK YOUR UNDERSTANDING"),
            h("h2", null, "Three concept checks"),
            questions.map(function (q, index) {
              return h("fieldset", { className: "quiz-card", key: index }, h("legend", null, (index + 1) + ". " + q.q),
                q.options.map(function (option, optionIndex) {
                  return h("label", { className: "option", key: optionIndex },
                    h("input", { type: "radio", name: "q" + index, checked: answers[index] === optionIndex, onChange: function () { setAnswers(Object.assign({}, answers, (function(){const a={};a[index]=optionIndex;return a;})())); setChecked(false); } }), option);
                }),
                checked && h("p", { className: answers[index] === q.answer ? "feedback good" : "feedback retry" }, (answers[index] === q.answer ? "Correct. " : "Not quite. ") + q.why));
            }),
            h("div", { className: "actions" }, h("button", { className: "primary", onClick: function () { setChecked(true); } }, "Check answers"),
              h("button", { className: "secondary", onClick: function () { setAnswers({}); setChecked(false); } }, "Reset")),
            checked && h("h3", { role: "status" }, "Practice score: " + questions.filter(function (q, i) { return answers[i] === q.answer; }).length + " / 3"),
            h("p", { className: "muted" }, "Practice feedback only — not an official grade or attendance record.")))
      ),
      h("footer", { className: "footer" }, h("span", null, "Week 11 Monday · Abinash Lamichhane"),
        h("a", { href: "../week11-friday/index.html" }, "Continue to Week 11 Friday →"))
    );
  }
  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
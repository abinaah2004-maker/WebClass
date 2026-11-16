/* Reusable components for the Week 11 Friday exercises. */

(function () {
  const h = React.createElement;

  function ProductCard({
    name = "Unnamed product",
    price = 0,
    rating = 0,
    inStock = false,
    category = "General"
  }) {
    const formattedPrice = Number(price).toLocaleString("ko-KR");

    return h(
      "article",
      { className: "catalog-card" },
      h("p", { className: "eyebrow" }, category),
      h("h3", null, name),
      h("p", { className: "price" }, "₩" + formattedPrice),
      h("p", { className: "rating" }, "★ " + rating + " / 5 stars"),
      h(
        "span",
        { className: inStock ? "badge available" : "badge unavailable" },
        inStock ? "In stock" : "Out of stock"
      )
    );
  }

  function CourseCard({ title, instructor, credits, required }) {
    return h(
      "article",
      { className: "catalog-card" },
      h(
        "span",
        { className: required ? "badge required" : "badge elective" },
        required ? "Required" : "Elective"
      ),
      h("h3", null, title),
      h("p", { className: "muted" }, instructor),
      h(
        "p",
        null,
        credits,
        " ",
        credits === 1 ? "credit" : "credits"
      )
    );
  }

  function StudentProfileCard({ name, studentId, major, year, gpa }) {
    const initials = String(name || "Student")
      .trim()
      .split(/\s+/)
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return h(
      "article",
      { className: "student-profile" },
      h(
        "div",
        { className: "profile-top" },
        h("div", { className: "avatar" }, initials),
        h(
          "div",
          null,
          h("h3", null, name),
          h("p", { className: "muted" }, studentId || "Student ID not entered")
        )
      ),
      h(
        "dl",
        null,
        h("div", null, h("dt", null, "Major"), h("dd", null, major)),
        h("div", null, h("dt", null, "Year"), h("dd", null, year)),
        h("div", null, h("dt", null, "GPA"), h("dd", null, gpa || "Not entered"))
      )
    );
  }

  function ProjectCard({
    id,
    title,
    category,
    featured,
    description,
    tech,
    features,
    source,
    demo,
    onDetails
  }) {
    const project = {
      id,
      title,
      category,
      featured,
      description,
      tech,
      features,
      source,
      demo
    };

    const projectMarks = {
      memory: "MM",
      book: "BF",
      korean: "한글"
    };

    return h(
      "article",
      { className: "project-card" },
      h(
        "div",
        { className: "project-visual project-visual-" + id },
        h(
          "div",
          { className: "project-visual-top" },
          h("span", null, category),
          featured && h("span", { className: "featured-label" }, "FEATURED")
        ),
        h("b", { "aria-hidden": "true" }, projectMarks[id] || "< />"),
        h("span", { className: "project-visual-index" }, "PROJECT / " + id.toUpperCase())
      ),
      h(
        "div",
        { className: "project-body" },
        h(
          "div",
          { className: "project-heading" },
          h("h3", null, title),
          h("span", { className: "project-category" }, category)
        ),
        h("p", null, description),
        h(
          "ul",
          { className: "tags", "aria-label": title + " technologies" },
          tech.map((tag) => h("li", { key: tag }, tag))
        ),
        h(
          "div",
          { className: "links" },
          source &&
            h(
              "a",
              { href: source, target: "_blank", rel: "noreferrer" },
              "GitHub source ↗"
            ),
          demo && h("a", { href: demo }, "Live demo ↗"),
          h(
            "button",
            {
              type: "button",
              className: "details-button",
              onClick: (event) => onDetails(project, event.currentTarget),
              "aria-label": "View details for " + title
            },
            "Details +"
          )
        )
      )
    );
  }

  function ProjectList({ projects = [], onDetails }) {
    if (projects.length === 0) {
      return h(
        "p",
        { className: "empty-state", role: "status" },
        "No projects match your search and filters. Try another technology or clear the search."
      );
    }

    return h(
      "div",
      { className: "project-grid", "aria-label": "Portfolio projects" },
      projects.map((project) =>
        h(ProjectCard, {
          key: project.id,
          ...project,
          onDetails
        })
      )
    );
  }

  function FilterBar({
    technologies = [],
    selectedTechnology = "All",
    onTechnologyChange
  }) {
    return h(
      "div",
      {
        className: "filters",
        role: "group",
        "aria-label": "Filter projects by technology"
      },
      technologies.map((technology) =>
        h(
          "button",
          {
            key: technology,
            type: "button",
            className:
              selectedTechnology === technology ? "filter active" : "filter",
            "aria-pressed": selectedTechnology === technology,
            onClick: () => onTechnologyChange(technology)
          },
          technology
        )
      )
    );
  }

  function StudentList({ students = [] }) {
    return h(
      "ul",
      { className: "student-list" },
      students.map((student) =>
        h(
          "li",
          { key: student.id },
          student.name + " — " + student.grade
        )
      )
    );
  }

  function Greeting({ name = "World" }) {
    return h("p", { className: "greeting" }, "Hello, ", name, "!");
  }

  function UserCard({
    name = "Abinash Lamichhane",
    role = "Computer Engineering Student"
  }) {
    const initials = String(name)
      .trim()
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .toUpperCase();

    return h(
      "article",
      { className: "user-card" },
      h("div", { className: "avatar" }, initials),
      h("h3", null, name),
      h("p", { className: "muted" }, role)
    );
  }

  function Button({
    label = "Click me",
    size = "md",
    onClick = () => {},
    disabled = false
  }) {
    return h(
      "button",
      {
        type: "button",
        className: "demo-button demo-button-" + size,
        onClick,
        disabled
      },
      label
    );
  }

  function Alert({ type = "success", message }) {
    if (!message) {
      return null;
    }

    const label = type === "error" ? "ERROR:" : "OK:";

    return h(
      "p",
      { className: "alert alert-" + type },
      label,
      " ",
      message
    );
  }

  function Dashboard({ user }) {
    if (!user) {
      return h(
        "div",
        { className: "dashboard-preview" },
        h("p", null, "Please log in.")
      );
    }

    return h(
      "div",
      { className: "dashboard-preview" },
      h("p", null, "Welcome, ", user.name, "!")
    );
  }

  function GradeCard({ name, score }) {
    const passed = Number(score) >= 60;

    return h(
      "article",
      { className: "grade-card" },
      h("h3", null, name),
      h("p", null, "Practice score: ", score, "%"),
      h(
        "span",
        { className: passed ? "badge available" : "badge unavailable" },
        passed ? "Pass" : "Fail"
      )
    );
  }

  window.Week11Components = {
    ProductCard,
    CourseCard,
    StudentProfileCard,
    ProjectCard,
    ProjectList,
    FilterBar,
    StudentList,
    Greeting,
    UserCard,
    Button,
    Alert,
    Dashboard,
    GradeCard
  };
})();

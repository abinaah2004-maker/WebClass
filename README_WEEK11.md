# Week 11 — React Foundations and Components

**Student:** Abinash Lamichhane  
**Student ID:** 202637724  
**University:** Gachon University  
**Major:** Computer Engineering  
**Email:** Abinaah2004@gmail.com

## Monday — React foundations

- React overview and short examples of components, JSX and props.
- StudentCard receives name, ID and major as props.
- Editable inputs update a live StudentCard preview.
- Three concept-check questions provide explanations, a score and a reset option.

Open: [Week 11 Monday](https://abinaah2004-maker.github.io/WebClass/week11-monday/)

## Friday — React components and props

The Friday submission is a React 18 JSX application with reusable function components and interactive examples.

1. **React foundations:** components, JSX rules, props and one-way data flow.
2. **ProductCard:** product name, KRW price, rating, category and conditional stock status; includes an in-stock filter.
3. **Course Catalog:** array rendering with `.map()`, stable keys, required/elective badges and filters.
4. **Defaults, lists and children:** ProfileCard default props, notification types, Button defaults and a reusable Card that renders `props.children`.
5. **Task 11-A Student Directory:** exactly three profile cards rendered by one five-prop component; my profile can be edited live.
6. **Portfolio Gallery:** four personal/coursework projects with reusable ProjectCard, ProjectList and FilterBar components, search, technology filters, featured-only mode and project details.
7. **Component Lab:** Greeting, StudentList, conditional Alert, logged-in dashboard and interactive GradeBoard.
9. **React portfolio integration:** the Week 10 portfolio selected-work area uses reusable React project cards, filters, a keyboard/touch carousel and a project-details dialog.
8. **Takeaways and resources:** component best practices, key React rules and a `useState` counter.

Open: [React project showcase in my main portfolio](https://abinaah2004-maker.github.io/WebClass/week10/portfolio/#work) · [Week 11 Friday task hub](https://abinaah2004-maker.github.io/WebClass/week11-friday/tasks.html) · [Open the full React lesson](https://abinaah2004-maker.github.io/WebClass/week11-friday/)

## Implementation notes

- `week11-friday/app.jsx` contains the React components and `useState` interactions for filters, editable profiles, notification inbox actions, grade scores, alerts and the counter.
- `week10/portfolio/portfolio-gallery.jsx` adds reusable React project cards, a filter bar, carousel controls and a project-details dialog to the main portfolio.
- `week11-friday/tasks.html` is the Friday submission hub. Each task links directly to its matching lesson section using a URL hash.
- React 18, ReactDOM and Babel Standalone are loaded in order from public CDNs so GitHub Pages can compile and render the JSX without a local build step. An internet connection is required; a visible fallback explains if a CDN cannot load.
- The directory uses my student ID. GPA remains blank until I enter a real value. The two other entries are clearly labelled sample profiles.
- Course examples and practice scores are demonstrations, not official university records or grades.

## Source files

- Monday: `week11-monday/app.jsx`, `week11-monday/styles.css`
- Friday: `week11-friday/index.html`, `week11-friday/tasks.html`, `week11-friday/app.jsx`, `week11-friday/styles.css`

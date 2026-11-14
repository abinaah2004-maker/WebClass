# Week 11 React coursework — Abinash Lamichhane

This folder contains the Friday React exercises from Week 11. It follows the course exercise sequence while using my own coursework projects and profile.

## Exercises
1. ProductCard — name, KRW price, rating out of five, stock status, safe defaults and numeric fallback handling.
2. Course Catalog — array rendering with `.map()`, stable keys and required/elective badges.
3. Practice — ProfileCard default props, a notification list with stable keys, and Card composition using `props.children`.
4. Task 11-A Student Directory — exactly three cards using one component and five props (name, studentId, major, year, gpa). My personal ID and GPA fields are intentionally editable instead of publishing identifying details.
5. Portfolio Gallery — separate `ProjectCard`, `ProjectList` and `FilterBar` components. `ProjectCard` receives title, description, tech stack, GitHub link and demo link as props; `ProjectList` renders the filtered project array with stable keys; `FilterBar` sends the selected technology to the parent component. The gallery contains three projects.
6. Component Lab — Greeting, a reusable `StudentList` component with stable keys, conditional Alert and GradeBoard pass/fail threshold.

## React component structure

The lesson is intentionally kept as one browser-ready `app.jsx` file for GitHub Pages, but the UI is divided into focused React function components. In particular, the Portfolio Gallery now uses `FilterBar` for the technology controls, `ProjectList` for rendering the matching projects, and `ProjectCard` for each project. The filter state stays in `App` and is passed down through props; the child filter does not directly modify parent state.

## Run
The lesson uses React 18 UMD builds and standard JavaScript so it can run directly on GitHub Pages without a local build step. Open `index.html` in a browser with an internet connection. The page includes a loading fallback if the React CDN cannot be reached.

# Week 11 Friday — React Components & Props
**Student:** Abinash Lamichhane  
**Student ID:** 202637724  
**Course:** Web Programming K0126_002

This page completes the Week 11 Friday React lesson and practice using my own coursework examples. It follows the topics and exercises in the professor's React Components & Props PDF while retaining the existing ProductCard, Course Catalog, Student Directory and Portfolio Gallery work.

## Lesson and exercise coverage

| PDF topic | Where it is demonstrated |
|---|---|
| Components and reusable functions | React foundations; ProductCard, CourseCard and other components |
| Greeting and component reuse | React foundations: Greeting is rendered three times |
| JSX syntax | React foundations: className, htmlFor, curly-brace expressions, self-closing tags and JSX compilation |
| UserCard | React foundations: initials, name, role and current year |
| Props and one-way data flow | React foundations explanation and component examples |
| ProfileCard and default props | Defaults, lists & children: editable name/role/email, default or initials avatar, followers and verified flag |
| Button default props | Defaults, lists & children: default Click me / md and custom Save / lg |
| PropTypes and TypeScript | Explanation in the Button example |
| Component composition and children | Card and Header + Page + Card + Footer composition |
| Lists, map() and stable keys | Course Catalog, interactive notifications, Student Directory, StudentList and score list |
| Conditional rendering | Alert with null, ternary pass/fail, and Dashboard with && / !user && |
| ProductCard challenge | ProductCard exercise with safe defaults, price, rating and stock status |
| Portfolio homework | ProjectCard, ProjectList, FilterBar and four personal/coursework projects |
| Component best practices | Takeaways & resources |
| Key takeaways and next session | Takeaways & resources, including an interactive useState counter |
| Learning resources | React docs, Scrimba, CodeSandbox and Fireship YouTube search |

## React integration in my main portfolio

The Week 10 portfolio selected-work section now uses React components: `PortfolioProjects`, `PortfolioProjectCard`, `PortfolioProjectList`, `PortfolioFilterBar` and `PortfolioProjectDetails`. It includes technology/category filtering, a selected-project carousel with previous/next controls, keyboard arrow navigation, touch swiping and an accessible project details dialog. The five existing project descriptions and destinations are retained, and a sixth card links to the Week 11 React component lesson. Browser checks are available at `week10/portfolio/tests.html`.

## Exercises
1. ProductCard — nine products with KRW prices, ratings, categories, safe defaults and both stock states.
2. Course Catalog — array rendering, filtering and stable keys.
3. Practice — ProfileCard defaults with live editor/avatar switch; interactive notification inbox with All/Unread filters, read/dismiss, mark-all-read, add, clear and reset controls; children composition, Button defaults and prop type guidance.
4. Student Directory — three profile cards with editable personal details and stable student ID keys.
5. Portfolio Gallery — reusable ProjectCard, ProjectList and FilterBar components; four projects with technology filters, case-insensitive search, featured-only mode, live result counts and an accessible native project-details dialog. Each card links to its source and live project.
6. Component Lab — StudentList with grades, Alert, Dashboard conditional rendering and GradeBoard.
7. React foundations — Greeting, JSX rules and UserCard.
8. Takeaways & resources — component best practices, key takeaways and useState counter.

## Quality checks

Open `tests.html` from the Friday task hub to run browser checks against both shared helpers and the rendered lesson. The suite covers KRW formatting, invalid-price fallback, the 60-point pass boundary, project filtering and search, featured and stock filters, notification state helpers, Greeting and ProductCard output, course filtering, initials, unread notifications, the three-card directory, Portfolio Gallery source/demo links, conditional alerts and dashboard output, and the useState counter. These automated checks complement (but do not replace) keyboard, responsive-layout and screen-reader checks.

## Portfolio Gallery React components

The Portfolio Gallery demonstrates a component-driven project showcase: `ProjectCard` receives named props for its title, description, technology stack, GitHub source and live demo; `ProjectList` spreads each project record into a card with a stable key; and `FilterBar` controls the selected technology. React state also controls search text, featured-only mode and the selected project. The native `<dialog>` provides keyboard dismissal, a labelled title, a close control and focus restoration to the Details button.

The component responsibilities and interactive portfolio ideas were informed by the reference coursework, while the project data, wording, layout and implementation are original to this repository.

## Component organisation note
This GitHub Pages lesson uses React 18 UMD and Babel Standalone, so the live components remain in one browser-loaded `app.jsx` file rather than requiring an npm build. The component functions are separated by responsibility inside the lesson source, and shared helper logic is exposed through `window.Week11Checks` and exercised by `tests.html`. The separate Week 10 portfolio now also mounts a React project showcase with reusable cards, filters, a keyboard/touch carousel and a details dialog.

## Run
Open index.html with an internet connection and JavaScript enabled. React, ReactDOM and Babel are loaded from their CDNs. The interactive lesson runs directly on GitHub Pages without a local build step.

## Notes
- The two additional directory entries and some course examples are labelled sample data.
- GPA is left blank until I enter my own value.
- Course-specific notes, quiz links and study guides are available through the professor's course platform; no unavailable course links have been invented.

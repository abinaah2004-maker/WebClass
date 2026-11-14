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
| ProfileCard and default props | Defaults, lists & children: name, role, followers, isVerified and formatted follower count |
| Button default props | Defaults, lists & children: default Click me / md and custom Save / lg |
| PropTypes and TypeScript | Explanation in the Button example |
| Component composition and children | Card and Header + Page + Card + Footer composition |
| Lists, map() and stable keys | Course Catalog, notifications, Student Directory, StudentList and score list |
| Conditional rendering | Alert with null, ternary pass/fail, and Dashboard with && / !user && |
| ProductCard challenge | ProductCard exercise with safe defaults, price, rating and stock status |
| Portfolio homework | ProjectCard, ProjectList, FilterBar and three personal projects |
| Component best practices | Takeaways & resources |
| Key takeaways and next session | Takeaways & resources, including an interactive useState counter |
| Learning resources | React docs, Scrimba, CodeSandbox and Fireship YouTube search |

## Exercises
1. ProductCard — product name, KRW price, rating, stock status and safe defaults.
2. Course Catalog — array rendering, filtering and stable keys.
3. Practice — ProfileCard defaults, notification list, children composition, Button defaults and prop type guidance.
4. Student Directory — three profile cards with editable personal details and stable student ID keys.
5. Portfolio Gallery — ProjectCard, ProjectList and FilterBar; three projects with technology filtering.
6. Component Lab — StudentList with grades, Alert, Dashboard conditional rendering and GradeBoard.
7. React foundations — Greeting, JSX rules and UserCard.
8. Takeaways & resources — component best practices, key takeaways and useState counter.

## Component organisation note
This GitHub Pages lesson uses React 18 UMD and Babel Standalone, so its runnable examples are kept in one browser-loaded app.jsx file rather than requiring an npm build. The components themselves are separate focused functions. In a larger React application, the same components can be moved into individual files (for example, components/ProductCard.jsx and components/StudentList.jsx), with a default export for the main component and named exports for shared helpers. This keeps the live course page simple to run while teaching the scalable project structure.

## Run
Open index.html with an internet connection and JavaScript enabled. React, ReactDOM and Babel are loaded from their CDNs. The interactive lesson runs directly on GitHub Pages without a local build step.

## Notes
- The two additional directory entries and some course examples are labelled sample data.
- GPA is left blank until I enter my own value.
- Course-specific notes, quiz links and study guides are available through the professor's course platform; no unavailable course links have been invented.

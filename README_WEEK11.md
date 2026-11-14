# Week 11 — React Foundations and Components

**Student:** Abinash Lamichhane  
**University:** Gachon University  
**Major:** Computer Engineering

## Monday — React foundations

- React overview and short examples of components, JSX and props.
- StudentCard receives name, ID and major as props.
- Editable inputs update a live StudentCard preview.
- Three concept-check questions provide explanations, a score and a reset option.

Open: [Week 11 Monday](https://abinaah2004-maker.github.io/WebClass/week11-monday/)

## Friday — React components and props

1. **ProductCard:** product name, KRW price, rating, category and conditional stock status; includes an in-stock filter.
2. **Course Catalog:** array rendering with `.map()`, stable keys, required/elective badges and filters.
3. **Defaults, lists and children:** ProfileCard default avatar, notification types and a reusable Card that renders children.
4. **Task 11-A Student Directory:** exactly three profile cards rendered by one five-prop component.
5. **Portfolio Gallery:** project cards for Memory Match, BookFinder and Learn Korean With Me, with technology filters.
6. **Component Lab:** Greeting, StudentList, conditional Alert and interactive GradeBoard pass/fail threshold.

Open: [Week 11 Friday](https://abinaah2004-maker.github.io/WebClass/week11-friday/)

## Implementation notes

- The lesson source is written as JSX in `app.jsx`, with named function components and React state hooks.
- React 18 UMD and Babel Standalone are loaded from public CDNs so the JSX can run on GitHub Pages without a local build step. An internet connection is required.
- Student ID and GPA are editable but blank by default. Additional directory entries are clearly identified as sample profiles.
- Course examples and practice scores are demonstrations, not official university records or grades.

## Source files

- Monday: `week11-monday/app.jsx`, `week11-monday/styles.css`
- Friday: `week11-friday/app.jsx`, `week11-friday/styles.css`

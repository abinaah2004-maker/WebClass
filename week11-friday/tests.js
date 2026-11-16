(() => {
  const frame = document.getElementById("lesson-frame");
  const status = document.getElementById("check-status");
  const list = document.getElementById("check-results");
  const button = document.getElementById("run-again");
  let attempts = 0;
  let readyTimer;
  function report(results) {
    list.replaceChildren();
    results.forEach(({label, passed, detail}) => {
      const item = document.createElement("li");
      const state = document.createElement("span");
      state.className = passed ? "pass" : "fail";
      state.textContent = passed ? "PASS" : "FAIL";
      const message = document.createElement("span");
      message.textContent = label + (detail ? " — " + detail : "");
      item.append(state, message);
      list.append(item);
    });
    const passed = results.filter(result => result.passed).length;
    status.textContent = passed + " of " + results.length + " checks passed.";
    status.className = "check-summary " + (passed === results.length ? "pass" : "fail");
  }
  function run() {
    const checks = frame.contentWindow && frame.contentWindow.Week11Checks;
    const doc = frame.contentDocument;
    if (!checks || !doc || !doc.querySelector(".sidebar .navbtn")) {
      attempts += 1;
      if (attempts > 60) {
        status.textContent = "Could not load the React lesson. Check your internet connection, then reload this page.";
        status.className = "check-summary fail";
        return;
      }
      clearTimeout(readyTimer);
      readyTimer = setTimeout(run, 250);
      return;
    }
    const results = [];
    const test = (label, callback) => {
      try { results.push({label, passed: Boolean(callback())}); }
      catch (error) { results.push({label, passed: false, detail: error.message}); }
    };
    test("Reusable React components load from components.js", () => Boolean(frame.contentWindow.Week11Components && ["ProductCard","CourseCard","StudentProfileCard","ProjectCard","ProjectList","FilterBar","StudentList","Greeting","UserCard","Button","Alert","Dashboard","GradeCard"].every(name => typeof frame.contentWindow.Week11Components[name] === "function")));
    test("Product, course and project records load from data.js", () => frame.contentWindow.Week11Data.products.length === 9 && frame.contentWindow.Week11Data.courses.length === 7 && frame.contentWindow.Week11Data.projects.length === 4);
    test("KRW formatting uses Korean thousands separators", () => checks.formatKrw(89000) === "₩89,000");
    test("Invalid product prices safely fall back to zero", () => checks.formatKrw("not-a-price") === "₩0");
    test("Grade boundary: score 60 passes", () => checks.isPassing(60) === true);
    test("Grade boundary: score 59 fails", () => checks.isPassing(59) === false);
    test("React filter returns the React portfolio project", () => {
      const result = checks.filterProjects([
        {title:"React lesson", tech:["React","JavaScript"]},
        {title:"Book finder", tech:["API","JavaScript"]}
      ], "React");
      return result.length === 1 && result[0].title === "React lesson";
    });
    test("All filter keeps every portfolio project", () => checks.filterProjects([{tech:["CSS"]},{tech:["React"]},{tech:["API"]}], "All").length === 3);
    test("Project search is case-insensitive and searches technologies", () => {
      const result = checks.searchProjects([{title:"React lesson",description:"Components",category:"Coursework",tech:["React","JS"]},{title:"BookFinder",description:"Book search",category:"API project",tech:["API"]}], "rEaCt");
      return result.length === 1 && result[0].title === "React lesson";
    });
    test("Empty project search keeps all projects", () => checks.searchProjects([{title:"One"},{title:"Two"}], "  ").length === 2);
    test("Featured-only filter keeps featured projects", () => checks.getFeaturedProjects([{featured:true},{featured:false},{featured:true}], true).length === 2);
    test("Featured filter off keeps all projects", () => checks.getFeaturedProjects([{featured:true},{featured:false}], false).length === 2);
    test("Stock-only filter removes unavailable products", () => checks.getStockProducts([{inStock:true},{inStock:false},{inStock:true}], true).length === 2);
    test("Unread notification filter excludes read messages", () => checks.filterNotifications([{id:"a",read:false},{id:"b",read:true}],"Unread").length === 1);
    test("All notification filter preserves read and unread messages", () => checks.filterNotifications([{id:"a",read:false},{id:"b",read:true}],"All").length === 2);
    test("Unread count is calculated correctly", () => checks.countUnread([{read:false},{read:true},{read:false}]) === 2);
    test("Notification toggle changes only the matching item", () => {const result=checks.toggleNotification([{id:"a",read:false},{id:"b",read:true}],"a");return result[0].read===true&&result[1].read===true;});
    test("Dismiss removes only the selected notification", () => checks.dismissNotification([{id:"a"},{id:"b"}],"a").length===1);
    test("Mark all read updates every notification", () => checks.markAllNotificationsRead([{read:false},{read:false}]).every(item=>item.read));
    test("Unfiltered product list keeps all products", () => checks.getStockProducts([{inStock:true},{inStock:false}], false).length === 2);

    const selectTab = (label) => {
      const tab = [...doc.querySelectorAll(".sidebar .navbtn")].find(item => item.textContent.includes(label));
      if (!tab) throw new Error("Missing lesson section: " + label);
      tab.click();
    };
    test("React foundations renders Greetings and my UserCard details", () => {
      selectTab("React foundations");
      return doc.querySelectorAll(".greeting").length === 3 &&
        [...doc.querySelectorAll(".user-card")].some(card =>
          card.textContent.includes("Abinash Lamichhane") &&
          card.textContent.includes("Computer Engineering Student")
        );
    });
    test("ProductCard renders nine products and both stock states", () => {
      selectTab("ProductCard");
      const cards = [...doc.querySelectorAll(".catalog-grid .catalog-card")];
      return cards.length === 9 &&
        cards.some(card => card.textContent.includes("In stock")) &&
        cards.some(card => card.textContent.includes("Out of stock"));
    });
    test("In-stock filter updates the rendered ProductCard list", () => {
      selectTab("ProductCard");
      const checkbox = doc.querySelector(".panel .toggle-line input[type=checkbox]");
      if (!checkbox) return false;
      if (checkbox.checked) checkbox.click();
      checkbox.click();
      const filteredCount = doc.querySelectorAll(".catalog-grid .catalog-card").length;
      checkbox.click();
      return filteredCount === 6;
    });
    test("Course Catalog renders seven cards and filters required courses", () => {
      selectTab("Course Catalog");
      const grid = doc.querySelector(".catalog-grid");
      const total = grid ? grid.querySelectorAll(".catalog-card").length : 0;
      const buttons = [...doc.querySelectorAll(".filters button")];
      const required = buttons.find(item => item.textContent.trim() === "Required");
      const all = buttons.find(item => item.textContent.trim() === "All");
      if (!required || !all) return false;
      required.click();
      const filtered = grid.querySelectorAll(".catalog-card").length;
      const pressed = required.getAttribute("aria-pressed") === "true";
      all.click();
      return total === 7 && filtered === 4 && pressed;
    });
    test("Practice renders a profile, notification list and composed cards", () => {
      selectTab("Defaults, lists & children");
      return Boolean(doc.querySelector(".profile-card")) &&
        doc.querySelectorAll(".notifications li").length === 3 &&
        doc.querySelectorAll(".content-card").length >= 2;
    });
    test("Profile initials avatar uses both parts of Abinash's name", () => {
      selectTab("Defaults, lists & children");
      const label = [...doc.querySelectorAll("label")].find(item => item.textContent.includes("Use initials avatar"));
      const checkbox = label && label.querySelector("input");
      if (!checkbox) return false;
      if (checkbox.checked) checkbox.click();
      checkbox.click();
      const initials = doc.querySelector(".profile-initials")?.textContent.trim();
      checkbox.click();
      return initials === "AL";
    });
    test("Notification filter shows only unread messages", () => {
      selectTab("Defaults, lists & children");
      const group = doc.querySelector('[aria-label="Notification filter"]');
      const buttons = group ? [...group.querySelectorAll("button")] : [];
      const unread = buttons.find(item => item.textContent.trim() === "Unread");
      const all = buttons.find(item => item.textContent.trim() === "All");
      if (!unread || !all) return false;
      all.click();
      unread.click();
      const count = doc.querySelectorAll(".notifications li").length;
      all.click();
      return count === 2;
    });
    test("Button defaults render Click me and the custom Save label", () => {
      selectTab("Defaults, lists & children");
      const labels = [...doc.querySelectorAll(".exercise button")].map(item => item.textContent.trim());
      return labels.includes("Click me") && labels.includes("Save");
    });
    test("Student Directory shows exactly three cards and my student ID", () => {
      selectTab("Student Directory");
      return doc.querySelectorAll(".student-profile").length === 3 &&
        doc.body.textContent.includes("202637724");
    });
    test("Portfolio Gallery renders four cards with source and demo links", () => {
      selectTab("Portfolio Gallery");
      const cards = [...doc.querySelectorAll(".project-card")];
      return cards.length === 4 && cards.every(card =>
        card.querySelectorAll(".links a").length === 2 &&
        card.querySelector(".details-button")
      );
    });
    test("Portfolio FilterBar selects the React coursework project", () => {
      selectTab("Portfolio Gallery");
      const buttons = [...doc.querySelectorAll(".filters button")];
      const react = buttons.find(item => item.textContent.trim() === "React");
      const all = buttons.find(item => item.textContent.trim() === "All");
      if (!react || !all) return false;
      react.click();
      const count = doc.querySelectorAll(".project-card").length;
      const title = doc.querySelector(".project-card h3")?.textContent.trim();
      all.click();
      return count === 1 && title === "React Components & Props";
    });
    test("Featured-only mode shows the three featured projects", () => {
      selectTab("Portfolio Gallery");
      const label = [...doc.querySelectorAll("label")].find(item => item.textContent.includes("Featured projects only"));
      const checkbox = label && label.querySelector("input");
      if (!checkbox) return false;
      if (checkbox.checked) checkbox.click();
      checkbox.click();
      const count = doc.querySelectorAll(".project-card").length;
      checkbox.click();
      return count === 3;
    });
    test("Component Lab renders a keyed student list and pass/fail cards", () => {
      selectTab("Component Lab");
      const grades = [...doc.querySelectorAll(".grade-card .badge")].map(item => item.textContent.trim());
      return doc.querySelectorAll(".student-list li").length === 3 &&
        grades.length === 2 && grades.includes("Pass") && grades.includes("Fail") &&
        Boolean(doc.querySelector(".alert-error")) && Boolean(doc.querySelector(".alert-success"));
    });
    test("Alert and Dashboard controls switch conditional output", () => {
      selectTab("Component Lab");
      const alertLabel = [...doc.querySelectorAll("label")].find(item => item.textContent.includes("Show the alert"));
      const loginLabel = [...doc.querySelectorAll("label")].find(item => item.textContent.includes("User is logged in"));
      const alertToggle = alertLabel && alertLabel.querySelector("input");
      const loginToggle = loginLabel && loginLabel.querySelector("input");
      if (!alertToggle || !loginToggle) return false;
      if (!alertToggle.checked) alertToggle.click();
      alertToggle.click();
      const alertHidden = !doc.querySelector(".alert-error");
      alertToggle.click();
      if (!loginToggle.checked) loginToggle.click();
      loginToggle.click();
      const loggedOut = doc.body.textContent.includes("Please log in.");
      loginToggle.click();
      return alertHidden && loggedOut;
    });
    test("Takeaways counter increments and resets", () => {
      selectTab("Takeaways & resources");
      const counter = doc.querySelector(".counter-demo strong");
      const buttons = [...doc.querySelectorAll(".counter-demo button")];
      const increment = buttons.find(item => item.textContent.trim() === "+1");
      const reset = buttons.find(item => item.textContent.trim() === "Reset to 3");
      if (!counter || !increment || !reset) return false;
      reset.click();
      increment.click();
      const afterIncrement = counter.textContent.trim();
      reset.click();
      return afterIncrement === "4" && counter.textContent.trim() === "3";
    });
    report(results);
  }
  button.addEventListener("click", () => { attempts = 0; run(); });
  frame.addEventListener("load", () => { attempts = 0; run(); });
  run();
})();
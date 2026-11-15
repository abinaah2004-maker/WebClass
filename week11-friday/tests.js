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
    if (!checks) {
      attempts += 1;
      if (attempts > 60) {
        status.textContent = "Could not load the lesson helpers. Check your internet connection, then reload this page.";
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
    test("Unfiltered product list keeps all products", () => checks.getStockProducts([{inStock:true},{inStock:false}], false).length === 2);
    report(results);
  }
  button.addEventListener("click", () => { attempts = 0; run(); });
  frame.addEventListener("load", () => { attempts = 0; run(); });
  run();
})();
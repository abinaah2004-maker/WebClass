(function () {
  const $ = (id) => document.getElementById(id);
  const timeline = $('timeline');
  const dom = $('dom');
  const appStatus = $('app');
  const analyticsStatus = $('analytics');
  const domContentStatus = $('domcontent');
  if (!timeline || !dom || !appStatus || !analyticsStatus || !domContentStatus) return;

  const events = [];
  const startedAt = performance.now();

  function record(message) {
    events.push({ message, time: performance.now() - startedAt });
    timeline.replaceChildren(...events.map((event) => {
      const item = document.createElement('li');
      item.textContent = event.time.toFixed(1) + ' ms — ' + event.message;
      return item;
    }));
  }

  dom.textContent = 'Ready — HTML parsing is complete.';
  appStatus.textContent = 'Executed after HTML parsing.';
  record('deferred app script executed; DOM elements are available.');

  function showAnalytics() {
    const result = window.demoAnalyticsResult;
    if (!result) return;
    analyticsStatus.textContent = 'Executed independently at ' + result.time.toFixed(1) + ' ms.';
    record('async script executed independently.');
  }

  if (window.demoAnalyticsResult) {
    showAnalytics();
  } else {
    window.addEventListener('demo:analytics-ready', showAnalytics, { once: true });
  }

  document.addEventListener('DOMContentLoaded', () => {
    domContentStatus.textContent = 'Fired — HTML parsing is complete.';
    record('DOMContentLoaded event fired.');
  }, { once: true });

  let clicks = 0;
  $('run')?.addEventListener('click', () => {
    clicks += 1;
    $('click-status').textContent = 'The deferred app is working. Button tested ' + clicks + ' time(s).';
    record('app button clicked (' + clicks + ').');
  });

  $('clear')?.addEventListener('click', () => {
    events.length = 0;
    timeline.replaceChildren();
    record('timeline cleared; scripts are not reloaded.');
  });
})();
(function () {
  const dom = document.getElementById('dom');
  const app = document.getElementById('app');
  const analytics = document.getElementById('analytics');
  const timeline = document.getElementById('timeline');
  const runButton = document.getElementById('run');
  const clearButton = document.getElementById('clear');
  if (!dom || !app || !analytics || !timeline) return;

  dom.textContent = 'Ready — the DOM has been parsed.';
  const addEvent = (message) => {
    const item = document.createElement('div');
    item.className = 'event';
    item.textContent = new Date().toLocaleTimeString() + ' · ' + message;
    timeline.prepend(item);
  };
  const run = () => {
    app.textContent = 'Running after DOM parsing.';
    addEvent('deferred app script executed; DOM elements are available.');
    window.dispatchEvent(new CustomEvent('demo:app-ready'));
  };
  runButton.addEventListener('click', run);
  clearButton.addEventListener('click', () => { timeline.replaceChildren(); addEvent('Timeline cleared.'); });
  window.addEventListener('demo:analytics-ready', (event) => {
    analytics.textContent = 'Finished independently (' + event.detail + ').';
    addEvent('independent async task completed.');
  });
  run();
})();
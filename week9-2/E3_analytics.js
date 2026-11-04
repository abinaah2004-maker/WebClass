(function () {
  // Independent async example: no DOM access and no analytics data is sent.
  const result = { time: performance.now() };
  window.demoAnalyticsResult = result;
  window.dispatchEvent(new Event('demo:analytics-ready'));
})();
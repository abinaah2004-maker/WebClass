(function () {
  // This independent script does not read or modify the DOM and sends no data.
  const delay = 450 + Math.floor(Math.random() * 900);
  window.setTimeout(() => {
    window.dispatchEvent(new CustomEvent('demo:analytics-ready', {
      detail: delay + ' ms simulated download'
    }));
  }, delay);
})();
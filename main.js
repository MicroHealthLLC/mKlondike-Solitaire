chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('klondike.html', {
    id: "bmiCalc",
    bounds: {
      width: 600,
      height: 700
    },
    maxWidth: 600,
    minWidth: 600,
    minHeight: 700,
    maxHeight: 700,
  });
});

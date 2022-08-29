function theme(btnClick) {
    if (btnClick == "btnLight") {
        document.body.style.backgroundColor = 'white';
    } else if (btnClick == "btnDark") {
        document.body.style.backgroundColor = 'black';
    }
  };
  
  chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("https://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: theme
      });
    }
  });
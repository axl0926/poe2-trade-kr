document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    const contentElement = document.querySelector(".content");
    const messageElement = document.querySelector(".message");

    if (url.includes("https://www.pathofexile.com/trade2/")) {
        contentElement.style.display = "flex";
    } else {
        contentElement.style.display = "none";
      messageElement.innerText =
        "POE2 거래사이트에서만 사용할 수 있습니다.";
    }
  });
});

document
  .getElementById("toggleFunction")
  .addEventListener("change", (event) => {
    const isEnabled = event.target.checked;
    document.querySelector("#toggleFunction+label").innerText = isEnabled
      ? "ON"
      : "OFF";
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { enabled: isEnabled });
    });
  });

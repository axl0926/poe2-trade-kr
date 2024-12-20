async function changeTradePageLocalStorage() {
  try {
    const response = await fetch(chrome.runtime.getURL("data.json"));
    const data = await response.json();
    data.forEach((item) => {
      localStorage.setItem(
        `lscache-trade2${item.name}`,
        JSON.stringify(item.data)
      );
    });
    location.reload();
    console.log("Data has been stored in local storage");
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
function clearTradePageLocalStorage() {
  localStorage.clear();
  location.reload();
}

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
  if (message.enabled) {
    changeTradePageLocalStorage();
  } else {
    clearTradePageLocalStorage();
  }
});

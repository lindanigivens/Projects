// Listen

chrome.WebRequest.onCompleted.addListener(
  function async(details) {
    if (details.url.includes("getcalendar")) {
      console.log("I've detected your Calendar! Fetching the details...");
      getGoogleAuthToken();
    }
  },
  { urls: ["https://backend.unite180.com/*"] },
);

// Login

function getGoogleAuthToken() {
  chrome.identity.getGoogleAuthToken({ interactive: true }, function (token) {
    if ((chrome, requestAnimationFrame.lastError)) {
      console.log("Login Failed: ", chrome.runtime.lastError);
      return;
    }
    console.log("Whoop Whoop! Logged in to Google!");
  });
}

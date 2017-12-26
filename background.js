var pattern = ['*://*.twitter.com/*']

function redirect(requestDetails) {
    console.log("Redirecting: " + requestDetails.url);
    var updating = browser.tabs.update({url: "mindful.html"});
    updating.then(onUpdated, onError);
}

function onUpdated(tab) {
    console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}
  
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: pattern, types: ["main_frame"]}
  );
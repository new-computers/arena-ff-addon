// context menu
browser.contextMenus.create({
  title: "Add to Are.na",
  contexts: ["page","selection","link","editable","image","video", "audio"],
  onclick: function(options){
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        text: "open:dialog",
        options: options,
        title: tabs[0].title,
        url: tabs[0].url
      }, function(content){});
    });
  }
});

browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.sendMessage(tab.id, {
    text: "open:dialog",
    options: { srcUrl: tab.url },
    title: tab.title,
    url: tab.url
  }, function(content){});
});

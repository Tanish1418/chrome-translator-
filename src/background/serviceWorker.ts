chrome.runtime.onInstalled.addListener(() => {

  chrome.contextMenus.removeAll(() => {

    chrome.contextMenus.create({
  id: "rewrite-simple",
  title: "Rewrite Simpler",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "rewrite-professional",
  title: "Rewrite Professional",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "rewrite-academic",
  title: "Rewrite Academic",
  contexts: ["selection"]
});
    chrome.contextMenus.create({
      id: "translate-page",
      title: "Translate Page",
      contexts: ["page"]
    });

    chrome.contextMenus.create({
      id: "explain-selection",
      title: "Explain Selected Text",
      contexts: ["selection"]
    });

    console.log("MENUS CREATED");

  });

});

chrome.contextMenus.onClicked.addListener(
  async (info, tab) => {

    if (!tab?.id) return;

    if (
  info.menuItemId ===
  "rewrite-simple"
) {

  await chrome.storage.local.set({
    rewriteText:
      info.selectionText || "",
    rewriteMode:
      "simple"
  });

}

if (
  info.menuItemId ===
  "rewrite-professional"
) {

  await chrome.storage.local.set({
    rewriteText:
      info.selectionText || "",
    rewriteMode:
      "professional"
  });

}

if (
  info.menuItemId ===
  "rewrite-academic"
) {

  await chrome.storage.local.set({
    rewriteText:
      info.selectionText || "",
    rewriteMode:
      "academic"
  });

}

    if (info.menuItemId === "translate-page") {

      await chrome.tabs.sendMessage(
        tab.id,
        {
          action: "TRANSLATE_PAGE"
        }
      );

    }

    if (info.menuItemId === "explain-selection") {

      console.log(
        "SELECTED TEXT:",
        info.selectionText
      );

      await chrome.storage.local.set({
        selectedText:
          info.selectionText || ""
      });

    }

  }
);
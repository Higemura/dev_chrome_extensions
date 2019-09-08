'use strict';

chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
    let i;
    const results = document.getElementById('results');
    let titles = [];
    for (i = 0; i < tabs.length; i ++) {
        titles.push(tabs[i].title);
        console.log(tabs[i]);
    }
    results.value = titles.join("\n");
    results.select();
});
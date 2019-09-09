(function() {
    'use strict';
    const links = document.getElementsByTagName('a');
    // alert(links.length);
    chrome.runtime.sendMessage({count: links.length}),
    function() {
        console.log(`Send Message: `)
    }
})();

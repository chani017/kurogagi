document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.update({active: true, url: location});
            };
        })();
    }

document.getElementById("selectDept").addEventListener("change",function() {
    const loc = this.value;
    if (loc) {
         const varOpenNewTab = window.open(loc, '_blank');
        if (varOpenNewTab) varOpenNewTab.focus();
        }  
    })
});
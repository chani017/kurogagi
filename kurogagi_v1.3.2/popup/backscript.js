document.addEventListener('DOMContentLoaded', function () {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();
            const location = this.href;
            chrome.tabs.update({ active: true, url: location });
        });
    }

    document.getElementById("selectDept").addEventListener("change", function () {
        const loc = this.value;
        if (loc) {
            const newTab = window.open(loc, '_blank');
            if (newTab) newTab.focus();
        }
    });
});

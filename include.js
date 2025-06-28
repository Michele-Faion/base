// include.js
// Carica head.html e foot.html in tutte le pagine
window.addEventListener('DOMContentLoaded', function() {
    fetch('head.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
    fetch('foot.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

// Script per includere header e footer
function includeHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    includeHTML("header", "head.html");
    includeHTML("footer", "foot.html");
});

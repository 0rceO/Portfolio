document.querySelectorAll("#unavailable").forEach(function(element) {
    element.addEventListener("click", function() {
        alert("Currently Unavailable or Coming Soon");
    });
});

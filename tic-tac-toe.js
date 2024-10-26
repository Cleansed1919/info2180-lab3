document.addEventListener("DOMContentLoaded", function() {
    console.log("Setting div elements");
    const elements = document.getElementsByTagName("div");
    for (let i = 3; i < elements.length - 1; i++) {
        elements[i].className = "square";
    }
    console.log("Done");
})
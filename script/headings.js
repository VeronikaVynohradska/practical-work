document.addEventListener("DOMContentLoaded", function() {
    const accordionTitles = document.querySelectorAll(".accordion-title");

    accordionTitles.forEach(title => {
        title.addEventListener("click", function() {
            const content = this.nextElementSibling;

            if(content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

document.documentElement.classList.remove('no-js');
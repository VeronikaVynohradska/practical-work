document.addEventListener("DOMContentLoaded", function() {
    let tableCells = document.querySelectorAll(".travel-table td");

    tableCells.forEach(function(cell) {
        cell.addEventListener("mouseover", function() {
            this.classList.add("highlight");
        });

        cell.addEventListener("mouseout", function() {
            this.classList.remove("highlight");
        });
    });
});

document.documentElement.classList.remove('no-js');
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fondo")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }
})


const menue = document.querySelector('.menu');
if (menue) {
    const manueArrow = document.querySelectorAll('.menu__button-arrow');
    if (manueArrow.length) {
        manueArrow.forEach(function (manueArrow) {
            manueArrow.addEventListener("click", function (e) {
                e.preventDefault();
                const blockPrev = manueArrow.previousElementSibling;
                const blockNext = manueArrow.nextElementSibling;
                blockNext.classList.toggle("menu__sub-list_active");
                manueArrow.classList.toggle("menu__button-arrow_active");
                blockPrev.classList.toggle("menu__link_active");
            });
        });
    }
}
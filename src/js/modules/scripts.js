

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


const searchForemPlaceholder = document.querySelector(".search-form__input");

if (searchForemPlaceholder) {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth < 769) {
        console.log(windowInnerWidth);

        console.log(searchForemPlaceholder);
        //searchForemPlaceholder.placeholder = 'Search form';
    }
}


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length) {
    window.addEventListener("scroll", animOmScroll);
    function animOmScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_animation-start');
            }
            else {
                if (!animItem.classList.contains("_animation-one-play")) {
                    animItem.classList.remove('_animation-start');
                }
            }
        }


    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(animOmScroll, '300')
    //animOmScroll();
}
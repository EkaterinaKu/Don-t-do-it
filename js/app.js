window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
});

$(window).on('load', function () {
    setBodyLoaded();
    initAccordion();
    initScrollButton();
    initScroll();
    initPopup();
    initScrollTo();
    initBurger();
    initValidation();
})

/*Animation*/
function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setAnimatedBlockLoaded() {
    let reached = false;
    const ANIMATED_BLOCK_OFFSET = 300;
    const animatedBlock = document.getElementById('animatedBlock');
    const animatedBlockOffset = animatedBlock.offsetTop;
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', function () {
        let scrolled = window.pageYOffset;
        if (scrolled + windowHeight > animatedBlockOffset + ANIMATED_BLOCK_OFFSET) {
            if (!reached) {
                animatedBlock.classList.add('loaded');
                reached = true;
            }
        }
    })
}

/* Accordion */
function initAccordion() {
    var accordion = document.getElementsByClassName("tab_item");
    var i;

    for (i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

/* ScrollTop*/
function initScrollButton() {
    $('#scroll_button').click(function () {
        $('html').animate({
            scrollTop: 0,
        }, 500)
    })
}

/*ScrollTop появление после скролла на 400px*/
function initScroll() {
    $(window).scroll(() => {
        if ($(window).scrollTop() >= 400) {
            $('#scroll_button').addClass('visible')
        } else {
            $('#scroll_button').removeClass('visible')
        }
    })
}

/* PopUp */
function initPopup() {
    $('.close_button, .overlay').click(function () {
        closePopup();
    })

    $('.form_button').click(function (event) {
        showPopup(event);
    })
}

function showPopup(event) {
    $('.popup').addClass('visible');
    $('.overlay').addClass('visible');
}

function closePopup() {
    $('.popup').removeClass('visible');
    $('.overlay').removeClass('visible');
}

/* Navigation */
function initScrollTo() {
    $('.js-scroll-to').click((event) => {
        const targetElement = $(event.target.hash);
        $.scrollTo(targetElement, 300);
    })
}

/* Menu Burger */
function initBurger() {
    $('.burger').click(function () {
        $('.burger').toggleClass('open');
        $('.menu_burger').toggleClass('active');
        $('.body').toggleClass('lock');
    })
}


/* Form Validation */
function initValidation() {
    $('.subscribe_form_button ').on('click', function (e) {
        var $inputArr = $('form input');
        var inputLength = $inputArr.length;
        var count = 0;
        $.each($inputArr, function (i, v) {
            if ($(v).val() == '') {
                $('form').addClass('error');
                $(v).addClass('error');
            } else {
                count += 1
                $(v).removeClass('error');
                count == inputLength ? $('form').removeClass('error') : ''
            }
        })
    })
}

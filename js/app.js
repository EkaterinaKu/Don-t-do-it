window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
});

$(window).on('load', function () {
    setBodyLoaded();
    initScrollButton();
})

$(window).on('load', function () {
    setBodyLoaded();
    popupShow();
    answerMenu1();
    answerMenu();
})


$(window).scroll(() => {
    if ($(window).scrollTop() >= 400) {
        $('#scroll_button').addClass('visible')
    } else {
        $('#scroll_button').removeClass('visible')
    }
})

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

function showScrollButton() {

}

function initScrollButton() {
    $('#scroll_button').click(function () {
        $('html').animate({
            scrollTop: 0,
        }, 500)
    })
}


function popupShow() {
    $('#close_button').click(function () {
        $('#popup').addClass('visible');
    })
}

function answerMenu1() {
    $('#menu_1').click(function () {
        $(window).scrollTo($('#answer_1'), 100);
    })
}


/*function answerMenu() {
    if ($('#menu_1').click(function()) {
        $(window).scrollTo($('#answer_1'), 100);
    } if ($('#menu_2').click(function()) {
        $(window).scrollTo($('#answer_2'), 100);
    }
}
*/

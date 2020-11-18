let startPos = 0;
let winScrollTop = 0;
window.addEventListener('scroll', function() {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $(".head").addClass("hide");
    } else {
        $(".head").removeClass("hide");
    }
    startPos = winScrollTop;
});
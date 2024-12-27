/*-------------
smoothScroll.js
ecreative Joe
--------------*/
function smoothScroll(boolean) {
    if (boolean === true && !$('html').hasClass('macintosh') && !$('html').hasClass('safari')) {
        $('.momoStyle_WRAPPER').on('mousewheel', function (event, delta) {
            $('html,body').stop();
            var that = this,
                duration = 800,
                easing = 'easeOutCirc',
                step = 80,
                target = $('html, body'),
                scrollHeight = $(document).height(),
                scrollTop = that.last !== undefined ? that.last : $(window).scrollTop(),
                viewportHeight = $(window).height(),
                multiply = (event.deltaMode === 1) ? step : 1;

            scrollTop -= delta * multiply * step;
            scrollTop = Math.min((scrollHeight - viewportHeight), Math.max(0, scrollTop));
            that.last = scrollTop;
            target.stop().animate({
                scrollTop: scrollTop
            }, {
                easing: easing,
                duration: duration,
                complete: function () {
                    delete that.last;
                }
            });
            event.preventDefault();
        });
    } else if (boolean === false || $('html').hasClass('macintosh') || $('html').hasClass('safari')) {
        $('.momoStyle_WRAPPER').unbind('mousewheel');
    }
}
$(window).on('load', function () {
    smoothScroll(true);
});
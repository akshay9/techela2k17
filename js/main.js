(function($) {
    //$.jInvertScroll(['.scroll'], {width:});
}(jQuery));

$(document).ready(function(){
    page = 0;

    adjustWidth();
    $(window).on('resize', function () {
        adjustWidth();
    });

});

function adjustWidth() {
    $.jInvertScroll(['.scroll']);

    $('.horizon').css('width', window.innerWidth * 5 * 0.75 * 0.67);
    $('.middle').css('width', window.innerWidth * 5 * 0.75);
    $('.front').css('width', window.innerWidth * 5);
    page = 0;
    $('.fullpage').each(function (obj) {
        $(this).css({'width':  window.innerWidth - 50 ,'left': (page++) * window.innerWidth});
    });
}

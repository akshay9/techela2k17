(function($) {
    //$.jInvertScroll(['.scroll'], {width:});
}(jQuery));

$(document).ready(function(){

    // init controller
    var controller = new ScrollMagic.Controller();


    var logoTimeline = new TimelineMax()
        .to("#home .logo", 0.5,  {left: "5", position: "fixed", ease: Power3.easeOut }, 0)
        .to("#home .logo", 0.5,  {top: "5" }, 0)
        .to(window, 0.5,  {scrollTo: "#events"}, 0);

    var scene = new ScrollMagic.Scene({
        offset: 2,
        duration: 0
    })
        .setTween(logoTimeline) // trigger a TweenMax.to tween
        .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);

    var eventsTimeline = new TimelineMax()
        .fromTo(".layer3.page", 4, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}, 0) // in from left
        .fromTo(".layer2.page", 3, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}, 0)  // in from right
        .fromTo(".layer1.page", 2, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}, 0)
        .fromTo(".layer0.page", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone}, 0);

    var eventsScene = new ScrollMagic.Scene({
        triggerElement: "#events",
        triggerHook: "onLeave",
        duration: "400%"
    })
        .setPin("#events")
        .setClassToggle("#eventLink", "active")
        .setTween(eventsTimeline) // trigger a TweenMax.to tween
        .addIndicators({name: "2 (duration: 300%)"}) // add indicators (requires plugin)
        .addTo(controller);


    // Menu Handler
    new ScrollMagic.Scene({triggerElement: "#home", triggerHook: "onLeave", duration: "100%"})
        .setClassToggle("#homeLink", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#sponsor", triggerHook: "onLeave", duration: "100%"})
        .setClassToggle("#sponsorLink", "active") // add class toggle
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#team", triggerHook: "onLeave", duration: "100%"})
        .setClassToggle("#teamLink", "active") // add class toggle
        .addTo(controller);

    $(document).on("click", "a[href^='#']", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            TweenMax.to(window, 1,  {scrollTo: id}, 0);

            // if supported by the browser we can even update the URL.
            if (window.history && window.history.pushState) {
                history.pushState("", document.title, id);
            }
        }
    });

    // page = 0;
    //
    // adjustWidth();
    // $(window).on('resize', function () {
    //     adjustWidth();
    // });

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

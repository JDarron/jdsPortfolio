$(document).ready(function () {

    $(".new-link").on(
        "click",
        function(event) {
            window.open(event.target.attributes.href.value, '_blank');
        }
    );

    // Close the mobile nav when clicking outside
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        } // End if
    });

    /* Scroll hire me button to contact page */
    $('.hire-me').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* For Bootstrap current state on portfolio sorting */

    $('ul.nav-pills li a').on('click', function (e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

    /* portfolio mixitup */

    $(window).load(function () {
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.grid-controls li a').click(function () {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });


    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    /* Charts*/

    $('.chart').waypoint(function () {
        $(this).easyPieChart({
            barColor: '#3498db',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });


    /* VEGAS Home Slider */

    $('#page-welcome').vegas({
        slides: [
            { src: './assets/img/slider/01.jpg' },
            { src: './assets/img/slider/02.jpg' },
            { src: './assets/img/slider/03.jpg' },
            { src: './assets/img/slider/04.jpg' }
        ],
        overlay: true
    });

    $("#vegas-next").click(function () {
        $('#page-welcome').vegas('next');
    });
    $("#vegas-prev").click(function () {
        $('#page-welcome').vegas('previous');
    });

});

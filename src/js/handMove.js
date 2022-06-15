import gsap from 'gsap';

export default function handMove() {

    if (!document.querySelector('#hand-wrapper')) return;
    var rect = $('#hand-wrapper')[0].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    $('#hand-wrapper').mousemove(function(e) {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Ticker event will be called on every frame
    gsap.ticker.add(function() {
        if (mouse.moved) {
            parallaxIt('#hand', 60);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        gsap.to(target, {
            duration: 0.5,
            x: ((mouse.x - rect.width / 2) / rect.width) * movement,
            y: ((mouse.y - rect.height / 2) / rect.height) * movement
        });
    }

    $(window).on('resize scroll', function() {
        rect = $('#hand-wrapper')[0].getBoundingClientRect();
    });
}

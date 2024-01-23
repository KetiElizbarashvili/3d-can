
$(document).ready(function () {

    var $feedback = $('#feedback');
    $feedback.text('Start animation');

    // Initial Timeline
    var can = document.getElementById('y');
    var text = document.getElementById('txt');
    var heading = '#txt h1';
    var paragraph = '#txt p';
    var buttons = '#now, #later';

    var tl = new TimelineMax({
        delay: 1,
        onComplete: initialAnimationEnd
    });

    tl.to(can, 1, { css: { paddingLeft: 300 } })
      .to(text, 0.6, { opacity: 1 })
      .to(heading, 0.75, { opacity: 1 })
      .to(paragraph, 0.75, { opacity: 1 })
      .to(buttons, 1, { opacity: 1 });



    function initialAnimationEnd() {
        $feedback.text('Initial animation completed');
    }


    function launchMessageWindow() {
        $feedback.text('You chose to read the message!');
    }


    function readNow() {
        var readNowTl = new TimelineMax({
            onComplete: launchMessageWindow
        });

        readNowTl.to(buttons, 0.2, { opacity: 0 })
                 .to(paragraph, 0.2, { opacity: 0 })
                 .to(heading, 0.2, { opacity: 0 })
                 .to(text, 0.2, { opacity: 0 })
                 .to(can, 0.8, { css: { paddingLeft: 0, opacity: 0 } });
    }


    // Click Handlers
    $('.restart').on('click', function () {
        $feedback.text('Restart timeline');
        $('div .container').css({
            'padding-left': 520,
            opacity: 1
        });

        tl.restart();
    });

    $('.reverse').on('click', function () {
        $feedback.text('Reverse timeline');
        tl.reverse();
    });

    $('#now a').on('click', function (e) {
        e.preventDefault()
        readNow();
    });

}); 
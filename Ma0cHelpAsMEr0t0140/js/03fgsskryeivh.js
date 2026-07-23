
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://tp-g7uh.onrender.com/Ma0cHelpAsMEr0t0140/02sghsjp2.mp4');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);


    $('#mycanvas').click(function() {
        audioElement.play();

    });

    $('#link_black').click(function() {
        audioElement.play();

    });


    $('.pro_box').click(function() {
        audioElement.play();

    });

    $('#poptxt').click(function() {
        audioElement.play();

    });

});

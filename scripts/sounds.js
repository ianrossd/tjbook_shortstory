$(document).ready(() => {
    $(document).on('scroll', () => {
        // console.log($(window).scrollTop())		// for debugging
        if (
            $(window).scrollTop() >= 2250 &&
            $(window).scrollTop() <= 2550 &&
            $('#switchSnd')[0].paused
        ) {
            $('#switchSnd')[0].play()
            // console.log('audio played')		// for debugging
        }
    })
})
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var video = $('#myVideo')
//     var videoRect = video.get(0).getBoundingClientRect()
//     var viewportHeight = $(window).height()

//     // if (videoRect.top + videoRect.height >= 0 && videoRect.top <= viewportHeight) {
//       console.log(`Opacity: ${video.css('opacity')}, paused: ${video.prop('paused')}`)
//     if (video.css('opacity') == 1) {
//       // Video is visible
//       if (video.prop('paused')) {
//         video.get(0).play()
//       }
//     } else {
//       // Video is not visible
//       if (!video.prop('paused')) {
//         video.get(0).pause()
//       }
//     }
//   })
// })

$(document).ready(function () {
  var video = $('#myVideo');
  var videoRect = video.get(0).getBoundingClientRect();
  var viewportHeight = $(window).height();
  var lastScrollTop = 0;
  var animationFrameId;

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var delta = scrollTop - lastScrollTop;
    lastScrollTop = scrollTop;

    if (video.css('opacity') == 1) {
      // Video is visible
      if (delta > 0) {
        // Scrolling down
        video.get(0).currentTime += 1 / 60; // increment by 1 frame ( approx. 16ms )
      } else if (delta < 0) {
        // Scrolling up
        video.get(0).currentTime -= 1 / 60; // decrement by 1 frame ( approx. 16ms )
      }

      // Request the next frame
      // animationFrameId = requestAnimationFrame(function () {
      //   // Check if the video is still visible
      //   if (video.css('opacity') == 1) {
      //     // Update the video playback
      //     video.get(0).play();
      //   } else {
      //     // Video is not visible, cancel the animation frame
      //     cancelAnimationFrame(animationFrameId);
      //   }
      // });
    }
  });
});
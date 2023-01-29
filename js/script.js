const counterNum = document.querySelectorAll(".count_number");
const speed = 5;

// counterNum.forEach((curElement) =>{
//     const updateNumber = () => {
//         const targetNumber = parseInt(curElement.dataset.number);
//         // console.log(targetNumber);
//         const initialNum = parseInt(curElement.innerText);
//         // console.log(initialNum);

//         const incrementNumber = Math.trunc(targetNumber / speed);
//         // console.log(incrementNumber);
//         if (initialNum < targetNumber) {
//             curElement.innerText = `${initialNum + incrementNumber }+ `;
//             setTimeout(updateNumber, 300)
//         }


//     };
//     updateNumber();
// });


$('.count_1').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
          
      }
  });
});
$('.count_2').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
$('.count_3').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});





const config = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 10,
    breakpoints: {
      1280: {
        perView: 3,
      },
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }
  new Glide('.glide', config).mount()



  var video = document.querySelector('video');
  video.muted = true;
  video.play()



  
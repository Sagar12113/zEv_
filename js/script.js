//zev counting
$('.count_1, .count_2, .count_3 ').each(function () {
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
  

  
	

  
  
  
  
	
	
  
  
  
   



const sliderElm = document.querySelector('.splide');
const SLIDE_SPEED = 400;
const slider = new Splide(sliderElm, {
	type: 'fade',
	rewind: true,
	speed: SLIDE_SPEED,
}).mount();
const modalButtons = document.querySelectorAll('.js-modal-buton');
modalButtons.forEach(modalButton => {
	modalButton.addEventListener('click', ()=> {
		sliderElm.dataset.showIndex = modalButton.dataset.index;
	});
});

MicroModal.init({
  onShow: () => {
		slider.options = {
			speed: 0
		};
		slider.go(Number(sliderElm.dataset.showIndex));
		slider.options = {
			speed: SLIDE_SPEED
		};
	}
});


  //zev  animated text

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	document.body.appendChild(css);
  };

  Resources



  


  //   video autoplay
	var video = document.querySelector('video');
	video.muted = true;
	video.play()
  

  
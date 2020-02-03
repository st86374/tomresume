$('.btnImg').on('click', function () {
  $(this).toggleClass('active');
  $('header ul').slideToggle();
})
$(window).scroll(function () {
  var scrollPos = $(window).scrollTop();
  var skillTop = $('.skill').offset().top;
  var worksTop = $('.works').offset().top;
  if (skillTop <= scrollPos) {
    progress()
  }
})

function progress() {
  $('.skill .progress-bar').each(function () {
    var thisValue = $(this).data('progress');
    $(this).css('width', thisValue + '%');
  });
}
$(function () {
  $("body").prognroll({
    height: 5, // progress bar height
    color: "orange",
    custom: false // if you make it true, you can add your custom div and see it's scroll progress on the page
  });
});

$('#Contact').gradientify({
  gradients: [{
      start: [49, 76, 172],
      stop: [242, 159, 191]
    },
    {
      start: [255, 103, 69],
      stop: [240, 154, 241]
    },
    {
      start: [33, 229, 241],
      stop: [235, 236, 117]
    }
  ]
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('.gotop').addClass('active');
      $('.black-line').css('background', '#000');
    } else {
      $('.gotop').removeClass('active');
      $('.black-line').css('background', 'transparent')
    }
  })
})
$('.gotop').on('click', function () {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
})
$('.menu_link').on('click', function () {
  event.preventDefault();
  var target = $(this).attr('href');
  var targetPos = $(target).offset().top;
  $('html, body').animate({
    scrollTop: targetPos
  }, 1000);
})
$(window).scroll(function () {
  var scrollPos = $(window).scrollTop();
  $('.menu_link').each(function () {
    var target = $(this).attr('href')
    var targetPos = $(target).offset().top;
    var targetHeight = $(target).outerHeight();
    if (targetPos - 200 <= scrollPos) {
      $(this).addClass('active');
      $('.menu_link').not(this).removeClass('active')
    } else {
      $(this).removeClass('active');
    }
  })
})
$(function () {
  $("#About").jParticle({
    background: "#fff", //背景颜色 
    color: "#a0a0a0", //粒子和连线的颜色 
    particlesNumber: 40, //粒子数量 
    //disableLinks:true,//禁止粒子间连线 
    //disableMouse:true,//禁止粒子间连线(鼠标) 
    particle: {
      minSize: 1, //最小粒子 
      maxSize: 2, //最大粒子 
      speed: 30, //粒子的动画速度 
    }
  });
});


$('.mouse-icon').click(function () {
  $('html, body').animate({
    scrollTop: $('#About').offset().top
  }, 800);
});

$('.works_info').slick({
  arrows: true,
  centerMode: true,
  infinite: true,
  dots: false,
  centerPadding: '0px',
  autoplaySpeed: 3000,
  slidesToShow: 3,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(window).ready(function () {
  if (parseInt($('.prognroll-bar').width()) != 0) {
    $('.gotop').addClass('active');
    $('.black-line').css('background', '#000');
  } else {
    $('.gotop').removeClass('active');
    $('.black-line').css('background', 'transparent')
  }
})
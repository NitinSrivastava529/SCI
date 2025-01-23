$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.feedback-header').addClass('feedback-fixed');
    } else {
        $('.feedback-header').removeClass('feedback-fixed');
    }
    if ($(this).scrollTop() > 280) {
        $('#int_topics_wrp').addClass('int_fixed');
    } else {
        $('#int_topics_wrp').removeClass('int_fixed');
    }

    if ($(this).scrollTop() > 300) {
        $('#scroll-top-arrow').fadeIn();
    } else {
        $('#scroll-top-arrow').fadeOut();
    }
});

$(document).ready(function () {
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
  document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
  };
  
  $(".service_carousel").owlCarousel({
    //navigation : true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  $(function() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      centeredSlides: true,
      centeredSlidesBounds: true,
      direction: "horizontal",
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: false,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      breakpoints: {
        480: {
          direction: "vertical",
          slidesPerView: 6
        }
      }
    });
    var galleryTop = new Swiper(".gallery-top", {
      direction: "horizontal",
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      a11y: {
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      },
      keyboard: {
        enabled: true,
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    galleryTop.on("slideChangeTransitionStart", function() {
      galleryThumbs.slideTo(galleryTop.activeIndex);
    });
    galleryThumbs.on("transitionStart", function() {
      galleryTop.slideTo(galleryThumbs.activeIndex);
    });
  });
    baguetteBox.run('#gallery');

    $('.panel-collapse').on('show.bs.collapse', function () {
        $('.so-widget-image').attr('src', $(this).attr('data-src'));
      });

    $('.slider').owlCarousel({
        items: 3,
        singleItem: true,
        nav: true,
        dots: false,
        loop: true,
        autoPlay: 3000
      });

    $('.tab-toggle-btn').click(function () {
        //get collapse content selector
        var collapse_content_selector = $(this).attr('href');

        //make the collapse content to be shown or hide
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
          if ($(this).css('display') == 'none') {
            //change the button label to be 'Show'
            toggle_switch.html('View More');
          } else {
            //change the button label to be 'Hide'
            toggle_switch.html('Hide');
          }
        });
      });


    jQuery(function ($) {
        var path = window.location.href;
        // because the 'href' property of the DOM element is the absolute path
        $('.navbar-nav a').each(function () {
          if (this.href === path) {
            $('.navbar-nav a').removeClass("active");
            $(this).addClass('active');
          }
        });
      });

    $('#tmo-short-btn').click(function () {
        $('.tmo-url').toggle("slide", {
          direction: "right"
        }, "fast", function () { });
      });
     // Add smooth scrolling to all links
     $(".smoothness").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 122
          }, 800);
        }
      });

    $(".frame_carousel").owlCarousel({
        //navigation : true,
        nav: false,
        dots: false,
        navText: ['', ''],
        autoplay: true,
        autoPlaySpeed: 2000,
        autoPlayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });

   
      // Flash functions
      $('#project-contact-us-button').on('click', function () {
        console.log("you've been clicked")
      })

      $('#project-contact-us-button').mousedown(function () {
        $(this).addClass('hold-mouse')
        console.log('event', event)
        var x = event.offsetX - 10;
        var y = event.offsetY - 10;
        $('#project-contact-us-button').append('<div class="cir grow" style="left:' + x + 'px;top:' +
          y + 'px;"></div>')
      })
      $('#project-contact-us-button').mouseup(function () {
        $(this).removeClass('hold-mouse');
      });

    $('#newmodal').modal('show');
    $('#offermodal').modal('show');
    $('.numbervalue').keypress(function (e) {
        $('#scroll-top-arrow').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!(a.indexOf(k) >= 0))
            e.preventDefault();
    });

    $(document).on('keypress', '.inputTextBox', function (event) {
        var regex = new RegExp("^[a-zA-Z ]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
});

///////////////////////// Only Numbers allowed /////////////////////////////

////////////////////// Only characters allowed /////////////////////////////
function myFunction2() {
    debugger;
    var contact_personname = document.getElementById('contact_personname111').value;
    var orgname1 = document.getElementById('orgname1').value;
    var phoneno1 = document.getElementById('phoneno1').value;
    var emailid1 = document.getElementById('emailid1').value;
    var role = document.getElementById('designation').value;
    atpos = emailid1.indexOf("");

    dotpos = emailid1.lastIndexOf(".");


    var msage = '';


    if (contact_personname == '') {
      msage = "Please Enter Your Name";
      alert(msage);
      return false;
    }
    if (orgname1 == '') {
      msage = "Please Enter Name of your School";
      alert(msage);
      return false;
    }

    if (phoneno1 == '') {
      msage = "Please Enter Phone Number";
      alert(msage);
      return false;
    } else if (phoneno1.length < 10) {
      alert("Please Enter Correct Phone Number");
      return false;
    }

    if (emailid1 == '') {
      msage = "Please Enter your Email";
      alert(msage);
      return false;
    } else if (atpos < 1 || (dotpos - atpos < 2)) {

      msage = "Please Enter Correct Email ID";
      alert(msage);
      return false;

    }

    if (role == '') {
      msage = "Please Enter Your Role in the School";
      alert(msage);
      return false;
    } else {

      $("#dropmsg").attr('action', 'https://crm.edunexttechnologies.com/_taskqueue/updatelead');
      $("#dropmsg").submit();
    }

  }


  // var imNotARobot3 = function() {
  //     $.ajax({
  //         type: 'post',
  //         url: 'varify_captcha3.php',
  //         data: $('#dropmsg3').serialize(),
  //         type: 'POST',
  //         success: function(result) {
  //             if (result == 'success') {
  //                 $("#savebtn3").removeAttr('disabled');
  //                 $("#savebtn3").css('opacity', '1');
  //             } else {
  //                 alert(result);
  //             }
  //         }
  //     });
  // };


  function myFunction3() {
    var contact_personname = document.getElementById('contact_personname3').value;
    var emailid = document.getElementById('emailid3').value;
    var phoneno = document.getElementById('phoneno3').value;
    var orgname = document.getElementById('orgname3').value;
    var cityId = document.getElementById('cityId3').value;
    var address = document.getElementById('address3').value;
    var website = document.getElementById('website-form3').value;
    var message = document.getElementById('message3').value;
    var response = grecaptcha.getResponse();

    atpos = emailid.indexOf("");
    dotpos = emailid.lastIndexOf(".");
    if (contact_personname == '') {
      alert("Please Enter Your Full Name");
      return false;
    } else if (emailid == '') {
      alert("Please Enter Your Email Address");
      return false;
    } else if (atpos < 1 || (dotpos - atpos < 2)) {
      alert("Please Enter Valid E-Mail Address");
      return false;
    } else if (phoneno == '') {
      alert("Please Enter Your Number");
      return false;
    } else if (orgname == '') {
      alert("Please Enter Your School/Organisation Name");
      return false;
    } else if (website == '') {
      alert("Please Enter Website Name");
      return false;
    } else if (address == '') {
      alert("Please Enter Address ");
      return false;
    } else if (cityId == '') {
      alert("Please Select Your City");
      return false;
    } else if (message == '') {
      alert("Please Enter Your Message");
      return false;
    } else if (response == 0) {
      alert("Kindly Tick The Checkbox Of The Captcha To Confirm This Form.");
      return false;
    } else {
      $('#savebtn3').attr('disabled', true);
      $("#dropmsg3").attr('action', 'https://crm.edunexttechnologies.com/_taskqueue/updatelead');
      $("#dropmsg3").submit();
    }

  }

var tabChange = function () {
    var tabs = $('.nav12 > li');
    var tabs2 = $('.tab-content12 > div');
    var active = tabs.filter('.active');
    var active2 = tabs2.filter('.active');
    //alert(active.attr('role'));
    active.removeClass('active');
    active.children('a').removeClass('active');
    active2.removeClass('active show');
    var next = active.next('li').length ? active.next('li').addClass('active') : tabs.filter(':first-child')
        .addClass('active');
    var next2 = active.next('li').length ? active.next('li').children('a').addClass('active') : tabs.filter(
        ':first-child').children('a').addClass('active');
    var next22 = active2.next('div').length ? active2.next('div').addClass('active show') : tabs2.filter(
        ':first-child').addClass('active show');
    // Bootsrap tab show, para ativar a tab
    //next.tab('show')
}
// Tab Cycle function
var tabCycle = setInterval(tabChange, 8000)
// Tab click event handler
$(function () {
    $('.nav-tabs12 a').click(function (e) {
        var tabs = $('.nav12 > li');
        var currentid = this.id;
        var parentid = $("#" + currentid).parent().attr('id');
        e.preventDefault();
        // Parar o loop
        clearInterval(tabCycle);
        // mosta o tab clicado, default bootstrap
        tabs.removeClass('active');
        $(this).addClass('active');
        $("#" + parentid).addClass('active');


        tabs.children('a').removeClass('active');
        $(this).children('.tab-pane').removeClass('active show');
        $(this).tab('show');
        // Inicia o ciclo outra vez
        // setTimeout(function(){
        tabCycle = setInterval(tabChange, 8000) //quando recomeça assume este timing
        // }, 4000);
    });
});

$(".custom-field-inner input, select, textarea").change(function () {
    var val1 = this.value;
    var id1 = this.id;

    if (val1 != '') {
        $("#" + id1).parent().addClass('filled');
    } else {
        $("#" + id1).parent().removeClass('filled');
    }

});
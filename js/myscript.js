
/*

  - All 20 jquery functions and 5 named functions are used on the first page 
  - Apart from functions relating to the footer which works on every page
  - All plugins are displayed on the about page

*/

$(document).ready(function () {

  // immediately invoked functions
  fadeTitle();
  createButton();

  /*
    Functions 1 to 8 are called when a user click the 'Detail' button
    the div will animate to the middle of the screen and the other divs
    will dissapear, then you can click 'Less Detail' the div will go back
    to its original position and the other divs will reappear  
  */
  //function 1
  $('#btn1').click(function () {
    $(this).html('Less Detail')
    $('#img2cont, #img3cont, #img4cont').fadeOut();
    $('#img1cont').animate({ left: '475' });

    //function 2
    $('#btn1').click(function () {
      $(this).html('Detail')
      $('#img2cont, #img3cont, #img4cont').fadeIn(2000);
      $('#img1cont').animate({ left: '0' });
    });
  });

  //function 3
  $('#btn2').click(function () {
    $(this).html('Less Detail')
    $('#img1cont, #img3cont, #img4cont').fadeOut();
    $('#img2cont').animate({ left: '150' });

    //function 4
    $('#btn2').click(function () {
      $(this).html('Detail')
      $('#img1cont, #img3cont, #img4cont').fadeIn(500);
      $('#img2cont').animate({ left: '0' });
    });
  });

  //function 5
  $('#btn3').click(function () {
    $(this).html('Less Detail')
    $('#img2cont, #img1cont, #img4cont').fadeOut();
    $('#img3cont').animate({ right: '150' });

    //function 6
    $('#btn3').click(function () {
      $(this).html('Detail')
      $('#img2cont, #img1cont, #img4cont').fadeIn(500);
      $('#img3cont').animate({ right: '0' });
    });
  });

  //function 7
  $('#btn4').click(function () {
    $(this).html('Less Detail')
    $('#img2cont, #img3cont, #img1cont').fadeOut();
    $('#img4cont').animate({ right: '475' });

    //function 8
    $('#btn4').click(function () {
      $(this).html('Detail')
      $('#img2cont, #img3cont, #img1cont').fadeIn(2000);
      $('#img4cont').animate({ right: '0' });
    });
  });


  //function 9 - When you hover over the title, it changes and an image appears beside it
  $('#title').mouseenter(function () {
    $(this).html('Football');
    $("#footballImg").css({ "position": "relative", "right": "200px", "display": "inline" });
  });


  // function 10 - GET json info from github
  $('#btn5').click(function () {
    $('#btn5').text('Loading data from JSON source...');
    $.ajax({
      type: "GET",
      url: "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/en.1.clubs.json",
      success: function (result) {
        displayData(result)
        $('#btn5').html('Complete')
      }
    });
  });

  //Named function 1 - Display all JSON information from github 
  function displayData(result) {
    $('.display-resources').text(result)
  }

  //all plugins used on the about page
  //Sliphover Plugins used on about page - changed height and animation speed
  $('#sliphoverImg1').sliphover({
    height: '20%',
    duration: 'slow'
  });
  $('#sliphoverImg2').sliphover({
    height: '20%',
    duration: 'slow'
  })
  $('#sliphoverImg3').sliphover({
    height: '20%',
    duration: 'slow'
  })

  /*
    jBox Plugin: used on the about page
    I added a transition and changed the contents of the modal boxes
  */
  new jBox('Modal', {
    attach: '#btn6',
    animation: 'pulse',
    title: 'Sacked',
    content: 'Everton manager Ronald Koeman has been sacked'
  });

  new jBox('Modal', {
    attach: '#btn7',
    animation: 'pulse',
    title: '3 Players Retire',
    content: 'Barzagli, Buffon and De Rossi retire from international duties'
  });

  new jBox('Modal', {
    attach: '#btn8',
    animation: 'pulse',
    title: 'Man Utd 1 - 0 Bournemouth',
    content: 'A close game at old trafford'
  });

  // Animsition - page transitions 
  // From the example on there website I changed the speeds, the selected elements and the inClass/outClass properties
  $("html").animsition({
    inClass: 'fade-in-left',
    outClass: 'fade-out-left',
    inDuration: 1000,
    outDuration: 400,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    transition: function (url) { window.location.href = url; }
  });
  // end of plugins


  //function 11 - when you click the button in the footer it adds a class to the footer, hides 
  $('#btnFooter').click(function () {
    $('footer').toggleClass('newClass');
    $('#footerLinks').hide()
    $('#expandImage').attr('src', 'http://www.clker.com/cliparts/1/5/e/7/11949867851862198992soccer_ball_ganson.svg.hi.png').animate({ height: '200px', width: '200px' })
    $('.removeImage').remove()
    $('#btnFooter').html('Complete')
  });


  //function 12 - changing the banner image
  $('#bannerImageContainer').mouseenter(function () {
    $(this).css('background-image', 'url(./img/bannerImg.jpg)');
    $('#bannerImage').css({ "width": "100%", "height": "100px" })
  });

  //function 13 - extra styling on navigation buttons
  $('.nav-link').mouseenter(function () {
    $(this).toggleClass('navButton')
  })

  //function 14 - Demonstrating child selectors - to disable links when you click the parent div
  $('#parentDiv > a').click(function () {
    $(this).addClass('newClass');
  })


  //named function 2 - fade in the first divs on the page along with the title/subtitle info
  function fadeTitle() {
    $('#titleText').animate({ opacity: '1' }, 4000);
    $('#subtitle').animate({ opacity: '1' }, 4000);
    $('#img1cont').animate({ opacity: '1' }, 4000);
    $('#img2cont').animate({ opacity: '1' }, 4000);
    $('#img3cont').animate({ opacity: '1' }, 4000);
    $('#img4cont').animate({ opacity: '1' }, 4000);
  }
  //named function 3 - creating a button, styling it using a bootstrap class and appending it to a div just above the footer
  function createButton() {
    var $btn = document.createElement('button')

    $($btn).addClass('tm-btn text-uppercase nav-link')
    $btn.textContent = "Hide Footer"
    $($btn).appendTo('#btnAppend').attr('id', 'newBtn').css({ 'color': 'black', 'margin-left': '400px' })
  }

  //function 15 - toggle the footer using the button created in the previous method
  var $clicked = true;
  $('#newBtn').click(function () {
    $('footer').animate({
      height: 'toggle'
    });

    //if the footer is collapsed set text to show footer else set it to hide footer
    if ($clicked) {
      $('#newBtn').html("Show Footer")
      $clicked = false;
    }
    //the 
    else if (!$clicked) {
      $('#newBtn').html("Hide Footer")
      $clicked = true;
    }
  })

  //function 16 - call a named function to swap out images
  $('#swapImg').click(function () {
    swapImg();
  })
  //function 17 - double click the json text to clear it
  $('.display-resources').dblclick(function () {
      $(this).html("");
      $('#btn5').html("JSON Club Details")
  })
  //function 18 - demonstrating sibling selector
  $("h2 ~ p").click(function () {
    $('#subtitle').addClass('newClass2')
  })

  //function 19 - demonstrating child selector - adds a class to every even paragraph on the page
  $("#leagueTitle").click(function () {
    $('p:nth-child(even)').addClass('newClass');
  })

  //function 20 - click anyone of those paragraphs to get rid of the class
  $("p:nth-child(even)").click(function () {
    $(this).removeClass('newClass')
  })
  //named function 4 - swap images and disable all links
  function swapImg() {
    var img1 = $('#swapImg')
    var img2 = "./img/blogo.jpg"

    $(img1).attr('src',img2);
    $('#title2').html('Barcalona')
    $('#subtitle2').html('Logo')
    disableAllLinks();
  }
  //named function 5
  function disableAllLinks() {
   $('a').removeAttr('href')
  }
});
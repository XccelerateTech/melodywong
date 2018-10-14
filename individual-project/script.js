//scroll change color of navbar
    //background color
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 150);
    });
  });
  //link color
  $(function () {
    $(document).scroll(function () {
      var navlink = $("nav .navbar-nav li a");
        navlink.toggleClass('scrolled', $(this).scrollTop() > navlink.height());
    });
  });


//navbar link scroll with offset
$('.navbar-nav li').on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -70
    }, 500);
});

//navbar collapse after click
$(document).ready(function () {
    $(".navbar-nav li a").on('click',function(event) {
      $("#navbarNavDropdown").collapse('hide');
    });
  });


//porfolio buttons
var showing=0; 
$('#website-button').on('click', function (event) {
    if(showing==0){ // the first time user clicks button;
        event.preventDefault();
        $('.app').hide("slow");
        showing=1;
        $('#website-button').css({"background-color":"#2caa87","color":"white"});
        $('#app-button').css({"background-color":"","color":""});
    }else if(showing==2){ //app button clicked;
        $('.web').show("slow");
        $('.app').hide("slow");
        showing=1;
        $('#website-button').css({"background-color":"#2caa87","color":"white"});
        $('#app-button').css({"background-color":"","color":""});
    }else if(showing==1){//show all;
        $('.app').show("slow");
        showing=0;
        $('#website-button').css({"background-color":"","color":""});
    }
 
    
});

$('#app-button').on('click', function (event) {
    if(showing==0){// the first time user clicks button;
        event.preventDefault();
        $('.web').hide("slow");
        showing=2;
        $('#app-button').css({"background-color":"#2caa87","color":"white"});
        $('#website-button').css({"background-color":"","color":""});
    }else if(showing==1){//web button clicked;
        $('.web').hide("slow");
        $('.app').show("slow");
        showing=2;
        $('#app-button').css({"background-color":"#2caa87","color":"white"});
        $('#website-button').css({"background-color":"","color":""});
    }else if(showing==2){//show all;
        $('.web').show("slow");
        showing=0;
        $('#app-button').css({"background-color":"","color":""});
    }
    
});


//appearing form
var element = document.getElementById('contact');
var bodyRect = element.getBoundingClientRect();//get vertical position of section contact
console.log(bodyRect.y)
var x=bodyRect.y-400;
$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= x ) {

          $('form').slideDown(2500);
    
        } 
      });
    
});


//form submit validation
$('form').submit(function(event){
    event.preventDefault(); 
    
    //name validation
    var name = event.target.name.value;
    if(name.length>30||name===""){
        //border color and reminder
        $('#name').css("border","#f072ca solid 2px");
        $('#form-name p').html("Input a valid name");
    }
    if(name.length<=30&&name!=""){
        //remove border color and reminder
        $('#name').css("border","");
        $('#form-name p').html("");
    }

    //message validation
    var message = event.target.message.value;
    if(message===""){
        //border color and reminder
        $('#message').css("border","#f072ca solid 2px");
        $('#form-message p').html("Input a valid message");
    }
    if(message!=""){
        //remove border color and reminder
        $('#message').css("border","");
        $('#form-message p').html("");
    }

    //success message
    var email=event.target.email.value;
    if(message!=""&&name!=""&&email!=""){
        alert("Your message is sent!")
    }


});
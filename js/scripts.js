//twitter
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}}(document, 'script', 'twitter-wjs');
//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
//Navbar
	$("#navbar").css("background-color", "#f0f8ff");
//Form
	$(".form-control").css("border", "2px solid black");
	$("#message-area").on("keyup", function() {
			console.log("keyup happened");
			var nameName = 3;
			var name = "string";
			var charCount = $("#message-area").val().length;
			console.log(charCount);
			$("#char-count").html(charCount);
			if(charCount > 50) {
				$("#char-count").css("color", "red");
			} else {
				$("char-count").css("color", "black");
			};
	});
	$("#form").on("click", function() {
		console.log("clicked");
		if ($("#message-area").val() === "") {
			$("#message-area").css("border", "2px solid red");
		} else {
			$("#message-area").hide();
			var comment = $("#message-area").val();
			console.log(comment);
			$("#visible-comment").html("We've received your message!");
		};
		if ($("#email").val() === "") {
			$("#email").css("border", "2px solid red");
		} else {
			$("#email").hide();
			var name = $("#email").val();
			console.log(email);
		};
	$("#name").hide();
		var name = $("#name").val();
		console.log(name);
	$("#phone").hide();
		var name = $("#phone").val();
		console.log(phone);
	return false;	
	});
//FAQ
	$("#collapseOne").css("background-color", "#b0e0e6");
	$("#collapseTwo").css("background-color", "#d2fbc2");
	$("#collapseThree").css("background-color", "#ffab7d");

// Smooth Scrolling
	var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

//Stellar
	$.stellar();

//Tooltips
 	$(function () {
    $("#item1").tooltip();
    $("#item2").tooltip();
  });
 	$(function () {
      $('[data-toggle="tooltip"]').tooltip();
  });
//hover
  	$('.col-md-4').hover(
      function(){
        $(this).find('.caption').show();
      },
      function(){
        $(this).find('.caption').hide();
      }
  	);
//work section
	for(var i = 0; i < works.length; ++i) {
		$("#work").append("\
			<div class='col-md-4'>\
				<a href= " + works[i].url + " class='work-img'>\
					<img class='img-responsive' src='" + works[i].pic + "'>\
					<span class='info'><p class='proj-title'>Title:</p> " + works[i].title + " </span>\
				</a>\
    	</div>\
 		");
 		$(".work-img").mouseenter( function() {
 			$(".info", this).show();
 		}).mouseleave(function(){
 			$(".info", this).hide();
 		});
 		var images = $("#work img");
 		if (i%2 === 0) {
 			$(images[i]).css("border", "2px solid DodgerBlue");
 		} else {
 			$(images[i]).css("border", "2px solid Salmon");
 		};
 	};

});
	







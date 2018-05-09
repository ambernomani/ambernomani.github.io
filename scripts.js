$(document).ready(function(){
	$(".mainnav").hide();
	$(".link1").hide();
	$(".link2").hide();
	$(".link3").hide();
	$(".link4").hide();
	$(".link5").hide();
	$("#top").click(function(){
		$(".enter_tag").hide();
		$("#top").animate({
			bottom: 500
		}, 1000, function(){
			$(".welcome_tag").hide();
			createPage();
		})
		$("#bottom").animate({
			top: 500
		}, 1000, function(){
			$(".welcome_tag").hide();
		})

	});
	$("#bottom").click(function(){
		$(".enter_tag").hide();
		$("#top").animate({
			bottom: 500
		}, 1000, function(){
			$(".welcome_tag").hide();
		})
		$("#bottom").animate({
			top: 500
		}, 1000, function(){
			$(".welcome_tag").hide();
			createPage();
		})
		
	});
});


function createPage(){
	$(".mainnav").show();
	$(".link1").show();
	$(".link2").show();
	$(".link3").show();
	$(".link4").show();
	$(".link5").show();
	$("#top").hide();
	$("#bottom").hide();
}

function one() {
	$('html, body').animate({scrollTop: $(".link1").offset().top}, 800);	 
}
function two() {
	$('html, body').animate({scrollTop: $(".link2").offset().top}, 800);	 
}
function three() {
	$('html, body').animate({scrollTop: $(".link3").offset().top}, 800);	 
}
function four() {
	$('html, body').animate({scrollTop: $(".link4").offset().top}, 800);	 
}
function five() {
	$('html, body').animate({scrollTop: $(".link5").offset().top}, 800);	 
}

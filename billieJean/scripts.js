$(".home").click(function(){
	console.log('characters');
	$(".main-page").show();
	$(".trailer-page").hide();
	$(".song-page").hide();	
	$(".char-page").hide();
	$(".bts-page").hide();
	$(".beyond-page").hide();
});

$("#trailer-Button").click(function(){
	console.log('characters');
	$(".main-page").hide();
	$(".song-page").hide();
	$(".char-page").hide();
	$(".trailer-page").show();	
	$(".beyond-page").hide();
});

$("#song-Button").click(function(){
	console.log('characters');
	$(".main-page").hide();
	$(".trailer-page").hide();
	$(".char-page").hide();
	$(".song-page").show();	
	$(".bts-page").hide();
	$(".beyond-page").hide();
});

$("#char-Button").click(function(){
	$(".main-page").hide();
	$(".trailer-page").hide();
	$(".song-page").hide();	
	$(".bts-page").hide();
	$(".beyond-page").hide();
	$(".char-page").show();
	$(".carousel").slick({
		autoplay:true
		// centerMode:true
	});
});

$("#bts-Button").click(function(){
	$(".main-page").hide();
	$(".trailer-page").hide();
	$(".song-page").hide();	
	$(".char-page").hide();
	$(".beyond-page").hide();
	$(".bts-page").show();
});

$("#beyond-Button").click(function(){
	$(".main-page").hide();
	$(".trailer-page").hide();
	$(".song-page").hide();	
	$(".char-page").hide();
	$(".bts-page").hide();
	$(".beyond-page").show();
	$(".carousel2").slick({
		autoplay:true
		// centerMode:true
	});
});
$(document).ready(function(){	
	console.log("Ready");
	$(".main-page").show();
	$(".char-page").hide();
	$(".trailer-page").hide();	
	$(".song-page").hide();
	$(".bts-page").hide();
	$(".beyond-page").hide();
});
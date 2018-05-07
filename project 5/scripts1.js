
function one() {
	location.href = "index.html";	 
}
function two() {
	location.href = "index.html#page2"; 
}
function three() {
	location.href = "index.html#page3"; 
}
function four() {
	location.href = "index.html#page4";	 
}

// using popcorn.js to make the interaction in the video.

var theVideoLink1 = "https://www.youtube.com/watch?v=3Sj78Lxrb8A";
var theElement1 = "#video1";
var myVideo1 = Popcorn.smart(theElement1, theVideoLink1);
myVideo1.play();
//us cue to make an event happen at a specific time
myVideo1.cue(43,function(){
	myVideo1.pause();
	document.getElementById("overlayone").style.display = "block";
})
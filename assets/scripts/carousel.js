$(document).ready(function(){
	console.log("ready");

	$( "#button_left" ).click(function() {
  		previous();
	});
	$( "#button_right" ).click(function() {
  		next();
	});
});

var next = function(){
	var offset = $('.frame').css('left');
	offset = parseInt(offset, 10);
	if(offset > -2400){
		offset -= 600;
	} else{
		offset = 0;
	}
	console.log("offset"+offset);
	$('.frame').css('left',offset+"px");
}
var previous = function(){
	var offset = $('.frame').css('left');
	offset = parseInt(offset, 10);
	if(offset < 0){
		offset += 600;
	} else{
		offset = -2400;
	}
	console.log("offset"+offset);
	$('.frame').css('left',offset+"px");
}
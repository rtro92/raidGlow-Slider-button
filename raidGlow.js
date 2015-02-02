$('#slideBtn').draggable({
	axis:"x",
	containment:"#slideTrack",
	revert: function() {
		if(parseInt($('#slideBtn').css("left")) > 111) {
			return false;
		}
		else {			
			$('#slideBtn').css('width', 52);
			return true;
		}
	},
	drag: function() {
		var slideWidth = $('#slideContainer').width();
		var slidePos = parseInt($('#slideBtn').css('left'));
		var slidePosDecimal = (slidePos / slideWidth);
		$('#final').text(slidePosDecimal);
		var newDragVar = (52+(slidePosDecimal*100));
		$('#slideBtn').css('width', newDragVar);		
	},
	stop: function(){		
		if(parseInt($('#slideBtn').css("left")) > 111) {
			$('#slideDir').hide();
			$('#slideSuccess').fadeIn();
			$('#slideBtn').draggable('disable');			
			$('#chevron').hide();
			$('.slideBar').css('opacity','0');
			$('#boxSub').show();
		}
	}
});

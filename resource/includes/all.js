
$(function() {
	//navigator scroll
	$("#navObjective").click(function() {
		$("html, body").animate({scrollTop: "#arrow-img"}, 400);
	});
	$("#navExperience").click(function() {
		$("html, body").animate({scrollTop: "500px"}, 400);
	});
	$("#navPublication").click(function() {
		$("html, body").animate({scrollTop: "700px"}, 400);
	});
	$("#navOthers").click(function() {
		$("html, body").animate({scrollTop: "1000px"}, 400);
	});



	// timelime
	var totalNum = Math.floor( $(".experience").width() / $(".experience>div").width() );
	var statusNum = 1;
	function runStatus() {
		$(".timeline ul li").removeClass().eq(statusNum).addClass("now");
	}

	// timeline click event
	$(".arrow-next").on("click", function() {
		if ( statusNum < totalNum-1 ) { 
			statusNum++;
				if ( statusNum === totalNum-1 ) { 
					$(".arrow-next").css("opacity", "0");
				}
				if ( statusNum === 1) {
					$(".arrow-prev").css("opacity", "1");
				}
			$(".experience").animate({left: "-=786"}, 700);
			$(".experience>div").eq(statusNum).animate({opacity:1}, 700);
			$(".experience>div").eq(statusNum-1).animate({opacity:0}, 700);
			runStatus();
		}	
	});

	$(".arrow-prev").on("click", function() {
		if ( statusNum > 0 ) { 
			statusNum--;
				if ( statusNum === 0 ) { 
					$(".arrow-prev").css("opacity", "0");
				}
				if ( statusNum === totalNum-2) {
					$(".arrow-next").css("opacity", "1");
				}
			$(".experience").animate({left: "+=786"}, 700);
			$(".experience>div").eq(statusNum).animate({opacity:1}, 700);
			$(".experience>div").eq(statusNum+1).animate({opacity:0}, 700);
			runStatus();
		}	
	});

});

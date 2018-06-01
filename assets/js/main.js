var blurredBox = $("#name");
var cover = true;
$(window).scroll(function(){
	if (cover){
		if ($(window).scrollTop() > blurredBox.position().top + blurredBox.outerHeight(true)){
			$("#topnav").css("background-color", "rgba(104, 122, 109, 0.8)");
			$("#topnavName").css("margin-top", "0");
		}else{
			$("#topnav").css("background-color", "rgba(0, 0, 0, 0.4)");
			$("#topnavName").css("margin-top", "-4rem");
		}
	}
});
$("#topnavCover").click(function(){
	cover = true;
	$("#coverContent").fadeIn();
	$("#name").fadeIn();
	$("#topnav").css("background-color", "rgba(0, 0, 0, 0.4)");
	$("#projectsContent").fadeOut();
	$("#topnavName").css("margin-top", "-4rem");
	$("#topnavCoverOuter").addClass("topnavActive");
	$("#topnavProjectsOuter").removeClass("topnavActive");
	$("html, body").animate({ scrollTop: 0 }, "fast");
});
$("#topnavProjects").click(function(){
	cover = false;
	$("#coverContent").fadeOut();
	$("#name").fadeOut();
	$("#topnav").css("background-color", "rgba(104, 122, 109, 0.8)");
	$("#projectsContent").fadeIn();
	$("#topnavName").css("margin-top", "0");
	$("#topnavCoverOuter").removeClass("topnavActive");
	$("#topnavProjectsOuter").addClass("topnavActive");
	$("html, body").animate({ scrollTop: 0 }, "fast");
});
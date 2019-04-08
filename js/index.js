$(function(){
	//划过点击加盟变背景色变color
	$(".join_in_button").mouseover(function(){
		$(this).addClass("hoverStyle");
	})
	$(".join_in_button").mouseout(function(){
		$(this).removeClass("hoverStyle");
	})

	$(".all_button").mouseover(function(){
		$(this).addClass("hoverStyle");
	})
	$(".all_button").mouseout(function(){
		$(this).removeClass("hoverStyle");
	})
	
})
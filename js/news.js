// $(function(){
// 	$(".kzf-mod-new-li").mouseover(function(){
// 		$(".box").css({"background":"red","opacity":".3"});
// 		$(".box").animate({"width":"100%"},"slow")
// 		// $(".box").css({"background":"red"});
// 	})
// 	$(".kzf-mod-new-li").mouseout(function(){
// 		$(".box").animate({"width":"0"},"slow")
// 	})
// })




// $(".more").hover(function(){
// 		$(this).next().animate({"width":"185px"},500);
// 	},function(){
// 		$(this).next().stop().animate({"width":"185px"},500);
// 		$(this).next().animate({"width":"0px"},500);
// });

$(".kzf-mod-new-li").hover(function(){
	$(".box").css({"background":"red","opacity":".3"});
	$(".box").animate({"width":"100%"},"slow")
},function(){
	$(".box").animate({"width":"0",},"slow")
})

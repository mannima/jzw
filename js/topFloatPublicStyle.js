$(function(){
	$(window).scroll(function(){
		let _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(_scroll>=1){
			$(".headerWrap").css({"background-color":"#257dff"});
		}else{
			$(".headerWrap").css({"background-color":"transparent"});
		}
	})
})

//$(function(){	
//	$("#gotop").click(function(){
//		$("html,body").animate({scrollTop:0},900);
//		return false;
//	});
//});
$(function(){	
	$(".bb1").click(function(){
		$("html,body").animate({scrollTop:$('#box1').offset().top}, 900);
		return false;
	});
});


$(function(){	
	$(".bb2").click(function(){
		$("html,body").animate({scrollTop:$('#box2').offset().top}, 900);
		return false;
	});
});


$(function(){	
	$(".bb3").click(function(){
		$("html,body").animate({scrollTop:$("#box3").offset().top}, 900);
		return false;
	});
});

// find scrollvalu..
//$(function(){
//		$scrollVer=$(this).scrollLeft();
//		$scrollHor=$(this).scrollTop();
//	});

window.onload = function clearCookie(){ 
var keys=document.cookie.match(/[^ =;]+(?=\=)/g); 
if (keys) { 
for (var i = keys.length; i--;) 
document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString() 
} 
} 
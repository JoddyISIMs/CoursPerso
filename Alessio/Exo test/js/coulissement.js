$(document).ready(function(){
								
				//L�gende totalement cach�e / montr�e
				$('.boxgrid.captionfull').hover(function(){
					$(".cover", this).stop().animate({top:'140px'},{queue:false,duration:160});
					}, function() {
					$(".cover", this).stop().animate({top:'240px'},{queue:false,duration:160});
				});
				
				//L�gende moiti� apparente
				$('.boxgrid.caption').hover(function(){
					$(".cover", this).stop().animate({top:'140px'},{queue:false,duration:160});
					}, function() {
					$(".cover", this).stop().animate({top:'210px'},{queue:false,duration:160});
				});
				
				//Image d�filante vers la droite
				$('.boxgrid.slideright').hover(
					function() { $(".cover", this).stop().animate({left:'360px'},{queue:false,duration:300});}, 
					function() { $(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
				});
				
				//D�filement en diagonale
				$('.boxgrid.diagonale').hover(function(){
					$(".cover", this).stop().animate({top:'260px', left:'360px'},{queue:false,duration:300});
					}, function() {
					$(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});
				});


});

$(function() {
		/*Setting active class on anchor*/
		var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
		$("#menu ul li a").each(function(){
		    if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
		    $(this).addClass("active");
		})
		/*Diffrent scroll speeds on projects*/
		$.fn.moveIt = function(){
		 var $window = $(window);
		 var instances = [];

		 $(this).each(function(){
		   instances.push(new moveItItem($(this)));
		 });

		 window.onscroll = function(){
		   var scrollTop = $window.scrollTop();
		   instances.forEach(function(inst){
		     inst.update(scrollTop);
		   });
		 }
		}

		var moveItItem = function(el){
		 this.el = $(el);
		 this.speed = parseInt(this.el.attr('data-scroll-speed'));
		};

		moveItItem.prototype.update = function(scrollTop){
		 var pos = scrollTop / this.speed;
		 this.el.css('transform', 'translateY(' + -pos + 'px)');
		};

		$(function(){
		 $('[data-scroll-speed]').moveIt();
		});
		/*Output to browser console to make sure scripts are working*/
		console.log( "Hello curious fella - Jakob Bilstrup 2016" );
});

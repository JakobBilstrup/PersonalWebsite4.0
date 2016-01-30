$(function() {
     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
     $("#menu ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
		console.log( "Hello curious fella - Jakob Bilstrup 2016" );
});

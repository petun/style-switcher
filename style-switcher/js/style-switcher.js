$(function(){

    $('head').append('<link rel="stylesheet" href="style-switcher/font-awesome/css/font-awesome.min.css" type="text/css" />');
	$('head').append('<link rel="stylesheet" href="style-switcher/css/style-switcher.css" type="text/css" />');
	$('head').append('<script type="text/javascript" src="style-switcher/js/jquery.cookie.js"></script>');

	//Style container
	var switcher = $('<div class="switcher"><span class="switch-h">Выберите фон сайта <b>petun.ru</b></span><span class="switch"><i        class="fa fa-gear"></i></span><h4>Выберите фон сайта</h4>    <hr>    <div class="s-pattern">        <a href="#" data-num="1"><img src="style-switcher/img/1.png"/></a>        <a href="#" data-num="2"><img src="style-switcher/img/2.png"/></a>        <a href="#" data-num="3"><img src="style-switcher/img/3.png"/></a>        <a href="#" data-num="4"><img src="style-switcher/img/4.png"/></a>        <a href="#" data-num="5"><img src="style-switcher/img/5.png"/></a>        <a href="#" data-num="6"><img src="style-switcher/img/6.png"/></a>        <a href="#" data-num="7"><img src="style-switcher/img/7.png"/></a>        <a href="#" data-num="8"><img src="style-switcher/img/8.png"/></a>        <a href="#" data-num="9"><img src="style-switcher/img/9.png"/></a>        <a href="#" data-num="10"><img src="style-switcher/img/10.png"/></a>        <a href="#" data-num="11"><img src="style-switcher/img/11.png"/></a>        <a href="#" data-num="12"><img src="style-switcher/img/12.png"/></a>        <a href="#" data-num="13"><img src="style-switcher/img/13.png"/></a>        <a href="#" data-num="14"><img src="style-switcher/img/14.png"/></a>        <a href="#" data-num="15"><img src="style-switcher/img/15.png"/></a>        <a href="#" data-num="16"><img src="style-switcher/img/16.png"/></a>        <a href="#" data-num="17"><img src="style-switcher/img/17.png"/></a>        <a href="#" data-num="18"><img src="style-switcher/img/18.png"/></a>    <hr></div>');

	$('body').append(switcher);

		// Display after some time
	$(".switcher .switch-h").delay("1500").fadeIn(3000);

	setTimeout(function(){ $('.switcher .switch-h').fadeOut() }, 10000);

	/* Window resize
	$(window).resize(function(){
		var $slidebox=$('.switcher');
		if($(window).width() >= 767){
			$slidebox.animate({left:0},300);
		} else {
			$slidebox.animate({left:-251},300);
		}
	}); */

	// Switcher slide
	/* By Cookie
	if($.cookie('switch')!=null){
		$('.switcher').animate({left:-251},300);
	} */
	$('.switch').click(function() {
		var $slidebox=$('.switcher');
		// var $s_hide=1;
		if($slidebox.css('left')=="-251px"){
		  $slidebox.animate({left:0},300);
		}
		else{
		  $slidebox.animate({left:-251},300);
		  // $.cookie('switch', $s_hide);
		}
	});


	// Color Changer
	// By Cookie
	if($.cookie('braveColor')!=null){
		var color_code = $.cookie('braveColor');
		$('link[id="color_theme"]').attr('href', 'css/styles/'+color_code+'.css');
	}
	// By click
	$('.s-color a').click(function(e){
		e.preventDefault();
		var color_code = $(this).attr('data-code');
		$('link[id="color_theme"]').attr('href', 'css/styles/'+color_code+'.css');
		$.cookie('braveColor', color_code);
	});


	// Layout Changer
	// Using cookie
	if($.cookie('braveLayout')!=null){
		var body = $('body');
		if (!(body.hasClass('no-box'))){
			var layout = $.cookie('braveLayout');
			if (layout == 'wide') {
				body.removeClass('boxed');
			}
			else if (layout == 'box'){
				if(!body.hasClass('boxed')){
					body.addClass('boxed');
				}
			}
		}
	}

	// By selecting
	$('.s-layout').change(function(){
		var body = $('body');
		if (!(body.hasClass('no-box'))){
			var layout = $(this).val();
			if (layout == 'wide') {
				body.removeClass('boxed');
				$.cookie('braveLayout', layout);
			}
			else if (layout == 'box'){
				if(!body.hasClass('boxed')){
					body.addClass('boxed');
					$.cookie('braveLayout', layout);
				}
			}
		}
		else{
			alert('You cannot change layout on this page');
		}
	});

	// Pattern Changer
	$('.s-pattern a').click(function(e){
		e.preventDefault();
		var body = $('body');
		var pattern_num = $(this).attr('data-num');
		console.log(pattern_num);
        body.css('background-image','url("style-switcher/pattern/'+pattern_num+'.png")');
	});


});
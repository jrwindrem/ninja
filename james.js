var $ = jQuery.noConflict();



$(document).ready(function() {
		console.log();

	$.ajax({
        url: 'disclaimer.php',
        success: function(data) {
		var disc = $(data).filter('.disclaimer').html();
            $('div.disclaimer').html(disc);
        }
    });

	$.ajax({
        url: 'statc.php',
        success: function(data) {
		var tab = $(data).find('.table');
            $('div.table').html(tab);
        }
    });

//removes 'enable javascript' message for all but non-js enabled users
	$('#no-script').remove();
		 
	
	/*
	$('<p>Fuck buttons. I\'m a paragraph, and you can click me to do the same thing as toggle, only faster.</p>')
	  .insertAfter('.disclaimer');
	$('p').click(function() {
	  $('.disclaimer').toggle(100);
	});
	*/
	
	$('.table tr').mouseover(function() {
	  $(this).addClass('zebraHover');
	});
	$('.table tr').mouseout(function() {
	  $(this).removeClass('zebraHover');
	});
	
	$('.table tr:even').addClass('zebra');
	
	$('.spoiler').hide();
	$('<input type="button" class="revealer" value="Tell Me!"/>')
	  .insertBefore('.spoiler');
	$('.revealer').click(function(){
	  $(this).hide();
	  $(this).next().fadeIn(900);
	});
	
	$('.disclaimer').animate({
	  padding: '20px',
	  borderBottom: '3px solid #8f8f8f',
	  border: '900px solid #bfbfbf',
	  backgroundColor: 'lightgrey',
	}, 900);

//collapse&expand celeb info on click	
	$('#bio div').hide('puff');
	$('#bio div:first').show('blind');
		
	$('#bio h4').click(function() {
	  $(this).next().toggle('slow');
	});
	
//spoiler hide/reveal
	$('.spoiler').click(function(){
		$(this).hide();
		$(this).prev().fadeIn(500);
	});
	
	
//colorbox
	$('a.gallery').colorbox(
		{
		 rel:'gal',
		});

		
/*	$('table').click(function() 
	{ $(this).animate({
		backgroundColor: 'blue'}, 200);
	}, function() {
	$(this).animate({paddingLeft: '-=15px'}, 200);
	});
	
	$('#hideButton').click(function() {
	  $('.disclaimer').hide('slow');
	});
	
	
	$('h3').mouseenter(function(){
		console.log('hiding!');
	  $(this).hide('slow');
	});
	
	$('#showButton').click(function() {
	  $('.disclaimer').show('fast');
	});
	
	
	$('#toggleButton').click(function() {
	  if ($('#disclaimer').is(':visible')) {
	    $('#disclaimer').hide();
	  } else { 
	$('#disclaimer').show();
	  }
	});
	
	//color animation
	(function(d){d.each(
		["backgroundColor",
		"borderBottomColor",
		"borderLeftColor",
		"borderRightColor",
		"borderTopColor",
		"color",
		"outlineColor"],
		function(f,e){d.fx.step[e]=
			function(g){
				if(!g.colorInit){g.start=c(g.elem,e);
					g.end=b(g.end);
					g.colorInit=true
					}
					g.elem.style[e]="rgb("
					+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))
					+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))
					+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))
					+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;
						if(f&&f.constructor==Array&&f.length==3)
						{return f}
						if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f))
						{return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}
							if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){
								return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}
							if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){
								return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}
							if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){
								return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}
							if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){
								return a.transparent}
								return a[d.trim(f).toLowerCase()]}
							function c(g,e){var f;do{f=d.css(g,e);
								if(f!=""&&f!="transparent"||d.nodeName(g,"body")){
									break}e="backgroundColor"}
									while(g=g.parentNode);
										return b(f)}
										var a={aqua:[0,255,255],
											azure:[240,255,255],
											beige:[245,245,220],
											black:[0,0,0],
											blue:[0,0,255],
											brown:[165,42,42],
											cyan:[0,255,255],
											darkblue:[0,0,139],
											darkcyan:[0,139,139],
											darkgrey:[169,169,169],
											darkgreen:[0,100,0],
											darkkhaki:[189,183,107],
											darkmagenta:[139,0,139],
											darkolivegreen:[85,107,47],
											darkorange:[255,140,0],
											darkorchid:[153,50,204],
											darkred:[139,0,0],
											darksalmon:[233,150,122],
											darkviolet:[148,0,211],
											fuchsia:[255,0,255],
											gold:[255,215,0],
											green:[0,128,0],
											indigo:[75,0,130],
											khaki:[240,230,140],
											lightblue:[173,216,230],
											lightcyan:[224,255,255],
											lightgreen:[144,238,144],
											lightgrey:[211,211,211],
											lightpink:[255,182,193],
											lightyellow:[255,255,224],
											lime:[0,255,0],
											magenta:[255,0,255],
											maroon:[128,0,0],
											navy:[0,0,128],
											olive:[128,128,0],
											orange:[255,165,0],
											pink:[255,192,203],
											purple:[128,0,128],
											violet:[128,0,128],
											red:[255,0,0],
											silver:[192,192,192],
											white:[255,255,255],
											yellow:[255,255,0],
											transparent:[255,255,255]
										}
									});
	*/
	
	$("#toggleButton").click(function(){
	  $("div.disclaimer").toggle(900);
	});
	

			

});
	

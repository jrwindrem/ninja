$(document).ready(function() {




});




function toggleChecks(){
	$('input').each(function(){
		if($(this).is(':checked')){
			$(this).prop('checked', false);		
		}else{
			$(this).prop('checked', true);		
			}
	});
	/*
	if($('input').is(':checked')){
		$('input').each(function(){
			$(this).removeAttr('checked');
		});
	}else{
		$('input').each(function(){
			$(this).attr('checked','checked');
		});
	}*/
	
}

/*function toggleChecksOff(){
			console.log('uncheck');
			$('input').each(function(){
				$(this).attr('checked','!checked');
			});

}


function(){
               if($('input').is(':checked')){
                   $('input').each(function(){
                       $(this).attr('checked','checked')
					                   });
					               }else{
					                   $('input').each(function(){
					                       $(this).removeAttr('checked');
					                   });
					               }
					           }
*/


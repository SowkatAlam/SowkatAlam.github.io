jQuery('body').delegate('span[data-replace]', 'click', function(event){
					event.preventDefault();
					var older_value = jQuery(this).html();
    				jQuery(this)
        			.html(jQuery(this)
        			.attr('data-replace'))
        			.attr('data-replace',older_value);
        		});

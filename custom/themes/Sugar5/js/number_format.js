/*
getCursorPosition credits to 
-MarkB29 (http://stackoverflow.com/users/243443/markb29)
-Max (http://stackoverflow.com/users/43677/max)
original source: http://stackoverflow.com/questions/2897155/get-cursor-position-within-a-text-input-field
*/
(function($) {
    $.fn.getCursorPosition = function() {
        var input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    }
})(jQuery);
/*
I'm not sure where the original setCursorPosition came from, 
if you have credit info contact me at darvas.gabor@soulware.hu
Similar version I found: http://stackoverflow.com/questions/499126/jquery-set-cursor-position-in-text-area
*/
(function($) {
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
})(jQuery);

var dec_sep = (typeof(dec_sep) != 'undefined' && dec_sep != 'null') ? dec_sep : ',';
var grp_sep = (typeof(grp_sep) != 'undefined' && grp_sep != 'null') ? grp_sep : ' ';
var reg_dec_sep = new RegExp(dec_sep, "g");
var reg_dec_def = new RegExp(".", "g");
var reg_grp_sep = new RegExp(grp_sep, "g");


var SWNumberFormatUtils = {

	set_int_format_listeners: function(field_id){

		this.format_int_field(field_id);

		$('#' + field_id).keyup(function(e){
			var original_position = $('#' + field_id).getCursorPosition();
			var original_length = $('#' + field_id).val().length;

			SWNumberFormatUtils.format_int_field(field_id);

			var after_position = $('#' + field_id).getCursorPosition();
			var after_length = $('#' + field_id).val().length;

			if(e.which == 8 || e.keyCode == 8) $('#' + field_id).setCursorPosition(original_position);
			else if(original_length < after_length) $('#' + field_id).setCursorPosition(original_position + 1);
			else if(original_length < after_length + 1) $('#' + field_id).setCursorPosition(original_position);

		});
		$('#' + field_id).change(function(){ SWNumberFormatUtils.format_int_field(field_id); });

	},
	set_number_format_listeners: function(field_id){
	
		//this.format_int_field(field_id);
		this.format_number_field(field_id);

		$('#' + field_id).keyup(function(e){ 

			var original_position = $('#' + field_id).getCursorPosition();
			var original_length = $('#' + field_id).val().length;

			SWNumberFormatUtils.format_number_field(field_id);

			var after_position = $('#' + field_id).getCursorPosition();
			var after_length = $('#' + field_id).val().length;

			if(e.which == 8 || e.keyCode == 8) $('#' + field_id).setCursorPosition(original_position);
			else if(original_length < after_length) $('#' + field_id).setCursorPosition(original_position + 1);
			else if(original_length < after_length + 1) $('#' + field_id).setCursorPosition(original_position);

		});
		$('#' + field_id).change(function(){ SWNumberFormatUtils.format_number_field(field_id); });

	},
	strip_number: function(number){
	
		number = number.replace(reg_grp_sep, '');

		return number;

	},
	format_number: function(number, reverse){

		var number_array = number.split('');

		if(reverse) number_array.reverse();

		var new_array = new Array();

		for(var i = 1; i <= number_array.length; i++){

			new_array.push(number_array[i-1]);
			if(i%3 == 0 && i < number_array.length) new_array.push(grp_sep);

		}

		if(reverse) new_array.reverse();

		return new_array.join("");

	},
	format_int_field: function(field_id){

		var number = $('#' + field_id).val();

		number = this.strip_number(number);
		number = this.format_number(number, true);

		$('#' + field_id).val(number);

	},
	format_number_field: function(field_id){

		var number = $('#' + field_id).val();

		number = SWNumberFormatUtils.format_number_value(number); 

		$('#' + field_id).val(number);

	},
	format_number_value: function(number){

		var number_array = number.split(dec_sep);

		if(this.isset(number_array[0])){

			number_array[0] = this.strip_number(number_array[0]);
			number_array[0] = this.format_number(number_array[0], true);
		}
		if(this.isset(number_array[1])){

			number_array[1] = this.strip_number(number_array[1]);
			number_array[1] = this.format_number(number_array[1], false);
		}
		else if(!this.isset(number_array[1]) && number.match(dec_sep)){
			//number_array[1] = " ";
		}
		
		var number_concat = (this.isset(number_array[0])) ? number_array[0] : "0";
		if(this.isset(number_array[1])) number_concat += dec_sep + number_array[1];

		number = (number_concat != "0") ? number_concat : number; 

		return number

	},
	user_to_default: function(number){
		number = number.replace(reg_dec_sep, '.');
		return number;
	},
	default_to_user: function(number){
		number = number.replace('.', dec_sep);
		return number;
	},
	isset: function(variable){
		return (typeof(variable) != 'undefined' && variable != "");
	},
};

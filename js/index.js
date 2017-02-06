$(function () {

	$('#search_button').button({
		icons:{
			primary: 'ui-icon-search',
		},
	});

	$('#reg').dialog({
		autoOpen:true,
		modal:true,
		resizable:false,
		width:320,
		height:340,
		buttons: {
			'提交':function(){}
		}
	});

	$('#reg').buttonset();
	$('#date').datepicker({
		showOn: 'button',
		//showOn: 'both',
		//buttonText: 'D',
		buttonImage:'img/calendar.gif',
		buttonImageOnly:true,
	});
	$('#reg input[title]').tooltip({
		show:false,
		hide:false,
		position:{
			my:'left-center',
			at:'right+5 center'
		},
	});
	
});



























$(document).ready(function(){
	$("#createAccount").validate({
		rules:{
			firstName:{
				required:true,
				minlength:3
			},
			lastName:{
				required:true,
				minlength:4
			},
			mail:{
				required : true,
				email : true
			},
			createPassword:{
				required:true,
				minlength:6
			},
			confirmPassword:{
				required:true,
				minlength:6,
				equalTo:"#createPassword"
			},
			
			
		},
		messages:{
			firstName:{
				required:"you can't leave this empty",
				minlength:"It consist of 3 characters"
			},
			lastName:{
				required:"you can't leave this empty",
				minlength:"It consist of 4 characters"
			},
			mail:{
				required:"you can't leave this empty",
				email:"Provide valid email"
			},
			createPassword:{
				required:"you can't leave this empty",
				minlength:"It consist of 6 characters"
			},
			confirmPassword:{
				required:"you can't leave this empty",
				minlength:"It consist of 6 characters",
				equalTo:"Password doesn't match"
			},
			
		},
		
		submitHandler: function(form) {
			return false;
		//	form.submit();
		}
	});
	
	
	
	
	
	
});
function validFunction(){
	var fName=document.getElementById('firstName').value;
	var lName=document.getElementById('lastName').value;
	var email=document.getElementById('mail').value;
	var pass1=document.getElementById('createPassword').value;
	var pass2=document.getElementById('confirmPassword').value;
	var mon=document.getElementById('month').value;
	var days=document.getElementById('day').value;
	var years=document.getElementById('year').value;
	var genders=document.getElementById('gender').value;
	 
	if(null==fName||fName==""){
		document.getElementById('firstNameErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('firstNameErr').innerHTML="";
	}
	if(null==lName||lName==""){
		document.getElementById('lastNameErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('lastNameErr').innerHTML="";
	}
	
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	if (atpos<4 || dotpos<atpos+2 || dotpos>=email.length ){
		document.getElementById('mailErr').innerHTML="Provide valid email id";
	}else{
		document.getElementById('mailErr').innerHTML="";
	}
	if(pass1==pass2){
		document.getElementById('confirmPasswordErr').innerHTML="";
	}else{
		document.getElementById('confirmPasswordErr').innerHTML="Password does not match";
	}
	
	if(null==mon||mon==""){
		document.getElementById('monthErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('monthErr').innerHTML="";
	}
	if(null==days||days==""){
		document.getElementById('dayErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('dayErr').innerHTML="";
	}
	if(null==years||years==""){
		document.getElementById('yearErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('yearErr').innerHTML="";
	}
	if(null==genders||genders==""){
		document.getElementById('genderErr').innerHTML="You can't leave this empty.";
	}else{
		document.getElementById('genderErr').innerHTML="";
	}
}
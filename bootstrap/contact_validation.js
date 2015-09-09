function validateForm(){
	
	 var email = document.getElementById("email").value;
    	var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    	var name = document.getElementById("name").value;
    	var subject = document.getElementById("subject").value;
    	var message = document.getElementById("message").value;

	if(email.match(regexp)){
		
	}
	else{
		alert("Please enter a valid email address");
		
	}
	
	 if (name == null || name == "") {
        alert("Please enter your Name");
        
    }


	
	 if (subject == null || subject == "") {
        alert("Please enter something in subject area");
        
    }

    	 if (message == null || message == "") {
        alert("Please type ssome message!");
        
    }    

}
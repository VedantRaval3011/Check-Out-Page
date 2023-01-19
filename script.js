

function validateForm() {
    let name = document.myform.name.value;
    let address = document.myform.address.value;
    let city = document.myform.city.value;
    let num = document.myform.phone.value;
    let emailID = document.myform.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    
    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
    }
    else if(address==null || address==""){
        alert("Address can't be blank");
        return false;
    }
    else if(city==null || city==""){
        alert("City can't be blank");
        return false;
    }
    else if (isNaN(num)){  
        alert("Enter Numeric value only");  
        return false;   
    }
    else if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        return false;
    }
    else{
        alert("Form validation succeeded")
        return true;
    } 

}
    
         
        
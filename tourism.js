

function validateEmail(){
    
    
    
    
    let email = document.getElementById('email')
     let pattern= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let email_error = document.getElementById('email_error')
    console.log(email.value)


  if(email.value.trim()== ''){


          email_error.innerHTML = "Email ID can not be blank"
         return false
  }

  else if (!email.value.match(pattern)){

    email_error.innerHTML = "Invalid Email"
    return true

}



  else{

    email_error.innerHTML = "<p id='emd'>Validated!</p>"
    return false
  }
}



function validatePhoneNum(){
    // alert("Im clicked"); 

    let numformat=  /^[1-9][0-9][0-9]([0-9]|-|.|\s)*[0-9][0-9][0-9]([0-9]|-|.|\s)*[0-9][0-9][0-9][0-9]$/g
    let phoneNum = document.getElementById('phoneNum')
     
    
    let phoneNum_error = document.getElementById('phoneNum_error')
    console.log(phoneNum.value)


  if(phoneNum.value.trim()== ''){


          phoneNum_error.innerHTML = "Phone number can not be blank"
         return false
  }

  

  
  else if (!phoneNum.value.match(numformat)){

    phoneNum_error.innerHTML = "Enter a valid number"
    return false


}

  else{

    phoneNum_error.innerHTML = " <p id='real'>validated!</p>"
    return true
  }
}



function validatePassword(){

    var pass=document.getElementById("pass");
    var password=pass.value;
   
    let passwordScore=0;
  let passformat= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/gm
  
  
    if((password.length<8) && (!passformat) ){
  
      pass_error.innerHTML =" Please enter atleast 8 characters of the combination of number, upper and lower case letters"
    }
    else{
  
      for(i=0;i<password.length;i++){
        const str= password;
  
        const passwordnew= str.split('');
        console.log(passwordnew);
        let result=passwordnew[i].includes("^/[0-9a-zA-Z]$/gm");
  
        do{
           
          console.log(passwordScore)
  
        }
        while(result==true){
          passwordScore += 10;
  
        }
  
         
  
        }
  
  
    }
  
        var strength="";
        var backgroundColor="";
        if(passwordScore <= 30){
          strength="Weak";
          backgroundColor="Red"
        
  
  
        }
  
        else if(passwordScore <= 60){
          strength="Medium";
           backgroundColor="Orange";
        }
  
          else  {
            strength="Strong";
            backgroundColor="green";
    
    
             
          }
  
        
  
  
          pass_error.innerHTML = strength;
  
          pass.style.color= " white";
          pass.style.backgroundColor = backgroundColor;
  
  
        
        }
    
      
  
  
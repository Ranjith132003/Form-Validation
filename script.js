const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const contact = document.querySelector('#contact');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    } 
})
function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const contactVal=contact.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let VInput = true

    if(usernameVal===''){
        VInput=false;
        setError(username,'*required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        VInput = false;
        setError(email,'*required')
    }
    else if(!validateEmail(emailVal)){
        VInput = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(contactVal === ''){
        VInput = false;
        setError(contact,'*required')
    }
    else if(contactVal.length<10){
        VInput = false;
        setError(contact,'Contact must be atleast 10 number long')
    }
    else{
        setSuccess(contact)
    }

    if(passwordVal === ''){
        VInput = false;
        setError(password,'*required')
    }
    else if(passwordVal.length<8){
        VInput = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        VInput = false;
        setError(cpassword,'*required')
    }
    else if(cpasswordVal!==passwordVal){
        VInput = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return VInput;
}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
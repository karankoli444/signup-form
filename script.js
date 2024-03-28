
function valdiateForm(){
   let name=document.querySelector('#user-name');
let email=document.querySelector('#user-email');
let password=document.querySelector('#password').value
let confirm_password=document.querySelector('#confirm-password').value
let error_msg=document.getElementById('error-msg');
let error_second=document.getElementById('error2-msg');
let pop_up=document.querySelector('.pop-up')

 if(password!==confirm_password){
   error_second.innerText='Confirm password do not match';
   return false
 }else if(password.length<8){
   error_msg.innerText='password minimum 8 Character*';
   return false
 }
 else{
  pop_up.classList.add('active');
   error_msg.innerText=''
   error_second.innerText='';
   return true
 }

 }

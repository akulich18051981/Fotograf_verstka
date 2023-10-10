"use strict"; 
const burger = document.querySelector('.burgerbtn');
document.querySelector('.burgerbtn').addEventListener('click', function(){
    document.querySelector('.popup').classList.toggle('open');
})
const closebtn = document.querySelector('.closebtn');
document.querySelector('.closebtn').addEventListener('click', function(){
    document.querySelector('.popup').classList.remove('open');
})
const email = document.querySelector('.email');
const tel = document.querySelector('.tel');
const message = document.querySelector('.message');
const footerbtn = document.querySelector('.footerbtn');
footerbtn.addEventListener('click', function(){
localStorage.setItem(email.value, tel.value,message.value);
 const obj = {
   1:email.value,
   2:tel.value,
   3:message.value
 }
 const respone = JSON.stringify(obj)
 localStorage.setItem(email.value,respone);
 email.value='', 
 tel.value='',
 message.value='';
});


/*
   // this is how to comment in JavaScript
*/

'use strict';
console.log('Here\'s a hidden message');

let today = new Date();
let formateDate = today.toDateString();
let selectElememt = document.getElementById('date');
selectElememt.innerHTML = formateDate;


/* VERIFICATION CODE */

const login_email = document.getElementById('name'),
   login_pass = document.getElementById('pass'),
   reg_email = document.getElementById('regname'),
   reg_pass = document.getElementById('regpass'),
   rereg_pass = document.getElementById('reregpass'),
   login_button = document.getElementById('login_button'),
   reg_button = document.getElementById('reg_button')

function validate_email(field) {
   with (field) {
      apos = value.indexOf("@");
      dotpos = value.lastIndexOf(".");
      if (apos < 1 || dotpos - apos < 2) {
         // alert(alerttxt);
         return false;
      }
      else {
         return true;
      }
   }
}

function validatePassword(fld) {
   var illegalChars = /[\W_]/; // allow only letters and numbers

   if (fld.value == "") {
      // fld.style.background = 'blue';
      error = "You didn't enter a password.\n";
      // alert(error);
      return false;

   } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
      error = "The password is the wrong length. \n";
      // fld.style.background = 'blue';
      // alert(error);
      return false;

   } else if (illegalChars.test(fld.value)) {
      error = "The password contains illegal characters.\n";
      // fld.style.background = 'blue';
      // alert(error);
      return false;

   } else if ((fld.value.search(/[a-zA-Z]+/) == -1) || (fld.value.search(/[0-9]+/) == -1)) {
      error = "The password must contain at least one numeral.\n";
      // fld.style.background = 'blue';
      // alert(error);
      return false;

   } else {
      // fld.style.background = 'White';
   }
   return true;
}

function Redirect(local) {
   window.location.href = local
}

login_button.addEventListener('click', () => {
   if (validate_email(login_email) & validatePassword(login_pass)) {
      // alert('working')
      setTimeout(function () { window.location = "index.html" })
   }
   else {
      alert('Invalid login details : \n Valid Email must be entered \n Password must be alphanumerical and between 8 to 16 charachters')
   }
}, false);

// SIGN UP FORM

function validate_name(fld) {
   var letters = /^[A-Za-z]+$/;
   if (fld.value.match(letters)) {
      return true;
   }
   else {
      // alert("message");
      return false;
   }
}

function validateRePassword(fld1,fld2){
   if(fld1.value==fld2.value)
   {
      return true;
   }
   else
   {
      return false;
   }
}

reg_button.addEventListener('click', () => {
   if (validate_email(reg_email) & validatePassword(reg_pass) & validateRePassword(reg_pass,rereg_pass)) {
      // alert('working')
      alert("You are logged in with the entered credencials :)")
      setTimeout(function () { window.location = "index.html" })
   }
   else {
      alert('Invalid login details : \n Valid Email must be entered \n Password must be alphanumerical and between 8 to 16 charachters')
   }
}, false);

document.getElementById('forgot').addEventListener('click', () => {
   alert('This functionality is not built-in yet for the POC (Alpha 1.0) build, please register with a new id :)')
},false);
/**
 * Variables
 */
const signupButton = document.getElementById('signup-button'),
  loginButton = document.getElementById('login-button'),
  userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)

const email_field = document.getElementById('email_field'),
  submit_button = document.getElementById('login'),
  password_field = document.getElementById('password_field')
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
    fld.style.background = 'Yellow';
    error = "You didn't enter a password.\n";
    // alert(error);
    return false;

  } else if ((fld.value.length < 7) || (fld.value.length > 15)) {
    error = "The password is the wrong length. \n";
    fld.style.background = 'Yellow';
    // alert(error);
    return false;

  } else if (illegalChars.test(fld.value)) {
    error = "The password contains illegal characters.\n";
    fld.style.background = 'Yellow';
    // alert(error);
    return false;

  } else if ((fld.value.search(/[a-zA-Z]+/) == -1) || (fld.value.search(/[0-9]+/) == -1)) {
    error = "The password must contain at least one numeral.\n";
    fld.style.background = 'Yellow';
    // alert(error);
    return false;

  } else {
    fld.style.background = 'White';
  }
  return true;
}

function Redirect(local) {
  window.location.href = local
}

submit_button.addEventListener('click', () => {
  if (validate_email(email_field) & validatePassword(password_field)) {
    // alert('working')
    setTimeout(function () { window.location = "home.html" })
  }
  else {
    alert('Invalid login details : \n Valid Email must be entered \n Password must be alphanumerical and between 8 to 16 charachters')
  }
}, false)

// SIGN UP FORM

const sign_email_field = document.getElementById('sign-email'),
  sign_password_field = document.getElementById('sign-password'),
  signup_button = document.getElementById('signup'),
  sign_name_field = document.getElementById('name_fld')

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

signup_button.addEventListener('click', () => {
  if (validate_email(sign_email_field) & validatePassword(sign_password_field) & validate_name(sign_name_field)) {
    // alert('working')
    alert("You are logged in with the entered credencials :)")
    setTimeout(function () { window.location = "home.html" })
  }
  else {
    alert('Invalid login details : \n Valid Email must be entered \n Password must be alphanumerical and between 8 to 16 charachters')
  }
}, false) 
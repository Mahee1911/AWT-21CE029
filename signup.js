document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const fname = document.getElementById('fname').value;
    const Uname = document.getElementById('Uname').value;
    const Password = document.getElementById('Password').value;
    const Confirm_Password = document.getElementById('Confirm_Password').value;
    const Ph_no = document.getElementById('Ph_no').value;
    const Email = document.getElementById('Email').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const state = document.getElementById('State').value;
    const agreement = document.getElementById('agreement').checked;
  
    let isValid = true;
  
    document.getElementById('fnameError').textContent = '';
    document.getElementById('UnameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmpasswordError').textContent = '';
    document.getElementById('Ph_noError').textContent = '';
    document.getElementById('EmailError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('StateError').textContent = '';
    document.getElementById('agreementError').textContent = '';
  
    if (!fname.match(/^[a-zA-Z]+$/)) {
        document.getElementById('fnameError').style.color="red";
      document.getElementById('fnameError').textContent = '* Enter a valid name';
      isValid = false;
    }
  
    if (!Uname.match(/^[a-zA-Z0-9]+$/)) {
        document.getElementById('UnameError').style.color="red";
      document.getElementById('UnameError').textContent = '* Enter a valid username';
      isValid = false;
    }
  
    if (!Password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/)) {
        document.getElementById('passwordError').style.color="red";
      document.getElementById('passwordError').textContent = '* Password must be alphanumeric with at least one special symbol (@$!%.*#?&) and have a length of 6 to 10 characters';
      isValid = false;
    }
  
    if (Confirm_Password !== Password) {
        document.getElementById('confirmpasswordError').style.color="red";
      document.getElementById('confirmpasswordError').textContent = '* Confirm Password must match the password';
      isValid = false;
    }
  
    if (!Ph_no.match(/^\d{10}$/)) {
        document.getElementById('Ph_noError').style.color="red";
      document.getElementById('Ph_noError').textContent = '* Enter a valid phone number';
      isValid = false;
    }
  
    if (!gender) {
        document.getElementById('genderError').style.color="red";
      document.getElementById('genderError').textContent = '* Select a gender';
      isValid = false;
    }
  
    if (!Email.match(/^[^\s@]+@charusat\.edu\.in$/)) {
        document.getElementById('EmailError').style.color="red";
      document.getElementById('EmailError').textContent = '* Please enter a valid email address ending with @charusat.edu.in';
      isValid = false;
    }
  
    if (state === '') {
        document.getElementById('StateError').style.color="red";
      document.getElementById('StateError').textContent = '* Select a state';
      isValid = false;
    }
  
    if (!agreement) {
        document.getElementById('agreementError').style.color="red";
      document.getElementById('agreementError').textContent = '* You must agree to the terms and conditions';
      isValid = false;
    }
  
    if (isValid) {
      window.location.href = 'login.html';
    }
  });
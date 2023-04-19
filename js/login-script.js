const btnLogin = document.querySelector('.pills__buttons--login');
const btnSignin = document.querySelector('.pills__buttons--signup');
const btnSubmit = document.querySelector('.pills__buttons--submit');
const loginToRegister = document.getElementById('btnLoginRegister');
console.log(loginToRegister);
const loginEl = document.querySelector('.login__form');
const registerEl = document.querySelector('.register__form');
const registerForm = document.querySelector('.register__form--submit');
const loginForm = document.querySelector('.login__form--submit');
console.log(registerForm)


const pill = function () {
    btnLogin.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Login');
        btnSignin.classList.remove('pills__buttons--active');
        btnLogin.classList.add('pills__buttons--active');
        loginEl.classList.remove('half-hidden');
        registerEl.classList.add('half-hidden');
        // // loginEl.style.transform = 'translateX(0%)';
        loginEl.style.left='0%';
        registerEl.style.left='100%';

    });
    btnSignin.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Register')
        btnSignin.classList.add('pills__buttons--active');
        btnLogin.classList.remove('pills__buttons--active');
       // console.log(btnSignin);
          loginEl.classList.add('half-hidden');
         registerEl.classList.remove('half-hidden');
    //     // registerEl.style.transform = 'translateX(0%)';
        loginEl.style.left='-40%';
        registerEl.style.left='0%';
    //    // registerEl.style.left='50px';
    });
    loginToRegister.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Register')
        btnSignin.classList.add('pills__buttons--active');
        btnLogin.classList.remove('pills__buttons--active');
       // console.log(btnSignin);
          loginEl.classList.add('half-hidden');
         registerEl.classList.remove('half-hidden');
    //     // registerEl.style.transform = 'translateX(0%)';
        loginEl.style.left='-40%';
        registerEl.style.left='0%';
    //    // registerEl.style.left='50px';
    })
};
pill();


// const validInputs = function() {
//     const loginInput = document.querySelectorAll('.login__form--outline-control');
//     const RegisterInput = document.querySelector('.register__form--outline-control');
//     const nameId = document.getElementById('loginName');
//     const passwordId = document.getElementById('loginPassword');
//     //const loginLabel= document.querySelectorAll('.login__form--outline-label');
//     const nameLabelId = document.getElementById('nameLabel');
//     const passwordLabelId = document.getElementById('passwordLabel');

//     /* for single login name
//     console.log(nameId.value, passwordId.value);
//     if (nameId.value) {
//         console.log(nameId)
//         console.log(nameLabelId)
//         nameLabelId.style.top = 0;
//         nameLabelId.style.backgroundColor = 'white';
//         nameLabelId.style.fontSize = '85%';
//         console.log('Changed')
//     } else if (nameId.value = '') {
//         nameLabelId.style.top = '+5px';
//         nameLabelId.style.backgroundColor = '';
//         nameLabelId.style.fontSize = '100%';
//         console.log('Normal')
//     } else {
//         nameLabelId.style.top = '+5px';
//         console.log('Abnormal else')
//     }
//     if (passwordId.value) {
//         console.log(passwordId)
//         console.log(passwordLabelId)
//         passwordLabelId.style.top = '+5px';
//         passwordLabelId.style.backgroundColor = 'white';
//         passwordLabelId.style.fontSize = '85%';
//     }
//     */
    
//     /*
//     loginInput.forEach( function (loginvalue) {
//         console.log(loginvalue);
//         console.log(loginvalue.value)
//         if (loginvalue.value) {
//              console.log(loginvalue);
//             for (let i = 0; i < loginvalue.length; i++) {

//                 loginLabel[i].style.top = 0;
//                 loginLabel[i].style.backgroundColor = 'white';
//                 loginLabel[i].style.fontSize = '85%';
//                 console.log('Please enter');
//                  console.log(loginLabel[i]);
//                 console.log(loginLabel)
//             }            
//             // loginLabel.forEach( function (loginLabel) {
//             //     console.log(loginLabel);
//             //     loginLabel.style.top = 0;
//             //     loginLabel.style.backgroundColor = 'white';
//             //     loginLabel.style.fontSize = '85%';
//             //     console.log('Please enter');

//             // });
//             // for (const loginLabels of loginLabel) {
//             //     loginLabels.style.top = 0;
//             //     loginLabels.style.backgroundColor = 'white';
//             //     loginLabels.style.fontSize = '85%';
//             //     console.log('Please enter');
//             //     console.log(loginLabels)
//             // }
            
//             //loginvalue.classList.add('login__form--outline-control:valid ~ label')
//         }
//     })
//     */
// };
// validInputs();


registerForm.addEventListener('click', e => {
	e.preventDefault();
	console.log('Form registered')
	checkInputs();
    //document.getElementById('registerName').value = '';

});
const small = document.querySelector('.register__form--outline-small');
const iconSuccess = document.getElementById('success');
const iconError = document.getElementById('error');
const iconError2 = document.querySelectorAll('.checkmark-circle-outline');

const namee = document.getElementById('registerName');
const username = document.getElementById('registerUsername');
const number = document.getElementById('registerNumber');
const email = document.getElementById('registerEmail');
const password = document.getElementById('registerPassword');
const repeatPassword = document.getElementById('registerRepeatPassword');
const checkRegisterEl = document.querySelector('.register__form--check-input');
const checkRgisterLabelError = document.querySelector('.register__form--check-label-error')
const checkInputs = function () {
    const nameInput = namee.value.trim();
    const usernameInput = username.value.trim();
    const numberInput = +number.value.trim();
    const emailInput = email.value.trim();
    const passwordInput = password.value.trim();
    const repeatPasswordInput = repeatPassword.value.trim();
    //const small = document.querySelector('.register__form--outline-small');

    //  input name
    if (nameInput === '') {
        console.log('Enter');
        setError(namee, 'Enter your name');
    } else if (!isNaN(nameInput)) {
        setError(namee, 'Enter a valid name');
    }
    else {
        console.log('Enter Password');
        setSuccess(namee)
    }

    //input Username
    if (usernameInput === '' || usernameInput === null) {
        console.log('Enter username');
        setError(username, 'Enter a correct username');
       console.log(iconError2)
    } else if (!isNaN(usernameInput)) {
        setError(username, 'Enter a valid name');
    }
    else {
        console.log('Right Username');
        setSuccess(username)
    }

     //input Number
    if (isNaN(numberInput)){
       console.log("it is not a valid number");
       setError(number, 'Enter a correct number');
    } else {
       console.log("it is a valid number");
       //console.log(numberInput.toString().padStart(11, '0'));
       //    const newNumberInput = numberInput.toString().padStart(11, '0');
       //    console.log(newNumberInput)
    console.log(numberInput)
       console.log(numberInput.toString().length);
       if (numberInput.toString().length === 10) {
        console.log(numberInput)
        setSuccess(number)
       } else {
        setError(number, 'The phone number must be 11 digits long')
       }
    }

    // for email addresses
    if(emailInput === '') {
		setError(email, 'Email cannot be blank');
	} else if (!isEmail(emailInput)) {
		setError(email, 'Not a valid email');
	} else {
		setSuccess(email);
	}

    // for password
    if (passwordInput === '') {
        setError(password, 'Enter your password');
    } else if (passwordInput.length <= 3) {
        setError(password, 'Password must be at least 4 characters')
    } else {
        console.log(passwordInput)
        setSuccess(password)
    }

    // for repeat password
    if (repeatPasswordInput === '') {
        setError(repeatPassword, 'Repeat your password');
    } else if (repeatPasswordInput !== passwordInput) {
        setError(repeatPassword, 'Password does not match');
    } else if (repeatPasswordInput.length <= 3) {
        setError(repeatPassword, 'Password must be at least 4 characters') }
    else {
        setSuccess(repeatPassword)
    }

    // For checkbox
    if (checkRegisterEl.checked) {
        console.log('Checking');
        checkRgisterLabelError.style.display = 'none';
    } else {
        console.log('Not checked');
        checkRgisterLabelError.style.display = 'block';
    }
        
};

const setSuccess = function(input) {
    const formControl2 = input.parentElement;
    const formControlInput = formControl2.children[0];
    const formControlError = formControl2.children[1];
    const formControlSuccess = formControl2.children[2];
    const formControlLabel = formControl2.children[3];
    // console.log(formControlSuccess);
    formControlInput.style.border = '2px solid green';
    formControlError.style.visibility = 'hidden';
    formControlSuccess.style.visibility = 'visible';
    formControlSuccess.style.color = 'green';
    formControlLabel.style.visibility = 'hidden'; 
}

const setError = function(input, message) { 
    
    const formControl2 = input.parentElement;
    const formControlInput = formControl2.children[0];
    const formControlError = formControl2.children[1];
    const formControlSuccess = formControl2.children[2];
    const formControlLabel = formControl2.children[3];

    formControlInput.style.border = '2px solid red';
    formControlError.style.visibility = 'visible';
    formControlSuccess.style.visibility = 'hidden';
    // formControlLabel.style.color = 'red';
    formControlLabel.style.visibility = 'visible';
    formControlLabel.textContent = message;
};


const isEmail = function (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

// for login
loginForm.addEventListener('click', e => {
	e.preventDefault();
	console.log('Form login')
	checkInputLogin();

});
const ErrorEl = document.getElementById('error');
const successEl = document.getElementById('success');

const loginNameEl = document.getElementById('loginName');
const loginPasswordEL = document.getElementById('loginPassword');
const loginCheckEl = document.getElementById('loginCheck');
const labelErrorEl = document.querySelector('.login__form--check-label2');

const checkInputLogin = function () {
    const usernameLoginInput = loginNameEl.value.trim();
    const passwordloginInput = loginPasswordEL.value.trim();

    //const small = document.querySelector('.register__form--outline-small');
    //input Username
    if (usernameLoginInput === '' || usernameLoginInput === null) {
        console.log('Enter your registered username');
        setError(loginNameEl, 'Enter your registered username');
       console.log(iconError2)
    } else if (!isNaN(usernameLoginInput)) {
        setError(loginNameEl, 'Enter a valid username');
    } else {
        console.log('Right Username');
        setSuccess(loginNameEl)
    }

    // for password
    if (passwordloginInput === '') {
        setError(loginPasswordEL, 'Enter your registered password');
    } else if (passwordloginInput.length <= 3) {
        setError(loginPasswordEL, 'Password must be at least 4 characters')
    } else {
        setSuccess(loginPasswordEL)
    }

    // For checkbox
    if (loginCheckEl.checked) {
        console.log('Checking');
        labelErrorEl.style.display = 'none';
    } else {
        labelErrorEl.style.display = 'block';
        console.log('Not checked');
    }
};
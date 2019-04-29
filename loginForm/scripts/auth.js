// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLTWHPsQw3ZAXIr2mnkIN4p6mcSFvXImM",
    authDomain: "news-f3662.firebaseapp.com",
    databaseURL: "https://news-f3662.firebaseio.com",
    projectId: "news-f3662",
    storageBucket: "news-f3662.appspot.com",
    messagingSenderId: "902904484132"
};
firebase.initializeApp(config);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
// update firestore settings
db.settings({ timestampsInSnapshots: true });

/ signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['user-email'].value;
    const password = signupForm['user-pass'].value;

    //console.log(email);
    //console.log(password);

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user);
        // close the signup modal & reset form
        //const modal = document.querySelector('#modal-signup');
        //M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['inputEmail'].value;
  const password = loginForm['inputPassword'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    //console.log(cred.user);
    // close the signup modal & reset form
    //const modal = document.querySelector('#modal-login');
    //M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});
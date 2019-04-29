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



// listen for auth status changes
auth.onAuthStateChanged(user => {
    var signIn = document.getElementById("signIn");
    if (user) {
        signIn.innerHTML = "Log out";
    } else {
        signIn.innerHTML = "Sign in / Join";
    }
})

function logout() {
    var signIn = document.getElementById("signIn").innerHTML;
    if (signIn == "Log out") {
        auth.signOut().then(() => {
            console.log('user signed out');
        })
    }
    var redirect = "./loginForm";
    window.location.href = redirect;
}
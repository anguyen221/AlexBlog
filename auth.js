import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCX2p_1Jtb-myXDiPrTnFtu6O4wBB4QigQ",
  authDomain: "alexblog-772b4.firebaseapp.com",
  projectId: "alexblog-772b4",
  storageBucket: "alexblog-772b4.appspot.com",
  messagingSenderId: "467282953953",
  appId: "1:467282953953:web:badc35c42c3f89ec50d9a0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let isSignUp = false;

window.toggleForm = function () {
    isSignUp = !isSignUp;
    document.getElementById("formTitle").innerText = isSignUp ? "Sign Up" : "Login";
    document.getElementById("authButton").innerText = isSignUp ? "Sign Up" : "Login";
    document.getElementById("toggleText").innerHTML = isSignUp
        ? `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`
        : `Don't have an account? <a href="#" onclick="toggleForm()">Sign Up</a>`;
};

window.handleAuth = function () {
    const email = document.getElementById("authEmail").value;
    const password = document.getElementById("authPassword").value;

    if (isSignUp) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Account created! Redirecting...");
                window.location.href = "index.html";
            })
            .catch((error) => alert(error.message));
    } else {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Login successful! Redirecting...");
                window.location.href = "index.html";
            })
            .catch((error) => alert(error.message));
    }
};

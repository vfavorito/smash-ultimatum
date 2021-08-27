import React from "react";
import "./loginWindow.css";
function LoginWindow() {
    // hitting the google login route
    const googleLogin = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    }
    return (
        <div>
            <button id="googleButton" onClick={googleLogin}>
                <i class="loginText fab ">Login with Google</i>
                <i id="googleIcon" class="fab fa-google"></i>
            </button>
        </div>
    )
}

export default LoginWindow;
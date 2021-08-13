import React from "react";
import "./loginWindow.css";
function LoginWindow(){

    const googleLogin = () => {
        window.open(process.env.GOOGLE_URL || "http://localhost:8000/auth/google", "_self");
    }

    return(
        <div>
            <button id="googleButton" onClick={googleLogin}>
            <i class="loginText fab ">Login with Google</i>
             <i id="googleIcon" class="fab fa-google"></i>
            </button>
        </div>
    )
}

export default LoginWindow;
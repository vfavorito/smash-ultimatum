import React from "react";

function LoginWindow(){

    const googleLogin = () => {
        window.open(process.env.GOOGLE_URL || "http://localhost:8080/auth/google", "_self");
    }

    return(
        <div>
            <h1>This is The Login Window</h1>
            <button onClick={googleLogin}>Google+</button>
        </div>
    )
}

export default LoginWindow;
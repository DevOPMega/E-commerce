import "../Style/Sigin.css";
import {useState} from "react";

function Signin(){
    const [inputValue, setInputValue]=useState("");

    return (
        <div className="signin-container">
            <div className="logo">
                <a href="/"><span>Wingo</span> Shop</a>
            </div>
            <div className="form-container">
                <h1>Sign in</h1>
                <div className="form">
                    <form action="" method="post">
                        <span class="input-label">
                            Email or mobile phone number
                        </span><br/>
                        <input type="text" className="form-input-text" onChange={(e)=>setInputValue(e.target.value)} required/>
                        <button type="submit" className="submit-btn">Continue</button>
                    </form>
                </div>
                <div className="signin-description">
                    <span class="signin-description-span">
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </span>
                </div>
                <div className="signin-help">
                    <a href="#"><span className="signin-help-span">Help</span></a>
                </div>
            </div>
        </div>
    )
}
export default Signin;
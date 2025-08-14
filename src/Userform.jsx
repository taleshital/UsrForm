import React from "react";
import "./App.css";

function UserForm() {
    return (
        <div className="page">

            <div className="left-strip"></div>


            <div className="form-section">
                <div className="form-wrapper">
                    <h1 className="form-title">
                        Let’s get started
                        <br />
                        with a few simple steps
                    </h1>

                    <form className="form">
                        <label>Email</label>
                        <input type="email" placeholder="" />

                        <label>FullName</label>
                        <input type="text" placeholder="" />

                        <label>Password</label>
                        <input type="password" placeholder="" />

                        <button type="submit">Sign up</button>

                        <p className="terms">
                            By signing up, you agree to our{" "}
                            <a href="#">Terms of Service</a>.
                        </p>
                        <p className="login-text">
                            Already have an account? <a href="#">Log in</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserForm;

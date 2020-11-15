import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CreateAccount = ({ newUser, setNewUser }) => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        passwordError: "",
        confirmationError: false,
        emailError: "",
        error: ""
    });
    const handleConfirmPassword = event => {
        if (userInfo.password !== event.target.value) {
            const newPass = { ...userInfo };
            newPass.confirmationError = true;
            setUserInfo(newPass);
        }
        else {
            const newPass = { ...userInfo };
            newPass.confirmationError = false;
            setUserInfo(newPass);
        }
    }

    const handleBlur = event => {
        if (event.target.name === "password") {
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
            if (!regex.test(event.target.value)) {
                const dangerText = <Form.Text className="text-danger">Please Fulfill The requirements !</Form.Text>
                const newPass = { ...userInfo };
                newPass.passwordError = dangerText;
                setUserInfo(newPass);
            }
            else {
                const newPass = { ...userInfo };
                newPass.password = event.target.value;
                newPass.passwordError = "";
                setUserInfo(newPass);
            }
        }
        if (event.target.name === "email") {
            // eslint-disable-next-line no-useless-escape
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
            if (!regex.test(event.target.value)) {
                const dangerText = <Form.Text className="text-danger">Email address is not valid!</Form.Text>
                const newPass = { ...userInfo };
                newPass.emailError = dangerText;
                setUserInfo(newPass);
            }
            else {
                const newPass = { ...userInfo };
                newPass.email = event.target.value;
                newPass.emailError = "";
                setUserInfo(newPass);
            }
        }
        if (event.target.name === "fname") {
            const newInfo = { ...userInfo };
            newInfo.name = event.target.value;
            setUserInfo(newInfo);

        }
    }
    return (
        <div className="login-form">
            <Form>
                <h2>Create new Account</h2>
                <br />
                <Form.Group controlId="formBasicEmail">
                    <input className="custom-input" type="text" onBlur={handleBlur} name="fname" placeholder="First Name" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <input className="custom-input" type="text" name="lname" placeholder="Last Name" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <input className="custom-input" onBlur={handleBlur} type="email" name="email" placeholder="Username or Email" required />
                    <Form.Text className="text-muted">
                        {userInfo.emailError}
                    </Form.Text>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <input className="custom-input" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                    <Form.Text className="text-muted">- at least 8 characters
                    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                        - Can contain special characters</Form.Text>
                    {userInfo.passwordError}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <input className="custom-input" type="password" name="confirmPassword" onBlur={handleConfirmPassword} placeholder="Confirm Password" required />
                </Form.Group>
                {userInfo.confirmationError && <Form.Text className="text-danger">Passwords doesn't matched! Please Check again.</Form.Text>}
                <button type="submit" disabled={userInfo.confirmationError} className="submit-btn">Sign Up</button>
            </Form>
            <p className="text-center mt-3">Don't have an Account? <button className="toggle-btn" onClick={() => setNewUser(!newUser)}>Create an Account</button></p>
        </div>
    );
};

export default CreateAccount;
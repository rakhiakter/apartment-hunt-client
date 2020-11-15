import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import googleIcon from '../../img/icon/Group 2.png';
import facebookIcon from '../../img/icon/Group 573.png';
import CreateAccount from '../CreateAccount/CreateAccount';




const Login = () => {
    const [newUser, setNewUser] = useState(false);

    return (
        <div>
            {!newUser ? <div className="login-form">
                <Form>
                    <h2>Login</h2>
                    <br />
                    <Form.Group controlId="formBasicEmail">
                        <input className="custom-input" type="email" name="email" placeholder="Username or Email" required />
                        <Form.Text className="text-muted">
                        </Form.Text>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <input className="custom-input" type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center">
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <button className="toggle-btn">Forgot Password</button>
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                </Form>
                <p className="text-center mt-3">Don't have an Account? <button className="toggle-btn" onClick={() => setNewUser(!newUser)}>Create an Account</button></p>
            </div> :
                <CreateAccount newUser={newUser} setNewUser={setNewUser}></CreateAccount>
            }

            <div className="register-option">
                <div className="fancy-line">
                    <div className="line"></div>
                    <h5>Or</h5>
                    <div className="line"></div>
                </div>
                <div className="login-option">
                    <div className="login-button">
                        <img src={facebookIcon} alt="facebook" className="facebook" />
                        <button className="facebook-login">Continue with Facebook</button>
                    </div>
                    <div className="login-button">
                        <img src={googleIcon} alt="google" className="google" />
                        <button className="google-login">Continue with Google</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
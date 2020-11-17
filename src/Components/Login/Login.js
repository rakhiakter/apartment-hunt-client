import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import googleIcon from '../../logos/Group 573.png';
import facebookIcon from '../../logos/Group 2.png';
import CreateAccount from '../CreateAccount/CreateAccount';
import NavigationBar from '../NavigationBar/NavigationBar';
import { addLoggedInUser } from '../Redux/actions/addInfo';
import { connect } from 'react-redux';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';




const Login = (props) => {
    console.log(props.info)
    const { addLoggedInUser } = props;
    const [newUser, setNewUser] = useState(false);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };

            addLoggedInUser(signedInUser)
            history.replace(from);
            // ...
        }).catch(function (error) {
            console.log(error)
        });
    }

    const handleFBSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };

            addLoggedInUser(signedInUser)
            history.replace(from);
            // ...
        }).catch(function (error) {
            console.log(error)
        });
    }

    return (
        <div>
            <NavigationBar />
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
                        <button className="facebook-login" onClick={handleFBSignIn}>Continue with Facebook</button>
                    </div>
                    <div className="login-button">
                        <img src={googleIcon} alt="google" className="google" />
                        <button className="google-login" onClick={handleGoogleSignIn}>Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

const mapDispatchToProps = {
    addLoggedInUser: addLoggedInUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
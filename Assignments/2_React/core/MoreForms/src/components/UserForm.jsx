import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [hasErr, setHasErr] = useState("false");


    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirm};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");

        setHasBeenSubmitted( true );
    }

    // Validations
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters.");
        }
        else {
            setFirstNameError("");
        }
        checkErrors();
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters.");
        }
        else {
            setLastNameError("");
        }
        checkErrors();
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        }
        else {
            setEmailError("");
        }
        checkErrors();
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        }
        else {
            setPasswordError("");
        }
        checkErrors();
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value != password) {
            setConfirmError("Passwords must match.");
        }
        else {
            setConfirmError("");
        }
        checkErrors();
    }

    const checkErrors = () => {
        if ( handleFirstName || handleLastName || handleEmail || handlePassword || handleConfirm ) {
            setHasErr("true");
        }
        else {
            setHasErr("");
        }
    }
    

    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" value={lastName} onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" value={email} onChange={ handleEmail } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" value={password} onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ""
                    }
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="text" value={confirm} onChange={ handleConfirm } />
                    {
                        confirmError ?
                        <p>{ confirmError }</p> :
                        ""
                    }
                </div>
                {
                    ( !hasErr ) ?
                    <button type="submit" disabled>Create User</button> :
                    <button type="submit">Create User</button> 
                }
            </form>

            <div>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirm }</p>
            </div>
        </div>
    );
};

export default UserForm;
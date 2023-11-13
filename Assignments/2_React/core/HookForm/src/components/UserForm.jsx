import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");


    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirm};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    }


    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="text" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
                </div>
                <button type="submit">Create User</button>
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
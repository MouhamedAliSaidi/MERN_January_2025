import React, { useState, useEffect } from 'react';

function RegistrationForm() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [errors, setErrors] = useState({});

useEffect(() => {
    validateForm();
}, [firstName, lastName, email, password, confirmPassword]);

const validateForm = () => {
    const newErrors = {};
    if (firstName && firstName.length < 2) newErrors.firstName = 'First Name must be at least 2 characters.';
    if (lastName && lastName.length < 2) newErrors.lastName = 'Last Name must be at least 2 characters.';
    if (email && email.length < 8) newErrors.email = 'Email must be at least 8 characters.';
    if (password && password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
    if (password && confirmPassword && password !== confirmPassword) newErrors.confirmPassword = 'Passwords must match.';
    setErrors(newErrors);
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
};

return (
    <div>
    <form>
        <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={firstName} onChange={handleInputChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={lastName} onChange={handleInputChange} />
        {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
        <label>Email Address:</label>
        <input type="email" name="email" value={email} onChange={handleInputChange} />
        {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleInputChange} />
        {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
    </form>
    </div>
);
}

export default RegistrationForm;

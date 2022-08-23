// import React, { useState } from 'react';
// import { validateEmail } from '../../../utils/helpers';

// function Form () {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
    
//     const handleInputChange = (event) => {
//         const { target } = event;
//         const inputType = target.name;
//         const inputValue = target.value;

//         if (inputType === 'name') {
//             setName(inputValue);
//         } else if (input === 'email') {
//             setEmail(inputValue);
//         } else {
//             setMessage(inputValue);
//         }
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();

//         if(!email || !name || !message) {
//             setErrorMessage('This field is required');
//             return;
//         }
//         if (!validateEmail(email)) {
//             setErrorMessage('Please enter a valid email');
//             return;
//         } 
//         alert(`Thank you ${name}. I'll be in touch soon!`)

//         setName('');
//         setEmail('');
//         setMessage('');
//     };
// }

// export default Form;
import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Home from '../Home';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return ( 
        <>
        <div > {!isSubmitted ? ( 
            <>
                <Register submitForm = { submitForm }/> 
                <Login submitForm = { submitForm }/> 
                </>
            ) : ( 
            <Home />
            )
        } 
        </div> 
        </>
    );
};

export default Form;
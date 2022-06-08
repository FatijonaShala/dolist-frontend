import React, {useState} from "react";
import Register from './Register';
import CreateList from "../CreateList";



function Form() {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false)
    const submitForm = () => {
        setFormIsSubmitted(true);
    };

    return ( 
        <div >
         {!formIsSubmitted ?
         ( <Register submitForm={submitForm}/>
          
         ):(
             <CreateList/>
          )};

         

        </div>


    )
}

export default Form
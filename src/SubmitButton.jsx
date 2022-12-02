import React, { useState } from 'react'

function SubmitButton({initialAddress}){
    const [address, setAddress] = useState(initialAddress);
    const [disabledButton, setButton] = useState(false);
    const [submitted, setSubmitted] = useState(false)

    if (!submitted) {
        return(
            <>
                <p className='bold'>You will submit this as your email address:</p>
                <p className='italic'>{address}</p>
                <input placeholder="Enter your email to WIN!" onChange={(e)=>{setAddress(e.target.value)}}/>
                <button type="button" disabled={disabledButton} onClick={(e)=> {e.currentTarget.disabled = true; setSubmitted(true)}}>Submit</button>
            </>
        )
    } else if (submitted) {
        return(
            <>
        <h2>Thank you for playing!</h2>
        <h3>Check your email on Sep 30 to see if you WON!</h3>
        </>
        )
        
    }

    
}

export default SubmitButton
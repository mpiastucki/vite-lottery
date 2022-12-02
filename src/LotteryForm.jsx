import React from 'react'
import SubmitButton from './SubmitButton'
import sunriseImage from "./assetsjohn-towner-CakC6u4d95g-unsplash.jpg"

function LotteryForm(){
    return (
        <>
        <div className='lottery-form'>
            <img className="splash-image" src={sunriseImage} alt="Image of a sunrise"/>
            <h1>Welcome to the Million Dollar Lottery!</h1>
            <SubmitButton initialAddress={"example@email.com"}/>
        </div>
        </>
    )
}

export default LotteryForm
import React from 'react'
import CheckoutRowOne from '../components/CheckOut/CheckoutRowOne'
// import Footer from '../components/Footer/Footer'
import NewFooter from '../components/Footer/NewFooter'
import HeaderThree from '../components/Header/HeaderThree'

function CheckOut() {
    return (
        <div>
            <HeaderThree/>
            <div className='body__wrapper putAtMiddle'>
            <CheckoutRowOne/>
            
            </div>
            <NewFooter/>
            
        </div>
    )
}

export default CheckOut

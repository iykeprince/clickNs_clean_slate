import React from 'react'
import CheckAddressLink from '../../components/CheckOut/CheckAddressLink'
import NewFooter from '../../components/Footer/NewFooter'
import HeaderThree from '../../components/Header/HeaderThree'

function ChangeAddress() {
    return (
        <div>
            <HeaderThree/>
            <div className='body__wrapper putAtMiddle'>
            <CheckAddressLink/>
            
            </div>
            <NewFooter/>
            
        </div>
    )
}

export default ChangeAddress

import React from 'react'
import NewFooter from '../../components/Footer/NewFooter'
import HeaderThree from '../../components/Header/HeaderThree'
import UpdateAddressLink from '../../components/CheckOut/UpdateAddressLink'

export default function UpdateAddress() {
    return (
        <div>
        <HeaderThree/>
        <div className='body__wrapper putAtMiddle'>
        <UpdateAddressLink/>
        </div>
        <NewFooter/>
        
    </div>
    )
}

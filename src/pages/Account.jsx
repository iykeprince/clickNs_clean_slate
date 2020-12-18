import React from 'react'
import AccountRowOne from '../components/Account/AccountRowOne'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Account() {
    return (
        <div>
            <Header/>
            <div className='body__wrapper'>
            <AccountRowOne/>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Account

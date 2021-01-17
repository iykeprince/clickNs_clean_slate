import React from 'react'
// import AccountRowOne from '../components/Account/AccountRowOne'
import AccountRowOne from '../components/Account/AccountRowOne'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Account() {
    return (
        <div>
            <Header showHamburger={true}/>
            <div className='body__wrapper putAtMiddle'>
            <AccountRowOne/>
            </div>
            <Footer/>
            
        </div>
    )
}

export default Account

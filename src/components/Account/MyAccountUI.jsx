import React from 'react'
import { Col, Row } from 'react-bootstrap'

function MyAccountUI() {
    return (
        <div>
            <h3 className="titleHeader">My Account</h3>
             <Row>
                 <Col md='6' className="aColContainer">
                 <div>
                     <h6 >ACCOUNT DETAILS</h6>
                     <h6>Bukky Owolabi</h6>
                     <p>bukkytohgbesky@example.com</p>
                     <p>ACCOUNT DETAILS</p>
                 </div>
                 </Col>
                 <Col md='6' className="aColContainer">
                 <div>
                        <h6>ADDRESS BOOK</h6>
                        <h6>Your default shipping address:</h6>
                        <p>Bukky Owolabi
                            60 Landbridge
                            Oniru-Estate, Victoria, Lagos
                            +2349108000984
                            </p>
                    </div>
                 </Col>
                    
                 
             </Row>

             <Row>
             <Col md='6' className="aColContainer">
                 <h6>NEWSLETTER PREFERENCES</h6>
                 <h6>You are currently not subscribed to any of our newsletters.</h6>
                 <h6>EDIT NEWSLETTER PREFERENCES</h6>
                 </Col>

                 <Col md='6' className="aColContainer">
                 <h6>WOOZEEE BALANCE</h6>
                 <p>₦ 19,650</p>
                 </Col>
             </Row>
        </div>
    )
}

export default MyAccountUI

import React from 'react'
// import styles from './BodyNav.module.css'
import { Container, Row, Col} from 'react-bootstrap';

function BodyNav() {
    return (
        <div>
            <Container fluid className="bodyNav__container">
                <Row  className="row1">
                    <Col  md= '6' lg='3'>
                        <div className="bodyNavGroup1">
                        <img src="/images/BodyNav/OfficialStores.svg" alt="" className="bodyNav__icon"/>
                        <span className="bodyNav__text">Official Stores</span>
                        </div>
                    </Col>

                    <Col md= '6' lg='3'>
                    <div className="bodyNavGroup"> 
                    <img src="/images/BodyNav/utilities.svg" alt="" className="bodyNav__icon"/>
                    <span className="bodyNav__text">woozeee utilities</span>
                    </div>
                    </Col>
                
                    <Col md= '6' lg='3'>
                    <div className="bodyNavGroup"> 
                    <img src="/images/BodyNav/dispatch.svg" alt="" className="bodyNav__icon"/>
                    <span className="bodyNav__text">woozeee express</span>
                    </div>
                    </Col>
                    <Col md= '6' lg='3'>
                    <div className="bodyNavGroup4">
                    <img src="/images/BodyNav/Events.svg" alt="" className="bodyNav__icon"/>
                    <span className="bodyNav__text">woozeee events</span>
                    </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default BodyNav

import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import DealsSectionContent from '../DealsSectionContent/DealsSectionContent'
import styles from './DealsSectionFour.css'

function DealsSectionFour() {
    return (
        <div>
            <Container fluid className={styles.dealsSectionContainer}>
                <Row>
                    <Col md='12' className={styles.dealsSectionTitle__container}>
                        <div className={styles.dealsSectionTitle}>
                        <p>Deals of The Day</p>
                        </div>
                    </Col>
                    <DealsSectionContent/>
                </Row>
            </Container> 
        </div>
    )
}

export default DealsSectionFour

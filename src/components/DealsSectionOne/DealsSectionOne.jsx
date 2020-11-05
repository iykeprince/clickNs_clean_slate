import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../DealsSection/DealsSection.module.css'

function DealsSectionOne() {
    return (
        <div>
            <Container fluid className={styles.dealsSectionContainer}>
                <Row>
                    <Col md='12' className={styles.dealsSectionTitle__container}>
                        <div className={styles.dealsSectionTitle}>
                        <p>Recommended for you</p>
                        </div>
                    </Col>
                    
                    
                    </Row>
                    </Container>
        </div>
    )
}

export default DealsSectionOne

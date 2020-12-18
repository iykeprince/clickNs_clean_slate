import React from 'react'
import styles from './SingleImageCard.module.css'
import {Row, Col, Container} from 'react-bootstrap'; 

function SingleImageCard() {
    return (
        <div  className={styles.imageDisplaySection}>
            <Container fluid className={styles.displayImageContainer}>
                <Row className={styles.displayImage__wrapper}>
                    <Col sm='12' >
                        <img src="/images/imageSection/blackFridayImage.png" alt="" className={styles.displayImage}/>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default SingleImageCard

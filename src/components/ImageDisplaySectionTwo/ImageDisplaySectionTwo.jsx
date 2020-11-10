import React from 'react'
import styles from '../ImageDisplaySection/ImageDisplaySection.module.css'
import { Container, Row, Col} from 'react-bootstrap';

function ImageDisplaySectionTwo() {
    return (
        <div className={styles.imageDisplaySection}>
            <Container fluid className={styles.displayImageContainer}>
                <Row className={styles.displayImage__wrapper}>
                    <Col sm='6' >
                        <img src="/images/imageSection/ShoesAd.png" alt="" className={styles.displayImage}/>
                    </Col>
                    <Col sm='6'>
                        <img src="/images/imageSection/youghurtAd.png" alt="" className={styles.displayImage}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ImageDisplaySectionTwo

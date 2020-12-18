import React from 'react'
import styles from './ImageDisplaySection.module.css'
import { Container, Row, Col} from 'react-bootstrap';

function ImageDisplaySection() {
    return (
        <div  className={styles.imageDisplaySection}>
            <Container fluid className={styles.displayImageContainer}>
                <Row className={styles.displayImage__wrapper}>
                    <Col sm='6' >
                        <img src="/images/imageSection/megaSale.png" alt="" className={styles.displayImage}/>
                    </Col>
                    <Col sm='6'>
                        <img src="/images/imageSection/nailPolish.png" alt="" className={styles.displayImage}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ImageDisplaySection

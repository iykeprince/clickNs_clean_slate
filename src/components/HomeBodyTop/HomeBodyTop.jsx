import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import MiddleBar from '../MiddleBar/MiddleBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import styles from './HomeBodyTop.module.css'
import { Container, Row, Col} from 'react-bootstrap';


function HomeBodyTop() {
    return (
        <div>
            <Container fluid className={styles.container}>
                <Row>
                    <Col lg='3'>
                    <LeftSideBar  className={styles.leftSideBar}/>
                    </Col>

                    <Col lg='6'>
                    <MiddleBar  className={styles.middleBar}/>
                    </Col>

                    <Col lg='3'>
                    <RightSideBar className={styles.rightSideBar}/>
                    </Col>
                </Row>
            </Container>
            
        </div>

    )
}

export default HomeBodyTop

import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import MiddleBar from '../MiddleBar/MiddleBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import styles from './HomeBodyTop.module.css'
import { Container} from 'react-bootstrap';
import './HomeBodyTop.module.css'

function HomeBodyTop() {
    return (
        <div>
            <Container fluid className={styles.container}>
                <div className={styles.grid__Container}>
                    <div class={styles.griditem}>
                    <LeftSideBar className={styles.leftSideBar} />
                    </div>

                    <div className={styles.griditem}>
                    <MiddleBar  className={styles.middleBar}/>
                    </div>

                    <div className={styles.griditem}>
                    <RightSideBar className={styles.rightSideBar}/>
                    </div>
                </div>
            </Container>
            
        </div>

    )
}

export default HomeBodyTop

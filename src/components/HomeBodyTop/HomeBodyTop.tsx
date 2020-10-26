import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import MiddleBar from '../MiddleBar/MiddleBar'
import RightSideBar from '../RightSideBar/RightSideBar'
import styles from './HomeBodyTop.module.css'

function HomeBodyTop() {
    return (
        <div className={styles.homeBodyTop__container}>
            <LeftSideBar />
            <MiddleBar/>
            <RightSideBar/>
        </div>
    )
}

export default HomeBodyTop

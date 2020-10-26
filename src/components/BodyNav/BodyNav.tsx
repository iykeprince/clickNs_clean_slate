import React from 'react'
import styles from './BodyNav.module.css'


function BodyNav() {
    return (
        <div className={styles.bodyNav__container}>

            <div className={styles.bodyNav__wrapper}>
                <img src="/images/BodyNav/OfficialStore.svg" alt="" className={styles.bodyNav__icon}/>
                <span className={styles.bodyNav__text1}>Official Stores</span>
            </div>

            <div className={styles.bodyNav__wrapper}>
                <img src="/images/BodyNav/Naira.svg" alt="" className={styles.bodyNav__icon}/>
                <span className={styles.bodyNav__text1}>woozeee utilities</span>
            </div>

            <div className={styles.bodyNav__wrapper}>
                <img src="/images/BodyNav/Express.svg" alt="" className={styles.bodyNav__icon}/>
                <span className={styles.bodyNav__text1}>woozeee express</span>
            </div>

            <div className={styles.bodyNav__wrapper}>
                <img src="/images/BodyNav/Events.svg" alt="" className={styles.bodyNav__icon}/>
                <span className={styles.bodyNav__text1}>woozeee events</span>
            </div>

        </div>
    )
}

export default BodyNav

import React from 'react'
import styles from './RightSideBar.module.css'

function RightSideBar() {
    return (
        <div className={styles.rightSidebar__container}>
            <div  className={styles.rightSidebar__top}>
            <div>
                <img src='/images/RightSideBar/Quality.svg' alt="icon" className={styles.rightSideBar__icon} />
                <span className={styles.rightSideBar__text1}>Quality Assurance</span><br/>
                <span className={styles.rightSideBar__text2}>Products you can trust</span>
                </div>

                <div>
                <img src='/images/RightSideBar/refund.svg' alt="icon" className={styles.rightSideBar__icon} />
                <span className={styles.rightSideBar__text1}>Refund Assurance</span><br/>
                <span className={styles.rightSideBar__text2}>Quick Refund</span>
                </div>

                <div>
                <img src='/images/RightSideBar/Badge.svg' alt="icon" className={styles.rightSideBar__icon} />
                <span className={styles.rightSideBar__text1}>Become a Seller</span><br/>
                <span className={styles.rightSideBar__text2}>Trade on the Platform</span>
                </div>
            </div>

            <div  className={styles.rightSidebar__bottom}>
                <img src="/images/RightSideBar/animationSale.gif" className={styles.rightSidebar__bottomImage} alt=""/>
            </div>
        </div>
        
    )
}

export default RightSideBar

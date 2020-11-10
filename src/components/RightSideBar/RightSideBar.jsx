import React from 'react'
import styles from './RightSideBar.module.css'

function RightSideBar() {
    return (
        <div className={styles.rightSidebar__container}>
            <div  className={styles.rightSidebar__top}>
            <div>
                <img src='/images/RightSideBar/qualityAssurance.svg' alt="icon" className={styles.rightSideBar__icon} />
                <span className={styles.rightSideBar__text1}>QUALITY ASSURANCE</span><br/>
                <span className={styles.rightSideBar__text2}>Products you can trust</span>
                </div>

                <div>
                <img src='/images/RightSideBar/refundAssurance.svg' alt="icon" className={styles.rightSideBar__icon} />
                <span className={styles.rightSideBar__text1}>REFUND ASSURANCE</span><br/>
                <span className={styles.rightSideBar__text2}>Quick Refund</span>
                </div>

                <div>
                <img src='/images/RightSideBar/sellerBadge.svg' alt="icon" className={styles.rightSideBar__icon} />
                <span className={styles.rightSideBar__text1}>BECOME A SELLER</span><br/>
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

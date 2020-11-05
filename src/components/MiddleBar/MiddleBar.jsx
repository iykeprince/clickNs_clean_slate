import React from 'react'
import styles from './MiddleBar.module.css'
import {Carousel } from 'react-bootstrap';

function MiddleBar() {
    return (
        <div  className={styles.Carousel__container}>
            <Carousel>
                    <Carousel.Item  className={styles.CarouselItem}>
                    <img src="/images/midBar/wristwatch.jpeg" alt="" className={`d-block w-100`}/>
                    </Carousel.Item>

                    {/* <Carousel.Item  className={styles.CarouselItem}>
                    <img src="/images/midBar/MaskGroup1.png" alt="" className={`d-block w-100`}/>
                     className={style.midBarAdvert}>
                    </Carousel.Item>

                    <Carousel.Item  className={styles.CarouselItem}>
                    <img src="/images/MaskGroup2.png" alt="" className={`d-block w-100`}/>
                    </Carousel.Item> */}

                    </Carousel>
                    
        </div>
    )
}

export default MiddleBar

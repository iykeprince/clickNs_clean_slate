import React from 'react'
import styles from './MiddleBar.module.css'
import {Carousel } from 'react-bootstrap';
import './MiddleBar.module.css'

function MiddleBar() {
    return (
        <div  className={styles.Carousel__container}>
            <Carousel>
                    <Carousel.Item  className={styles.CarouselItem}>
                    {/* <img src="/images/midBar/woozBlackFriday.png" alt="" className='d-block w-100 imgSize'/> */}
                    <img src="/images/midBar/redBlackImage.png" alt="" className='d-block w-100 imgSize'/>
                    <Carousel.Caption>
                 
                        </Carousel.Caption>
                    </Carousel.Item>
                    

                    {/* <Carousel.Item  className={styles.CarouselItem}>
                    <img src="/images/midBar/blackgold.png" alt="" className='d-block w-100 imgSize'/>
                    <Carousel.Caption>
                 
                        </Carousel.Caption>
                    
                    </Carousel.Item> */}

                     {/*<Carousel.Item  className={styles.CarouselItem}>
                    <img src="/images/MaskGroup2.png" alt="" className={`d-block w-100`}/>
                    </Carousel.Item> */}

                    </Carousel>
                    
        </div>
    )
}

export default MiddleBar

import React from 'react'
import {Carousel } from 'react-bootstrap';
import carouselImg from '../../../assets/carouselImg.svg'

function MiddleBar() {
    return (
        <div  className='Carousel__container'>
            <Carousel className='h-100'>
                    <Carousel.Item  className='CarouselItem'>
                    <img src={carouselImg} alt="" className='d-block w-100 h-100 imgSize'/>
                    <Carousel.Caption>
                 
                        </Carousel.Caption>
                    </Carousel.Item>
                    

                    <Carousel.Item  className='CarouselItem'>
                    <img src={carouselImg} alt="" className='d-block w-100 h-100 imgSize'/>
                    <Carousel.Caption>
                 
                        </Carousel.Caption>
                    </Carousel.Item>

                     {/*<Carousel.Item  className='CarouselItem'>
                    <img src={carouselImg} alt="" className='d-block w-100 h-100 imgSize'/>
                    <Carousel.Caption>
                 
                        </Carousel.Caption>
                    </Carousel.Item> */}

                    </Carousel>
                    
        </div>
    )
}

export default MiddleBar

import React from 'react'
import { Container, Row} from 'react-bootstrap';

export default function DoubleImage(prop) {
    return (
        <div  className='imageDisplaySection'>
            <Container fluid className='displayImageContainer'>
                <Row className='displayImage__wrapper'>
                    <div className="col-6" >
                        <img src={prop.img1} alt="" className='displayImage'/>
                    </div>
                    <div className="col-6">
                        <img src={prop.img2} alt="" className='displayImage'/>
                    </div>
                </Row>
            </Container>
        </div>
    )
}


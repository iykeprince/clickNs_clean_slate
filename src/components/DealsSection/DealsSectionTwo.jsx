import React from 'react'
// import styles from './DealsSectionTwo.module.css'
import {  Container, Row, Col  } from 'react-bootstrap';
import samsung1 from "../../assets/images/Products/samsungGalaxy.png";
import shoe1 from "../../assets/images/Products/shoe.png";
import laptop1 from "../../assets/images/Products/laptop.png";
import dress1 from "../../assets/images/Products/dress.png";
import fridge1 from "../../assets/images/Products/fridge.png";
import DealsSectionContent from './DealsSectionContent';

function DealsSectionTwo() {
    return (
        <div className='dealsSectionTwo'>
             <Container fluid className='dealsSectionContainer'>
                <Row>
                    <Col md='12' className='dealsSectionTitle__container'>
                        <div className='dealsSectionTitle bgRed'>
                        <p>Deals of The Day</p>
                        </div>
                    </Col>
                    
                    <DealsSectionContent productImage={samsung1}/>
                    <DealsSectionContent productImage={shoe1}/>
                    <DealsSectionContent productImage={laptop1}/>
                    <DealsSectionContent productImage={dress1}/>
                    <DealsSectionContent productImage={fridge1}/>
                    <DealsSectionContent productImage={shoe1}/>
                </Row>
            </Container> 
        </div>
    )
}

export default DealsSectionTwo

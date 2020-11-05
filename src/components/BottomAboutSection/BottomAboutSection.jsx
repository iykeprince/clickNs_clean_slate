import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from './BottomAboutSection.module.css'

function BottomAboutSection() {
    return (
        <div className={styles.bottomAboutSection__container}>
            <Container fluid className={styles.bottomAboutSection__wrapper}>
                <Row>
                    <Col md='12' className={styles.bottomAboutSection__title}>
                        <p>Woozeee - The No. 1 Market Place For Smart People</p>
                    </Col>
                </Row>
                <Row>
                    <Col md='12' className={styles.bottomAboutSection__text}>
                    <p>“woozeee” is a lifestyle platform that combines the power of a social media community and an
                        ecommerce marketplace to create an experience like no other. Our social media platform offers a
                        unique experience to fun loving and business
                        minded individuals whilst catering to their daily activities. The service offerings available to
                        our community are categorized into the following baskets: “Money Matters”; which tend to our
                        users’ financial needs, “On the Go”;
                        which tends to our users’ transport needs, “Click and Shop”; to satisfy our users’ retail needs.
                        woozeee also offers unique features such as “Click and Play” for our thrill-seeking users who
                        love sports, games and staking money.
                        Additionally, other useful and beneficial features provided on the woozeee e-commerce platform
                        include “Ask a Doc” which gives users’ quick access to the nearest medical professional
                        services, “Ask a Lawyer” which gives users access
                        to the nearest lawyers available and much more. All these are available at your fingertips. We
                        offer rewards to our customers and also ensure that they always get the best value using our
                        three channels (e-commerce, mobile and
                        kiosks). Our rewards include, discounted rates for certain products or outlets, flexible payment
                        and more. The woozeee app provides a bouquet of secure and convenient payment options for all
                        transactions made on our platform such as payments by debit card, bank transfers, POS and a wallet system. Come on board the platform
                        of the future. We are about the Power of the 3 Es; Entertainment, Elegance and Excellence. It is
                        Eazeee with woozeee.
                    </p>                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomAboutSection

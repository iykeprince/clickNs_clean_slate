import React from 'react'
import {Link} from 'react-router-dom'
// import {} from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import PhoneTablets from '../components/PhoneTablets/PhoneTablets'
import PhoneTabletsII from '../components/PhoneTabletsII/PhoneTabletsII'
import PhoneTabletsIII from '../components/PhoneTabletsIII/PhoneTabletsIII'
import PhoneTabletsIV from '../PhoneTabletsIV/PhoneTabletsIV'

function CategoryList() {
    return (
        <div>
            <Header />

  

<div className="containe">
    
    <div className="top_banner">
       
    </div>




</div>
<div className="home__wrapper">

<ol className="breadcrumb ">
      <li class="breadcrumb-item">
          
        <Link to="/" class="active"><b>Home</b></Link>
      </li>
      <li class="breadcrumb-item active">Phones & Tablets</li>
 </ol>


    {/* <Row>
        <Col md={12}> */}
          
                <div className="top_badge">          
                      <img 
                src="./images/phones/2924 1.png"
                className="top_banner_img"
                alt="top_banner_image"
        />
        </div>




        <PhoneTablets/>
        
        <div class="grid-container">
                <div class="grid-item">
                    <img 
                    src="./images/phones/image 790.png"
                    alt="fun images"
                    className="funImages"
                    />
                </div>
                <div class="grid-item">
                <img 
                    src="./images/phones/1111.png"
                    alt="fun images"
                    className="funImages"
                    />
                </div>
                <div class="grid-item">
                <img 
                    src="./images/phones/2924 1 (1).png"
                    alt="fun images"
                    className="funImages"
                    />    
                </div>  

        </div>

        <PhoneTabletsII/>
           

        <PhoneTabletsIII/>

        <PhoneTabletsIV/>

        <br/>
        <br/><br/>


        <div className="top_badge">

        <img 
                src="./images/phones/21914 1.png"
                // className="top_banner_img"
                alt="top_banner_image"

                style={{    width: "100%", marginTop:" 3rem !important"}}
        /></div>
{/*         
</div>
        </Col>

    </Row> */}
</div>

            <Footer />
        </div>
    )
}

export default CategoryList

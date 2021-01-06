import React from 'react'
import Header from "../components/Header/Header";
import HeaderTwo from "../components/Header/HeaderTwo";
import Footer from "../components/Footer/Footer";
import HomeBodyTop from "../components/HomeBodyTop/HomeBodyTop";
import BodyNav from "../components/BodyNav/BodyNav";
import BottomAboutSection from "../components/BottomAboutSection/BottomAboutSection";
import DealsSection from "../components/DealsSection/DealsSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import DealsSectionTwo from "../components/DealsSection/DealsSectionTwo";
import ImageDisplaySection from "../components/ImageDisplaySection/ImageDisplaySection";
import SingleImageCard from '../components/SingleImageCard/SingleImageCard';
import ImageDisplaySectionTwo from '../components/ImageDisplaySectionTwo/ImageDisplaySectionTwo';
import DealsSectionFour from '../components/DealsSection/DealsSectionFour';
import DealsSectionThree from '../components/DealsSection/DealsSectionThree';


function Home() {
    return (
        <div>
            
            {/* <Header /> */}
            <HeaderTwo />
            <div className='body__wrapper putAtMiddle'>
            <HomeBodyTop />
            <BodyNav />
            <DealsSection />
            <DealsSectionTwo/>
            <SingleImageCard/>
            <FeaturedSection />
            <ImageDisplaySectionTwo/>
            <DealsSectionThree/>
            <DealsSectionFour/>
            <ImageDisplaySection/>
            <BottomAboutSection />
            </div>
            <Footer/>
        </div>
    )
}

export default Home

import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HomeBodyTop from "../components/HomeBodyTop/HomeBodyTop";
import BodyNav from "../components/BodyNav/BodyNav";
import BottomAboutSection from "../components/BottomAboutSection/BottomAboutSection";
import DealsSection from "../components/DealsSection/DealsSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import DealsSectionTwo from "../components/DealsSectionTwo/DealsSectionTwo";
import ImageDisplaySection from "../components/ImageDisplaySection/ImageDisplaySection";
import SingleImageCard from '../components/SingleImageCard/SingleImageCard';

function Home() {
    return (
        <div>
            <Header />
            <HomeBodyTop />
            <BodyNav />
            <DealsSection />
            <DealsSectionTwo/>
            <SingleImageCard/>
            <FeaturedSection />
            <ImageDisplaySection/>
            <BottomAboutSection />
            <Footer/>
        </div>
    )
}

export default Home

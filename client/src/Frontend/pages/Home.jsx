import React from "react";
import HeroSection from '../Components/UI/HeroSection'
import LiveAuction  from "../Components/UI/LiveAuction/LiveAuction";
import Sellersec from "../Components/UI/SellerSection/SellerSection";
import TrendingSec from "../Components/UI/TrendingSection/TredningSec";
import StepSec from "../Components/UI/StepSection/StepSection";

const Home = () =>{
    return<>
      <HeroSection/>
      <LiveAuction/>
      <Sellersec/>
      <TrendingSec/>
      <StepSec/>
    </>
}

export default Home;
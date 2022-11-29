import React from "react";

import {Routes, Route, Navigate} from "react-router-dom";

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Wallet from '../pages/Wallet'
import Create from '../pages/Create'
import EditProfile from '../pages/EditProfile'
import Market from '../pages/Market'
import NfftDetails from '../pages/NftDeails'
import SellerP from '../pages/SellerProfile'


const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to ='/home'/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/market" element={<Market/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit" element={<EditProfile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/nftdetails" element={<NfftDetails/>} />
        <Route path="/sellerp" element={<SellerP/>} />
        <Route path="/market/:id" element={<NfftDetails/>}/>
    </Routes>
}

export default Routers;
import React from "react";
import './LiveAuction.css';
import {Container,Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import NFT__DATA from '../../../Assets/Data/Data'
import Nft_card from "../NFT_card/Nft_card";

const LiveAuction = () => {

    return<section>
      <Container>
        <Row>
          <Col lg = '12' className= "mb-5">
            <div className="live_auction_top d-flex align-items-center justify-content-between">
              <h3>
                Live Auction
              </h3>
              <span>
                <Link to='/market'>Explore</Link>
              </span>
            </div>
          </Col>
          {NFT__DATA.slice(0,4).map((item) => (
            <Col lg ='3'>
              <div className="mb-5">
                <Nft_card key={item.id} item = {item}/>
              </div>
            </Col>                
          ))}
        </Row>
      </Container>
    </section>
}

export default LiveAuction;
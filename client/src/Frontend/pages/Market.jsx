import React from "react";
import CommonSection from "../Components/UI/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import Nft_card from '../Components/UI/NFT_card/Nft_card';
import NFT__DATA from '../Assets/Data/Data';
import '../Styles/Market.css';


const Market = ()=>{


    const handleCat = () =>{

    }

    const handleItem = () =>{
      
    }

    const handleSort = () =>{
      
    }


    return<>
      <CommonSection title="MarketPlace"/>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <div className="market_prod_filter d-flex align-items-center justify-content-between">
                <div className="filter_left d-flex align-items-center gap-5">
                  <div className="all_cat_fil">
                   
                    <select onChange={handleCat}>
                      <option>All categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-specific">Domain-specific</option>
                      <option value="Metaverse">Metaverse</option>
                      <option value="trending">Trending</option>
                    </select>
                  </div>

                  <div className="all_item_fil">            
                    <select onChange={handleItem}>
                      <option>All Items</option>
                      <option value="single">Single Items</option>
                      <option value="collections">Collections</option>
                    </select>
                  </div>

                </div>
                <div className="filter_right">
                  
                  <select onChange={handleSort}>
                    <option>Sort by</option>
                    <option value="high">Highest Price</option>
                    <option value="low">Lowest price</option>
                    <option value="mid">Mid price</option>
                  </select>
                </div>
              </div>
            </Col>
            {
              NFT__DATA.map((item) => (
                <Col lg='3' md='4' sm='6' className="mb-5" key={item}>
                  <Nft_card item ={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

    </>
}

export default Market;
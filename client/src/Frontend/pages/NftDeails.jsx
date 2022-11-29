import React from "react";
import CommonSection from "../Components/UI/CommonSection/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import NFT__DATA from "../Assets/Data/Data";
import '../Styles/NftDetails.css';
import { Link } from "react-router-dom";

const Nftdetails = () => {
    
    const {id} = useParams()

    const single_nft = NFT__DATA.find(item => item.id === id)
    
    return<>
      <CommonSection title={single_nft.title}/>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <img src={single_nft.imgUrl} alt="" className="single_nft_img w-100"/>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className="single_nft_content">
                <h2>{single_nft.title}</h2>

                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className="d-flex align-items-center gap-4 single_nft_like_seen">
                    <span><i class="ri-bar-chart-horizontal-line"></i> 1000</span>
                    <span><i class="ri-heart-line"></i>540</span>
                  </div>

                  <div className="d-flex align-items-center gap-4 single_nft_more_send">
                    <span><i class="ri-send-plane-line"></i></span>
                    <span><i class="ri-more-2-line"></i></span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={single_nft.creatorImg} alt="" className="w-100" />
                  </div>

                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{single_nft.creator}</h6>
                  </div>
                </div>

                <p className="my-4">{single_nft.desc}</p>
                <button className="singleNft-btn d-flex align-items-center gap-2 w-100">
                  <i class="ri-shopping-bag-line"></i>
                  <Link to="/wallet">Place a Bid</Link>
                </button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
}
export default Nftdetails;
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import './StepSec.css';

const STEP_DATA = [
  {
    title:"Setup your wallet",
    icon : "ri-wallet-line",
    Desc :"If you do not have a wallet, create one on metamask Click here to set up your wallet for Nft marrket "
  },
  {
    title:"Create a collection",
    icon : "ri-checkbox-multiple-blank-line",
    Desc :"Create a collection of NFTs, it can be a themed collection to attract buyers"
  },
  {
    title:"Add NFTs in collection",
    icon : "ri-add-box-line",
    Desc :"Add individual NFTs in your collection, provide buyers variety of NFTs"
  },
  {
    title:"List them for sale",
    icon : "ri-exchange-dollar-line",
    Desc :"Sale your NFTs for millions of dollors"
  }
]

const StepSec = () => {
    return <section>
      <Container>
        <Row>
          <Col lg='12'>
            <h3 className="Sec_title mb-4">
              Create and Sell your NFTs
            </h3>
          </Col>

          {

            STEP_DATA.map((item,index) => 
              <Col lg ='3' md='4' sm='6' key={index}>
                <div className="Single_step_item">
                  <span><i class={item.icon}></i></span>
                  <div className="step_item_content">
                    <h5>
                      <Link to='/wallet'>{item.title}</Link>
                    </h5>
                    <p>
                      {item.Desc}
                    </p>
                  </div>
                </div>
              </Col>
            )

          }
        </Row>
      </Container>
    </section>
}

export default StepSec;
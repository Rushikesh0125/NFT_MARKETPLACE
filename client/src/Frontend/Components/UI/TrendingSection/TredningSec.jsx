import React from "react";
import './TrendingSec.css';
import {Container, Row, Col} from 'reactstrap';
import NFT__DATA from '../../../Assets/Data/Data'
import Nft_card from '../NFT_card/Nft_card';

const TrendingSec = () => {
    return <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <h3 className="trending_title">Trending</h3>
          </Col>

          {
            NFT__DATA.map((item) => (
              <Col lg='3' md='4' sm='6' key={item.id} className='mb-4'>
                <Nft_card item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
}

export default TrendingSec;
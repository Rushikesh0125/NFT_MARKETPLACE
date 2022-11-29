import React from "react";
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import './HeroSection.css'
import Hero from './hero.jpg';

const HeroSection = () =>{

    return <section className="hero_section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2>
                Discover Digital Art and collect
                <span>
                  sell Extraordinary
                </span>
                NFTs
              </h2>
              <p>
                Lorem, ipsum.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4">
                <button className=" explore-btn d-flex align-items-center gap-2">
                  <i class="ri-rocket-line"></i>
                  <Link to='\market'>
                    Explore
                  </Link>
                </button>
                <button className=" create-btn d-flex align-items-center gap-2">
                  <i class="ri-water-flash-line"></i>
                  <Link to='\create'>
                    Create
                  </Link>
                </button>
              </div>
  
            </div>
          </Col>

          <Col>
            <div className="hero_img">
              <img src={Hero} alt="" className="hero-img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
}

export default HeroSection;
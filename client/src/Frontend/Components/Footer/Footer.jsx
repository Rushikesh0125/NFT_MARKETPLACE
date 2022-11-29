import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Footer.css';

const MY_ACCOUNT =[
  {
    display : 'Author-profile',
    url : '/seller-profile'
  },
  {
    display : 'Create Item',
    url : '/create'
  },
  {
    display : 'Collections',
    url : '/market'
  },
  {
    display : 'Edit Profile',
    url : '/edit-profile'
  }
]

const RESOURCES =[
  {
    display : 'Help Center',
    url : '#'
  },
  {
    display : 'Partner',
    url : '#'
  },
  {
    display : 'Community',
    url : '#'
  },
  {
    display : 'Activity',
    url : '#'
  }
]

const COMPANY =[
  {
    display : 'About',
    url : '#'
  },
  {
    display : 'career',
    url : '#'
  },
  {
    display : 'Ranking',
    url : '#'
  },
  {
    display : 'Contact us',
    url : '#'
  }
]

const Footer = () => {
    return <footer className="footer">
      <Container>
        <Row>
          <Col lg ='3' md='6' sm='6'>
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                <i class="ri-fire-fill"></i>
                </span> 
                NFT Market
              </h2>
            </div>
            <p>Lorem, ipsum.</p>
          </Col>

          <Col lg='2' md='3' sm='6'>
            <h5>My Account</h5>
            <ListGroup className="list_group">
              {
                MY_ACCOUNT.map((item,index) => (
                  <ListGroupItem key={index} className='list_item'>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>  
          </Col> 
            
          <Col lg='2' md='3' sm='6'>
            <h5>Resources</h5>
            <ListGroup className="list_group">
              {
                RESOURCES.map((item,index) => (
                  <ListGroupItem key={index} className='list_item'>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='2' md='3' sm='6'>
            <h5>Company</h5>
            <ListGroup className="list_group">
              {
                COMPANY.map((item,index) => (
                  <ListGroupItem key={index} className='list_item'>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg ='3' md='6' sm='6'>
            <h5>NewsLetter</h5>
            <input type="text" className="newsletter" placeholder="Email" />
            <div className="social_links d-flex gap-3 align-items-center">
              <span>
                <Link to='#'>
                  <i class="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to='#'>
                  <i class="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to='#'>
                  <i class="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to='#'>
                  <i class="ri-telegram-line"></i>
                </Link>
              </span>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
}

export default Footer;
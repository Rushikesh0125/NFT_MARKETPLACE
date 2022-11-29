import React from "react";
import CommonSection from "../Components/UI/CommonSection/CommonSection";
import { Container, Row, Col } from "reactstrap";
import profile from '../Assets/Images/profile.png';
import img1 from '../Assets/Images/img01.jpg';
import '../Styles/Create.css';
import { useState } from "react";
import { Link } from "react-router-dom";


//we have to add preview functionality in this file ....



const Create = () =>{

    const [item, setItem] =useState({
        id: "01",
        title: "your title here",
        desc: "",
        imgUrl: img1,
        creator: "Trista Francis",
        creatorImg: profile,
        currentBid: "",
    });


    function handleChange(e){
      const url = URL.createObjectURL(e.target.files[0])
      setItem(previmg => ({
        ...previmg,
        imgUrl : url,
      }))
    }

    function handleChange2(evt){
      const{name,value} = evt.target
      setItem(prevmeme => ({
        ...prevmeme,
        [name] : value
    }))
    }

    
    // const handleChange = (e) => {
    //     let updated = {
    //         imgUrl: URL.createObjectURL(e.target.files[0]),
    //         [e.target.name] : e.target.value
    //     }
    //     console.log(e.target.files);
    //     setItem( item => ({
    //         ...item,
    //         ...updated,

    //     }));
    // }

    return(
      <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <div className="single_nft_card">
                <div className="nft_img">
                  <img src= {item.imgUrl} alt="" className=" w-100" />
                </div>

                <div className="nft_content">
                  <h5 className="nft_title">
                    {item.title}
                  </h5>
                  <div className="creator_info_wrap d-flex gap-3">
                    <div className="creator_img">
                      <img src={item.creatorImg} alt="" className=" w-100"/>
                    </div>

                    <div className="creator_info w-100 d-flex align-items-center justify-content-between">
                      <div>
                        <h6>
                          Created By
                        </h6>
                        <p>
                          {item.creator}
                        </p>
                      </div>
                      <div >
                        <h6>
                          Current bid
                        </h6>
                        <p>
                          {item.currentBid} ETH
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="mt-3 d-flex align-items-center justify-content-between">
                    <button className="bid_btn d-flex align-items-center gap-1">
                      <i class="ri-auction-line"></i>
                      Place Bid
                    </button>

                    <span className="history_link"><Link to='#'>View History</Link></span>
                  </div>

                </div>
              </div>
            </Col>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" className="upload__input" onChange={handleChange}/>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="text"
                      name="currentBid"
                      placeholder="Enter price for one item (ETH)"
                      value={item.currentBid}
                      onChange={handleChange2}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" name="currentbid" placeholder="Enter minimum bid" />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" value={item.title} placeholder="Enter title" onChange={handleChange2}/>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Create;
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import './Nft_card.css';

const Nft_card = (props) => {

    const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item;

    const [showModal, setShowModal] = useState(false);

    return <div className="single_nft_card">
            <div className="nft_img">
              <img src= {imgUrl} alt="" className=" w-100"/>
            </div>

            <div className="nft_content">
              <h5 className="nft_title">
                <Link className="title_link" to={`/market/${id}`}>{title}</Link>
              </h5>
              <div className="creator_info_wrap d-flex gap-3">
                <div className="creator_img">
                  <img src={creatorImg} alt="" className=" w-100"/>
                </div>

                <div className="creator_info w-100 d-flex align-items-center justify-content-between">
                  <div>
                    <h6>
                      Created By
                    </h6>
                    <p>
                      {creator}
                    </p>
                  </div>
                  <div >
                    <h6>
                      Current bid
                    </h6>
                    <p>
                      {currentBid} ETH
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-3 d-flex align-items-center justify-content-between">
                <button className="bid_btn d-flex align-items-center gap-1" onClick={() => setShowModal(true)}>
                  <i class="ri-auction-line"></i>
                  Place Bid
                </button>

                {showModal && <Modal setShowModal={setShowModal} />}

                <span className="history_link"><Link to='#'>View History</Link></span>
              </div>

            </div>
          </div>
}

export default Nft_card;
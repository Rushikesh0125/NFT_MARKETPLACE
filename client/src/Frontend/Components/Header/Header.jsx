import React, {useRef} from "react";
import './Header.css'
import { NavLink, Link } from "react-router-dom";
import {Container} from 'reactstrap'


const Nav_Links = [
  {
      display:'Home',
      url:'/home'
  },
  {
      display:'Market',
      url:'/market'
  },
  {
      display:'Create',
      url:'/create'
  },
  {
      display:'Contact',
      url:'/contact'
  }
]

const Header = () => {


    const menuRef = useRef(null);

    // const headerRef = useRef(null);

    // useEffect(() =>{
    //     window.addEventListener("scroll",() => {
    //         if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    //             headerRef.current.classList.add("header_shrink");
    //         }else{
    //             headerRef.current.classList.remove("header_shrink");
    //         }
    //     });

    //     return () => {
    //       window.removeEventListener("scroll");
    //     };
    // },[]);

    const toggleMenu = () => menuRef.current.classList.toggle("active_menu");

    return <header className="header">
        <Container>
          <div className="navgation">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span>
                <i class="ri-fire-fill"></i>
                </span> 
                NFT Market
              </h2>
            </div>

            <div className="Nav_menu" ref={menuRef} onClick={toggleMenu}>
              <ul className="Nav_list">
                {
                  Nav_Links.map((item, index) => (
                  <li className="Nav_items" key={index}>
                    <NavLink to={item.url} className = {navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-5">
              <button className="btn d-flex gap-2 align-items-center">
                <span>
                  <i class="ri-wallet-3-line"></i>
                </span>
                <Link to='/wallet'>  
                  Connect Wallet
                </Link>
                
              </button>

              <span className="mobile_menu">
                <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>

            </div>

          </div>
        </Container>
    </header>
}

export default Header;
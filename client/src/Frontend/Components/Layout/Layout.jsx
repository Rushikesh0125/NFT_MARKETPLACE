import React from "react";
import Routers from "../../routes/Routes"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ()=> {
    return(
      <>
        <Header/>
          <div>
            <Routers/>
          </div>
        <Footer/>
      </>
    )
}

export default Layout;
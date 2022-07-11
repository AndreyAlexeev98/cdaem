import { Outlet } from "react-router-dom";

import Header from '../components/shared/header/header.jsx'
import Footer from '../components/shared/footer/footer.jsx';

import './main.scss'


const Layout = () => {
  return(
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  )
}

export default Layout;
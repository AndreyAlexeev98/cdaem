import { Outlet } from "react-router-dom";

import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer';

import './Main.scss'


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
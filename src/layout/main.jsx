import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useSearchParams, useLocation, Outlet} from "react-router-dom";
import Header from '../components/shared/header/header.jsx'
import Footer from '../components/shared/footer/footer.jsx';
import state from '../data/state'


const Layout = () => {
  return(
    <div className="wrapper">
      <Header state={state} />
      <main className="main">
        <Outlet />
      </main>
      <Footer state={state}/> 
    </div>
  )
}

export default Layout;
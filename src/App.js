import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useSearchParams, useLocation, Outlet} from "react-router-dom";

import generalStyle from './App.module.css';
import axios from 'axios';
import Header from './components/shared/header/header.jsx';
// import Main from './components/pages/main/main.jsx';
import Footer from './components/shared/footer/footer.jsx';
import state from './data/state.js'

import Layout from './layout/main.jsx'

// import NewsListPage from './components/pages/news-list/news-list-pages';
import NewsListPage from "./pages/news-list/news-list.page.jsx";
import NewsPage from './pages/news/news.page.jsx'; 


function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsListPage />} />
          <Route path="/news-this" element={<NewsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

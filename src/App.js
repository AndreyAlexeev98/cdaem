import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import generalStyle from './App.module.css';
// import axios from 'axios';
// import state from './data/state.js'

import Layout from './layout/main.jsx'

import Home from "./pages/home/home.jsx";
import NewsListPage from "./pages/news-list/news-list.page.jsx";
import NewsPage from './pages/news/news.page.jsx'; 
import NotFound from "./pages/not-found/not-found.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/news-list" element={<NewsListPage />} />
          <Route path="/news-list/:id" element={<NewsPage />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

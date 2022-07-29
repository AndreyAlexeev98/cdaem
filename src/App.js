import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Layout from "./layout/Main"
import SignInUp from "./layout/Sign-in-up"

import Home from "./pages/Home/Home";
import NewsListPage from "./pages/News-list/News-list.page";
import NewsPage from './pages/News/News.page'; 
import NotFound from "./pages/Not-found/Not-found";
import Contacts from "./pages/Contacts/Contacts"
import Login from "./pages/Login/Login"
import SignUp from "./pages/Signup/Signup";
import Confirm from "./pages/Confirm/Confirm";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news-list" element={<NewsListPage />} />
          <Route path="news-list/:id" element={<NewsPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path='/login' element={<SignInUp />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signup/confirm" element={<Confirm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

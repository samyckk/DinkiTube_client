import { useState } from 'react';
import './App.css';
import Navbar from './components/Home/Navbar';
import Page from './components/Home/Page';
import Login from './components/Login/Login';
import VideoPage from './components/Video/VideoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Home/Search';

function App() {

  // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <>
        <Navbar isLogin = {isLogin} />
        <Routes>
          <Route path="/" element={<Page type="random" />} />
          <Route path="trending" element={<Page type="trending" />} />
          <Route path="subscriptions" element={<Page type="subVids" />} />
          <Route path="/likee" element={<Page type="likeVideos"/>} />
          <Route path="yourVid" element={<Page type="yourVids"/>} />
          <Route path="signin" element = {<Login setIsLogin={setIsLogin} />} />
          <Route path="/video/:id" element = {<VideoPage/>} />
          <Route path="/search" element = {<Search/>} />
          
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

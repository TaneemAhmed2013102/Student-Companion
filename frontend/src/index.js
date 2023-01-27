import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar'; 
import Footer from './Components/footer'; 
import Register from './Components/register';
import Login from './Components/login';
import Homepage from './Components/homepage';
import MyCourses from './Components/myCourses';
import StudentsNearMe from './Components/studentsNearMe';
import ExamReminders from './Components/examReminders';
import BuySellBooks from './Components/buySellBooks';
import PostBookAd from './Components/postBookAd';
import Accomodations from './Components/accomodation';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path='/' element={<Homepage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/my-courses' element={<MyCourses/>}/>
      <Route path='/students-near-me' element={<StudentsNearMe/>}/>
      <Route path='/my-reminders' element={<ExamReminders/>}/>
      <Route path='/buy-sell-books' element={<BuySellBooks/>}/>
      <Route path='/post-book-ad' element={<PostBookAd/>}/>
      <Route path='/accomodations' element={<Accomodations/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

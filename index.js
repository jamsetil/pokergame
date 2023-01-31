import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './Footer';
import MainContent from './Maincontent'
import Header from './Header';

 function Index() {
  return (
    <div className='main-container'>
       <Header/>
        <MainContent/>
        <Footer/>
       
    </div>
  )
}
const container = document.getElementById('root')
const root = createRoot(container)

root.render(<React.StrictMode><Index/></React.StrictMode>)
import React from 'react'
import Header from '../Header/index';
import Footer from '../Footer/index';
import {useLocation} from 'react-router-dom';

export default function AppLayout({children}) {

   
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

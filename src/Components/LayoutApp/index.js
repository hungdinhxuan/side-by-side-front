import React, {useEffect, useContext, useState} from 'react'
import Header from '../Header/index';
import Footer from '../Footer/index';
import { socketContext } from "../../Components/socket";

export default function AppLayout({children}) {
    // const socket = useContext(socketContext);
    
    // useEffect(() =>{
    //     socket.emit("GET_USERS");
        
    //     socket.on('SENDER_NOTIFICATION', (data) => {
    //       alert(data.response);
    //     })
    //     socket.on('RECEIVER_NOTIFICATION', (data) => {
    //       alert(data.response);
    //     })
    //   }, [socket]);
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
        
    )
}

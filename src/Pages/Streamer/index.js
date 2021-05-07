import React from 'react'
import '../../Styles/Streamer.css';
import ShowStreamer from '../../Hooks/ShowStreamer';

export default function Steamer() {
    return (
        <div className='streamer'>
            <div className="container">
                <div className="container d-flex">
                    <div className="streamer-search">
                        <input type="text" placeholder="Tên, ID người cần thuê"/>
                        <i className="fa fa-search " />
                    </div>
                    <button className="btn btn-danger">Tìm kiếm</button>
                </div>
                <ShowStreamer></ShowStreamer>
            </div>
        </div>
    )
}

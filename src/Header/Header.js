import React, {Component} from 'react'
import './Header.css'
import logo from "./img/logo.jpg"

class Header extends Component {
    render() {
        return (
            <>
                <div className="left">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="right">
                    <div className="top">
                        <p>monblanproject</p>
                        <div className="start">Start on 17-02-2016</div>
                    </div>
                    <ul className="info">
                        <li className="posts"><span>870</span> posts</li>
                        <li className="followers"><span>11,787</span> followers</li>
                        <li className="following"><span>112</span> following</li>
                    </ul>
                    <div className="date"></div>
                </div>
            </>
        );
    }
}

export default Header


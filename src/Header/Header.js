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
                    <div className="info"></div>
                    <div className="date"></div>
                </div>
            </>
        );
    }
}

export default Header


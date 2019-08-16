import React, {Component} from 'react'
import './Header.css'
import logo from "./img/logo.jpg"
import DateForm from './DateForm/DateForm'

class Header extends Component {
    render() {
        return (
            <div className="header">

                <div className="left">
                    <a href="#">
                        <div className="logo"></div>
                    </a>
                </div>

                <div className="right">
                    <div className="top">
                        <p className="monblanproject">monblanproject</p>
                        <div className="start">Start on 17-02-2016</div>
                    </div>
                    <ul className="info">
                        <li className="posts"><span>870</span> posts</li>
                        <li className="followers"><span>11,787</span> followers</li>
                        <li className="following"><span>112</span> following</li>
                    </ul>
                    <DateForm/>
                </div>

            </div>
        );
    }
}

export default Header


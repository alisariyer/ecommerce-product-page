import React from "react";
import MenuIcon from "../images/icon-menu.svg";
import BasketIcon from "../images/icon-cart.svg";

export default function Header() {
    return (
        <header>
            <div className="toggle-menu">
                <img src={MenuIcon} alt="menu"/>
            </div>
            <div className="logo">
                <h1>sneakers</h1>
            </div>
            <div className="menu hidden">
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="basket">
                <img src={BasketIcon} alt="basket" />
            </div>
            <div className="avatar">

            </div>
        </header>
    )
}
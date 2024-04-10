import React from "react";
import "../css/header.css";
import Navbar from "./Navbar";
import {HashLink as Link} from "react-router-hash-link";

export const Header = (props) => {

    const scroll = (el, customY) => {
        const y = el.getBoundingClientRect().top + window.scrollY + customY;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    return (
        <section className="Header">
            <Navbar info={props.info}/>
            <h2 className="slogan">Демонстрационный вариант</h2>
            <div className="btn_request">
                <h3><Link className="text_request" to="#contacts" scroll={(el) => scroll(el, 80)} smooth>ОСТАВИТЬ ЗАЯВКУ</Link></h3>
            </div>
        </section>
    )
}

export default Header;
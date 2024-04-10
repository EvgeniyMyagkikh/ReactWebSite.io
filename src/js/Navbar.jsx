import React, {useState} from 'react';
import {HashLink as Link} from "react-router-hash-link";
import "../css/navbar.css";

const Navbar = (props) => {
    const scroll = (el, customY) => {
        const y = el.getBoundingClientRect().top + window.scrollY + customY;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    const [isOpen, setOpen] = useState(true);

    return (
        <section className="navbar">
            <div className="logo">
                <h2><Link className="logo_text" to="/#" smooth>MyExample</Link></h2>
            </div>
            <button className={isOpen ? "burger-menu" : "burger-menu active"} onClick={(event) => {setOpen(!isOpen);}}></button>
            <ul className={isOpen ? "sections" : "sections active"}>
                <li><Link className="li_text" to="/#products" scroll={(el) => scroll(el, -80)}>УСЛУГИ</Link></li>
                <li><Link className="li_text" to="/gallery">ГАЛЕРЕЯ</Link></li>
                <li><Link className="li_text" to="/#feedback" scroll={(el) => scroll(el, -80)}>ОТЗЫВЫ</Link></li>
                <li><Link className="li_text" to="/#contacts" scroll={(el) => scroll(el, 0.07 * window.screen.height)}>КОНТАКТЫ</Link></li>
            </ul>
            <div className="contacts_container">
                <Link to={props.info.tgRef}>
                    <img className="tg_logo" src={require(process.env.REACT_APP_SOCIAL_IMG_PATH + "tg.png")} alt=""/>
                </Link>
                <a href={"tel:" + props.info.phone}>
                    <img className="phone_logo" src={require(process.env.REACT_APP_SOCIAL_IMG_PATH + "phone-2.png")}
                         alt=""/>
                </a>
            </div>
        </section>
    );
}

export default Navbar
;
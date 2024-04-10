import React from 'react';
import "../css/footer.css";
import {HashLink as Link} from "react-router-hash-link";

export const Footer = (props) => {
    const scroll = (el, customY) => {
        const y = el.getBoundingClientRect().top + window.scrollY + customY;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    return (
        <section className="Footer">
            <div className="ul_wrapper">
                <ul>
                    <h3>КАТАЛОГ</h3>
                    <li><Link className="footer_li_text" to="/gallery">Столы и стулья</Link></li>
                    <li><Link className="footer_li_text" to="/gallery">Лестницы</Link></li>
                    <li><Link className="footer_li_text" to="/gallery">Элементы декора</Link></li>
                    <li><Link className="footer_li_text" to="/gallery">Окна и двери</Link></li>
                    <li><Link className="footer_li_text" to="/gallery">Реставрация</Link></li>
                </ul>
                <ul>
                    <h3>О ПРОИЗВОДСТВЕ</h3>
                    <li><Link className="footer_li_text" to="/gallery" scroll={window.scrollTo({top: 0})}>Галерея</Link></li>
                    <li><Link className="footer_li_text" to="/#feedback" scroll={(el) => scroll(el, -80)}>Отзывы</Link></li>
                    <li><Link className="footer_li_text" to="/#about" scroll={(el) => scroll(el, -80)}>О нас</Link></li>
                </ul>
                <ul>
                    <h3>КОНТАКТЫ</h3>
                    <li><a className="footer_li_text" href = {"tel:" + props.info.phone}>{"Тел:" + props.info.phone}</a></li>
                    <li><a className="footer_li_text" href = {"mailto:" + props.info.email}>{"E-mail: " + props.info.email}</a></li>
                    <li className="footer_li_text">{props.info.address}</li>
                </ul>
            </div>
            <h4 className="logo_footer">Данный сайт несет ознакомительный характер и является демонстрацией верстки.</h4>
            <h4 className="logo_footer">Все совпадения случайны.</h4>
        </section>
    );
}

export default Footer;
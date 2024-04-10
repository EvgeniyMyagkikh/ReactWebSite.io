import React from 'react';
import "../css/about.css";

export const About = (props) => {
    return (
        <section className="About" id="about">
            <h1>Наше производство</h1>
            <div className="container-1">
                <img src={require(process.env.REACT_APP_ABOUT_IMG_PATH + "prod-1.jpeg")} alt="Собственное уникальное производство"/>
                <hr width="55%" align="center"/>
                <span>Наше производство мебели из <b>натурального</b> дерева - это результат <b>многолетнего опыта</b> и <b>преданности</b> искусству. Лучшие породы дерева позволяют создавать
                    изящные и <b>долговечные</b> предметы интерьера.</span>
                <span>Мастера на нашем производстве применяют старинные методы обработки дерева,
                    при этом используя новейшие технологии.</span>
            </div>
            <div className="container-2">
                <div className="prod-2">
                    <img src={require(process.env.REACT_APP_ABOUT_IMG_PATH + "prod-2.jpg")} alt=""/>
                    <hr width="70%" align="center"/>
                    <span>Компания обеспечивает <b>полный производственный цикл</b> от заготовки материала до выхода конечного продукта,
                        без необходимости в закупке сторонней продукции.</span>
                </div>
                <div className="prod-3">
                    <img src={require(process.env.REACT_APP_ABOUT_IMG_PATH + "prod-3.jpg")} alt=""/>
                    <hr width="70%" align="center"/>
                    <span>Автономность позволяет нам контролировать <b>каждый этап </b>
                        производства и гарантировать <b>высокое качество</b>.</span>
                </div>
            </div>
        </section>
    );
}

export default About;
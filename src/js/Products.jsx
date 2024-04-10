import React from 'react';
import "../css/products.css";
import {Link} from "react-router-dom";


export const Products = (props) => {
    return (
        <section className="Products" id="products">
            <h1 id="products">Наши работы</h1>
            <div className="items_column_container">
                <div className="items_column">
                    {props.products.slice(0, 2).map(elem => (
                        <div className={"item item-" + elem.number}>
                            <Link to="/gallery">
                                <img src={require(process.env.REACT_APP_PRODUCT_IMG_PATH + elem.img_path)}
                                     alt={elem.alt}/>
                                <div className="item_label">
                                    <span>{elem.title}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="items_column">
                    {props.products.slice(2, 4).map(elem => (
                        <div className={"item item-" + elem.number}>
                            <Link to="/gallery">
                                <img src={require(process.env.REACT_APP_PRODUCT_IMG_PATH + elem.img_path)}
                                     alt={elem.alt}/>
                                <div className="item_label">
                                    <span>{elem.title}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="items_row">
                {props.products.slice(4, 7).map(elem => (
                    <div className={"item item-" + elem.number}>
                        <Link to="/gallery">
                            <img src={require(process.env.REACT_APP_PRODUCT_IMG_PATH + elem.img_path)} alt={elem.alt}/>
                            <div className="item_label">
                                <span>{elem.title}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Products;
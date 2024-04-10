import React from 'react';
import "../css/gallery.css";
import Navbar from "./Navbar";
import GalleryCard from "./GalleryCard";

const Gallery = (props) => {
    return (
        <>
            <section className="gallery" id="gallery">
                <Navbar info={props.nav_info}/>
                <h1>Наши проекты</h1>
                <div className="gallery_items">
                    {props.item.map((item, i) => {
                        return <GalleryCard item={item} key={i}/>
                    })};
                </div>
            </section>
        </>
    );
}

export default Gallery;
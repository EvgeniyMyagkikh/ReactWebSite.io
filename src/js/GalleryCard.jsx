import React, {useState} from 'react';

const GalleryCard = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const next = (images_list) => {
        if (currentPage < images_list.length - 1) setCurrentPage(currentPage + 1);
    };
    const prev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const path_check = (itemPath, itemImgPath) => {
        try {
            return require(process.env.REACT_APP_GALLERY_IMG_PATH + itemPath + itemImgPath[currentPage])
        } catch (error) {
            console.log(error);
            return require(process.env.REACT_APP_GALLERY_IMG_PATH + "NoPhoto.jpg");
        }
    }
    return (
        /* Если id четный, то присваиваем active и применяется flex-reverse для отзеркаливания */
        <div className={props.item.id % 2 === 0 ? "item_box_active" : "item_box"}>
            <div className={props.item.id % 2 === 0 ? "about_item_active" : "about_item"}>
                <h2 className="item_title">{props.item.title}</h2>
                <div className="item_info">
                    <span>{props.item.info}</span>
                </div>
                <hr width="114%" align="left"/>
                <p className="item_text">{props.item.text}</p>
                <p className="item_text text-2">{props.item.text_2}</p>
            </div>
            <div className={props.item.id % 2 === 0 ? "gallery_slider_active" : "gallery_slider"}>
                <button className={props.item.id % 2 === 0 ? "next" : "prev"}
                        onClick={props.item.id % 2 === 0 ? () => next(props.item.img_path, props.item.path) : () => prev()}/>
                <img
                    src={path_check(props.item.path, props.item.img_path)}
                    alt=''/>
                <button className={props.item.id % 2 === 0 ? "prev" : "next"}
                        onClick={props.item.id % 2 === 0 ? () => prev() : () => next(props.item.img_path)}/>
            </div>
        </div>

    )
}

export default GalleryCard;
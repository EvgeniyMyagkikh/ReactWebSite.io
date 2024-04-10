import React, {useRef} from 'react';
import "../css/feedback.css";

export const Feedback = (props) => {

    const imageContainerRef = useRef(null)

    // 500 - оптимальное число для скролла на Mobile и Desktop версиях
    const prev = () => imageContainerRef.current.scrollLeft -=  0.7 * window.screen.width
    const next = () => imageContainerRef.current.scrollLeft +=  0.7 * window.screen.width

    return (
        <section className="Feedback" id="feedback">
            <h1>Отзывы</h1>
            <div className="content">
                <div className="prev" onClick={prev}></div>
                <div className="slider" ref={imageContainerRef}>
                    {props.comment.map(elem => {
                        return (<div className="section">
                            <img className="image-1"
                                 src={require(process.env.REACT_APP_COMMENT_IMG_PATH + elem.path_1)} alt=''/>
                            <img className="image-2" src={require(process.env.REACT_APP_COMMENT_IMG_PATH + elem.path_2)}
                                 alt=''/>
                            <span>"{elem.comment_text}"</span>
                            <h3>{elem.person}</h3>
                        </div>)
                    })}
                </div>
                <div className="next" onClick={next}></div>
            </div>

        </section>
    );
}

export default Feedback;
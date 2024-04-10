import React, {useState, useRef} from 'react';
import "../css/questions.css";

export const Questions = (props) => {
    const [selected, set_Selected] = useState(null);
    const itemRef = useRef(null);

    return (
        <section className="Questions">
            <h1>Популярные вопросы</h1>
            <ul>
                {props.qa.map((item, i) => {
                    return (
                        <li className="qa_item">
                            <button className="qa_header" onClick={() => (selected === i ? set_Selected(null) : set_Selected(i))}>
                                {item.q}
                                <p className="plus">{selected === i ? "-" : "+"}</p>
                            </button>
                            <div className="collapse" style={selected === i ? {height: (itemRef.current.scrollHeight - 2)} : {height:0}}>
                                <div className="qa_body" ref={itemRef}>{item.a}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </section>
    );
}

export default Questions;
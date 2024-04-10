import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion"
import "../css/info.css";

export const Info = (props) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const woodsY = useTransform(scrollYProgress, [0, 1], ["-1%", "100%"]);

    return (
        <section   className="Info">
            <motion.div style = {{y: woodsY}} className="woods">
                <img src={require("../media/img/woods/woods.png")} alt="woods"/>
            </motion.div>
            <div className="Numbers_info">
                <div>
                    <h1>12 <span>лет</span></h1>
                    <h3>на рынке создаем изящную мебель для Вас</h3>
                </div>
                <div>
                    <h1>36 <span>чел.</span></h1>
                    <h3>в команде трудятся ради уюта в вашем доме</h3>
                </div>
                <div>
                    <h1>75 <span>шт.</span></h1>
                    <h3>разработанных и реализованных проектов</h3>
                </div>
                <div>
                    <h1>4 <span>га</span></h1>
                    <h3>складских и производственных объектов в Ленобласти</h3>
                </div>
            </div>
            <p className="note_text">*Предоставляем официальный договор, отчетную документацию, бухгалтерию</p>
        </section>
    );
}

export default Info;
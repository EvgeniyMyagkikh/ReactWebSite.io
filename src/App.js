import './App.css';
import Header from "./js/Header";
import Info from "./js/Info";
import Products from "./js/Products";
import About from "./js/About";
import Feedback from "./js/Feedback";
import Questions from "./js/Questions";
import ContactForm from "./js/ContactForm";
import {useEffect, useState} from "react";
import Footer from "./js/Footer";
import {HashRouter, Route, Routes} from "react-router-dom";
import Gallery from "./js/Gallery";
import local_data from "./local_storage.json";


function App() {

    const [products, setProducts] = useState([]);
    const [comment, setComment] = useState([]);
    const [question, setQuestion] = useState([]);
    const [info, setInfo] = useState([{phone: "-", email: "-", address: "-"}]);
    const [gallery, setGallery] = useState([]);
    const parsingData_fromAPI = (url, state, api_id) => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    const arr = res.json();
                    arr.then((result) => {state(result);})
                }
                else {
                    console.error("404 error")
                    state(local_data[api_id]);
                }
            })
            .catch(error => {
                    console.log(error);
                    const arr = local_data[api_id];
                    state(arr);
                }
            );
    }


    useEffect(() => {
        parsingData_fromAPI(process.env.REACT_APP_PRODUCTS_URL, setProducts, "products")

        parsingData_fromAPI(process.env.REACT_APP_FEEDBACK_URL, setComment, "feedback")

        parsingData_fromAPI(process.env.REACT_APP_QUESTIONS_URL, setQuestion, "questions")

        parsingData_fromAPI(process.env.REACT_APP_INFO_URL, setInfo, "info")

        parsingData_fromAPI(process.env.REACT_APP_GALLERY_URL, setGallery, "gallery")

    }, []);

    return (
        <HashRouter>
            <Routes>
                <Route path="" element={<div className="container">
                    <Header info={info[0]}/>
                    <Info/>
                    <Products products={products}/>
                    <About/>
                    <Feedback comment={comment}/>
                    <Questions qa={question}/>
                    <ContactForm info={info[0]}/>
                    <Footer info={info[0]}/>
                </div>}/>
                <Route path="gallery" element={
                    <div className="container">
                        <Gallery nav_info={info[0]} item={gallery} info={info[0]}/>
                        <Footer info={info[0]}/>
                    </div>}/>
            </Routes>
        </HashRouter>

    )
        ;
}

export default App;

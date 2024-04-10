import React, {useRef, useState} from 'react';
import {useForm} from "react-hook-form"
import "../css/form.css";
import emailjs from '@emailjs/browser';


export const ContactForm = (props) => {

    const form = useRef();
    const [Sent, set_Sent] = useState(false);

    const {
        register, formState: {errors,}, handleSubmit,
    } = useForm();

    const valid_rules = {
        user_name: {
            required: "Обязательное поле",
            minLength: 2,
            pattern: {value: /[А-Яа-я]/, message: "Поддерживаются только буквы а-Я"}
        },
        phone: {
            required: "Обязательное поле",
            pattern: {
                value: /^((8|\+7|\+3|\+9)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/,
                message: "Введите номер в формате: 8(***)-***-**-**"
            }
        },
        email: {pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Некорректный E-mail"}}
    }
    const sendEmail = (e) => {
        // e.preventDefault();
        set_Sent(true);
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY,
            })
            .then(
                () => {
                },
                (error) => {
                },
            );
    };

    return (<div id="contacts">
            {Sent
                ? <section className="Contact_form">
                    <div className="form_wrapper_success">
                        <div className="Contacts_success">
                            <h3>Спасибо, что оставили заявку!</h3>
                            <h2>Мы всегда рады ответить на ваши вопросы по телефону и в соц. сетях</h2>
                            <div className="Phone">
                                <img src={require(process.env.REACT_APP_SOCIAL_IMG_PATH + "phone.png")} alt=""/>
                                <span>{props.info.phone}</span>
                            </div>
                            <div className="Mail">
                                <img src={require(process.env.REACT_APP_SOCIAL_IMG_PATH + "mail.png")} alt=""/>
                                <span>{props.info.email}</span>
                            </div>
                        </div>
                    </div>
                </section>
                : <section className="Contact_form">
                    <div className="form_wrapper">
                        <div className="Contacts">
                            <h3>Свяжитесь с нами,
                                и мы обсудим
                                все детали</h3>
                            <div className="Phone">
                                <img src={require(process.env.REACT_APP_SOCIAL_IMG_PATH + "phone.png")} alt=""/>
                                <span>{props.info.phone}</span>
                            </div>
                            <div className="Mail">
                                <img src={require(process.env.REACT_APP_SOCIAL_IMG_PATH + "mail.png")} alt=""/>
                                <span>{props.info.email}</span>
                            </div>
                        </div>
                        <form className="form" ref={form} onSubmit={handleSubmit(sendEmail)}>
                            <label>ФИО*</label>
                            <input {...register("user_name", valid_rules.user_name)} type="text" name="user_name"
                                   placeholder="Иван"/>
                            <span style={{height: 0.5, margin: "auto", fontSize: 12}}>
                                {errors?.user_name &&
                                    <p>{errors?.user_name?.message || "Поле заполнено неверно"}</p>}
                            </span>
                            <label>Телефон*</label>
                            <input {...register("user_number", valid_rules.phone)} type="tel" name="user_number"
                                   placeholder="+7(900)000-00-00"/>
                            <span style={{height: 0.5, margin: "auto", fontSize: 12}}>
                                {errors?.user_number &&
                                    <p>{errors?.user_number?.message || "Поле заполнено неверно"}</p>}
                            </span>
                            <label>E-mail</label>
                            <input {...register("user_mail", valid_rules.email)} type="email" name="user_mail"
                                   placeholder="your@mail.ru"/>
                            <span style={{height: 0.5, margin: "auto", fontSize: 12}}>
                                {errors?.user_mail &&
                                    <p>{errors?.user_mail?.message || "Поле заполнено неверно"}</p>}
                            </span>
                            <div className="checkbox_container">
                                <input type="checkbox" required={true}/>
                                <label>Даю согласие на <a rel="noopener"
                                                          href={require(process.env.REACT_APP_POLITICS_FILE_PATH)}
                                                          download>обработку своих персональных данных</a></label>
                            </div>
                            <button type="submit">Отправить</button>
                        </form>
                    </div>

                </section>
            }
        </div>
    );
}

export default ContactForm;
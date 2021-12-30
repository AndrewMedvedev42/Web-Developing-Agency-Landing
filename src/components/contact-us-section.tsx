import { useEffect, useState } from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

export const ContactSection:React.FC  = () => {
    const [iconSize, setIconSize] = useState(38)
    return (
        <section className="section contact-section">
            <article className="contact-section-container">
                <form>
                    <h2>Contact form</h2>
                    <div>
                        <input className="name-input" placeholder="Your name" required/>
                        <input className="email-inout" placeholder="Email" required/>
                    </div>
                    <textarea placeholder="Text message" cols={30} rows={10} required></textarea>
                    <button className="yellow-button">Send</button>
                </form>
                <article>
                    <h2>Contacts</h2>
                    <div>
                        <BsFacebook size={iconSize} className="social-icon"/>
                        <BsLinkedin size={iconSize} className="social-icon"/>
                        <BsInstagram size={iconSize} className="social-icon"/>
                    </div>
                </article>
            </article>
        </section>
    )
}
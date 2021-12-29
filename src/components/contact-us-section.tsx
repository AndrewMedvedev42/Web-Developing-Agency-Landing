export const ContactSection:React.FC  = () => {
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
                    <span>Email</span>
                    <span>Number</span>
                    <div>
                        <img src="#" alt="social-media-icon"/>
                        <img src="#" alt="social-media-icon"/>
                        <img src="#" alt="social-media-icon"/>
                    </div>
                </article>
            </article>
        </section>
    )
}
export const AboutUs:React.FC  = () => {
    return (
        <section className="section about-us-section">
            <article className="about-us-container">
                <article>
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className="yellow-button">More about us</button>
                </article>
                <img src={`${process.env.PUBLIC_URL}/Img_Design.svg`} alt="illustration" />
            </article>
        </section>
    )
}
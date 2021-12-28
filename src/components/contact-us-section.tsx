export const ContactSection:React.FC  = () => {
    return (
        <section>
            <form>
                <input placeholder="Your name" />
                <input placeholder="Email" />
                <textarea placeholder="Text message" cols={30} rows={10}></textarea>
                <button>Send</button>
            </form>
        </section>
    )
}
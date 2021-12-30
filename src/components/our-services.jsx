export const OurServices  = () => {
    const secvicesList = [
        {title:"Design", list:["Web Design", "Logo and Corporate Identity Design", "UI/UX Design", "Mobile Design"], image_url:"Img_Design.svg"},
        {title:"Development", list:["Website development and complex CRM", "Creation of online stores", "Creation of mobile applications", "Website maintenance and support"], image_url:"Img_Development.svg"},
        {title:"SMM", list:["Personal page promotion", "Business page promotion", "Content creation for pages", "Creating a content plan"], image_url:"Img_SMM.svg"}
    ]

    return (
        <section className="section our-services">
            {
                secvicesList.map(item=>{
                    return <ListTemplate listData={item}/>
                })
            }
        </section>
    )
}

const ListTemplate = ({listData}) => {
    return (
        <article className="servises-container">
            <img src={`${process.env.PUBLIC_URL}/${listData.image_url}`} alt="Illustration" />
            <article>
                <h2>{listData.title}</h2>
                <ul>
                    {listData.list.map(item=>{
                        return <li>{item}</li>
                    })}
                </ul>
                <button className="yellow-button">Learn more</button>
            </article>
        </article>
    )
}
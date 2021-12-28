export const OurServices  = () => {
    const secvicesList = [
        {title:"Design", list:["Web Design", "Logo and Corporate Identity Design", "UI/UX Design", "Mobile Design"]},
        {title:"Development", list:["Website development and complex CRM", "Creation of online stores", "Creation of mobile applications", "Website maintenance and support"]},
        {title:"SMM", list:["Personal page promotion", "Business page promotion", "Content creation for pages", "Creating a content plan"]}
    ]

    return (
        <section>
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
        <article>
            <h2>{listData.title}</h2>
            <ul>
                {listData.list.map(item=>{
                    return <li>{item}</li>
                })}
            </ul>
            <button>Learn more...</button>
        </article>
    )
}
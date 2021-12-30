import { useEffect } from "react"

export const NavigationMenu:React.FC  = () => {

    useEffect(()=>{
        fetch("https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Cultural_and_Society_WebMercator/MapServer/55/query?where=1%3D1&outFields=&outSR=4326&f=json").then((res)=>{return res.json()})
                .then((data)=>{console.log(data.data)})
    },[])

    return (
        <nav className="navigation-menu">
            <img src={`${process.env.PUBLIC_URL}/Img_Design.svg`} alt="website-logo" />
            <ul>
                <li>About us</li>
                <li>Design</li>
                <li>Developing</li>
                <li>SMM</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>
                    <button className="navigation-button">Start now</button>
                </li>
                <li>UA</li>
            </ul>
        </nav>
    )
}
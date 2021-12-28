import { useEffect } from "react"

export const NavigationMenu:React.FC  = () => {

    useEffect(()=>{
        fetch("https://api.pexels.com/videos/").then((res)=>{return res.json()})
                .then((data)=>{console.log(data.data)})
    },[])

    return (
        <nav>
            <img src="#" alt="website-logo" />
            <ul>
                <li>About us</li>
                <li>Design</li>
                <li>Developing</li>
                <li>SMM</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>
                    <button>Start now</button>
                </li>
                <li>UA</li>
            </ul>
        </nav>
    )
}
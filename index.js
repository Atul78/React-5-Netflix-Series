import react from "react";
import reactDom from "react-dom";
import Cards from "./Cards";
import "./index.css";



reactDom.render(
    <>
        <h1>Top 5 Netflix Web Series</h1>
        <Cards imgsrc="https://wallpapercave.com/wp/wp5954433.jpg" title="A Netflix Original Series" Sname="Money heist" link="https://www.netflix.com/in/title/80192098"/>
        <Cards imgsrc="https://wallpapercave.com/wp/wp8988425.jpg" title="A Netflix Original Series" Sname="Stranger Things" link="https://www.netflix.com/in/title/80057281"/>
        <Cards imgsrc="https://wallpapercave.com/wp/wp5271393.jpg" title="A Netflix Original Series" Sname="Lost in Space" link="https://www.netflix.com/in/title/80104198"/>
        <Cards imgsrc="https://wallpapercave.com/wp/wp4868475.jpg" title="A Netflix Original Series" Sname="sherlock holmes" link="https://www.netflix.com/in/title/70202589"/>
        <Cards imgsrc="https://wallpapercave.com/wp/wp7239175.jpg" title="A Netflix Original Series" Sname="The 100" link="https://www.netflix.com/in/title/70283264"/>

    </>
    , document.getElementById('root')
);
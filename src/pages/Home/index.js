import React from "react";
import photo from "../../images/homePageImage.jpeg"
import "./style.css";

function Home() {
    return (
            <section className="introduction">
               <img src={photo} id="photo" />
            </section>
        
    );
}

export default Home;

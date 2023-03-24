import React from "react";
import photo from "../../images/homePageImage.jpeg"
import "./style.css";
import Hero from '../../components/Hero'
import Container from '@mui/material/Container';

function Home() {
    return (
        <Container>
            <div>
                {/* <section className="introduction">
            <img src={photo} id="photo" />
            </section> */}
                <Hero />
            </div>
        </Container>

    );
}

export default Home;

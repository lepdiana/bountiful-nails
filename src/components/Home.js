import React from 'react';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return(
        <div>
            <Carousel showThumbs={false} infiniteLoop={true}>
                <div style={{ height: "100vh", color: "#fff" }}>this is slide 1</div>
                <div style={{ height: "100vh", color: "#fff" }}>this is slide 2</div>
                <div style={{ height: "100vh", color: "#fff" }}>this is slide 3</div>
            </Carousel>
        </div>
    )
}

export default Home
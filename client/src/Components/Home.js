import React from 'react'
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    return(
        <div>
            <Carousel showThumbs={false} infiniteLoop={true}>
                <div style={{ height: "100vh", color: "#fff" }}>
                    <img src="https://i.postimg.cc/5N0d8g9C/Momma-Ho-s-2.jpg" style={{ height: "100vh", width: "100vw"}}/>
                </div>
                <div style={{ height: "100vh", color: "#fff" }}>
                    <img src="https://i.postimg.cc/ryg2d3TT/Momma-Ho-s-15.jpg" style={{ height: "100vh", width: "100vw"}}/>
                </div>
                <div style={{ height: "100vh", color: "#fff" }}>
                    <img src="https://i.postimg.cc/c4bqh365/Momma-Ho-s-6.jpg" style={{ height: "100vh", width: "100vw"}}/>
                </div>
                <div style={{ height: "100vh", color: "#fff" }}>
                    <img src="https://i.postimg.cc/9MhHTjzm/Momma-Ho-s-22.jpg" style={{ height: "100vh", width: "100vw"}}/>
                </div>
            </Carousel>
        </div>
    )
}

export default Home
import React from "react";
import "./Home.scss";
import Carousel from "../../components/slider/Carousel";
import { cards } from "../../resources/data";
import Card from "../../components/card/Card";

const Home = () => {
    return (
        <div className="home">
            <div className="container featured">
                <div className="left-section">
                    <div className="title">
                        <span>Find the right <i>freelance</i> service, right away</span>
                    </div>
                    <div className="search-field">
                        <div className="input">
                            <input type="text" placeholder="Search for any service..." />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular-services">
                        <span>Popular:</span>
                        <span>Website Design</span>
                        <span>WordPress</span>
                        <span>Logo Design</span>
                        <span>AI Service</span>
                    </div>
                </div>
                <div className="right-section">
                    <img src="./images/man.png" alt="" />
                </div>
            </div>
            <div className="services">
                <h2>Popular Services</h2>
                <Carousel slidesToShow={5} arrowsScroll={5}>
                    { cards.map(card => (<Card data={card} key={card.id}/>))}    
                </Carousel>        
            </div>
        </div>
    )
}

export default Home;
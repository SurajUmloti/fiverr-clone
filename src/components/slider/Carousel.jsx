import React from "react";
import './Carousel.scss';
import { Slider } from "infinite-react-carousel";

const Carousel = ({arrowsScroll, slidesToShow, children}) => {
    return (
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
    )
}

export default Carousel;
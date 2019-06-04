import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export interface Props {
  children: any;
  options?: Object;
}

function SilderWrapper(props: Props) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ...props.options
  };

  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  )
}

export default SilderWrapper;
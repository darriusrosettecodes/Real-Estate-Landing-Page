import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../../src/index.css"

const HorizontalCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default slides to show
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
        <div className='slider'>
        <Slider {...settings} className='carousel-slides'>
        {data.map((item, index) => (
            <div key={index} className="individual-choice">
            <center>
                <img src={item.coverPhoto.url} alt="Property Cover" className="cover-image" />
            </center>
            <div className="property-details">
                <h3 className="price"><i className="fa-solid fa-dollar-sign"></i>{item.price.toLocaleString()}</h3>
                <h1 className="location">{item.location}</h1>
                <p className="description">{item.title}</p>
                <br />
                <span className="bed"><i className="fa-solid fa-bed"></i>{item.bed}</span>
                <span className="space">1</span>
                <span className="bath"><i className="fa-solid fa-bath"></i>{item.bath}</span>
            </div>
            </div>
        ))}
        </Slider>
        </div>
  );
};

export default HorizontalCarousel;



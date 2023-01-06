import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
  const images = () => {
    const path = require.context(
      "../../public/companies_logo",
      false,
      /\.svg$/
    );
    return path.keys();
  };

  const settings = {
    speed: 5500,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    slidesToShow: 5,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const changefilename = (fname) => {
    const path = "./companies_logo/" + fname.substring(2);
    return path;
  };
  const name = images();
  const fnames = name.map(changefilename);

  return (
    <CompanySlider2>
   
      <Slider {...settings}>
        {fnames.map((fname) => (
          <div key={fname} style={{ width: "1rem" }}>
            <img
              src={fname}
              style={{ objectFit: "contained", width: "70%" }}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </CompanySlider2>
  );
};

const CompanySlider2 = styled.div`

  .slick-slide {
    &:focus,
    a {
      outline: none;
    }
  }
  .slick-slide div {
    transition-timing-function: linear !important;
    outline: none;
  }

`;

export default CompanySlider;

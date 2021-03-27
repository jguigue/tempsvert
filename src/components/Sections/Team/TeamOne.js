import React from "react";
import Slider from "react-slick";

import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import TeamCard from "./Elements/TeamCard";

export default function TeamOne({ data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="team-one">
      <div className="container">
        <SectionTitleOne align="center" spaceBottom="1.875em">
          Une équipe aux petits soins pour vous
        </SectionTitleOne>
        <Slider {...settings}>
          {data.map((user, index) => (
            <div key={index} className="slider__item">
              <TeamCard data={user} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

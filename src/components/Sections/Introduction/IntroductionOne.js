import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";

import Button from "../../Control/Button";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";

export default function IntroductionOne({ data }) {
  const bg1 = useRef(null);
  const bg2 = useRef(null);
  useEffect(() => {
    let parallax1 = new Parallax(bg1.current);
    let parallax2 = new Parallax(bg2.current);
    return () => {
      parallax1.disable();
      parallax2.disable();
    };
  }, []);
  return (
    <div className="introduction-one" id="intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="introduction-one__image">
              <div className="introduction-one__image__detail">
                 <img
                   src="/assets/images/montres/watchmannequin.webp"
                   alt="background"
                 />
                <video alt="Slider image"
                      autoPlay
                      loop
                      muted>
                     <source src="/assets/images/videos/waterfall.mp4" type="video/mp4"/>
                     <source src="/assets/images/videos/waterfall.webm" type="video/webm"/>
                </video>
              </div>
              <div className="wrapper">
                <div className="introduction-one__image__background">
                  <div className="background__item">
                    <div ref={bg1} className="wrapper">
                      <img
                        data-depth="0.5"
                        src="/assets/images/introduction/IntroductionOne/bg1.png"
                        alt="background"
                      />
                    </div>
                  </div>
                  <div className="background__item">
                    <div ref={bg2} className="wrapper">
                      <img
                        data-depth="0.3"
                        data-invert-x
                        data-invert-y
                        src="/assets/images/introduction/IntroductionOne/bg2.png"
                        alt="background"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="introduction-one__content">
              <h5>
                {data.subTitle.main} <span>{data.subTitle.span}</span>
              </h5>
              <SectionTitleOne spaceBottom="1.875em">
                {data.title.main}
                <br />
                {data.title.span}
              </SectionTitleOne>
              <p>{data.description}</p>
              <Button
                color={data.btn.color}
                content={data.btn.content}
                action="/about/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

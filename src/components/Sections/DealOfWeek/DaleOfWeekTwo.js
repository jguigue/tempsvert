import React, { useRef, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import Parallax from "parallax-js";

import Button from "../../Control/Button";

export default function DaleOfWeekTwo() {
  const img = useRef(null);
  useEffect(() => {
    let parallax1 = new Parallax(img.current);
    return () => {
      parallax1.disable();
    };
  }, []);
  return (
    <div className="dow-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 order-lg-2">
            <div className="dow-two__image">
              <div ref={img} className="dow-two__image__parallax">
                <img
                  data-depth="0.4"
                  data-invert-x
                  data-invert-y
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/deal_of_week/DOWTwo/1.png"
                  }
                  alt="Deal de la semaine"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <div className="dow-two__content">
              <h5>Offre de pâques !</h5>
              <h3>Montre Marula</h3>
              <div className="special-price">
                <p>159.99€</p>
                <span>300.00€</span>
              </div>
              <Countdown
                date={Date.now() + 100000000}
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <div className="dow-two__content__countdown">
                      <div className="countdown__item">
                        <h6>{zeroPad(days)}</h6> <span>jours</span>
                      </div>
                      <div className="countdown__item">
                        <h6>{zeroPad(hours)}</h6> <span>heures</span>
                      </div>
                      <div className="countdown__item">
                        <h6>{zeroPad(minutes)} </h6>
                        <span>minutes</span>
                      </div>
                      <div className="countdown__item">
                        <h6>{zeroPad(seconds)}</h6> <span>sec</span>
                      </div>
                    </div>
                  );
                }}
              />
              <Button
                action={process.env.PUBLIC_URL + "/shop/product/montre-marula"}
                color="white "
                content="Acheter maintenant"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import SubcribeEmail from "../Other/SubcribeEmail";

import SocialIcons from "../Other/SocialIcons";
import footerLinks from "../../data/footer/links.json";
import footerInfomation from "../../data/footer/info.json";

export default function FooterOne() {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="footer-one__header">
          <div className="footer-one__header__logo">
            <Link href={process.env.PUBLIC_URL + "/homepages/homepage1"}>
              <a>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/logo.webp"}
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="footer-one__header__newsletter">
            <span>Abonnez vous à la Newsletter:</span>
            <SubcribeEmail
              mailchimpUrl=""
              placeholder="Entrez votre email"
              btnContent={<i className="fas fa-paper-plane" />}
              className="footer-one-newsletter"
            />
          </div>
          <div className="footer-one__header__social">
            <SocialIcons className="-border" />
          </div>
        </div>
        <div className="footer-one__body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer__section -info">
                <h5 className="footer-title">Contact</h5>
                <p>
                  Addresse: <span>{footerInfomation.address}</span>
                </p>
                <p>
                  Téléphone: <span>{footerInfomation.phone}</span>
                </p>
                <p>
                  Email: <span>{footerInfomation.email}</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer__section -links">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h5 className="footer-title">Compte</h5>
                    <ul>
                      {footerLinks.accountLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.to}>
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6">
                    <h5 className="footer-title">Infomations</h5>
                    <ul>
                      {footerLinks.informationLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.to}>
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer__section -payment">
                <h5 className="footer-title">Moyens de paiements autorisés</h5>
                <p>
                  Le Temps Vert accepte Paypal, les cartes bleues Visa, MasterCard et Cirrus.{" "}
                </p>
                <div className="payment-methods">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/footer/payment.png"
                    }
                    alt="Payment methods"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-one__footer">
        <div className="container">
          <div className="footer-one__footer__wrapper">
            <p>© Copyright 2021 Temps Verts</p>
            <ul>
              {footerLinks.creditLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

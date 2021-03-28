import { useForm } from "react-hook-form";

import LayoutOne from "../components/Layout/LayoutOne";
import InstagramTwo from "../components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import ContactInfoItem from "../components/Pages/Contact/ContactInfoItem";
import contactData from "../data/pages/contact.json";

export default function () {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <LayoutOne title="Contact - Le Temps Verts">
      <Breadcrumb title="Contactez nous">
        <BreadcrumbItem name="Accueil" />
        <BreadcrumbItem name="Contactez nous" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Informations de contact</h3>
              {contactData &&
                contactData.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    iconClass={item.iconClass}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
            </div>
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Nous contacter</h3>
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <span className="input-error">Merci de nous fournir votre nom</span>
                    )}
                  </div>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="input-error">
                        Merci de nous fournir votre email
                      </span>
                    )}
                  </div>
                  <div className="input-validator">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Message"
                    />
                  </div>
                  <button className="btn -dark">Envoyer</button>
                </form>
              </div>
            </div>
            <div className="col-12">
              <iframe
                className="contact-map"
                src="https://maps.google.com/maps?q=Universit%C3%A9%20de%20Toulon%20La%20garde&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
}

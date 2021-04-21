import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useForm } from "react-hook-form";

import Review from "../../Control/Review";

export default function ProductDetailInfoTab({ onReviewSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <div className="product-detail__tab">
      <Tabs className="product-detail__tab__content">
        <TabList className="tab__content__header">
          <Tab>Description</Tab>
          <Tab>Livraison & Retours</Tab>
          <Tab>Avis ( 03 )</Tab>
        </TabList>

        <TabPanel className="tab__content__item -description">
          <p>Cette montre en bois design et éco-responsable est idéale pour vous ou pour un cadeau à un proche. Montre faite à partir de bois de Chêne de forêts Autrichiennes.</p> 
        <span>Packaging composé de : </span>
        <ul>
          <li>Boite en carton recyclé avec son coussin de paille emmaillé </li>
          <li>Kit de réglage du cadran </li>
          <li> Chiffon de nettoyage recyclé</li>
          <li>Guide d’utilisation en papier recyclé </li>
        </ul>
          <p>Achetez une montre en bois contribue à l’environnement, grâce à notre partenaire Reforestaction chaque montre en bois achetée c’est un arbre planté !  </p>
        </TabPanel>
        <TabPanel className="tab__content__item -ship">
          <h5>
            <span>Livraison vers la </span>France
          </h5>
          <ul>
            <li>
              Livraison standard 0kg - 5kg. <span>+5.00€</span>
            </li>
            <li>
              Livraison lourde 5kg-10kg . <span>+10.00€</span>
            </li>
          </ul>
          <h5>Politique de retours</h5>
          <p>
            Les retours sont gratuits dans la limite de votre garantie et de votre délai de retractation.
          </p>
        </TabPanel>
        <TabPanel className="tab__content__item -review">
          <Review
            avatar="https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/03/GettyImages-1211127989.jpg?quality=90&strip=all&zoom=1&resize=644%2C416&ssl=1"
            name="Zachary Wade"
            publicDate="Mar 17, 2021"
            rate={4}
          >
            Superbe montre, j'adore vraiment !
          </Review>
          <form onSubmit={handleSubmit(onReviewSubmit)}>
            <h5>Écrire un avis</h5>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="input-validator">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    ref={register({ required: true })}
                  />
                  {errors.name && (
                    <span className="input-error">Merci de fournir un nom</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="input-validator">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={register({ required: true })}
                  />
                  {errors.email && (
                    <span className="input-error">Merci de fournir un email</span>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-validator">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    ref={register}
                  />
                </div>
                {errors.message && <span className="input-error"></span>}
              </div>
              <div className="col-12">
                <button className="btn -dark">Laisser un commentaire</button>
              </div>
            </div>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
}

import Link from "next/link";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import LayoutOne from "../../components/Layout/LayoutOne";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import { formatCurrency, formatSingleNumber } from "../../common/utils";
import { calculateTotalPrice } from "../../common/shopUtils";

export default function () {
  const cartState = useSelector((state) => state.cartReducer);
  const { register, handleSubmit, errors } = useForm();
  const {
    register: couponRegister,
    handleSubmit: couponHandleSubmit,
    errors: couponErrors,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const onCouponSubmit = (data) => console.log(data);
  return (
    <LayoutOne title="Paiement - Le Temps Verts">
      <Breadcrumb title="Paiement">
        <BreadcrumbItem name="Accueil" />
        <BreadcrumbItem name="Boutique" />
        <BreadcrumbItem name="Paiement" current />
      </Breadcrumb>
      <div className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-12  col-lg-8">
              <form>
                <div className="checkout__form">
                  <div className="checkout__form__contact">
                    <div className="checkout__form__contact__title">
                      <h5 className="checkout-title">Informations de contact</h5>
                      <p>
                        Vous avez déjà un compte?
                        <Link href={process.env.PUBLIC_URL + "#"}>
                          <a>Se connecter</a>
                        </Link>
                      </p>
                    </div>
                    <div className="input-validator">
                      <input
                        type="text"
                        name="contact"
                        ref={register({ required: true })}
                        placeholder="Email ou numéro de téléphone"
                      />
                      {errors.contact && (
                        <span className="input-error">
                          Merci de fournir un email
                        </span>
                      )}
                    </div>
                    <label className="checkbox-label" htmlFor="subcribe-news">
                      <input
                        type="checkbox"
                        id="subcribe-news"
                        name="subcribeNews"
                        ref={register}
                      />
                      M'informer des dernières nouveautés et des offres exclusives.
                    </label>
                  </div>
                  <div className="checkout__form__shipping">
                    <h5 className="checkout-title">Addresse de livraison</h5>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="input-validator">
                          <label>
                            Nom <span>*</span>
                            <input
                              type="text"
                              name="firstName"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.firstName && (
                            <span className="input-error">
                            Merci de fournir un nom de famille
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="input-validator">
                          <label>
                            Prénom <span>*</span>
                            <input
                              type="text"
                              name="lastName"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.lastName && (
                            <span className="input-error">
                              Merci de fournir un prénom
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Pays <span>*</span>
                            <input
                              type="text"
                              name="country"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.country && (
                            <span className="input-error">
                              Merci de fournir un pays
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Addresse <span>*</span>
                            <input
                              type="text"
                              name="streetAddress"
                              ref={register({ required: true })}
                              placeholder="Rue"
                            />
                            <input
                              type="text"
                              name="apartment"
                              ref={register({ required: true })}
                              placeholder="Autres"
                            />
                          </label>
                          {errors.streetAddress || errors.apartment ? (
                            <span className="input-error">
                              Merci de fournir une adresse
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Ville <span>*</span>
                            <input
                              type="text"
                              name="town"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.town && (
                            <span className="input-error">
                              Merci de fournir une ville
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Région <span>*</span>
                            <input
                              type="text"
                              name="state"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.state && (
                            <span className="input-error">
                              Merci de fournir i,e régop,
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Code postale <span>*</span>
                            <input
                              type="text"
                              name="zip"
                              ref={register({ required: true })}
                            />
                          </label>
                          {errors.zip && (
                            <span className="input-error">
                             Merci de fournir un code postale
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-validator">
                          <label>
                            Note pour votre commande
                            <input
                              type="text"
                              name="note"
                              placeholder="Pour fournir un message lors de votre livraison, c'est ici"
                              ref={register()}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <label className="checkbox-label" htmlFor="save">
                      <input
                        type="checkbox"
                        id="save"
                        name="saveInfo"
                        ref={register()}
                      />
                      Sauvegarder ces informations pour la prochaine fois.
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-4">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-12 ml-auto">
                  <div className="checkout__total">
                    <h5 className="checkout-title">Votre commande</h5>
                    <form
                      className="checkout__total__coupon"
                      onSubmit={couponHandleSubmit(onCouponSubmit)}
                    >
                      <h5>Code promo</h5>
                      <div className="input-validator">
                        <input
                          type="text"
                          placeholder="Entrer son code promo ici"
                          name="coupon"
                          ref={couponRegister({ required: true })}
                        />
                        {couponErrors.coupon && (
                          <span className="input-error">
                            Merci de fournir un code valide
                          </span>
                        )}
                      </div>
                      <button className="btn -dark">Appliquer</button>
                    </form>
                    <div className="checkout__total__price">
                      <h5>Produit</h5>
                      <table>
                        <colgroup>
                          <col style={{ width: "70%" }} />
                          <col style={{ width: "30%" }} />
                        </colgroup>
                        <tbody>
                          {cartState.map((item) => (
                            <tr key={item.cartId}>
                              <td>
                                <span>
                                  {formatSingleNumber(item.cartQuantity)}
                                </span>{" "}
                                x {item.name}
                              </td>
                              <td>
                                {formatCurrency(item.price * item.cartQuantity)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="checkout__total__price__total-count">
                        <table>
                          <tbody>
                            <tr>
                              <td>Sous total</td>
                              <td>{calculateTotalPrice(cartState, true)}</td>
                            </tr>
                            <tr>
                              <td>Total</td>
                              <td>{calculateTotalPrice(cartState, true)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="checkout__total__price__payment">
                        <label className="checkbox-label" htmlFor="payment">
                          <input
                            type="checkbox"
                            id="payment"
                            name="payment"
                            name="payment"
                            ref={register}
                          />
                          Carte bleue
                        </label>
                        <label className="checkbox-label" htmlFor="paypal">
                          <input
                            type="checkbox"
                            id="paypal"
                            name="paypal"
                            name="paypal"
                            ref={register}
                          />
                          PayPal
                        </label>
                      </div>
                    </div>
                    <button
                      className="btn -red"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstagramTwo />
    </LayoutOne>
  );
}

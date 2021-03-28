import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import CartItem from "./CartItem";
import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import Button from "../../Control/Button";
import { calculateTotalPrice } from "../../../common/shopUtils";

function CartItemsSidebar({ showCart, setShowCart }) {
  const cartState = useSelector((state) => state.cartReducer);
  return (
    <>
      <ClientOnlyPortal selector="#cart-sidebar">
        <CSSTransition
          in={showCart}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="cart-items__wrapper">
            <h2>Votre Panier</h2>
            {cartState.length === 0 ? (
              <h3 className="empty-noti">Aucun produit dans le panier.</h3>
            ) : (
              <>
                {cartState.length !== 0 &&
                  cartState.map((item) => (
                    <CartItem
                      key={item.cartId}
                      image={item.thumbImage[0]}
                      name={item.name}
                      price={item.price}
                      quantity={item.cartQuantity}
                      cartId={item.cartId}
                      slug={item.slug}
                    />
                  ))}
                <div className="cart-items__total">
                  <div className="cart-items__total__price">
                    <h5>Total</h5>
                    <span>{calculateTotalPrice(cartState, true)}</span>
                  </div>
                  <div className="cart-items__total__buttons">
                    <Button
                      width="100%"
                      action={process.env.PUBLIC_URL + "/shop/cart"}
                      color="dark"
                      content="Voir le panier"
                    />
                    <Button
                      width="100%"
                      action={process.env.PUBLIC_URL + "/shop/checkout"}
                      color="red"
                      content="Passer au paiement"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showCart && (
        <ClientOnlyPortal selector="#overlay">
          <div className="overlay" onClick={() => setShowCart(false)}></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}

export default CartItemsSidebar;

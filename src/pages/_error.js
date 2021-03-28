import React from "react";
import Link from "next/link";
import Head from "next/head";
import Button from "../components/Control/Button";

export default function () {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className="error-404">
        <div className="container-full-half">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="error-404__content">
                <h2>Oops!</h2>
                <h5>404 !</h5>
                <p>
                  Nous n'avons pas trouvé votre page ! :(
                </p>
                <div className="form-wrapper">
                  <form>
                    <input type="text" placeholder="Entrer un mot" />
                    <button className="btn -transparent">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                  <Button
                    action={process.env.PUBLIC_URL + "/"}
                    className="-underline"
                    color="transparent"
                    content="Retourner à l'accueil"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

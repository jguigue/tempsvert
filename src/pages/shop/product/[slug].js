import { useRouter } from "next/router";

import products from "../../../data/products.json";
import { getProductBySlug } from "../../../common/productSelect";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import InstagramTwo from "../../../components/Sections/Instagram/InstagramTwo";
import LayoutOne from "../../../components/Layout/LayoutOne";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../../components/Other/Breadcrumb";
import ProductSlideTwo from "../../../components/Sections/ProductThumb/ProductSlide/ProductSlideTwo";

export default function () {
  const router = useRouter();
  const { slug } = router.query;
  let foundProduct = getProductBySlug(products, slug);
  const onReviewSubmit = (data) => {
    console.log(data);
  };
  return ( 
    foundProduct !== null && (
      <LayoutOne title={foundProduct.name}>
        <Breadcrumb title={foundProduct.name}>
          <BreadcrumbItem name="Accueil" />
          <BreadcrumbItem name="Boutique" />
          <BreadcrumbItem name={foundProduct.name} current />
        </Breadcrumb>
        <ProductDetail data={foundProduct} onReviewSubmit={onReviewSubmit} />
        <ProductSlideTwo data={products} />
      </LayoutOne>
    )
  );
}

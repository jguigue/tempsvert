import LayoutOne from "../components/Layout/LayoutOne";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import IntroductionTwo from "../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../data/pages/about.json";
import ServiceItem from "../components/Pages/Services/ServiceItem";
import { formatSingleNumber } from "../common/utils";
import servicesData from "../data/pages/services.json";
import IntroductionNine from "../components/Sections/Introduction/IntroductionNine";

export default function () {
  return (
    <LayoutOne title="A propos - Le Temps Verts">
      <Breadcrumb title="À propos">
        <BreadcrumbItem name="Accueil" />
        <BreadcrumbItem name="À propos" current />
      </Breadcrumb>
      {servicesData &&
        servicesData.map((item, index) => (
          <ServiceItem
            key={index}
            description={item.description}
            list={item.list}
            bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
            smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
            title={item.title}
            order={formatSingleNumber(index + 1)}
            reverse={index % 2 === 1}
          />
        ))}
      <IntroductionTwo data={introductionTwoData} style={{ marginBottom: 0 }} />
     
      <IntroductionNine />
    </LayoutOne>
  );
}

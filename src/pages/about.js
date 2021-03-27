import LayoutOne from "../components/Layout/LayoutOne";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import IntroductionTwo from "../components/Sections/Introduction/IntroductionTwo";
import introductionTwoData from "../data/pages/about.json";
import ServiceItem from "../components/Pages/Services/ServiceItem";
import { formatSingleNumber } from "../common/utils";
import servicesData from "../data/pages/services.json";
import Benefits from "../components/Other/Benefits";
import IntroductionNine from "../components/Sections/Introduction/IntroductionNine";
import InstagramTwo from "../components/Sections/Instagram/InstagramTwo";

export default function () {
  return (
    <LayoutOne title="About us">
      <Breadcrumb title="About us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="About us" current />
      </Breadcrumb>
      {servicesData &&
        servicesData.map((item, index) => (
          <ServiceItem
            key={index}
            bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
            smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
            title={item.title}
            order={formatSingleNumber(index + 1)}
            reverse={index % 2 === 1}
          />
        ))}
      <IntroductionTwo data={introductionTwoData} style={{ marginBottom: 0 }} />
     
      <IntroductionNine />
      <Benefits />
      <InstagramTwo />
    </LayoutOne>
  );
}

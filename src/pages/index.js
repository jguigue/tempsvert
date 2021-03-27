import LayoutOne from "../components/Layout/LayoutOne";
import SliderTwo from "../components/Sections/Slider/SliderTwo";
import sliderData from "../data/slider/sliderOne.json";
import IntroductionOne from "../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../data/introduction/introductionOne.json";
import ProductSlideOne from "../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import productSlideOneData from "../data/products.json";
import IntroductionEight from "../components/Sections/Introduction/IntroductionEight";
import introductionEightData from "../data/introduction/introductionEight.json";
import TeamOne from "../components/Sections/Team/TeamOne";
import teamOneData from "../data/team/teamOne.json";
import CTAOne from "../components/Sections/CallToAction/CTAOne";
import DaleOfWeekTwo from "../components/Sections/DealOfWeek/DaleOfWeekTwo";


export default function homepage1() {
  return (
    <LayoutOne title="Montre écologique et écoresponsable" data={sliderData} className="-style-1">
      <SliderTwo data={sliderData} className="-style-1" showDots />
      <IntroductionOne data={introductionOneData} />
      <DaleOfWeekTwo />
      <ProductSlideOne data={productSlideOneData} />
      <IntroductionEight data={introductionEightData} />
      <TeamOne data={teamOneData} />
      <CTAOne />
    </LayoutOne>
  );
}

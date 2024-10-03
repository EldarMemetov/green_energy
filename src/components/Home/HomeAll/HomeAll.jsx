import ScrollToTopButton from "../../OurProducts/ScrollTop/ScrollTop";
import ServiceFunction from "../FullServise/ServiceFunction/ServiceFunction";
import HeroFunctionVideos from "../Hero/HeroFunctionVideos/HeroFunctionVideos";
import OurValuesFunction from "../OurValues/OurValuesFunction/OurValuesFunction";
import OverFunction from "../RepairsOver/OverFunction/OverFunction";
import FunctionSlide from "../Slide/FunctionSlide/FunctionSlide";
import SolarKits from "../SolarKits/SolarKits";

export function HomeAll() {
  return (
    <main>
      <>
        <HeroFunctionVideos />
        <FunctionSlide />
        <SolarKits />
        <OverFunction />
        <OurValuesFunction />
        <ServiceFunction />
        <ScrollToTopButton />
      </>
    </main>
  );
}

import BackgroundImage from "../BackgroundImage/BackgroundImage";
import DetectionSensors from "../DetectionSensors/DetectionSensors";
import InstalledRoof from "../InstalledRoof/InstalledRoof";
import OurProducts from "../OurProducts/OurProducts";
import PhotovoltaicModules from "../PhotovoltaicModules/PhotovoltaicModules";
import ScrollToTopButton from "../ScrollTop/ScrollTop";
import VarietySystem from "../VarietySystem/VarietySystem";

export function OurProductsAll() {
  return (
    <main>
      <>
        <BackgroundImage />
        <OurProducts />
        <PhotovoltaicModules />
        <VarietySystem />
        <InstalledRoof />
        <DetectionSensors />
        <ScrollToTopButton />
      </>
    </main>
  );
}

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeAll } from "./components/Home/HomeAll/HomeAll";
import { OurProductsAll } from "./components/OurProducts/OurProductsAll/OurProductsAll";
import { OurServicesAll } from "./components/OurServices/OurServicesAll/OurServicesAll";
import { OurTeamAll } from "./components/OurTeam/OurTeamAll/OurTeamAll";
import { ContactUsAll } from "./components/ContactUs/ContactUsAll/ContactUsAll";
import { HeaderAll } from "./components/Header/HeaderAll/HeaderAll";
import FooterFunction from "./components/Footer/FooterFunction/FooterFunction";

function App() {
  return (
    <>
      <HeaderAll />
      <Routes>
        <Route path="/" element={<HomeAll />} />
        <Route path="/products" element={<OurProductsAll />} />
        <Route path="/services" element={<OurServicesAll />} />
        <Route path="/team" element={<OurTeamAll />} />
        <Route path="/contact" element={<ContactUsAll />} />
      </Routes>
      {<FooterFunction />}
    </>
  );
}

export default App;

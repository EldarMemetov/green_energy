import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  return (
    <ScrollToTop
      smooth
      component={<FaArrowUp style={{ color: "white" }} />}
      style={{
        backgroundColor: "#3498db",
        borderRadius: "50%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
      }}
    />
  );
}

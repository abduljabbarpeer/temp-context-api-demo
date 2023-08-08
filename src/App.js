import "./styles.css";
import { Navbar } from "./components/Navbar";
import { MiddleSection } from "./components/MiddleSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <MiddleSection />
      {/* Sidebar and Main */}
      <Footer />
    </>
  );
}

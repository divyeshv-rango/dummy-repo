import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import demo from "./assets/demo.png";
import { Skiper16 } from "./components/ui/skiper-ui/skiper16";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Actions from "./components/Actions";
import ProductsTable from "./components/ProductsTable";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import RadialMaskedVideo from "./components/RadialMaskedVideo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBar />
      <Actions />
      <ProductsTable /> */}
      {/* <Skiper16 /> */}
      {/* <div className="flex bg-[#1d83d0] relative min-h-[400px]">
        <div className="px-8 pt-15 pb-12 max-w-[930px]">
          <p className="text-[40px] font-medium leading-[normal]">
            We scaled past $500M in annual settlements with 70% YoY growth, all
            without adding headcount.
          </p>
        </div>
        <div className="absolute right-0 -top-7">
          <div className="max-w-[350px]">
            <img src={demo} alt="demo" />
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
      <RadialMaskedVideo />
    </>
  );
}

export default App;

import '../Style/App.css';
import Navbar from '../components/Navbar';
import Carousel from '../components/carousel';
import QuadImgCard from '../components/QuadImgCard';
import CarouselCard from '../components/CarouselCard';
import { useState } from "react";

// exported function 
function App() {
  const [searchValue, setSearchValue] = useState("");     // state for search input
  const [cart, setCart] = useState(0);

  return (
    <>
      <Navbar setSearch={setSearchValue} cart={cart}/>
      <Carousel />
      <QuadImgCard />
      <CarouselCard />
    </>
  );
}

export default App;

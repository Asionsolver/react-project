import AppImage from "../src/assets/hero.jpg";
import Hero from "./components/Hero";

function App() {
  return (
    <div className=" w-screen h-screen relative flex justify-center items-center">
      <img src={AppImage} alt="hero" className="w-full h-full object-cover" />
      <div className=" absolute"> <Hero /></div>
    </div>
  );
}

export default App;

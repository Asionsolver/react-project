import { useState } from "react";
import MovieList from "./components/cine/MovieList";
import { MovieContext, ThemeContext } from "./context";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import SideBar from "./pages/SideBar";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);
  return (
    <div className={`h-full w-full ${darkMood ? "dark":""}`}>
      <ThemeContext.Provider value={{darkMood, setDarkMood}}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Header />
          <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </main>
          <Footer />

        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

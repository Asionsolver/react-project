import { useReducer, useState } from "react";
import MovieList from "./components/cine/MovieList";
import { MovieContext, ThemeContext } from "./context";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import SideBar from "./pages/SideBar";
import { cartReducer, initialState } from "./reducers/CartReducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMood, setDarkMood] = useState(true);

  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <div className={`h-full w-full ${darkMood ? "dark" : ""}`}>
      <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Header />
          <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </main>
          <Footer />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

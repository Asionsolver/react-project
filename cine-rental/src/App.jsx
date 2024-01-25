import MovieList from "./components/MovieList";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <>
      <Header />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
       <MovieList />
      </main>
      <Footer />
    </>
  );
}

export default App;

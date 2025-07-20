import "../src/styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AddItem from "./components/AddItem";
import CreateComunity from "./components/CreateComunity";

function App() {
  return <>
    <Header />
    <Hero />

    <AddItem />

    <CreateComunity />

    <Footer />
  </>;
}

export default App;

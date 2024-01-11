import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//TODO: CON CHROME NON IN DEVICE MODE FA SCHIFO
function App() {
  return (
    <div className="App bg-body-dark overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

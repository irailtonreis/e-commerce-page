import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import BannerPrincipal from './assets/banner-principal.png'
import BannerSecondary1 from './assets/banner-secondary-1.png'
import BannerSecondary2 from './assets/banner-secondary-2.png'

function App() {
  return (
    <div class="container-fluid">
      <div class="container">
        <Header />
          
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import BannerPrincipal from './assets/banner-principal.png'
import BannerSecondary1 from './assets/banner-secondary-1.png'
import BannerSecondary2 from './assets/banner-secondary-2.png'
import {Shelf} from "./components/Shelf";

const App = () => {
  return (
      <div className="container">
        <Header  />
          <section className="section-1">
          <img
            className="principal-banner"
            src={BannerPrincipal}
            alt="Banner Principal"
          />
        </section>
        <section className="section-2">
          <img
            src={BannerSecondary1}
            alt="Banner imagem femenina"
          />
          <img
            src={BannerSecondary2}
            alt="Banner imagem masculina"
          />
        </section>
        <section className="section-3">
          <Shelf/>
        </section>
        <section class="section-4">
        <div class="subtitle">#youtube</div>
        <div class="video-container">
          <iframe
            class="video"
            src="https://www.youtube.com/embed/aEWYDR8sopI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section class="section-5">
        <h2 class="subtitle">Coleção</h2>
        <div class="banner-colletion-container">
          <img
            class="banner-colletion"
            src="./assets/banner-collection.png"
            alt="Banner Colecção"
          />
        </div>
      </section>
      <section className="section-3">
          <Shelf/>
        </section>
        <Footer />
      </div>
  );
}

export default App;

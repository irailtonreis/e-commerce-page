import React from "react";
import Slider from "react-slick";
import ImageProduct from "../assets/product.png";
import ProductsJson from "../products.json";

export const Shelf = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <h2 class="subtitle">Destaques</h2>
      <div class="products-container">
        <Slider {...settings}>
          {ProductsJson.map((product) => (
            <div class="product">
              <div class="product-image">
                <img src={ImageProduct} alt={product.title} />
              </div>
              <div class="product-info">
                <h3 class="product-title">{product.title}</h3>
                <div class="product-price">
                  <p class="product-price">R$ {product.price}</p>
                  <p class="product-price-discount">
                    R$ {product.priceDiscount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

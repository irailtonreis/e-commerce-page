import React from "react";
import Slider from "react-slick";
import ImageProduct from "../assets/product.png";
import ProductsJson from "../products.json";
import './Shelf.css'

export const Shelf = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
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
                  <p class="product-price-normal">R$ {product.price}</p>
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

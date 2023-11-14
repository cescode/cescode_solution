// Bannerppal.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Bannerppal.css';
import gazel from '../assets/gazel.webp';
import voltex from '../assets/voltex.jpeg';
import mobil from '../assets/mobil.webp';
import altoque from '../assets/altoque.webp';

const slides = [
  {
    title: 'Gazel',
    image: gazel,
    description: 'El GNV es un combustible para uso vehicular económico y ambientalmente limpio, es considerado una alternativa sustentable para la sustitución de combustibles líquidos.',
  },
  {
    title: 'Voltex',
    image: voltex,
    description: 'La red de electrolineras que permite a los colombianos recorrer Colombia en sus vehículos eléctricos.',
  },
  {
    title: 'Mobil',
    image: mobil,
    description: 'Todos nuestros lubricantes son desarrollados a partir de investigación científica y tecnología avanzada. Así creamos soluciones específicas para cada tipo de motor.',
  },
  {
    title: 'Altoque',
    image: altoque,
    description: 'Somos tu aliado en el camino, siendo una red de más de 120 tiendas que cuentan con un servicio ágil y moderno que acompaña a las personas que se movilizan por las ciudades y carreteras del país.',
  },
];

const Bannerppal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev">&#8592;</div>,
    nextArrow: <div className="slick-next">&#8594;</div>,
  };

  return (
    <Slider {...settings} className="banner-container">
      {slides.map((slide, index) => (
        <div key={index} className={`item-container ${slide.title.toLowerCase()}`}>
          <img src={slide.image} alt={slide.title} className="slide-image" />
          <div className="item-text">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Bannerppal;

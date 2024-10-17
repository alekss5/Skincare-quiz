import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Slider from 'react-slick'; 
import './ProductSlider.css';
import Next from'../../assets/svg.svg'
import InformationCard from '../InformationCard/InformationCard';

const ProductSlider = ({ products, handleWishlistToggle, wishlist, informationCarText}) => {
    const NextArrow = ({ onClick }) => {
        return (
          <div

            className='nextButton'
            onClick={onClick}
          >
         <img src={Next} style={{width:'16px',height:'16px',marginTop:'22px',backgroundColor:'#EEF7FB' }} alt='Next'/>
          </div>
        );
      };
     
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3, 
        nextArrow: <NextArrow />, 
        
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            },
          },
          {
            breakpoint: 945,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };
  
    return (
    
        <Slider {...settings} className="slider" >
             <InformationCard title={informationCarText.title} text={informationCarText.text}/>
        {products.map(product => (
                <ProductCard key={product.id} product={product} handleWishlistToggle={handleWishlistToggle} wishlist={wishlist} />
        ))}
      </Slider>
    );
  };
  
  export default ProductSlider;
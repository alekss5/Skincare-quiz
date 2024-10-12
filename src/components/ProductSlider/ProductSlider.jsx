import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Slider from 'react-slick'; 
import './ProductSlider.css';
import Next from'../../assets/svg.svg'
import InformationCard from '../InformationCard';

const ProductSlider = ({ products, handleWishlistToggle, wishlist, informationCarText}) => {
    const NextArrow = ({ onClick }) => {
        return (
          <div
            style={{
              display: 'block',
              background: '#EEF7FB',
              color: 'white',
              borderRadius: '50%',
              right: '-50px',
              position: 'absolute',
              top: '50%',
              cursor: 'pointer',
              fontSize: '30px',
         
              width: '60px',
              height: '60px',
              textAlign: 'center',
            
            }}
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
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      };
  
    return (
    
        <Slider {...settings} style={{width:'65vw',paddingLeft:'10px',marginTop:'-100px'}}>
             <InformationCard title={informationCarText.title} text={informationCarText.text}/>
        {products.map(product => (
                <ProductCard key={product.id} product={product} handleWishlistToggle={handleWishlistToggle} wishlist={wishlist} />
        ))}
      </Slider>
    );
  };
  
  export default ProductSlider;
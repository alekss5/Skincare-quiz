import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackgroundContainer from '../components/BackgroundContainer';
import Title from '../components/Title';
import Text from '../components/Text';
import ResultImage from '../assets/Rectangle2-2.png';
import SubmitButton from '../components/SubmitButton';
import CenterWrapper from '../components/CenterWrapper';
import ProductSlider from '../components/ProductSlider';

const InformationCarText = {
  title: 'Daily routine',
  text: "Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances, you can add a moment of calm to the end of your day.",
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || {};
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://jeval.com.au/collections/hair-care/products.json?page=1');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        const answerArray = Object.values(answers || {}).map(a => a.toLowerCase());

        let filteredProducts = data.products.filter(product => {
          const productTitle = product.title.toLowerCase();
          const productDescription = product.body_html.toLowerCase();
          const productTags = product.tags.map(tag => tag.toLowerCase());

          return answerArray.some(keyword =>
            productTitle.includes(keyword) ||
            productDescription.includes(keyword) ||
            productTags.some(tag => tag.includes(keyword))
          );
        });

        if (filteredProducts.length < 8) {
          const additionalProducts = data.products.filter(product =>
            !filteredProducts.some(filtered => filtered.id === product.id)
          ).slice(0, 8 - filteredProducts.length);
          filteredProducts = [...filteredProducts, ...additionalProducts];
        }

        const sortedProducts = filteredProducts.sort((a, b) => {
          const isAWishlist = wishlist.includes(a.id);
          const isBWishlist = wishlist.includes(b.id);
          return isBWishlist - isAWishlist;
        });

        setProducts(sortedProducts);
      } catch (error) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [answers]);

  const handleWishlistToggle = (productId) => {
    const updatedWishlist = wishlist.includes(productId)
      ? wishlist.filter(id => id !== productId)
      : [...wishlist, productId];

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const retakeQuiz = () => {
    navigate('/question/0');
  };

  if (error) {
    return <div style={{ textAlign: 'center' }}>{error}</div>;
  }

  return (
    <div className="results-page">
      <BackgroundContainer backgroundImagePath={ResultImage}>
        <CenterWrapper style={{ marginTop: '-6.25rem' }}>
          <Title style={{maxWidth:'563px'}}>Build your everyday self care routine.</Title>
          <Text style={{ lineHeight: "24px", color: '#FFFFFF', maxWidth: '563px' }}>
            Perfect for if you're looking for soft, nourished skin, our moisturizing body
            washes are made with skin-natural nutrients that work with your skin to
            replenish moisture. With a light formula, the bubbly lather leaves your skin
            feeling cleansed and cared for. And by choosing relaxing fragrances you can
            add a moment of calm to the end of your day.
          </Text>
        </CenterWrapper>
        <SubmitButton text='Retake the quiz' onClick={retakeQuiz} style={{ backgroundColor: 'transparent', border: "1px solid white", width: '238px',marginTop:'15px' }} fontStyle={{ color: 'white' }}/>
      </BackgroundContainer>

      {loading ? (
        <div style={{ textAlign: 'center' }}>Loading products...</div>
      ) : (
        <div className="product-slider" style={{ marginLeft: '1vw', width: '98vw', display: 'flex', justifyContent: 'center' }}>
          <ProductSlider
            products={products}
            handleWishlistToggle={handleWishlistToggle}
            wishlist={wishlist}
            informationCarText={InformationCarText}
          />
        </div>
      )}
    </div>
  );
};

export default Result;
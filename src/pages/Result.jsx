import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackgroundContainer from '../components/BackgroundContainer';
import Title from '../components/Title';
import Subtext from '../components/Subtext';
import ResultImage from '../assets/Rectangle2-2.png';
import SubmitButton from '../components/SubmitButton';
import CenterWrapper from '../components/CenterWrapper';
import ProductSlider from '../components/ProductSlider';

const InformationCarText = {
  title: 'Daily routine',
  text: "Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.",
}

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
    fetch('https://jeval.com.au/collections/hair-care/products.json?page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        const answerArray = Object.values(answers).map(a => a.toLowerCase());

        let filteredProducts = [];
        if (answerArray.length > 0) {
          filteredProducts = data.products.filter(product => {
            const productTitle = product.title.toLowerCase();
            const productDescription = product.body_html.toLowerCase();
            const productTags = product.tags.map(tag => tag.toLowerCase());

            return answerArray.some(keyword =>
              productTitle.includes(keyword) ||
              productDescription.includes(keyword) ||
              productTags.some(tag => tag.includes(keyword))
            );
          });
        }

        let allProducts = data.products;

        //adding more products if there is no enough products
        if (filteredProducts.length < 8) {
          const additionalProducts = allProducts.filter(product =>
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
      })
      .catch(error => {
        console.error('Error fetching:', error);
        setError('Failed to load products. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [answers]); //add and wishlist and the changes for favorite will be applied immediately

  const handleWishlistToggle = (productId) => {
    let updatedWishlist;

    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter(id => id !== productId);
    } else {
      updatedWishlist = [...wishlist, productId];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const retakeQuiz = () => {
    navigate('/question/0');
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="results-page">
      <BackgroundContainer backgroundImagePath={ResultImage}>
        <CenterWrapper style={{ marginTop: '-100px' }}>
          <Title>Build your everyday self care routine.</Title>
          <Subtext style={{ lineHeight: "24px" }}>
            Perfect for if you're looking for soft, nourished skin, our moisturizing body <br />washes are made with skin-natural nutrients that work with your skin to <br />replenish moisture. With a light formula, the bubbly lather leaves your skin <br />feeling cleansed and cared for. And by choosing relaxing fragrances you can <br />add a moment of calm to the end of your day.
          </Subtext>
        </CenterWrapper>
        <SubmitButton onClick={retakeQuiz} style={{ backgroundColor: 'transparent', border: "1px solid white", width: '238px' }} fontStyle={{ color: 'white' }}>
          Retake the quiz
        </SubmitButton>
      </BackgroundContainer>
      {loading ? <div style={{ textAlign: 'center' }}>Loading products...</div> : <div className="product-slider" style={{ marginLeft: '1vw', width: '98vw', alignSelf: 'center', display: 'flex', justifyContent: 'center' }}>
        <ProductSlider products={products} handleWishlistToggle={handleWishlistToggle} wishlist={wishlist} informationCarText={InformationCarText} />
      </div>}
    </div>
  );
};

export default Result;

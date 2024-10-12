import React from 'react';
import FavoriteIcon from '../../assets/favorite.svg';
import SelectedFavorite from '../../assets/selectedFavorite.svg';
import './ProductCard.css';

function ProductCard({ product, handleWishlistToggle, wishlist }) {
  return (
    <div key={product.id} className="card-wrapper">
      <div className="card-image-wrapper">
        <button
          onClick={() => handleWishlistToggle(product.id)}
          className="wishlist-button"
        >
          <img
            src={wishlist.includes(product.id) ? SelectedFavorite : FavoriteIcon}
            alt="Favorite Icon"
            className="favorite-icon"
          />
        </button>
        <img
          src={product.images[0].src}
          alt={product.title}
          className="product-image"
        />
      </div>
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.variants[0].price}</p>
    </div>
  );
}

export default ProductCard;

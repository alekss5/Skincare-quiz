import React from 'react';
import FavoriteIcon from '../../assets/favorite.svg';
import SelectedFavorite from '../../assets/selectedFavorite.svg';
import Title from '../Title';
import styles from './ProductCard.module.css';

function ProductCard({ product, handleWishlistToggle, wishlist }) {
  return (
    <div key={product.id} className={styles.cardWrapper}>
      <div className={styles.cardImageWrapper}>
        <button
          onClick={() => handleWishlistToggle(product.id)}
          className={styles.wishlistButton}
        >
          <img
            src={wishlist.includes(product.id) ? SelectedFavorite : FavoriteIcon}
            alt="Favorite Icon"
            className={styles.favoriteIcon}
          />
        </button>
        <img
          src={product.images[0].src}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <Title className={styles.productTitle}>{product.title}</Title>
      <Title className={styles.productPrice}>${product.variants[0].price}</Title>
    </div>
  );
}

export default ProductCard;

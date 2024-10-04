import React from 'react';
import products from '../products.json';
import styles from './Wireless.module.scss';

type ProductItem = {
  id: number;
  image: string;
  name: string;
};

type WirelessProps = {
  onCardClick: (item: ProductItem) => void;
};

const Wireless: React.FC<WirelessProps> = ({ onCardClick }) => {
  return (
    <div>
      <h2 className={styles.shop__title}>Беспроводные наушники</h2>
      <div className={styles.shop__cards}>
        {products.wireless_earphones.map((item) => (
          <div
            key={item.id}
            className={styles.shop__card}
            onClick={() => onCardClick(item)}
          >
            <img
              className={styles.shop__img}
              src={`/src/img/${item.image}`}
              alt={item.name}
            />
            <p className={styles.shop__name}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wireless;

import React from 'react';
import products from '../products.json';
import styles from './Headphones.module.scss';

type ProductItem = {
  id: number;
  image: string;
  name: string;
};

type HeadphonesProps = {
  onCardClick: (item: ProductItem) => void;
};

const Headphones: React.FC<HeadphonesProps> = ({ onCardClick }) => {
  return (
    <div>
      <h2 className={styles.shop__title}>Проводные наушники</h2>
      <div className={styles.shop__cards}>
        {products.wired_earphones.map((item) => (
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

export default Headphones;

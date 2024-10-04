import React from 'react';
import products from '../products.json';
import styles from './Covers.module.scss';

type ProductItem = {
  id: number;
  image: string;
  name: string;
};

type CoversProps = {
  onCardClick: (item: ProductItem) => void;
};

const Covers: React.FC<CoversProps> = ({ onCardClick }) => {
  return (
    <div>
      <h2 className={styles.shop__title}>Чехлы</h2>
      <div className={styles.shop__cards}>
        {products.cases.map((item) => (
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

export default Covers;

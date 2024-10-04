import React, { useState, useEffect } from 'react';
import Header from './Header';
import styles from './Shop.module.scss';
import Covers from './Covers';
import Headphones from './Headphones';
import Wireless from './Wireless';
import Modal from './Modal';

type ProductItem = {
  id: number;
  image: string;
  name: string;
};

const Shop: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);

  const handleCardClick = (item: ProductItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  return (
    <div>
      <Header />

      <div className={styles.shop}>
        <Covers onCardClick={handleCardClick} />
        <Headphones onCardClick={handleCardClick} />
        <Wireless onCardClick={handleCardClick} />
      </div>

      <Modal item={selectedItem} onClose={handleCloseModal} />
    </div>
  );
};

export default Shop;

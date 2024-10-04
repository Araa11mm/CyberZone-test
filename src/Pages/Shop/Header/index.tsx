import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <h2 className={styles.logo}>R-STORE</h2>
      </nav>

      <Link to={`/`}>
        <button className={styles.exit}>
          <p>Выйти</p>
        </button>
      </Link>
    </div>
  );
};

export default Header;

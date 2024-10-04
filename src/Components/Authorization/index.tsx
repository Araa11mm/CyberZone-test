import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Authorization.module.scss';
import Entry from '@img/Entry.svg';

interface Errors {
  username?: string;
  password?: string;
  credentials?: string;
}

const Authorization: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<Errors>({});

  const testUser = {
    username: 'Cyber1',
    password: '12345',
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let tempErrors: Errors = {};

    if (!username) {
      tempErrors.username = 'Поле не может быть пустым';
    }

    if (!password) {
      tempErrors.password = 'Поле не может быть пустым';
    }

    if (!tempErrors.username && !tempErrors.password && (username !== testUser.username || password !== testUser.password)) {
      tempErrors.credentials = 'Неверный логин или пароль';
    }

    setErrors(tempErrors);


    if (Object.keys(tempErrors).length === 0) {
      navigate('/shop');
    }
  };

  return (
    <div className={styles.auth}>
      <form className={styles.auth__form} onSubmit={handleSubmit}>
        <div className={styles.auth__header}>
          <img src={Entry} alt="Entry" />
          <h2 className={styles.auth__title}>ВХОД</h2>
        </div>
        <div className={styles.auth__inputs}>
          <input
            type="text"
            className={styles.auth__username}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className={styles.error}>{errors.username}</div>}
          <input
            type="password"
            className={styles.auth__password}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className={styles.error}>{errors.password}</div>}
        </div>
        <div className={styles.auth__flex}>
          {errors.credentials && <div className={styles.error}>{errors.credentials}</div>}
          <button type="submit" className={styles.auth__button}>
            <p className={styles.auth__button_p}>Войти</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Authorization;
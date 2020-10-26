import Link from "next/link";
import styles from "./Header.module.css"
import Search from '../Search/Search'

export default function Header() {
  return (
    <header className={styles.header__container}>
      <div>
        <Link href="/">
          <img
            src="/images/advertImage.png"
            alt=""
            className={styles.advertImage}
          />
        </Link>
      </div>

      <div className={styles.header__main}>
        <Link href="/">
          <img
            src="/images/woozeee.svg"
            alt=""
            className={styles.header__logo}
          />
        </Link>
        <Link href="/">
          <h1 className={styles.header__title}></h1>
        </Link>
       
       <Search/>

        <div className={styles.header__nav}>
          <div className={styles.header__option}>
            <span className={styles.option__lineOne}>Hi, Sign in</span>
            <img
              src="/images/arrowdown.svg"
              alt=""
              className={styles.header__icon}
            />
          </div>
          <div className={styles.header__option}>
            <img
              src="/images/alertCircle.svg"
              alt=""
              className={styles.header__icon}
            />
            <span className={styles.option__lineOne}>Help</span>
            <img
              src="/images/arrowdown.svg"
              alt=""
              className={styles.header__icon}
            />
          </div>
          <div className={styles.header__option}>
            <img
              src="/images/cart.svg"
              alt=""
              className={styles.header__icon}
            />
            <span className={styles.option__lineOne}>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}

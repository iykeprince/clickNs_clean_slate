import Link from "next/link"
import styles from './Footer.module.css'

export default function Footer() {
  const item1 = [
    "Information",
    "About Us",
    "Privacy Policy	",
    "Delivery Information",
    "Terms and Conditions",
  ];
  const item2 = [
    "My Account",
    "Help & FAQ",
    "Returns",
    "Order History",
    "My Account",
  ]
  const item3 = [
    "More Info",
    "Sell on SmartShop",
    "Become an Affiliate Partner",
    "Become a Logistics Service Partner",
    "Become a Vendor Service Provider",
  ]
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div>
          {item1.map((item, index) => {
            if (index === 0) {
              return <h2 key={index}>{item}</h2>
            } else {
              return <p key={index}>{item}</p>
            }
          })}
        </div>
        <div>
          {item2.map((item, index) => {
            if (index === 0) {
              return <h2 key={index+item}>{item}</h2>
            } else {
              return <p key={index}>{item}</p>
            }
          })}
        </div>
        <div>
          {item3.map((item, index) => {
            if (index === 0) {
              return <h2 key={index}>{item}</h2>
            } else {
              return <p key={index}>{item}</p>
            }
          })}
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Don’t miss any updates or promotions by signing up to our newsletter.</p>
          <div>
            <h2>Social</h2>
            <div className={styles.images}>
              <img src="/images/fb.svg" alt="facebook" />
              <img src="/images/instagram.png" alt="instagram" />
              <img src="/images/twitter.png" alt="twitter" />
              <img src="/images/youtube.png" alt="youtube" />
            </div>
          </div>
        </div>
        <div className="blog">
          <h2>Blog</h2>
          <img
            src="/images/black-friday.png"
            alt="blackFriday"
            className={styles.blackimg}
          />

          <div className={styles.shop}>
            <h3>Best Shopping Store To Buy <br /> Everything You Need</h3>
            <div className={styles.smallCard}>
              <p>18</p>
              <p>May</p>
            </div>
          </div>
          <p>The trend of online shopping is increasing regularly. All individuals love to shop for hings online instead of visiting the market...</p>
          <div className={`${styles.flex} ${styles.bgd}`}>
            <span className={styles.flex}>
              <span className={styles.flex}>
                <img src="/images/eye.png" alt="eye" />
                <p>50</p>
              </span>
              <span className={styles.flex}>
                <img src="/images/msg.png" alt="message" />
                <p>8</p>
              </span>
            </span>
            <p>Read More</p>
          </div>
        </div>
      </section>
      <div className={styles.footer__bottom}>
        <p>2020, eConnect NetPower Limited. All Rights Reserved</p>
        <div>
          <span>
            <img src="/images/econnect.png" alt="econnect" />
          </span>
          <span className={styles.googleStore}>
            <img src="/images/avaplaystore.png" alt="avaplaystore" />
            <img src="/images/store.png" alt="store" />
          </span>
          <span className={styles.googleStore}>
            <img src="/images/avappstore.png" alt="avaplaystore" />
            <img src="/images/apple.png" alt="apple" />
          </span>
        </div>
      </div>
    </footer>
  )
}
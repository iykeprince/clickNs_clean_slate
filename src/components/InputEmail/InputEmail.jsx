import React from 'react'
import styles from './InputEmail.module.css'
function InputEmail() {
    return (
        <div className={styles.email}>
    <input
      type="text"
      className={styles.emailInput}
      placeholder="Your Email"
    />

    <img src="/images/emailSubmit.svg" alt=""/>
  </div>
    )
}

export default InputEmail

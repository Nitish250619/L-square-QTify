import React from 'react'
import styles from "./Hero.module.css"
import {ReactComponent as HeadphoneIcon} from "../../assets/vibrating-headphone 1.svg"

const Hero = () => {
  return (
    <div className={styles.main}>
        <div className={styles.inside}>
            <div className={styles.text}>
            <h1 className={styles.text1}>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
            </div>          
            <HeadphoneIcon/>
        </div>
    </div>
  )
}

export default Hero
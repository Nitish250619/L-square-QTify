import React from 'react'
import styles from "./HomePage.module.css"
import { useOutletContext } from 'react-router'
import Hero from "../../Components/HeroSection/Hero"
import Section from '../../Components/Section/Section'
import { fetchFilters } from '../../Components/Api/Api'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {

    const { data } = useOutletContext();
    const {topAlbums , newAlbums , songs}= data;
  return (
    <div>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            <Section title="Songs" data={songs} filterSource={fetchFilters} type="song"/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default HomePage
import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./CarousalLeftButton.module.css";
import { ReactComponent as LeftNav } from "../../../assets/leftnaviget.svg";

const CarousalLeftButton = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftnav}>
      {!isBeginning && <LeftNav onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarousalLeftButton;

import React, { useEffect, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./CarousalRightButton.module.css";
import { ReactComponent as RightNav } from "../../../assets/rightnavigate.svg";

const CarousalRightButton = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);
  return (
    <div className={styles.rightnav}>
      {!isEnd && <RightNav onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarousalRightButton;

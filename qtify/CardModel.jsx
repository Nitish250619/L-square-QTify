import React from "react";
import styles from "./CardModel.module.css"
import { Chip, Tooltip } from "@mui/material";

const CardModel = ({ data, type }) => {

  const getCard = (type)=>{
    switch(type){
      case "album" :{
        const {image , title , follows , slug, songs} = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <a href={`/album/${slug}`}>
          <div className={styles.main}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy"/>
              <div className={styles.banner}>
                <Chip
                label={`${follows} Follows`}
                size="small"
                className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.title}>
              <p> {title}title</p>
            </div>
          </div>
          </a>
          </Tooltip>
        );

      }
      case "song" :{
        const {likes , image , title} = data;
        return (
          <div className={styles.main}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy"/>
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p> {likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.title}>
              <p> {title}title</p>
            </div>
          </div>
        );

      }

      default:
        return <></>
    }
  }
  return getCard(type);
 
};

export default CardModel;

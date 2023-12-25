import React , {useState} from 'react'
import styles from "./Section.module.css"
import CardModel from '../CardModel/CardModel'
import { CircularProgress } from '@mui/material'
import Carousal from '../Carousal/Carousal'

const Section = ({title , data, type}) => {
    const [ carousalToggle , setCaraousalToggle] = useState(true)

    const handleToggle =()=>{
        setCaraousalToggle((prevState)=>!prevState);
    }
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{!carousalToggle ? "Collapse All" : "Show All"}</h4>
        </div>
        {data.length===0 ? (
            <CircularProgress/>
        ): (
            <div className={styles.cardwrapper}>
                {!carousalToggle ? (
                    <div className={styles.wrapper}>
                        {data.map((ele)=>(
                            <CardModel data={ele} type={type} />
                        ))}
                    </div>
                ) : (
                    <Carousal data={data} renderComponent={(data)=><CardModel data={data} type={type}/>}/>
                    
                )}

            </div>
        )}
    </div>
  )
}

export default Section
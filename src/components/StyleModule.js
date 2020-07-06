import React from 'react'
//import CSS module example
import styles from'./myStyles.module.css'
//using CSS modules have local scope
const StyleModule = () => {
    return <h1 className = {styles.success}>Styling using CSS module</h1>
}

export default StyleModule
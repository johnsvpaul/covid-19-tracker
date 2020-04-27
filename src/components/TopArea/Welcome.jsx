import React from 'react';
import styles from './Welcome.module.css'
import hero1__people from '../../img/shape/hero1__people.png'
import hero__bg from '../../img/shape/hero__bg.png'
import shape1 from '../../img/shape/shape__white1.png'
import shape2 from '../../img/shape/virus.png'
import shape3 from '../../img/shape/virus.png'
import shape4 from '../../img/shape/virus.png'



const Welcome = () => {
    return(
        <div className = {styles.welcome}>
            <div className = {styles.leftcontainer}>
                <div className = {styles.leftmargin}>
                    <h1>Save yourself Save the world.</h1>
                    <h4>Coronavirus disease (COVID-19) is an infectious <br></br> disease caused by a new virus.</h4>
                    <div className={styles.space30}></div>
                    <a href="#stats" className={styles.btn1}>Check Statistics</a>
                    <img className= {styles.shape1} src={shape1} alt="bg" />
                </div>
            </div>
          
            <div className = {styles.rightcontainer}>
                <div className = {styles.rightmargin}>
                    <img className= {styles.main} src={hero1__people} alt="person" />
                    <img className= {styles.bgmain} src={hero__bg} alt="bg" />  
                    <img className= {styles.shape2} src={shape2} alt="bg" />
                    <img className= {styles.shape3} src={shape3} alt="bg" />
                    <img className= {styles.shape4} src={shape4} alt="bg" />      
            </div>
            </div>
        </div>
 
    )
    
}






export default Welcome;
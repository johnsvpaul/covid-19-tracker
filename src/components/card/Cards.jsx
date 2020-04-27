import React from 'react';
//import {Card, CardContent, Typography, Grid,} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup';
//import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed){
        return 'loading';
    }
    
    var lastupdated = new Date().getTime() - new Date(lastUpdate).getTime();
    var min = Math.floor((lastupdated/1000/60) << 0)

    return( 
    <div >
        <div className = {styles.main} id = 'stats'>
        <div className ={styles.con}> 
            <h4>Confirmed</h4>
            <h1><CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = ','/></h1>
            

        </div>
        <div className ={styles.rec}> 
            <h4>Recovered</h4>
            <h1><CountUp start = {0} end = {recovered.value} duration = {2.5} separator = ','/></h1>
            
        </div>
        <div className ={styles.det}> 
            <h4>Deaths</h4>
            <h1><CountUp start = {0} end = {deaths.value} duration = {2.5} separator = ','/></h1>
            
        </div>
        </div>

        <div className ={styles.lastupdate}>
       
        <h6> *** Last Updated {min} minutes ago </h6>
        
        </div>
        <div className ={styles.select}>Please select your country below</div>
      
    </div>
    
        
    )
    
    
}

export default Cards;

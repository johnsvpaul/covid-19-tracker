import React, {useState, useEffect} from 'react';
import {fetchLocation} from '../../api'


const IpCountry = () => {
const [fetchedLocation, setFetchedLocation] = useState([]);
    useEffect(() =>{
        const fetchAPI = async() => {
            setFetchedLocation(await fetchLocation())
        } 
        fetchAPI();
 
    },[setFetchedLocation]); 

    return(
        null
    )

  /*
    return(
        <div className= {styles.ip}>
            <h5>Viewing from {fetchedLocation}</h5>
        </div>
    
    )
    */
}

export default IpCountry; 
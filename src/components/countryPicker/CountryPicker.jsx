import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api'
import {fetchLocation} from '../../api'


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries]= useState([]);
    useEffect(()=>{
        const fetchAPI = async () =>{
            setFetchedCountries (await fetchCountries());   
        }

        fetchAPI();
    }, [setFetchedCountries]);
//ip location below
        const [fetchedLocation, setFetchedLocation] = useState([]);
            useEffect(() =>{
                const fetchAPI = async() => {
                    setFetchedLocation(await fetchLocation())
                } 
                fetchAPI();
         
            },[setFetchedLocation]); 
      
    return(
        
       
         <FormControl className= {styles.formControl}>
             <NativeSelect defaultValue=" " 
             onChange={(e)=> handleCountryChange(e.target.value)}>
                 <option value = "" >Worldwide</option>  
            <option value = {fetchedLocation} >Your Country: {fetchedLocation}</option>
             
             {fetchedCountries.map((country, i)=> <option key = {i} value = {country}>{country}</option>)}
             </NativeSelect>
        </FormControl>
       
      
    )
    
}

export default CountryPicker;

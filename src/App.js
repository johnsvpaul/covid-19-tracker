import React from 'react';

import {Cards,Chart,CountryPicker, IpCountry,Welcome, Nav, Table} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import covid19 from './img/covid19.png'









window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
class App extends React.Component {
    state = {
        data: {},
        country: '',
        getLocation: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();  
        
        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country) => { //
        const fetchedData = await fetchData(country);  
        this.setState({data:fetchedData, country: country})    
    }
    
   
    render() {
        const{ data , country} = this.state;
        return ( 
            
        
        <div >
            <div><Nav/></div>
            <div><Welcome/></div>
            
            <div className = {styles.container}> 
            
                <Cards data = {data} />
                <CountryPicker handleCountryChange= {this.handleCountryChange }/>
                <IpCountry getLocation = {this.getLocation} />
                <Chart data = {data} country={country}/>
                
            
            </div>
            
            

        </div>
        );
    }
}

 
export default App;// 
// <Footer />
import React from 'react';

import {Cards,Chart,CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

import covid19 from './img/covid19.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();  
        
        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);  

        this.setState({data:fetchedData, country: country})

         
    }

    render() {
        const{ data } = this.state;
        return ( <div className = {styles.container} >
            <img className = {styles.image} src= {covid19} />
            <Cards data = {data} />
            <Chart />
            <CountryPicker handleCountryChange= {this.handleCountryChange }/>
            </div>
        );
    }
}

export default App;
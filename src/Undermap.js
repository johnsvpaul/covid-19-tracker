import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import styles from './Undermap.module.css';
import logo2 from './img/logo/covidlogow.png'



//===================== mapbox ============================================
/*fetch('https://corona.lmao.ninja/v2/countries')
 .then(response =>response.json())
 .then(data => {
     
   
     data.map(report => {
         const {cases, countryInfo, country} = report
         
        
         new mapboxgl.Marker()
         .setLngLat([countryInfo.long,countryInfo.lat])
         .addTo(map)
         
         
     })
 }); */
/*mapboxgl.accessToken =
            'pk.eyJ1Ijoiam9obnN2cGF1bCIsImEiOiJjazlnMWN0Nm4wZ3l3M2ZvOXcybWo1cW1mIn0.tNAdCL2R8VxgEfd1NTOX_Q';
            const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 1.3
        
*/


mapboxgl.accessToken =
'pk.eyJ1Ijoiam9obnN2cGF1bCIsImEiOiJjazlnMWN0Nm4wZ3l3M2ZvOXcybWo1cW1mIn0.tNAdCL2R8VxgEfd1NTOX_Q';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',//dark mode - dark-v10
zoom: 1.3
});
fetch('https://corona.lmao.ninja/v2/countries')
 .then(response =>response.json())
 .then(data => {
     
   
     data.map(report => {
         const {cases, countryInfo, country} = report
         
        
         new mapboxgl.Marker({
             color: '#EB4559',
             symbol: '30' ,
             size: 'large'

         })
         .setLngLat([countryInfo.long,countryInfo.lat])
         .addTo(map)
         
         
     })
 });


    //disables zoom on scroll
    map.scrollZoom.disable();
    //toggle fullscreen mode
    map.addControl(new mapboxgl.FullscreenControl());

//======== 


class Undermap extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        }
      }
      componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/countries')
        .then(res => res.json())
        .then(posts => {
            this.setState({posts:posts})
        })
        
      }
      
render(){const date = new Date().getFullYear();
  
return(
  <div className = {styles.footerarea}>
        <div className = {styles.container}> 
                <div className = {styles.content}> 
                    <div className = {styles.col1}>
                    <img className= {styles.logo} src={logo2} alt="logo" />
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus. The disease causes.</p>
                    </div>
                        
                    <div className = {styles.col2}> 
                        <div className = {styles.heading}>About Us </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus.
                             Sit amet venenatis urna cursus eget nunc scelerisque. Tincidunt ornare 
                             massa eget egestas purus viverra. Lectus arcu bibendum at variu</p>
                     </div>
                    <div className = {styles.col3}>
                        <div className = {styles.heading}>Helpful Links </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus.
                             Sit amet venenatis urna cursus eget nunc scelerisque. Tincidunt ornare 
                             massa eget egestas purus viverra. Lectus arcu bibendum at variu</p>
                     </div>

                </div>
           
        </div>
        <div className = {styles.footersep}>
        
        </div>

        <div className = {styles.container}>
            <div className = {styles.copyright}>
                <p>&copy; <span id="year">{date}</span> Johns Paul. All Rights Reserved.</p> 
            </div>
           
        </div>
  </div>
  
)
}
} 


export default Undermap;
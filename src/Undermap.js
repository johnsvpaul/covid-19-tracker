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

/*=====uncommet this
mapboxgl.accessToken =
'pk.eyJ1Ijoiam9obnN2cGF1bCIsImEiOiJjazlnMWN0Nm4wZ3l3M2ZvOXcybWo1cW1mIn0.tNAdCL2R8VxgEfd1NTOX_Q';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',//dark mode - dark-v10
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
*/
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
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.</p>
                    </div>
                        
                    <div className = {styles.col2}> 
                        <div className = {styles.heading}>About Us </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="https://news.google.com/covid19/">News Feeds</a></li>
                        </ul>
                     </div>
                    <div className = {styles.col3}>
                        <div className = {styles.heading}>Useful Links </div>

                        <ul>
                            <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO Information</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">Covid-19 Wikipedia</a></li>
                            
                            <li><a href="https://edition.cnn.com/interactive/2020/health/coronavirus-us-maps-and-cases/">CNN News</a></li>
                            
                        </ul>
                     </div>
                     <div className = {styles.col4}>


                        <div className = {styles.heading}>Share Latest Stats </div>
                    <div className = {styles.share}>
                        
                        <li> <a href="http://www.facebook.com/sharer.php?u=https://cvd19tracker.com" target="_blank">
                     <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /> 
                     </a>
                    </li> 
                        <li><a href="https://twitter.com/share?url=https://cvd19tracker.com&amp;text=Check%20out%20the%20latest%20Covid-19%20Stats&amp;hashtags=covidtracker.app" target="_blank">
                      <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                     </a></li> 
                        
                     </div>
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
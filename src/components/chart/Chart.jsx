import React ,{useState, useEffect} from 'react';
import styles from './Chart.module.css'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'






const Chart = ({data:{confirmed, recovered, deaths }, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI = async() =>{
            setDailyData ( await fetchDailyData())

        }
        
        fetchAPI();
    },[] );


    const lineChart = (
        
        <Line

            data = {{
                    labels: dailyData.map(({date})=>date),
                    datasets: [{
                        data: dailyData.map(({confirmed})=>confirmed),
                        label: 'Confirmed Cases',
                        borderColor: '#36A2EB',
                        backgroundColor: '#36A2EB',
                        fill: 'true',
                        pointStyle:'rectRounded',
                        pointRadius: '4',
                        
                                                
                    
                    },{

                        
                            data: dailyData.map(({deaths})=>deaths),
                            label: 'Deaths',
                            borderColor: '#FF6384',
                            backgroundColor: '#FF6384',
                            fill: 'true',

                        }],

                
                }}
                options = {{
                    
                    drawBorder: 'true',
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:true
                            }   
                        }]
                    }
                    
                }
                    
                }
        />

    )
    const barChart = (
        confirmed
        ? 
        
        (
            <Bar
                data = {{
                    labels: ['Confirmed Cases', 'Recovered' , 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor:['rgba(255, 255, 0, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value,recovered.value,deaths.value]
                    }] 
                }}
                options = {{
                    legend: {display:false},
                    title: {display:true, text:`Current state in ${country}`}
                }}
            />
        ) : null
    ) 

    return(
        <div className = {styles.container}>
            {country? barChart:lineChart}
        </div>
 
    )
    
}

export default Chart;//
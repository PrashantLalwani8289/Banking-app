'use client'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DoughnutChart = ({accounts } : DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                labels:'Banks', 
                data:[1350, 2599, 3750],
                backgroundColor:['#0747b6', '#2265d8','#2f91fa']
            }
        ],
        labels:['Bank1', 'Bank2', 'Bank3']
    }
  return <Doughnut data={data} options={
    {
        cutout:'60%',
        plugins:{
            legend:{
                display:false
            }
        }
    }
  }></Doughnut>
}

export default DoughnutChart
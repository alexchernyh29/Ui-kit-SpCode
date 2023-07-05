<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      style="max-width: 400px; max-height: 300px;"
    />
  </template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
name: 'BarChart',
components: { Bar },
data() {
    return {
    chartData: {
        labels: [ 'Май', 'Июнь', 'Июль' ],
        datasets: [
          {
            label: 'Зарплата',
            backgroundColor: '#00bd7e',
            data: [20000, 37000, 19000]
          }
        ]
    },
    chartOptions: {
        responsive: true
    }
    }
}
}
</script>
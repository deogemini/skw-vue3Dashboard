<template>
  <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [ 40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}

//is needed to do a get request to this api
// so after regional commissioner has login we have to capture his token and pass through headers to call this api bellow
//how to pass headers
//Authorization = Token "token hear"
// http://45.56.115.113:8001/api/reports
// the task is to create graph based on this api response

</script>

<style scoped>

</style>
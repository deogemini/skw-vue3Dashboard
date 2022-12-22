<template>
  <b-container>
    <b-row>
      <b-col>
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"/>

      </b-col>
      <b-col>
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"/>
      </b-col>
      <b-col>
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"/>
      </b-col>
    </b-row>
  </b-container>


</template>

<script>
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{data: [40, 20, 12]}]
      },
      chartOptions: {
        responsive: true
      },
    }
  },
  methods: {
    async  getReport(){
      const config = {
        method: 'get',
        url: 'http://45.56.115.113:8001/api/reports',
        headers:
            {
              Authorization: `Token `+ localStorage.getItem('token')
            }
      }
      let response = await axios(config)
      jimbo.push(response)
       console.log(jimbo)
    }
  },
  mounted() {
    this.getReport();
  }
}
</script>

<style scoped>

</style>
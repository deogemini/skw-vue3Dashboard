<template>
  <b-card class="mb-3"
          border-variant="primary">
    <Bar v-if="loaded" :data="chartDataMiundombinu"/>
  </b-card>
</template>

<script>
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, ArcElement, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: {Bar},
  data() {
    return {
      loaded: false,
      data: null,
      pongeziMiundombinu: [],
      kosoaMiundombinu: [],
      mawazoMiundombinu: [],
      dataLabels: [],
      sekta: null,
      Pongezi: null,
      Maoni: null,
      Kosoa: null,
      chartDataMiundombinu: null,
    }
  },
  methods: {
    async getReportMiundombinu() {
      this.loaded = false
      const config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/api/summary',
        headers:
            {
              Authorization: `Token ` + localStorage.getItem('token')
            }
      }
      let response = await axios(config)
      this.data = response.data;

      for (let r = 0; r < this.data.majimbo.length; r++) {
        this.dataLabels.push(this.data.majimbo[r].name)
      }
      for (let r = 0; r < this.data.majimbo.length; r++) {
        for (let p = 0; p < this.data.majimbo[r].sekta.length; p++) {
          if (this.data.majimbo[r].sekta[p].name == "Miundombinu") {
            this.pongeziMiundombinu.push(this.data.majimbo[r].sekta[p].Pongezi)
            this.kosoaMiundombinu.push(this.data.majimbo[r].sekta[p].Kosoa)
            this.mawazoMiundombinu.push(this.data.majimbo[r].sekta[p].Maoni)
          }
        }
      }


      this.loaded = true
      this.chartDataMiundombinu = {
        labels: this.dataLabels,
        // labels: ['chunya', 'ileje', 'mbezi'],
        datasets: [
          {
            label: 'Miundombinu Vs Pongezi',
            backgroundColor: '#f87979',
            data: this.pongeziMiundombinu
          }, {
            label: 'Miundombinu Vs Kosoa',
            backgroundColor: 'red',
            data: this.kosoaMiundombinu
          },
          {
            label: 'Miundombinu Vs Maoni',
            backgroundColor: 'blue',
            data: this.mawazoMiundombinu
          }]
      }
    }


  },
  name:"miundombinu",
  mounted() {
    this.getReportMiundombinu()
  },
}
</script>
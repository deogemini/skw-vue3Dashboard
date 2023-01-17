<template>
  <Bar v-if="loaded" :data="chartDataMazingira"/>
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
      pongeziMazingira: [],
      kosoaMazingira: [],
      mawazoMazingira: [],
      dataLabels: [],
      sekta: null,
      Pongezi: null,
      Maoni: null,
      Kosoa: null,
      chartDataMazingira: null,
    }
  },
  methods: {
    async getReportMazingira() {
      this.loaded = false
      const config = {
        method: 'get',
        url: 'http://45.56.115.113:8001/api/summary',
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
          if (this.data.majimbo[r].sekta[p].name == "Mazingira") {
            this.pongeziMazingira.push(this.data.majimbo[r].sekta[p].Pongezi)
            this.kosoaMazingira.push(this.data.majimbo[r].sekta[p].Kosoa)
            this.mawazoMazingira.push(this.data.majimbo[r].sekta[p].Maoni)
          }
        }
      }


      this.loaded = true
      this.chartDataMazingira = {
        labels: this.dataLabels,
        // labels: ['chunya', 'ileje', 'mbezi'],
        datasets: [
          {
            label: 'Mazingira Vs Pongezi',
            backgroundColor: '#f87979',
            data: this.pongeziMazingira
          }, {
            label: 'Mazingira Vs Kosoa',
            backgroundColor: 'red',
            data: this.kosoaMazingira
          },
          {
            label: 'Mazingira Vs Maoni',
            backgroundColor: 'blue',
            data: this.mawazoMazingira
          }]
      }
    }


  },
  name: "mazingira",
  mounted() {
    this.getReportMazingira()
  },
}
</script>
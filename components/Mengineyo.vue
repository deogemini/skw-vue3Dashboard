<template>
  <Bar v-if="loaded" :data="chartDataMengineyo"/>
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
      pongeziMengineyo: [],
      kosoaMengineyo: [],
      mawazoMengineyo: [],
      dataLabels: [],
      sekta: null,
      Pongezi: null,
      Maoni: null,
      Kosoa: null,
      chartDataMengineyo: null,
    }
  },
  methods: {
    async getReportMengineyo() {
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
          if (this.data.majimbo[r].sekta[p].name == "Mengineyo") {
            this.pongeziMengineyo.push(this.data.majimbo[r].sekta[p].Pongezi)
            this.kosoaMengineyo.push(this.data.majimbo[r].sekta[p].Kosoa)
            this.mawazoMengineyo.push(this.data.majimbo[r].sekta[p].Maoni)
          }
        }
      }


      this.loaded = true
      this.chartDataMengineyo = {
        labels: this.dataLabels,
        // labels: ['chunya', 'ileje', 'mbezi'],
        datasets: [
          {
            label: 'Mengineyo Vs Pongezi',
            backgroundColor: '#f87979',
            data: this.pongeziMengineyo
          }, {
            label: 'Mengineyo Vs Kosoa',
            backgroundColor: 'red',
            data: this.kosoaMengineyo
          },
          {
            label: 'Mengineyo Vs Maoni',
            backgroundColor: 'blue',
            data: this.mawazoMengineyo
          }]
      }
    }


  },
  name:"mengineyo",
  mounted() {
    this.getReportMengineyo()
  },
}
</script>
<template>
  <Bar v-if="loaded" :data="chartDataMaji"/>

</template>

<script>

import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, ArcElement, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: "Maji",
  components: {Bar},
  data() {
    return {
      loaded: false,
      data: null,
      pongeziMaji: [],
      kosoaMaji: [],
      mawazoMaji: [],
      dataLabels: [],
      sekta:null,
      Pongezi:null,
      Maoni:null,
      Kosoa:null,
      chartDataMaji: null,
    }
  },
  methods: {
    async getReportMaji() {
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
          if (this.data.majimbo[r].sekta[p].name == "Maji") {
              this.pongeziMaji.push(this.data.majimbo[r].sekta[p].Pongezi)
              this.kosoaMaji.push(this.data.majimbo[r].sekta[p].Kosoa)
              this.mawazoMaji.push(this.data.majimbo[r].sekta[p].Maoni)
          }
        }
      }


      this.loaded = true
      this.chartDataMaji = {
        labels: this.dataLabels,
        // labels: ['chunya', 'ileje', 'mbezi'],
        datasets: [
          {
            label: 'Maji Vs Pongezi',
            backgroundColor: '#f87979',
            data: this.pongeziMaji
          }, {
            label: 'Maji Vs Kosoa',
            backgroundColor: 'red',
            data: this.kosoaMaji
          },
          {
            label: 'Maji Vs Maoni',
            backgroundColor: 'blue',
            data: this.mawazoMaji
          }]
      }
    }


  },
  mounted() {
    this.getReportMaji()
  },
}
</script>


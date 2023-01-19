<template>
  <b-card
      class="mb-3"
      border-variant="primary">
    <Bar v-if="loaded" :data="chartDataMadini"/>
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
      pongeziMadini: [],
      kosoaMadini: [],
      mawazoMadini: [],
      dataLabels: [],
      sekta: null,
      Pongezi: null,
      Maoni: null,
      Kosoa: null,
      chartDataMadini: null,
    }
  },
  methods: {
    async getReportMadini() {
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
          if (this.data.majimbo[r].sekta[p].name == "Madini") {
            this.pongeziMadini.push(this.data.majimbo[r].sekta[p].Pongezi)
            this.kosoaMadini.push(this.data.majimbo[r].sekta[p].Kosoa)
            this.mawazoMadini.push(this.data.majimbo[r].sekta[p].Maoni)
          }
        }
      }


      this.loaded = true
      this.chartDataMadini = {
        labels: this.dataLabels,
        // labels: ['chunya', 'ileje', 'mbezi'],
        datasets: [
          {
            label: 'Madini Vs Pongezi',
            backgroundColor: '#f87979',
            data: this.pongeziMadini
          }, {
            label: 'Madini Vs Kosoa',
            backgroundColor: 'red',
            data: this.kosoaMadini
          },
          {
            label: 'Madini Vs Maoni',
            backgroundColor: 'blue',
            data: this.mawazoMadini
          }]
      }
    }


  },
  name: "madini",
  mounted() {
    this.getReportMadini()
  },
}
</script>
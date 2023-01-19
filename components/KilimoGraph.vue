<template>
  <b-card
      class="mb-3"
      border-variant="primary">
    <Bar v-if="loaded" :data="chartDataKilimo"/>
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
      pongeziKilimo: [],
      kosoaKilimo: [],
      mawazoKilimo: [],
      dataLabels: [],
      sekta: null,
      Pongezi: null,
      Maoni: null,
      Kosoa: null,
      chartDataKilimo: null,
    }
  },
  methods: {
    async getReportKilimo() {
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
          if (this.data.majimbo[r].sekta[p].name == "Kilimo") {
            this.pongeziKilimo.push(this.data.majimbo[r].sekta[p].Pongezi)
            this.kosoaKilimo.push(this.data.majimbo[r].sekta[p].Kosoa)
            this.mawazoKilimo.push(this.data.majimbo[r].sekta[p].Maoni)
          }
        }
      }


      this.loaded = true
      this.chartDataKilimo = {
        labels: this.dataLabels,
        // labels: ['chunya', 'ileje', 'mbezi'],
        datasets: [
          {
            label: 'Kilimo Vs Pongezi',
            backgroundColor: '#f87979',
            data: this.pongeziKilimo
          }, {
            label: 'Kilimo Vs Kosoa',
            backgroundColor: 'red',
            data: this.kosoaKilimo
          },
          {
            label: 'Kilimo Vs Maoni',
            backgroundColor: 'blue',
            data: this.mawazoKilimo
          }]
      }
    }


  },
  name:"kilimo",
  mounted() {
    this.getReportKilimo()
  },
}
</script>
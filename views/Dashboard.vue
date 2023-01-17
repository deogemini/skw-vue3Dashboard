<template>

  <h3>Welcome to the {{ region }} Region Regional Commissioner's Dashboard.</h3>

  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
    <div>
      <b-card-group deck>
        <b-card
            align="center"
            border-variant="primary"
            header="Sekta"
            header-bg-variant="primary"
            header-text-variant="white"
        >
          <b-card-text>Government Sectors registered is {{ sectors }} sectors</b-card-text>
        </b-card>

        <b-card
            align="center"
            border-variant="secondary"
            header="Total Comments"
            header-border-variant="secondary"
        >
          <b-card-text>Amount of Total Comments from citizens collected is {{ maoni }}</b-card-text>
        </b-card>

        <b-card
            align="center"
            border-variant="success"
            header="Provinces">
          <b-card-text>Amount of Total Provinces registered is {{ majimbo }}</b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>

  <b-container>
    <!--            <b-row>-->
    <!--              <Pie   v-if="loaded" :data="piedata"  />-->
    <!--            </b-row>-->
    <b-row>
      <b-col>
        <Bar v-if="loaded" :data="chartData"/>
      </b-col>
      <b-col>
        <Maji></Maji>
      </b-col>
    </b-row>
  </b-container>


</template>

<script>
import Maji from "./Maji.vue";

import {Bar, Pie} from 'vue-chartjs'
import {Chart as ChartJS, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, ArcElement, Legend, BarElement, CategoryScale, LinearScale)


export default {
  components: {Bar, Maji, Pie},
  data() {
    return {
      region: localStorage.getItem("region"),
      sectors: localStorage.getItem("sectorAmount"),
      maoni: localStorage.getItem("maoniAmount"),
      majimbo: localStorage.getItem("majimboAmount"),
      loaded: false,
      data: null,
      pongezi: [],
      kosoa: [],
      mawazo: [],
      dataLabels: [],
      chartData: null,
      totalPongezi: null,
      totalKosoa: null,
      totalMaoni: null,
      //piedata: null
    }
  },
  methods: {
    async getReport() {
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

      for (let i = 0; i < this.data.majimbo.length; i++) {
        this.dataLabels.push(this.data.majimbo[i].name)
        // this.totalPongezi = this.data.majimbo[i].Pongezi_Total
        // this.totalKosoa = this.data.majimbo[i].Kosoa_Total
        // this.totalMaoni = this.data.majimbo[i].Maoni_Total
      }
      for (let i = 0; i < this.data.majimbo.length; i++) {
        for (let j = 0; j < this.data.majimbo[i].sekta.length; j++) {
          if (this.data.majimbo[i].sekta[j].name == "Afya") {
            this.pongezi.push(this.data.majimbo[i].sekta[j].Pongezi)
            this.kosoa.push(this.data.majimbo[i].sekta[j].Kosoa)
            this.mawazo.push(this.data.majimbo[i].sekta[j].Maoni)
          }
        }
      }


      this.loaded = true
      this.chartData = {
        labels: this.dataLabels,
        // labels: ['chunya', 'ileje', 'mbezi'],
        datasets: [
          {
            label: 'Afya Vs Pongezi',
            backgroundColor: '#f87979',
            data: this.pongezi
          }, {
            label: 'Afya Vs Kosoa',
            backgroundColor: 'red',
            data: this.kosoa
          },
          {
            label: 'Afya Vs Maoni',
            backgroundColor: 'blue',
            data: this.mawazo
          }]
      }


      // for (let r = 0; r < this.data.majimbo.length; r++) {
      //   for (let p = 0; p < this.data.majimbo[r].sekta.length; p++) {
      //     if (this.data.majimbo[r].sekta[p].name = "Maji") {
      //       if (this.data.majimbo[r].sekta[p].Pongezi) {
      //         this.pongeziMaji.push(this.data.majimbo[r].sekta[p].Pongezi)
      //       } else if (this.data.majimbo[r].sekta[p].Kosoa) {
      //         this.kosoaMaji.push(this.data.majimbo[r].sekta[p].Kosoa)
      //         console.log(this.kosoa)
      //       } else if(this.data.majimbo[r].sekta[p].Maoni){
      //         this.mawazoMaji.push(this.data.majimbo[r].sekta[p].Maoni)
      //       }else{}
      //     }
      //   }
      // }
      //
      // this.chartDataMaji = {
      //   labels: this.dataLabels,
      //   // labels: ['chunya', 'ileje', 'mbezi'],
      //   datasets: [
      //     {
      //       label: 'Maji Vs Pongezi',
      //       backgroundColor: '#f87979',
      //       data: this.pongeziMaji
      //     }, {
      //       label: 'Maji Vs Kosoa',
      //       backgroundColor: 'red',
      //       data: this.kosoaMaji
      //     },
      //     {
      //       label: 'Maji Vs Maoni',
      //       backgroundColor: 'blue',
      //       data: this.mawazoMaji
      //     }]
      // }


      //pie chart ya data za jumla za region
      // this.piedata = {
      //   labels: ['Pongezi', 'Kosoa', 'Maoni'],
      //   datasets: [
      //     {
      //       backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
      //       data: [this.totalPongezi, this.totalKosoa, this.totalMaoni]
      //     }
      //   ]
      // }
    }


  },
  name: "dashboard",
  mounted() {
    this.getReport()
  },
}
</script>


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
            header-text-variant="white">
          <b-card-text>Government Sectors registered is {{ sectors }} sectors</b-card-text>
        </b-card>

        <b-card
            align="center"
            border-variant="secondary"
            header="Total Comments"
            header-bg-variant="warning"
            header-border-variant="secondary">
          <b-card-text>Amount of Total Comments from citizens collected is {{ maoni }}</b-card-text>
        </b-card>

        <b-card
            align="center"
            border-variant="success"
            header="Provinces"
            header-bg-variant="info">
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
      <b-card class="mb-3"
              border-variant="primary">
        <Bar v-if="loaded" :data="chartData"/>
      </b-card>
      </b-col>
      <b-col>
        <Maji></Maji>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <MiundombinuGraph></MiundombinuGraph>
      </b-col>
      <b-col class="mb-3">
        <ElimuGraph></ElimuGraph>
      </b-col>
      </b-row>
    <b-row>
      <b-col class="mb-3">
        <KilimoGraph></KilimoGraph>
      </b-col>
      <b-col class="mb-3">
        <Biashara></Biashara>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-3">
        <Uvuvi></Uvuvi>
      </b-col>
      <b-col class="mb-3">
        <MadiniGraph></MadiniGraph>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-3">
        <Mengineyo></Mengineyo>
      </b-col>
      <b-col class="mb-3">
        <Mazingira></Mazingira>
      </b-col>
    </b-row>
  </b-container>


</template>

<script>
import Maji from "./Maji.vue";
import MiundombinuGraph from "../components/MiundombinuGraph.vue";
import Biashara from "../components/Biashara.vue";
import KilimoGraph from "../components/KilimoGraph.vue";
import ElimuGraph from "../components/ElimuGraph.vue";
import Uvuvi from "../components/Uvuvi.vue";
import MadiniGraph from "../components/MadiniGraph.vue";
import Mengineyo from "../components/Mengineyo.vue";
import Mazingira from "../components/Mazingira.vue";

import {Bar, Pie} from 'vue-chartjs'
import {Chart as ChartJS, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import axios from "axios";

ChartJS.register(Title, Tooltip, ArcElement, Legend, BarElement, CategoryScale, LinearScale)


export default {
  components: {
    Bar,
    Maji,
    MiundombinuGraph,
    ElimuGraph,
    Biashara,
    KilimoGraph,
    Uvuvi,
    MadiniGraph,
    Mengineyo,
    Mazingira,
    Pie
  },
  computed: {
    myStyles () {
      return {
        responsive: true,
        position: 'relative'
      }
    }
  },
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
        options: null,
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
            }
          ],

          // options: {
          //   responsive: true,
          //   title: {
          //     display: true,
          //     text: "SMS for Afya Sectors in Provinces"
          //   },
          //   scales: {
          //     xAxes: [
          //       {
          //         display: true,
          //         scaleLabel: {
          //           display: true,
          //           labelString: "Majimbo"
          //         }
          //       }
          //     ],
          //     yAxes: [{
          //       display: true,
          //       scaleLabel: {
          //         display: true,
          //         labelString: "SMS"
          //       }
          //     }]
          //   }
          // }
        }
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

<style>
.small{
  max-width: 600px;
  margin: 10px auto;
}
</style>


<template>

  <h3>Welcome to the {{ region }} Region Regional Commissioner's Dashboard.</h3> 

          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
            <div>
              <b-card-group deck>
                <b-card
                  border-variant="primary"
                  header="Sekta"
                  header-bg-variant="primary"
                  header-text-variant="white"
                  align="center"
                >
                  <b-card-text>Government Sectors registered is {{sectors}} sectors</b-card-text>
                </b-card>
          
                <b-card
                  border-variant="secondary"
                  header="Total Comments"
                  header-border-variant="secondary"
                  align="center"
                >
                  <b-card-text>Amount of Total Comments from citizens collected is {{maoni}}</b-card-text>
                </b-card>
          
                <b-card 
                border-variant="success" 
                header="Provinces" 
                align="center">
                  <b-card-text>Amount of Total Provinces registered is {{ majimbo }} </b-card-text>
                </b-card>
              </b-card-group>
            </div>
          </div>

</template>

<script>
import BarChart from "./BarChart.vue";
export default {
  components:{
 
    BarChart
  },
  data(){
    return{
       region: localStorage.getItem("region"),
       sectors: localStorage.getItem("sectorAmount"),
       maoni: localStorage.getItem("maoniAmount"),
       majimbo: localStorage.getItem("majimboAmount"),

    }
  
  },
  name: "dashboard"
}
</script>

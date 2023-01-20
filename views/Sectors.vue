<template>
  <div>
    <b-card class="mb-3">
      <b-card-header>
        <b-card-title class="text-center">Sekta Mbalimbali</b-card-title>
      </b-card-header>
      <b-card-text>Sekta za huduma za kijamii zilizosajiliwa kwenye mfumo wa SKW</b-card-text>
      <b-spinner v-if="loading" variant="primary" label="Loading..."></b-spinner>
      <b-table
          head-variant="light"
          bordered
          striped hover
          :items="items" :fields="fields" outlined>
        <template v-slot:cell(serialNumber)="data">
          {{ data.index + 1 }}
        </template>
      </b-table>

    </b-card>
  </div>
</template>

<script>
import { BTable } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

export default {
  name: "Sectors",
  components: {
    BTable
  },
  data() {
    return {
      loading: true,
      items: [],
      fields: [
        { key: 'serialNumber',
          label: '#',
        },
        { key: 'jina',
          label: 'Jina la Sekta',
          sortable: true
        },
          ]
    }
  },
  methods: {
    getSectors(){
      axios.get('http://45.56.115.113:8001/api/sectors/')
          .then(response => {
            this.items = response.data.sectors
            localStorage.setItem('sectorAmount', this.items.length )
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      this.loading= false;
    }
  },
  mounted() {
    this.getSectors();
  }
}
</script>

<style scoped>

</style>
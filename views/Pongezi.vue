<template>
  <div>
    <b-card  class="mb-3">
      <b-card-header>
        <b-card-title class="text-center">SMS za Pongezi </b-card-title>
      </b-card-header>
      <b-card-text>Jumbe za kupongeza jitihada za serikali kutoka kwa wananchi wa mkoa wako</b-card-text>
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
  components: {
    BTable
  },
  data() {
    return {
      loading: true,
      items: [],
      maoniyote:[],
      fields: [
        { key: 'serialNumber',
          label: '#',
        },
        { key: 'maoni',
          label: 'Pongezi',
          sortable: true
        },
        { key: 'sekta',
          label: 'Sekta',
          sortable: true
        },
        { key: 'jimbo',
          label: 'Jimbo',
          sortable: true
        }
      ]
    }
  },
  methods: {
    async getPongezi(){
      this.loading = true;
      const config = {
               method: 'get',
            url: 'http://45.56.115.113:8001/api/getfeedback/',
               headers: {
                 Authorization: `Token ` + localStorage.getItem('token')

               }
             }
             let response = await axios(config)
              this.maoniyote = response.data.result;
              localStorage.setItem('maoniAmount', this.maoniyote.length )
              this.items = this.maoniyote.filter((object) => {
                if(object.feedback_type == "Pongezi")
                  return object;
              });
      this.loading = false;

      console.log(this.pongezi)

  },
  },
  mounted() {
    this.getPongezi()
}
}
</script>

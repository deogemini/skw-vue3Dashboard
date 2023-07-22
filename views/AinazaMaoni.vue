<template>

  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
    <h1 class="h2">AINA ZA MAONI YANAYOWASILISHWA</h1>
  </div>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
      <tr>
        <th>#</th>
        <th>Number of Provinces</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Mbeya</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Arusha</td>
        </tr>
      <tr>
        <td>3</td>
        <td>Dar es Salaam</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Kigoma</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Mwanza</td>
      </tr>

      <tr>
        <td>6</td>
        <td>Mtwara</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Njombe</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Dodoma</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Zanzibar</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Iringa</td>
      </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
import axios from "axios";

export default {
  name: "AinazaMaoni",
  methods: {
    getAinazaMaoni(){
      axios.get("http://127.0.0.1:8000/api/sectors/")
          .then(response => {
            console.log(response.data);
          });
    }
  }
}
</script>

<style scoped>

</style>
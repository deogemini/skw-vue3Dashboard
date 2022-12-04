<template>
  <router-view></router-view>
</template>
<script>
import { BIcon, BIconCamera } from 'bootstrap-vue';
export default {
  components: {
  },
  methods: {
    showModal() {
      this.$bvModal.msgBoxOk('Modal from @vue/compat');
    },
  },
};
</script>

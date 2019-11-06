<template>
  <div id="pageId">
    <!---Component CRUD-->
    <crud :crud-data="import('@imagina/qticket/_crud/tickets')"/>
  </div>
</template>
<script>

  export default {
    props: {},
    components: {},
    watch: {},
    validations() {
      return {}
    },
    mounted() {
      this.$nextTick(function () {
      })
    },
    data() {
      return {
        loading: {
          page: false
        },
        buttonActions: {}
      }
    },
    methods: {}
  }
</script>

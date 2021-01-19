<template>
  <div class="content">
<button @click="goConcept()" >dss</button>
  <v-icon class="login-icon">accessibility</v-icon>
  </div>
</template>

<script>


export default {
  methods:{
    goConcept(){
      return this.$router.replace("Concept")
    }
  }
 
}
</script>
<style lang="scss">

</style>

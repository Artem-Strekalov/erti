<template>
  <div class="content">
      <h1 class="red" :class="{green:isActive}" >ddddddsdsds</h1>

<button @click="greenClass()">GREEN</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isActive: false
    }
  },
  methods:{
greenClass(){
  return this.isActive = true
}
  }
};
</script>
<style lang="scss" scoped>

/* текущий класс */
.red{
  color: red;
}
/* Динамический */
 .green{
  color: green;
}

</style> 
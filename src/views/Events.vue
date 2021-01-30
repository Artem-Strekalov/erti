<template>
  <div class="main">
    <div class="nav"></div>

    <div class="content" data-app>
      <v-app>
        <div>
          <v-carousel v-model="model"  show-arrows=false>
            <v-carousel-item
              
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </v-app>
    </div>
  </div>
  <!-- cycle
        height=100%
        hide-delimiter-background
        show-arrows-on-hover -->
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      model: 0,
    };
  },
  methods: {
    slider() {
      if (this.model == 1) {
        console.log("сейчас");
      }
    },
  },
  beforeUpdate() {
    this.slider();
  },
};
</script>
<style lang="scss" scoped >
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .nav {
    width: 500px;
    height: 30px;
    background-color: red;
  }
  .content {
    width: 600px;
    height: 600px;
  }
}
</style>
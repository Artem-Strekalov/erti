<template>
  <div class="main" data app>
    <div class="nav"></div>
    <v-app>
      <div class="content">
        <button @click="model--">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <v-carousel
          :hide-delimiters="true"
          :show-arrows="false"
          :hide-delimiter-background="true"
          height="500px"
          v-model="model"
        >
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <button @click="model++">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </v-app>
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
          src: "https://cdn.tvc.ru/pictures/o/131/475.jpg",
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
<style lang="scss"  >
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
    width: 400px;
    height: 400px;
    .v-image__image--cover {
      background-size: contain;
    }
  }
}
</style>
<template>
  <div class="content">
    <v-app>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://i.ibb.co/rHcWX9D/wine1.png",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Status_iucn_DD_icon.svg/1024px-Status_iucn_DD_icon.svg.png",
        },
      ],
    };
  },
};
</script>
<style lang="scss" >
.v-image__image--cover {
    background-size: cover;
}
.content{
  height: 100vh;
  width: 100vh;
  
}
</style> 
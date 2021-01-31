<template>
  <div class="wrapper">
    <div class="container">
      <div class="navigation">
        <a><router-link :to="{ name: 'MainPage' }">ГЛАВНАЯ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">МЕНЮ</router-link></a>
        <a><router-link :to="{ name: 'Wine' }">ВИНО</router-link></a>
        <a><router-link :to="{ name: 'Сoncept' }">КОНЦЕПЦИЯ</router-link></a>
        <img src="../assets/erti-logo.png" alt="" />
        <a><router-link :to="{ name: 'Foto' }">МЕДИА </router-link></a>
        <a><router-link :to="{ name: 'Events' }">СОБЫТИЯ</router-link></a>
        <a><router-link :to="{ name: 'OurTeam' }">КОМАНДА</router-link></a>
        <a><router-link :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link></a>
      </div>
      <div class="contentWine">
        <div class="blockMenu">
          <button @click="model--">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <v-carousel
            :hide-delimiters="true"
            :show-arrows="false"
            :hide-delimiter-background="true"
            height="100%"
            v-model="model"
          >
            <div class="menu">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </div>
          </v-carousel>
          <button @click="model++">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
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
          src: "https://i.ibb.co/MsJg7Pb/image.png",
        },
      ],
      model: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/wine-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    width: 100%;

    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
      height: 154px;
      width: 100%;
      a {
        font-family: Open Sans;
        font-style: normal;
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
        color: #ffffff;
        padding: 0 5px;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
    .contentWine {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      .blockMenu {
        display: flex;
        align-items: center;
        width: 70%;
        height: 450px;
        padding-right: 20px;
        
        i {
          font-size: 40px;
          color: white;
          opacity: 0.3;
        }
        i:hover {
          opacity: 1;
          color: #e8c300;
        }
      }
    }
  }
}
</style>

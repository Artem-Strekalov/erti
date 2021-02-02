<template>
  <v-app>
    <div class="wrapper" :class="{ newWrapper: isActiveNewWrapper }">
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
        <div class="content">
          <button @click="model--">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <v-carousel
            :show-arrows="false"
            :hide-delimiter-background="true"
            height="500px"
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
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://i.ibb.co/0h7Bx9w/1.png",
        },
        {
          src: "https://i.ibb.co/FzHRSBN/2.png",
        },
      ],
      model: 0,

      isActiveNewWrapper: false,
    };
  },
  methods: {
    slider() {
      if (this.model == 1) {
        this.isActiveNewWrapper = true;
      } else {
        this.isActiveNewWrapper = false;
      }
    },
  },
  beforeUpdate() {
    this.slider();
  },
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/menu1.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    position: relative;
    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
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
        width: 133px;
        text-align: center;
        transition: 350ms;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
    a:hover {
      font-size: 14px;
      transition: 350ms;
      color: rgb(243, 207, 46);
    }
    a:active {
      color: rgb(243, 207, 46);
    }
    .content {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1050px;
      padding: 0 20px;
      .v-window {
        padding: 0 20px;
      }
      .menu {
        .v-image__image--cover {
          background-size: contain;
        }
      }
    }
    i {
      font-size: 50px;
      color: white;
      opacity: 0.3;
    }
    i:hover {
      font-size: 90px;
      transition: 350ms;
      opacity: 1;
      color: #e8c300;
    }
  }
}
.newWrapper {
  background: url("../assets/kinza.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
}
</style>

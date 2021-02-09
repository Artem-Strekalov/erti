<template>
  <div class="body">
    <div class="welcome-block">
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
          <div class="hi-block">
            <h1>ГАМАРДЖОБА, ГЕНЕЦВАЛЕ!</h1>

            <i class="fad fa-chevron-double-down"></i>
          </div>
          <div class="image-block"></div>
        </div>
      </div>
    </div>
    <div class="interior-block">
      <div class="container">
        <div class="content-block">
          <div class="title"><h2>ИНТЕРЬЕР РЕСТОРАНА</h2></div>

          <div class="gallery">
            <gallery
              :images="images"
              :index="index"
              @close="index = null"
            ></gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{
                backgroundImage: 'url(' + image + ')',
                width: '300px',
                height: '200px',
              }"
            ></div>
          </div>
        </div>
        <div class="logo-line">
          <img src="../assets/logo-group-yellow.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="our-guests-block">
      <div class="container">
        <div class="galleryGuests">
          <v-app>
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
            >
          </v-app>
        </div>
        <div class="title"><h2>НАШИ ГОСТИ</h2></div>
      </div>
      <div class="footer">
        <p><i class="fa fa-copyright" aria-hidden="true"></i> Made by Erti</p>
      </div>
    </div>
  </div>
</template>
<script>
import VueGallery from "vue-gallery";

export default {
  data: function () {
    return {
      images: [
        "https://i.ibb.co/GvXfdbV/photo-2021-01-19-16-22-08.jpg",
        "https://i.ibb.co/NFn7SWz/photo-2021-01-19-16-22-28.jpg",
        "https://i.ibb.co/6wBYr41/photo-2021-01-19-16-22-35.jpg",
        "https://i.ibb.co/8MSw4VW/photo-2021-01-19-16-21-45.jpg",
        "https://i.ibb.co/Ytm1zBR/photo-2021-01-19-16-21-48.jpg",
        "https://i.ibb.co/2NGRgGF/photo-2021-01-19-16-21-56.jpg",
      ],
      index: null,
      items: [
        {
          src:
            "https://ertirestaurant.ru/uploads/files/Tbilisoba%202019%2011.jpg",
        },
        {
          src:
            "https://ertirestaurant.ru/uploads/files/Tbilisoba%202019%202.jpg",
        },
        {
          src:
            "https://ertirestaurant.ru/uploads/files/Tbilisoba%202019%206.jpg",
        },
        {
          src:
            "https://ertirestaurant.ru/uploads/files/Tbilisoba%202019%208.jpg",
        },
      ],
    };
  },

  components: {
    gallery: VueGallery,
  },
};
</script> 
<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  .welcome-block {
    display: flex;
    justify-content: center;
    background: url("../assets/media-bg.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    color: #fefefe;
    padding: 0 20px;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    .container {
      max-width: 1300px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
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
      .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: 90%;
        @media (max-width: 1025px) {
          align-items: flex-start;
        }
        .hi-block {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 400px;
          padding-left: 7%;

          position: relative;
          z-index: 100;
          h1 {
            font-family: Caveat;
            font-weight: bold;
            font-size: calc(5px + 25 * (100vw / 1280));
            line-height: 45px;
          }
          i {
            font-size: 70px;
            color: #e8c300;
            animation: scroll;
            animation-duration: 1.3s;
            animation-iteration-count: infinite;
            animation-delay: 2s;
            position: relative;
            margin-top: 200px;
          }
          @keyframes scroll {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(15px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        }
        .image-block {
          width: 50%;
          height: 461px;
          background: url("../assets/loza.png") no-repeat;
          background-size: contain;
        }
      }
    }
  }
  .interior-block {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fefefe;
    padding: 0 20px;
    min-height: 100vh;
    width: 100vw;
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      max-width: 1300px;
      width: 100%;
      .content-block {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 0 120px 0;
        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46%;
          height: 261px;
          background: url("../assets/smear.png") no-repeat;
          background-size: contain;
          background-position: center;
          h2 {
            font-family: Oswald;
            font-style: normal;
            font-weight: normal;
            font-size: 40px;
            line-height: 45px;
            color: #e8c300;
            text-align: center;
          }
        }
        .gallery {
          display: flex;
          flex-flow: row wrap;
          align-content: space-between;
          justify-content: space-between;
          width: 50%;
          height: 600px;
          background: white;
          .image {
            float: left;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border: 1px solid #ebebeb;
            margin: 5px;
          }
        }
      }
      .logo-line {
        width: 100%;
        margin: 0 0 140px 0;
        img {
          width: 100%;
        }
      }
    }
  }
  .our-guests-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fefefe;
    padding: 0 20px;
    min-height: 100vh;
    width: 100vw;
    .container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      max-width: 1300px;
      width: 100%;
      .galleryGuests {
        width: 50%;
        height: 600px;
        background: #c4c4c4;
        .image {
          float: left;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          border: 1px solid #ebebeb;
          margin: 5px;
        }
      }
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 46%;
        height: 261px;
        background: url("../assets/smear.png") no-repeat;
        background-size: contain;
        background-position: center;
        h2 {
          font-family: Oswald;
          font-style: normal;
          font-weight: normal;
          font-size: 40px;
          line-height: 18px;
          color: #e8c300;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 90px;
      background: #1d1723;
      p {
        color: white;
        font-family: "Comfortaa";
        .fa {
          font-weight: 200;
        }
      }
    }
  }
}
</style>

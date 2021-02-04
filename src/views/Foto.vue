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
          <div class="hi-block"><h1>ГАМАРДЖОБА ГЕНЕЦВАЛЕ !</h1></div>
          <img src="../assets/loza.png" alt="" />
        </div>
      </div>
    </div>
    <div class="interior-block">
      <div class="container">
        <div class="content-block">
          <div class="title"><h2>ИНТЕРЬЕР РЕСТОРАНА</h2></div>
          <div class="gallery"></div>
        </div>
        <div class="logo-line">
          <img src="../assets/logo-group-yellow.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="our-guests-block">
      <div class="container">
        <div class="gallery"></div>
        <div class="title"><h2>НАШИ ГОСТИ</h2></div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
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
    background-size: cover;
    background-position: center;
    color: #fefefe;
    padding: 0 20px;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    .container {
      max-width: 1300px;
      width: 100%;
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
          padding: 0 5px;
          width: 133px;
          color: white;
          text-align: center;
          transition: 350ms;
        }
        a:hover {
          font-size: 14px;
          transition: 350ms;
          color: rgb(243, 207, 46);
        }
        img {
          width: 100px;
          height: 100px;
        }
      }
      .content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 651px;
        .hi-block {
          display: flex;
          align-items: center;
          h1 {
            font-family: Caveat;
            font-weight: bold;
            font-size: 40px;
            line-height: 18px;
            margin: 0 0 50px 0;
          }
        }
        img {
          width: 50%;
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
          width: 589px;
          height: 261px;
          background: url("../assets/smear.png") no-repeat;
          background-size: cover;
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
        .gallery {
          width: 50%;
          height: 600px;
          background: #c4c4c4;
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
      .gallery {
        width: 50%;
        height: 600px;
        background: #c4c4c4;
      }
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 589px;
        height: 261px;
        background: url("../assets/smear.png") no-repeat;
        background-size: cover;
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
      width: 100vw;
      height: 90px;
      background: #1d1723;
    }
  }
}
</style>

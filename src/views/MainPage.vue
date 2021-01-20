<template>
  <div class="wrapper">
    <!-- <button @click="goConcept()" >dss</button>
  <v-icon class="login-icon">accessibility</v-icon> -->
    <div class="title-block">
      <div class="navigation">
        <a href="" class="navigation__item">ГЛАВНАЯ</a>
        <a href="" class="navigation__item">МЕНЮ</a>
        <a href="" class="navigation__item">ВИНО</a>
        <a href="" class="navigation__item">КОНЦЕПЦИЯ</a>
        <span><img src="../assets/erti-logo.png" alt=""/></span>
        <a href="" class="navigation__item">МЕДИА</a>
        <a href="" class="navigation__item">СОБЫТИЯ</a>
        <a href="" class="navigation__item">НАША КОМАНДА</a>
        <a href="" class="navigation__item">КОНТАКТЫ</a>
      </div>

      <div class="content-block">
        <span>ГРУЗИНСКИЙ РЕСТОРАН</span>
        <span class="title"><img src="../assets/title.png" alt=""/></span>
        <div class="buttons">
          <button>ЗАБРОНИРОВАТЬ СТОЛ</button>
          <button class="opacity-button">ЗАКАЗАТЬ ДОСТАВКУ</button>
        </div>
      </div>
    </div>
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
  </div>
</template>

<script>
export default {
  methods: {
    goConcept() {
      return this.$router.replace("Concept");
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/bg-main.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .title-block {
    height: 937px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1280px;
    position: relative;
    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 226px 0;
      position: relative;
      height: 154px;
      width: 100%;
      .navigation__item {
        font-family: Open Sans;
        font-style: normal;
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
        color: #ffffff;
        width: 133px;
        text-align: center;
      }

      span {
        position: relative;
        img {
          transform: translateY(56%);
          margin: 15px;
        }
      }
      span::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 618.15px;
        left: -355px;
        top: -162px;
        background: linear-gradient(
          -75deg,
          #f5c400 26.12%,
          rgba(245, 196, 0, 0) 100%
        );
        border-radius: 202px;
        transform: matrix(0, 1, 1, 0, 0, 0);
      }
       span::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 618.15px;
        right: -354px;
        top: -162px;
        background: linear-gradient(
          0deg,
          #f5c400 26.12%,
          rgba(245, 196, 0, 0) 100%
        );
        border-radius: 202px;
       transform: matrix(0, -1, -1, 0, 0, 0);
      }
    }

    .content-block {
      display: flex;
      align-items: center;
      width: 1280px;
      height: 600px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      span {
        font-family: Open Sans;
        font-size: 12px;
        color: white;
        letter-spacing: 0.5em;
        margin: 0 0 25px 0;
        position: relative;
      }
      .title {
        font-family: Gugi;
        color: white;
        font-size: 96px;
        font-weight: 100;
        letter-spacing: 1pt;
        position: relative;
        margin: 0 0 60px 0;
      }
      .title::before {
        content: "";
        background: #e8c300;
        border-radius: 50px;
        width: 60px;
        height: 5.11px;
        position: absolute;
        top: 100%;
        left: 41%;
      }
      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 440px;
        margin: 0 0 92px 0;

        button {
          background: #e8c300;
          border-radius: 5px;
          font-family: Open Sans;
          font-weight: bold;
          font-size: 12px;
          line-height: 20px;
          vertical-align: middle;
          text-align: center;
          color: white;
          width: 200px;
          height: 60px;
        }
        .opacity-button {
          background: #e8c10000;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}
</style>

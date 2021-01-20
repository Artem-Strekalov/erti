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
      <div class="mobile-navigation">
        <img src="" alt="" />
        <div class="menu-icon"></div>
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
%nav__item {
  font-family: Open Sans;
  font-style: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 0 54px;
  @media (max-width: 1300px) {
    padding: 0 40px;
  }
  @media (max-width: 1115px) {
    padding: 0 30px;
  }
  @media (max-width: 995px) {
    padding: 0 20px;
  }
  @media (max-width: 840px) {
    padding: 0 15px;
  }
}
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
      // .navigation__item:first-of-type{
      //   text-align: left;
      // }
      // .navigation__item:last-of-type{
      //   text-align: right;
      // }
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
        height: 501px;
        width: 1px;
        left: 50%;
        top: 253px;
        background: rgba(255, 255, 255, 0.2);
      }
    }
    .navigation::before {
      content: "";
      position: absolute;
      width: 41%;
      height: 1px;
      left: 0px;
      top: 150px;
      background: rgba(255, 255, 255, 0.2);
    }
    .navigation::after {
      content: "";
      position: absolute;
      width: 41%;
      height: 1px;
      right: 0;
      top: 150px;
      background: rgba(255, 255, 255, 0.2);
    }
    .mobile-navigation {
      height: 200px;
      width: 700px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      display: none;
      margin: 0 0 130px 0;
      @media (max-width: 760px) {
        display: flex;
      }
      @media (max-width: 715px) {
        width: 650px;
      }
      @media (max-width: 700px) {
        justify-content: flex-end;
      }
      @media (max-width: 620px) {
        width: 550px;
        height: 100px;
      }
      @media (max-width: 510px) {
        width: 400px;
        height: 150px;
      }
      img {
        @media (max-width: 700px) {
          display: none;
        }
      }
      .menu-icon {
        width: 50px;
        height: 50px;
        background-image: linear-gradient(
          to bottom,
          #e8c300 20%,
          transparent 21%,
          transparent 40%,
          #e8c300 41%,
          #e8c300 60%,
          transparent 61%,
          transparent 80%,
          #e8c300 81%
        );
        background-size: cover;
        margin: 0 30px 0 0;
        @media (max-width: 685px) {
          width: 40px;
          height: 40px;
        }
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
        @media (max-width: 530px) {
          font-size: 10px;
          letter-spacing: 0.3em;
        }
      }
      .title {
        font-family: Gugi;
        color: white;
        font-size: 96px;
        font-weight: 100;
        letter-spacing: 1pt;
        position: relative;
        margin: 0 0 60px 0;
        @media (max-width: 840px) {
          font-size: 80px;
          margin: 0 0 76px 0;
        }
        @media (max-width: 685px) {
          font-size: 60px;
        }
        @media (max-width: 530px) {
          font-size: 40px;
          margin: 0 0 50px 0;
        }
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
        @media (max-width: 840px) {
          top: 130px;
        }
        @media (max-width: 760px) {
          left: 46%;
        }
        @media (max-width: 685px) {
          top: 110px;
          left: 45%;
        }
        @media (max-width: 530px) {
          top: 70px;
          width: 40px;
        }
      }
      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 440px;
        margin: 0 0 92px 0;
        @media (max-width: 620px) {
          width: 340px;
        }
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
          @media (max-width: 620px) {
            width: 150px;
            height: 40px;
          }
        }
        .opacity-button {
          background: #e8c10000;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
  .title-block::before {
    content: "";
    position: absolute;
    height: 699px;
    width: 1px;
    left: 10%;
    top: 150px;
    background: rgba(255, 255, 255, 0.2);
  }
  .title-block::after {
    content: "";
    position: absolute;
    height: 699px;
    width: 1px;
    right: 10%;
    top: 150px;
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="navigation">
        <a><router-link :to="{ name: 'MainPage' }">ГЛАВНАЯ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">МЕНЮ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">ВИНО</router-link></a>
        <a><router-link :to="{ name: 'Сoncept' }">КОНЦЕПЦИЯ</router-link></a>
        <img src="../assets/erti-logo.png" alt="" />
        <a><router-link :to="{ name: 'Foto' }">МЕДИА </router-link></a>
        <a><router-link :to="{ name: 'Events' }">СОБЫТИЯ</router-link></a>
        <a><router-link :to="{ name: 'OurTeam' }">НАША КОМАНДА</router-link></a>
        <a><router-link :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link></a>
      </div>
      <div class="content">
        <div class="info">
          <span>Нельзя купить счастье, но можно купить вино...</span>
        </div>
        <div class="slider"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background: url("../assets/wine-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .container {
    width: 1280px;
    height: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1325px) {
      width: 1200px;
    }
    @media (max-width: 1233px) {
      width: 1100px;
    }
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
      width: 100%;
      margin: 0 0 50px 0;
      .info {
        display: flex;
        align-items: flex-end;
        span {
          font-family: Caveat;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          color: #ffffff;
          height: 60px;
        }
      }
      .slider {
        background: rgba(252, 252, 252, 0.25);
        border-radius: 15px;
        width: 56%;
        height: 700px;
      }
    }
  }
}
</style>

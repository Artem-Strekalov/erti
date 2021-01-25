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
      <div class="content"></div>
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
  background: url("../assets/menu-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .container {
    width: 1280px;
    @media (max-width: 1325px) {
      width: 1200px;
    }
    @media (max-width: 1220px) {
      width: 1150px;
    }
    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 100px 0;
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
    }
  }
}
</style>

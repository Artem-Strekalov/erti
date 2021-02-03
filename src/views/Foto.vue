<template>
  <div class="wrapper">
    <div class="navigation">
      <div class="navMenu">
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
    </div>
    <div class="content">
      <div class="interior">
        <h2>ИНТЕРЬЕР РЕСТОРАНА</h2>
        
        <div class="galleryInterior"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
};
</script> 
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  overflow: hidden;
  height: 2000px;
background: rgba(0, 0, 0, 0.06);

  .navigation {
    width: 100%;
    height: 154px;
    display: flex;
    justify-content: center;
    background: #211d27;

    .navMenu {
      display: flex;
      justify-content: center;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1300px;
      width: 100%;

      a {
        font-family: Open Sans;
        font-style: normal;
        font-size: 12px;
        font-weight: bold;
        line-height: 18px;
        color: #ffffff;
        width: 133px;
        text-align: center;
        transition: 350ms;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .content {
    max-width: 1300px;
    width: 100%;
    .interior {
      padding: 0 2.5%;
      h2 {
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 40px;

        color: #f5c400;
      }
      .galleryInterior {
        height: 300px;
        width: 100%;
        background: red;
      }
    }
  }
}
</style>

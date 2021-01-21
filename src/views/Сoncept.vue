<template>
  <div class="wrapper">
    <div class="container">
      <div class="navigation">
        <a><router-link :to="{ name: 'MainPage' }">ГЛАВНАЯ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">МЕНЮ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">ВИНО</router-link></a>
        <a><router-link :to="{ name: 'Сoncept' }">КОНЦЕПЦИЯ</router-link></a>
        <img src="../assets/erti-logo.png" alt=""  />
        <a><router-link :to="{ name: 'Foto' }">МЕДИА </router-link></a>
        <a><router-link :to="{ name: 'Events' }">СОБЫТИЯ</router-link></a>
        <a><router-link :to="{ name: 'OurTeam' }">НАША КОМАНДА</router-link></a>
        <a><router-link :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link></a>
      </div>
      <div class="content">
        <div class="about-erti">
          <h1>“ГАМАРДЖОБА”</h1>
          <p>
            Ресторан «ERTI», это место,<br />
            где сочетаются древние<br />
            грузинские традиции и свежие<br />
            веяния современности. Здесь<br />
            истинно кавказское радушие и<br />
            гостеприимство сливаются с<br />
            изысканным европейским <br />стилем и душевной<br />атмосферой.
          </p>
        </div>
        <div class="about-Georgia">
          <img src="../assets/mountain.png" alt="" />
          <p>
            Грузия – великолепная страна, которая удивляет своей красотой,
            покоряет кухней и вином. Именно этот дух мы и стремились
            воспроизвести в нашем ресторане «ERTI». И если вы однажды были в
            Грузии, вы обязательно в неё вернётесь. А если нет — мы станем вашим
            первым шагом на пути знакомства с этой яркой и колоритной страной!
          </p>
        </div>
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
  background: url("../assets/bg-concept.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .container {
    width: 1280px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      .about-erti {
        text-align: right;
        width: 395px;
        h1 {
          font-family: Comic Sans MS;
          font-style: normal;
          font-weight: normal;
          font-size: 50px;
          color: #ffffff;
          margin: 0 0 60px 0;
        }
        p {
          font-family: Caveat;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 25px;
          color: #ffffff;

          text-align: center;
          margin: 0;
        }
      }
      .about-Georgia {
        text-align: center;
        p {
          width: 755px;
          font-family: Caveat;
          font-style: normal;
          font-weight: normal;
          font-size: 30px;
          line-height: 25px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
}
</style>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="navigation">
        <a href="" class="navigation__item">ГЛАВНАЯ</a>
        <a href="" class="navigation__item">МЕНЮ</a>
        <a href="" class="navigation__item">ВИНО</a>
        <a href="" class="navigation__item">КОНЦЕПЦИЯ</a>
        <img src="../assets/erti-logo.png" alt="" />
        <a href="" class="navigation__item">МЕДИА</a>
        <a href="" class="navigation__item">СОБЫТИЯ</a>
        <a href="" class="navigation__item">НАША КОМАНДА</a>
        <a href="" class="navigation__item">КОНТАКТЫ</a>
      </div>
      <div class="content">
        <div class="about-erti">
          <h1>“ГАМАРДЖОБА”</h1>
          <p>
            Ресторан «ERTI», это место, где сочетаются древние грузинские
            традиции и свежие веяния современности. Здесь истинно кавказское
            радушие и гостеприимство сливаются с изысканным европейским стилем и
            душевной атмосферой.
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
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,300&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
        rel="stylesheet"
      />
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
      .navigation__item {
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
        h1 {
          font-family: Comic Sans MS;
          font-style: normal;
          font-weight: normal;
          font-size: 50px;
          line-height: 20px;
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
          width: 330.68px;
          text-align: center;
        }
      }
      .about-Georgia {
        text-align: right;
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

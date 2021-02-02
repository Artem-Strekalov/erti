<template>
  <div class="wrapper">
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
        <div class="info-block">
          <img src="../assets/mountain.png" alt="" />
          <div class="contacts-block">
            <h1>Контакты:</h1>
            <p>
              344022, г. Ростов-на-Дону, ул. Нижнебульварная 6 <br />телефон: +7
              (938) 158-58-58
            </p>
            <div class="social-networks">
              <div class="instagram">
                <a
                  href="https://www.instagram.com/ertirestaurant/?hl=pt-br"
                  class="fab fa-instagram"
                ></a>
              </div>
              <div class="facebook">
                <a href="" class="fab fa-facebook-f"></a>
              </div>
              <div class="telegram">
                <a href="" class="fab fa-telegram-plane"></a>
              </div>
            </div>
          </div>
        </div>
        <img src="../assets/logo-group.png" alt="" class="logo" />
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
  justify-content: center;
  background: url("../assets/contacts-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  padding: 0 30px;
  .container {
    max-width: 1300px;
    width: 100%;
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
      flex-direction: row;
      justify-content: space-between;
      padding: 0 1%;
      width: 100%;
      .info-block {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
          margin: 0 0 90px 0;
        }
        .contacts-block {
          font-family: Roboto Mono;
          line-height: 50px;
          h1 {
            font-weight: bold;
            font-size: 30px;
            color: #e8c300;
          }
          p {
            font-weight: bold;
            font-size: 20px;
            color: #ffffff;
          }
          .social-networks {
            display: flex;
            flex-direction: row;
            div {
              width: 60px;
              height: 60px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: 300ms;
              margin: 0 5px;
              .facebook,
              .telegram {
                margin-left: 10px;
              }
              a {
                font-size: 20px;
                color: white;
              }
            }
            div:hover {
              transform: rotate(15deg);
              transition: 300ms;
              background: #e8c300;
            }
          }
        }
      }
      .logo {
        width: 67px;
        height: 541;
      }
    }
  }
}
</style>

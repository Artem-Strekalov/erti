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
        <div class="content-block">
          <img src="../assets/chef-foto.jpg" alt="" />
          <div class="info-block">
            <h1>Мастер Шеф</h1>
            <p>
              Мы не лучше или хуже других, просто любим удивлять людей. <br />
              Мы маленький островок большой и радушной Грузии в Ростове. <br />
              <span> А.Базандарашвили</span>
            </p>
          </div>
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
  align-items: center;
  background: url("../assets/team-bg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1300px;
    width: 100%;
    height: 100vh;

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
        color: #ffffff;
        padding: 0 5px;
        width: 133px;
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
      width: 100%;
      height: 100%;
      display: flex;
      padding: 0 3%;
      .content-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        img {
          width: 446px;
          height: 498px;
          background-size: contain;
          border-radius: 20px;
        }
        .info-block {
          color: #ffffff;
          text-align: center;
          vertical-align: middle;
          h1 {
            position: relative;
            font-family: Open Sans;
            font-weight: normal;
            font-size: 36px;
            line-height: 48px;
            margin: 0 0 40px 0;
          }
          h1::before {
            content: "";
            background: #e8c300;
            border-radius: 50px;
            width: 60px;
            height: 5.11px;
            position: absolute;
            top: 148%;
            left: 44.5%;
          }
          p {
            width: 675px;
            font-family: Caveat;
            font-weight: 550;
            font-size: 30px;
            line-height: 30px;
            text-align: right;
            span {
              line-height: 97px;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="wrapper" data-app>
    <div class="title-block">
      <div class="navigation">
        <a><router-link :to="{ name: 'MainPage' }">ГЛАВНАЯ</router-link></a>
        <a><router-link :to="{ name: 'Menu' }">МЕНЮ</router-link></a>
        <a><router-link :to="{ name: 'Wine' }">ВИНО</router-link></a>
        <a><router-link :to="{ name: 'Сoncept' }">КОНЦЕПЦИЯ</router-link></a>
        <span><img src="../assets/erti-logo.png" alt="" /></span>
        <a><router-link :to="{ name: 'Foto' }">МЕДИА </router-link></a>
        <a><router-link :to="{ name: 'Events' }">СОБЫТИЯ</router-link></a>
        <a><router-link :to="{ name: 'OurTeam' }">НАША КОМАНДА</router-link></a>
        <a><router-link :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link></a>
      </div>

      <div class="content-block">
        <div class="block"></div>
        <div class="centralBlock">
          <span>ГРУЗИНСКИЙ РЕСТОРАН</span>
          <span class="title"><img src="../assets/title.png" alt="" /></span>
          <div class="buttons">
            <button @click="dialog = true">ЗАБРОНИРОВАТЬ СТОЛ</button>
            <form action='https://broniboy.ru/rostov-na-donu/restaurants/p_erti/'>
            <button  class="opacity-button">ЗАКАЗАТЬ ДОСТАВКУ</button>
            </form>
          </div>
        </div>
        <div class="socialNetworks">
          <div class="instagram"><a href="" class="fab fa-instagram"></a></div>
          <div class="facebook"><a href="" class="fab fa-facebook-f"></a></div>
          <div class="telegram">
            <a href="" class="fab fa-telegram-plane"></a>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Ваше бронирование</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  color="#e8c300"
                  label="Ваше имя*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  color="#e8c300"
                  label="Ваша Фамилия"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  color="#e8c300"
                  label="Ваш номер телефона*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="11" sm="6">
                <v-select
                  color="#e8c300"
                  :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']"
                  label="Количество гостей*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6"> </v-col>
            </v-row>
          </v-container>
          <small style="color: red">*Поля обязательные к заполнению</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Закрыть
          </v-btn>
          <v-btn color="red" text @click="dialog = false">
            Забронировать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
     
    };
  },
 
};
</script>

<style lang="scss">
.wrapper {
  .v-sheet.v-card:not(.v-sheet--outlined) {
    font-family: Open Sans;
    font-weight: bold;
  }
  .v-sheet {
    background-color: red;
  }
  .col-12 {
    max-width: 50%;
  }
  .col-11 {
    max-width: 33%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/bg-main.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;

  .title-block {
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1280px;
    position: relative;
    .navigation {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: relative;
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
      a:hover {
        font-size: 14px;
        transition: 350ms;
      }
      a:active {
        color: rgb(243, 207, 46);
      }
      span {
        position: relative;
        img {
          margin: 15px;
          width: 120px;
          height: 120px;
        }
      }
    }

    .content-block {
      width: 100%;
      height: 600px;
      display: flex;
      justify-content: space-between;
      .block {
        width: 60px;
      }
      .centralBlock {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
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
          background: #e8c10000;
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          font-family: Open Sans;
          font-weight: bold;
          font-size: 12px;
          line-height: 20px;
          vertical-align: middle;
          text-align: center;
          color: white;
          width: 200px;
          height: 60px;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          transition: 0.3s;
        }
        button:hover {
          background: #e8c300;
          box-shadow: 0 15px 20px rgba(229, 202, 46, 0.4);
          color: white;
          transform: translateY(-7px);
        }
      }

      .socialNetworks {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 220px;
        div {
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 300ms;
          a {
            font-size: 20px;
            color: white;
          }
        }
        div:hover {
          transform: rotate(15deg);
          transition: 300ms;
        }
      }
    }
  }
}
</style>

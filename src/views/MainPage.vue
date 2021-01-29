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
        <a><router-link :to="{ name: 'OurTeam' }">КОМАНДА</router-link></a>
        <a><router-link :to="{ name: 'Contacts' }">КОНТАКТЫ</router-link></a>
      </div>

      <div class="content-block">
        <div class="mainBlock">
          <div class="centralBlock">
            <span>ГРУЗИНСКИЙ РЕСТОРАН</span>
            <span class="title"><img src="../assets/title.png" alt="" /></span>
            <div class="buttons">
              <button @click="dialog = true">ЗАБРОНИРОВАТЬ СТОЛ</button>
              <form
                action="https://broniboy.ru/rostov-na-donu/restaurants/p_erti/"
              >
                <button class="opacity-button">ЗАКАЗАТЬ ДОСТАВКУ</button>
              </form>
            </div>
          </div>
          <div class="socialNetworks">
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
    </div>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <h2>БРОНИРОВАНИЕ СТОЛА</h2>
        <div class="windowBooking">
          <div class="nameEmail">
            <div><v-text-field label="Имя" solo></v-text-field></div>
            <div><v-text-field label="E-mail" solo></v-text-field></div>
          </div>
          <div class="phonePeople">
            <div><v-text-field label="Телефон" solo></v-text-field></div>
            <div class="people">
              <v-select :items="guests" label="Гости" solo></v-select>
            </div>
          </div>
          <div class="dataTime">
            <div>
              <input
                type="date"
                name="calendar"
                value="01.01.2021"
                max="2040-01-01"
                min="2021-01-01"
              />
            </div>
            <div class="hours">
              <v-select :items="hours" label="Часы" solo></v-select>
            </div>
            <div class="minutes">
              <v-select :items="minutes" label="Мин" solo></v-select>
            </div>
          </div>
        </div>
        <v-btn class="bookingBtn" color="red" text @click="dialog = false">
          Забронировать
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persistent: true,
      dialog: false,
      guests: [1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"],
      hours: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      minutes: [10, 20, 30, 40, 50],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  /* Стили на окно бронирования */
  .v-sheet.v-card:not(.v-sheet--outlined) {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h2 {
      font-family: Open Sans;
      font-style: normal;
      font-size: 20px;
    }
    .bookingBtn {
      background: #e8c300;
      border-radius: 5px;
      font-family: Open Sans;
      font-weight: bold;
      font-size: 12px;
      color: black;
      width: 300px;
      height: 50px;
    }
  }
  .windowBooking {
    font-family: Open Sans;
    font-style: normal;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;

    .nameEmail,
    .phonePeople,
    .dataTime {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .people {
        width: 20%;
      }
      input {
        height: 48px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.6);
      }
      .hours,
      .minutes {
        width: 20%;
      }
    }
  }
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../assets/bg-main.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 100vh;

  .title-block {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1300px;
    width: 100%;
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
        color: rgb(243, 207, 46);
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
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
     
      .mainBlock {
        display: flex;
        width: 100%;
        padding-bottom: 90px;
        
        .centralBlock {
          display: flex;
          flex-direction: column;
          align-items: center;
         margin-left: auto;
         padding-left: 85px;
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
          margin-left: auto;
          padding-right: 30px;
         
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
            background: #e8c300;
          }
        }
      }
    }
  }
}
</style>

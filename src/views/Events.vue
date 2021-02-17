<template>
  <div class="body">
    <div class="content">
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
      <div class="events">
        <div class="eventsOne">
          <div class="text">
            <h2>Гастроужин в Эрти!</h2>
            <p>
              «Гастроужин – это культура потребления вин и блюд, которые
              идеально сочетаются между собой» - мы полностью поддерживаем это
              утверждение! 29 ноября в ресторане ERTI прошёл гастро-ужин с одним
              из самых лучших винных экспертов - Сандро Хатиашвили. ⠀ Покажем
              вам атмосферу с нашего гастрономического вечера. Пообещайте себе
              побывать на следующем — а мы постараемся, чтобы это желание
              сбылось как можно скорее.
            </p>
          </div>
          <div class="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Xi_oZgF7oGo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="eventsTwo">
          <div class="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/I4ANsoOyhho"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="text">
            <h2>ТБИЛИСОБА!</h2>
            <p>
              Тбилисоба — ежегодный общенародный праздник, посвящённый сбору
              урожая и городу Тбилиси, который традиционно отмечается в столице
              Грузии в первые выходные октября. В это время в городе
              устраиваются ярмарки, шествия, концерты и спортивные мероприятия.
              Также проходит награждение выдающихся деятелей искусства и спорта
              званием «Почётный гражданин Тбилиси».
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
.body {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url("../assets/events.jpg") no-repeat;
  background-size: cover;
  background-position: center;

  .content {
    display: flex;
    flex-direction: column;

    max-width: 1300px;
    width: 100%;
    height: 100%;
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
      img {
        width: 100px;
        height: 100px;
      }
    }
    a:hover {
      font-size: 14px;
      transition: 350ms;
      color: rgb(243, 207, 46);
    }
    a:active {
      color: rgb(243, 207, 46);
    }
    .events {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background: rgba(0, 0, 0, 0);

      .eventsOne,
      .eventsTwo {
        display: flex;
        align-items: center;

        width: 100%;
        height: 400px;

        .text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 30px;

          h2 {
            font-family: Caveat;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 18px;
            margin-bottom: 30px;
            color: #e8c300;
          }
          p {
            text-align: center;
            font-family: Oswald;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 20px;
            color: white;
          }
        }
        .video {
          padding-right: 30px;
          iframe {
            border-radius: 20px;
          }
        }
      }
      .eventsTwo {
        margin-top: 50px;
        .video {
          padding-left: 30px;
          padding-right: 0;
        }
      }
    }
  }
}
</style>